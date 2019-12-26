<template>
    <main>
        <div class="container">
            <a class="waves-effect waves-light btn-small blue darken-1">New User</a>
            <table class="highlight responsive-table">
                <thead>
                <tr>
                    <th width="65%">Name</th>
                    <th width="20%">Phone</th>
                    <th width="15%" class="center-align">Actions</th>
                </tr>
                </thead>

                <tbody>
                <tr v-for="(user, index) in users" :key="index">
                    <td>{{ completedName }}</td>
                    <td>(11) 99999-9999</td>
                    <td class="center-align">
                        <a class="waves-effect waves-light btn-small blue darken-1 button">
                            <i class="material-icons">edit</i>
                        </a>
                        <a class="waves-effect waves-light btn-small red darken-1 button">
                            <i class="material-icons">delete</i>
                        </a>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    </main>
</template>

<script>
    import axios from 'axios';

    export default {
        name: 'UserList',
        data() {
            return {
                users: []
            }
        },
        created() {
            axios.get('https://uinames.com/api/?ext&region=brazil&amount=25')
            .then(response => {
                console.log(response.data)
                this.users = response.data
            })
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

    .button {
        float: left;
        margin-left: 5px;
    }
</style>