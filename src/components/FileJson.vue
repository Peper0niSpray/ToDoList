<template>
  <v-container>
    <v-container>
       <p v-for="user in users" :key="user.id"><b>date: </b>{{ user.date}}<br> <b>name: </b>{{ user.name}}<br> <b>preview_image: </b> {{ user.preview_image}} <br> <b>shortDesc: </b>{{ user.shortDesc}} <br> <b>desc: </b>{{ user.desc}}</p>
    </v-container>
  </v-container> 
</template>

<script>
import userData from '../../public/articles.json'

export default {
  data(){ 
      return {users: userData}
  }
}
</script>
