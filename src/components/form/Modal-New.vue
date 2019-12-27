<template>
    <div id="modal1" class="modal" :class="openModal ? 'showModal' : 'hideModal'">
        <div class="modal-content">
            <h4>Add New User</h4>
            <form action="" @submit.prevent="submit" autocomplete="off">
                <div class="row">
                    <div class="input-field col s6">
                        <input type="text" name="name" v-model.trim="$v.user.name.$model">
                        <label for="first_name">Enter your name</label>
                        <div v-if="$v.user.name.$error">
                            <span class="helper-text" v-if="!$v.user.name.required">O Campo nome é requerido</span>
                            <span class="helper-text" v-if="!$v.user.name.minLength">O Campo nome deve conter no mínimo {{$v.user.name.$params.minLength.min}} caracteres.</span>
                        </div>
                    </div>
                    <div class="input-field col s6">
                        <input type="text" name="surname" v-model.trim="$v.user.surname.$model">
                        <label for="last_name">Enter your surname</label>
                        <div v-if="$v.user.surname.$error">
                            <span class="helper-text" v-if="!$v.user.surname.required">O Campo nome é requerido</span>
                            <span class="helper-text" v-if="!$v.user.surname.minLength">O Campo nome deve conter no mínimo {{$v.user.surname.$params.minLength.min}} caracteres.</span>
                        </div></div>
                    <div class="input-field col s12">
                        <input type="text" name="phone" v-model.trim="$v.user.phone.$model" v-mask="['(##) ####-####', '(##) #####-####']">
                        <label for="last_name">Phone number</label>
                        <div v-if="$v.user.phone.$error">
                            <span class="helper-text" v-if="!$v.user.phone.required">O Campo nome é requerido</span>
                        </div></div>
                    <div class="input-field col s12 right-align">
                        <button type="submit" class="waves-effect waves-light btn">Add</button>
                    </div>
                </div>
            </form>
        </div>
        <div class="modal-footer">
            <a href="#!" class="modal-close waves-effect waves-green btn-flat"
            @click="closeModal">Close</a>
        </div>
    </div>
</template>

<script>
    import {required, minLength} from 'vuelidate/lib/validators'
    export default {
        name: 'ModalNew',
        props: ['openModal'],
        data () {
            return {
                user: {
                    name: null,
                    surname: null,
                    phone: null
                }
            }
        },
        validations: {
            user: {
                name: {
                    required,
                    minLength: minLength(4)
                },
                surname: {
                    required,
                    minLength: minLength(4)
                },
                phone: {
                    required
                }
            }
        },
        methods: {
            closeModal() {
                this.$emit('closeModal', false)
            },
            submit() {
                this.$v.$touch()
                if (this.$v.$invalid) {
                    this.submitStatus = 'ERROR'
                } else {
                    this.$emit('closeModal', false)
                    this.$emit('addUser', this.user)
                    this.user = {}
                }
            }
        }
    }
</script>

<style scoped>

    .modal {
        min-height: 43%;
    }

    .showModal {
        z-index: 1003;
        display: block;
        opacity: 1;
        top: 10%;
        transform: scaleX(1) scaleY(1);
    }

    .hideModal {
        z-index: 1003;
        display: none;
        opacity: 0;
        top: 4%;
        transform: scaleX(0.8) scaleY(0.8);
    }

</style>