<template>
  <v-col cols="12" md="4">
    <v-card outlined class="mx-auto">
      <v-img
        alt='preview_image'
        class="align-end v-img"
        height="200px"
        :src="require('@/assets/images/' + article.preview_image)"
      >
      <v-card-title class="name_card">
        <router-link class="text-light" :to="'/news/'+ article.id">{{ article.name }}</router-link>
      </v-card-title>
      </v-img>
      <v-card-subtitle class="pb-0">{{ article.date }}</v-card-subtitle>
      <v-card-text>
          <div class="desc_card">{{ article.shortDesc }}</div>
      </v-card-text>
      <v-card-actions>
        <v-btn color="secondary" text>
          <router-link :to="'/news/'+ article.id"><span style="color: #0078d4;">Подробнее...</span></router-link>
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-col>
</template>
<script>
export default {
    props: {
        article: Object
    },
    computed: {
        articles() {
            return this.$store.getters.getArticles
        },

    },
    mounted() {
        this.$store.dispatch('loadArticles')
    },

};
</script>
<style>
.name_card{
    padding: 10px; /* Поля вокруг текста */
    white-space: nowrap; /* Текст не переносится */
    overflow: hidden; /* Обрезаем всё за пределами блока */
    text-overflow: ellipsis; /* Добавляем многоточие */
}
.v-img{
  filter: grayscale(80%);
}
.v-img:hover{
  filter: grayscale(0%);
  transition: 0.5s;
}
.desc_card{
    padding: 3px; /* Поля вокруг текста */
    white-space: nowrap; /* Текст не переносится */
    overflow: hidden; /* Обрезаем всё за пределами блока */
    text-overflow: ellipsis; /* Добавляем многоточие */
    font-size: large;
}
</style>