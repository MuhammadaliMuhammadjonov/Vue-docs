<template >
    <Input type="text" placeholder="Kinolarni qidirish" @input="searchMovies" /> 
</template>
<script>
export default {

    data(){
        return{
            searchMovie:this.movies
        }
    },

    props:{
        movies:{
            type: Array,
            required: false
        }
    },

    methods:{
        searchMovies(e){
            this.$emit('searchMovies', e.target.value.toLowerCase())
        }
    }
    
}
</script>
<style lang="">
    
</style>