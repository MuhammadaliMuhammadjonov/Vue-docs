<template >
    <li>
        <p @click="onFavoriteMovie" style="cursor: pointer;">{{ movie.name }}</p>
        <input type="number" class="form form-control" :value="movie.views" >

        <div class="buttons">
            <button class="btn" @click="onLike">
                <i class="fa-regular fa-heart " :class="[movie.like == true ? 'fa-solid' : '']" ></i>
            </button>
            <button class="btn " @click="onDelete">
                <i class="fa-solid fa-trash"></i>
            </button>

            <button class="btn">
                <i class="fa-solid fa-star " :class="[movie.favorite == true ? 'noTransform' : '']"></i>
            </button>


        </div>


    </li>
</template>
<script>
export default {

    // Ota componentdan malumot bind qilanayotgan malumotni configuratsiyalari berib ketilishi kerak
    props: {
        movie: {
            type: Object,
            required: true
        }
    },

    methods: {
        onLike() {
            this.$emit("onLike", this.movie.id);
        },


        onFavoriteMovie() {
            this.$emit('onFavoriteMovie', this.movie.id )
        },

        onDelete(){
            this.$emit('onDelete', this.movie.id )
        }


    },

}
</script>
<style scoped>
li {
    width: 98%;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10px 0;
    border: 1px solid rgba(0, 0, 0, 0);

}

li:hover {
    border: 1px solid rgba(0, 0, 0, 0.378);
}

p {
    width: 60%;
    margin: 0;
    padding-left: 20px;
}

input {
    width: 100px;
}

.buttons {
    width: 150px;
    height: 50px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    overflow: hidden;
}

.fa-star {
    transition: .5s;
    transform: translateX(50px);
}

.noTransform {
    transform: translateX(0px) !important;
}
</style>