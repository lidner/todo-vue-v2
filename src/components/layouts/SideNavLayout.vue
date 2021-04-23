<template>
    <div>
        <side-bar>
        </side-bar>
        <!-- <ul class="nav">
            <li v-if="loggedIn"><router-link :to="{ name: 'home' }">Landing</router-link></li>
            <li v-if="loggedIn"><router-link :to="{ name: 'todo' }">Todo</router-link></li>
            <li v-if="loggedIn"><router-link :to="{ name: 'about' }">About</router-link></li>
            <li v-if="!loggedIn"><router-link :to="{ name: 'login' }">Login</router-link></li>
            <li v-if="!loggedIn"><router-link :to="{ name: 'register' }">Register</router-link></li>
            <li v-if="loggedIn"><router-link :to="{ name: 'logout' }">Logout</router-link></li>
        </ul> -->
        <div class="container">
            <slot />
        </div>
    </div>
</template>

<script>
import SideBar from './SideBar.vue'
    export default {
        components: {
            SideBar
        },
        computed: {
            loggedIn() {
                return this.$store.getters.loggedIn
            },
        },
    }
</script>

<style lang="scss" scoped>

</style>