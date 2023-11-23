<template >
    <div class="container">
        <ul>
            <ListItems v-for="movie in movies" :movie = 'movie' 
            @onFavoriteMovie =" $emit('onFavoriteMovie', $event)" 
            @onLike = "$emit('onlikes', $event)"
            @onDelete = "$emit('onDelete', $event)"
            />
        </ul>
    </div>
</template>
<script>

    import ListItems from '@/components/list-items/ListItems.vue'

    export default {
        components:{
            ListItems,
        },

        props:{
            movies:{
                type: Array,
                required: false
            }
        },
       

        data(){
            return{
               
            }
        },
        
      
        
    }
</script>
<style scoped>
    ul{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

</style>
