<template>
    <footer class="page-footer blue darken-1">
        <div class="footer-copyright">
            <div class="container">
                © {{ data }} Copyright. All rights reserved.
                <a class="grey-text text-lighten-4 right" href="http://portlouis.inf.br/" target="_blank">Port Louis</a>
            </div>
        </div>
    </footer>
</template>

<script>
    export default {
        name: 'Footer',
        data () {
           return {
               data: new Date().getFullYear()
           }
        }
    }
</script>

<style scoped>


</style>