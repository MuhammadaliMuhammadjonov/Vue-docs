<template>

  <AppInfo /> 

  <div class="container">
      <SearchPanel />
      <AppFilter />
  </div>

  <AppList />
  
  <MoveAddForm />


</template>

<!-- JavaScript -->
<script>

    // Componentlarni import qilish 
    import AppInfo from '@/components/app-info/AppInfo.vue'
    import SearchPanel from '@/components/search-panel/SearchPanel.vue'
    import AppFilter from '@/components/app-filter/AppFilter.vue'
    import AppList from '@/components/app-list/AppList.vue'
    import MoveAddForm from '@/components/movie-add-form/MovieAddForm.vue'

    // Barcha methodlar shu obyect ichida shakilanadi
    export default{     

      // Barcha import qilingan componentlar listini shu yerga yozib qoyamz
      components:{
        AppInfo,
        SearchPanel,
        AppFilter,
        AppList,
        MoveAddForm,
      },

      // Malumotlar o'zgaruvchilarni saqlaydigan method
      data(){
        return{
          counter: 1,   // O'zgaruvchilar
        }
      },

      // Barcha methodlar shu obyekt ichida yoziladi
      methods:{
        
      }

    }

</script>

<style>

  body{
    margin-top: 100px;
  }

  .container{
    width: 80%;
    border-radius: 15px;
    box-shadow: 1px 1px 15px rgba(0, 0, 0, 0.397);
    margin: 20px auto;
    padding: 20px;
  }

</style>