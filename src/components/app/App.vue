<template>
  <AppInfo :moviesNumber="Number(summMovies)" :favoriteNumber="movies.filter(c => c.favorite == true).length" />

  <div class="container">
    <SearchPanel :movies='movies' @searchMovies="term = $event" />
    <AppFilter />
  </div>

  <div v-if="onSearch(movies, term).length == 0 && loader == false" class="d-flex justify-content-center"
    style="width: 100%;">
    <h1>Kinolar yo'q</h1>
  </div>

  <div v-else-if="loader == true" class="d-flex justify-content-center mb-4" style="width: 100%;">
    <Loader></Loader>
  </div>

  <AppList v-else :movies='onSearch(movies, term)' @onFavoriteMovie="onFavoriteMovie" @onlikes="onLikes"
    @onDelete="onDelete" />

  <nav aria-label="Page navigation example" class="d-flex justify-content-center ">
    <ul class="pagination">
      <li class="page-item"><a class="page-link" href="#" @click="pages > 1 ? pages-- : ''">Previous</a></li>

      <li class="page-item" v-for="number in totalPages" :class="[pages == number ? 'active' : '']">
        <a class="page-link" style="cursor: pointer;" @click="pages = number">{{ number }}</a>
      </li>

      <li class="page-item"><a class="page-link" @click="pages++">Next</a></li>
    </ul>
  </nav>

  <MoveAddForm @createMovie="pushMovies" />
</template>

<!-- JavaScript -->
<script>

// Componentlarni import qilish 
import AppInfo from '@/components/app-info/AppInfo.vue'
import SearchPanel from '@/components/search-panel/SearchPanel.vue'
import AppFilter from '@/components/app-filter/AppFilter.vue'
import AppList from '@/components/app-list/AppList.vue'
import MoveAddForm from '@/components/movie-add-form/MovieAddForm.vue'
// Api bilan ishlashda sinxron sorov yuborish uchun yuklab .olinadi (npm i axios)
import axios from "axios"

// Barcha methodlar shu obyect ichida shakilanadi
export default {

  // Barcha import qilingan componentlar listini shu yerga yozib qoyamz
  components: {
    AppInfo,
    SearchPanel,
    AppFilter,
    AppList,
    MoveAddForm,
  },

  // Malumotlar o'zgaruvchilarni saqlaydigan method
  data() {
    return {
      counter: 1,   // O'zgaruvchilar

      movies: [],
      term: '',
      loader: '',
      pages: 1,
      limit: 10,
      totalPages: 0,
      summMovies: '',
    }
  },


  // Barcha methodlar shu obyekt ichida yoziladi
  methods: {
    async pushMovies(item) {

      try {
        const response = await axios.post('https://jsonplaceholder.typicode.com/posts', item);

        this.movies.push(response.data)
        console.log(response.data)
      } catch (error) {
        alert(error.message)
      }


    },

    onFavoriteMovie(id) {
      const arr = this.movies.map(movie => {

        if (movie.id == id) {
          movie.favorite = !movie.favorite
        }
        return movie

      });

    },

    onLikes(id) {
      const arr = this.movies.map(movie => {

        if (movie.id == id) {
          movie.like = !movie.like
        }
        return movie

      });
    },

    onDelete(id) {
      const arr = this.movies.filter(movie => {
        return movie.id !== id;
      });

      this.movies = arr;

    },

    onSearch(arr, term) {
      if (term.length == 0) {
        return arr;
      }

      return arr.filter(c => c.name.toLowerCase().indexOf(term) > -1)


    },

    // Api bilan ishlash 

    async fetchMovie() {
      try {
        this.loader = true;

        const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
          params: {
            _limit: this.limit,
            _page: this.pages
          }
        });

        const newArray = response.data.map(item => ({
          id: item.id,
          name: item.title,
          views: item.id * 12,
          like: false,
          favorite: false
        }))

        this.movies = newArray;
        this.summMovies = response.headers['x-total-count'];
        this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit)

      } catch (error) {
        console.log(error)
      } finally {
        this.loader = false
      }
    },

    // 






  },

  // data methodidagi ayni bir data o'zgarkgandagi amallar berib ketiladi
  watch: {
    pages() {
      this.fetchMovie();
    }
  },

  // dasturga birinchi marotaba kirilayotgan holatdagi amallar yoziladi
  mounted() {
    this.fetchMovie();
  }

}

</script>

<style>
body {
  margin-top: 100px;
}

.container {
  width: 80%;
  border-radius: 15px;
  box-shadow: 1px 1px 15px rgba(0, 0, 0, 0.397);
  margin: 20px auto;
  padding: 20px;
}
</style>