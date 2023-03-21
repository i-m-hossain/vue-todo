<script>
import Footer from "./components/Footer.vue";
import NavBar from "./components/NavBar.vue";
export default {
    components: { NavBar, Footer },
};
</script>

<template>
    <NavBar />
    <router-view></router-view>
    <Footer/>
</template>
