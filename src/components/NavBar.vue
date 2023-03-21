<template>
    <ul class="flex space-x-4 bg-slate-200 justify-center p-2">
        <router-link to="/" exact>Home</router-link>
        <router-link to="/blog" exact>Blog</router-link>
    </ul>
</template>

<style>
    .router-link-active{
        color: red;
        border-bottom   : 1px solid red;
    }
</style>
