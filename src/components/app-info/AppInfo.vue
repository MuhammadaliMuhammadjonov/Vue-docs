<template >
    <div class="container">
        <h1>Barcha kinolar soni: {{ AllMovies }}</h1>
        <h1>Sevimli filmlar: {{ LikeMovies }}</h1>
    </div>
</template>

<script>
export default {
    data(){
        return{
            AllMovies: 10,
            LikeMovies: 5
        }
    }
}
</script>
<style scoped>
    h1{
        text-transform: uppercase;
    }
</style>