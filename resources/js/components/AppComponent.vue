<template>
    <div class="container">
        <p>
             <router-link :to="{name: 'home'}">home</router-link>
             <router-link :to="{name: 'about'}">about</router-link>
        </p>
        <div>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    export default {

    }
</script>
