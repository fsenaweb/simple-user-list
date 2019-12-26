<template>
    <Fragment>
      <CHeader/>
      <UserList/>
      <CFooter/>
    </Fragment>
</template>

<script>

    import { Fragment } from 'vue-fragment';
    import CHeader from './components/layout/Header.vue';
    import UserList from './components/UserList.vue';
    import CFooter from './components/layout/Footer.vue';

    export default {
        name: 'app',
        components: {
            Fragment, CHeader, UserList, CFooter
        }
    }
</script>

<style>

  body {
    display: flex;
    min-height: 100vh;
    flex-direction: column;
  }

  main {
    flex: 1 0 auto;
  }

</style>
