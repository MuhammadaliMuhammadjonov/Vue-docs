<template >
    <div class="container">
        <h1>Yangi kino qo'shish</h1>
        <form @submit.prevent>
            <!-- <input type="text" class="form form-control" placeholder="Kino nomi" required :value="movie.name"
                @input="movie.name = $event.target.value"> -->

            <Input type="text"  placeholder="Kino nomi" v-model="movie.name" />
            <Input type="text"  placeholder="Ko'rishlar soni" v-model="movie.views" />

            <DangerButton @click="createMovie" >Qo'shish</DangerButton>
        </form>
    </div>
</template>
<script>
export default {

    data() {
        return {
            movie: {
                id: '',
                name: '',
                views: '',
                like: false,
                favorite: false
            }
        }
    },

    methods: {
        createMovie() {

            const newMovie = {
                id: Date.now(),
                name: this.movie.name,
                views: this.movie.views,
                like: false,
                favorite: false
            }
            this.$emit('createMovie', newMovie)
            this.movie.name = '';
            this.movie.views = '';


        }
    },



}
</script>
<style scoped>
form {
    width: 95%;
    display: flex;
    justify-content: space-between;
}

input {
    width: 45%;
    height: 50px;
}
</style>