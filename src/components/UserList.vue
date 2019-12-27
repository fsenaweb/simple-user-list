<template>
    <main>
        <div class="container">
            <a class="waves-effect waves-light btn-small blue darken-1" @click="newUser">New User</a>
            <table class="highlight responsive-table">
                <thead>
                <tr>
                    <th width="65%" @click="sortBy">
                        Name
                        <i class="tiny material-icons">
                            {{ sort === 'asc' ? 'arrow_drop_up' : 'arrow_drop_down' }}
                        </i>
                    </th>
                    <th width="20%">Phone</th>
                    <th width="15%" class="center-align">Actions</th>
                </tr>
                </thead>

                <tbody>
                <tr v-for="(user, index) in nameList" :key="index">
                    <td>{{ user.name }} {{ user.surname }}</td>
                    <td>{{ user.phone }}</td>
                    <td class="center-align">
                        <a class="waves-effect waves-light btn-small blue darken-1 button"
                           @click.prevent="editUser(user)">
                            <i class="material-icons">edit</i>
                        </a>
                        <a class="waves-effect waves-light btn-small red darken-1 button"
                           @click.prevent="deleteUser(user)">
                            <i class="material-icons">delete</i>
                        </a>
                    </td>
                </tr>
                </tbody>
            </table>
            <modal-new :openModal="modal" @closeModal="closeModal" @addUser="addUser" />
            <modal-edit :emodal="emodal" :edituser="user" @closeModal="closeModal" />
        </div>
    </main>
</template>

<script>
    import axios from 'axios';
    import _ from 'lodash'
    import modalNew from './form/Modal-New.vue'
    import modalEdit from './form/Modal-Edit.vue'

    export default {
        name: 'UserList',
        components: {
            modalNew, modalEdit
        },
        data() {
            return {
                users: [],
                user: [],
                modal: false,
                emodal: false,
                sort: 'asc'
            }
        },
        created() {
            axios.get('https://uinames.com/api/?ext&region=brazil&amount=15')
                .then(response => {
                    this.users = response.data
                })
        },
        computed: {
            nameList() {
                return _.orderBy(this.users, ['name', 'surname'], this.sort);
            }
        },
        methods: {
            newUser() {
                this.modal = true
            },
            addUser(user) {
                this.users.push(user)
            },
            editUser(user) {
                this.emodal = true
                this.user = user
            },
            deleteUser(user) {
                var index = this.users.indexOf(user);
                if (index !== -1) this.users.splice(index, 1);
                console.log(user)
            },
            closeModal() {
                this.modal = false
                this.emodal = false
            },
            sortBy() {
                this.sort = this.sort === 'desc' ? 'asc' : 'desc';
            }
        }
    }
</script>

<style scoped>
    .container {
        margin-top: 40px;
    }

    table {
        margin: 30px 0;
    }

    th:first-child {
        cursor: pointer;
    }

    .button {
        float: left;
        margin-left: 5px;
    }
</style>