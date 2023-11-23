<template >
    <div class="container">
        <h1>Barcha kinolar soni: {{ moviesNumber }}</h1>
        <h1>Sevimli filmlar: {{ favoriteNumber }}</h1>
    </div>
</template>

<script>
export default {
    data(){
        return{
            AllMovies: 10,
            LikeMovies: 5
        }
    },

    props:{
        moviesNumber:{
            type: Number,
            required: true
        },

        favoriteNumber:{
            type: Number,
            required: true
        }
    }
}
</script>
<style scoped>
    h1{
        text-transform: uppercase;
    }
</style>