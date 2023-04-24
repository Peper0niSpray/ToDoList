<template>
  <div class="block latestPostBlock">
    <v-container>
      <template>
        <v-toolbar-items>
          <v-container>
            <v-toolbar flat ><v-text-field v-model="search" append-icon="mdi-magnify" label="Поиск по названию" single-line></v-text-field>
              <div style="padding-left: 20px;"></div>
              <v-select clearable v-model="sort" :items="items" clear-icon="x" width="0.5px" label="Поиск по дате"> </v-select>
            </v-toolbar>
          </v-container>
        </v-toolbar-items>
      </template>
      <h2 class="text-center">Лучшие приложения для составления списков To Do.<br>
        Скорее узнай какое подойдет тебе!
      </h2>
      <v-row class cols="6" sm="4">
        <ArticleItem 
         v-for ="(article, index) in filteredSearch " :key="index" :article="article"/> 
      </v-row> 
    </v-container>
  </div>
</template>


<script>
import ArticleItem from '@/components/articles/ArticleItem.vue';
export default {
  components: {
    ArticleItem,
  },
  data() {
    return {
      isShow: true,
      search: "",
      hover: "",
      datas: "",
      sort: "",
      items: ['10.02.2023', '27.01.2023', '12.01.2023'],
    }
  },
  computed: {
    filteredSearch(){
      let result = this.$store.getters.getArticles;
      if(this.search){
        result = result.filter(item =>{
          if(item.name.indexOf(this.search) != -1)
            {
              return item
            }
        })
      }
      if (this.sort){
        result = result.filter(item =>{
          if (item.date == this.sort) {
            return item
          }
        })
      }
      if (this.hover){
        result = result.filter(item =>{
          if (item.date == this.datas) {
            return item
          }
        })
      }
      return result;
    }
    
  },
  mounted() {
    this.$store.dispatch('loadArticles')
  },
  methods: {
    reloadComponentForce() {
      this.$forceUpdate();
    },
  },
  updated() {
    console.log('updated');
  },

};
</script>
<style scoped>
.sort{
  margin-top: -12px;
}
.label__title{
  display: flex;
  margin-right: -20px;
}
.label__check{
  margin-right: 20px;
}
.btn-click{
  margin-top: 12px;
  padding: 15px 32px;
}
</style>

