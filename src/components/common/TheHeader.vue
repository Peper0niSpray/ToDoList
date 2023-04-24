<template>
    <v-container>
        <v-toolbar flat class="mainHeader" color="#0078d4">
            <v-toolbar-title><p style="color: #fff; margin-top: 15%;">TO <span style="color: #E5E82E;">DO</span> LIST</p></v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items class="hidden-xs-only" >
                <v-btn text>
                    <router-link to="/news">Главная</router-link>
                </v-btn>
                <v-btn text>
                    <router-link to="/contact">Отзыв</router-link>
                </v-btn>
                <div class="header__login" v-if="login">
                    <router-link to="">Пасечник Даниил</router-link>
                    <v-btn text @click="Login" class="header__button button1">Выход</v-btn>
                </div>
                <v-btn text v-else @click="Login" class="header__button">Вход</v-btn>
                <v-btn text>
                    <router-link to="/json">Просмотр файла</router-link>
                </v-btn>
                <v-btn text>
                    <a href="https://github.com/Peper0niSpray/Todolist">Git</a>
                </v-btn>
            </v-toolbar-items>
            <div class="hidden-sm-and-up">
                <v-menu offset-y>
                <template v-slot:activator="{ on }">
                    <v-app-bar-nav-icon v-on="on"></v-app-bar-nav-icon>
                </template>
                <v-list class="responsiveMenu">
                    <v-list-item>
                        <v-list-item-title><router-link to="/news">Главная</router-link></v-list-item-title>
                    </v-list-item>
                    <v-list-item>
                        <v-list-item-title><router-link to="/contact">Отзыв</router-link></v-list-item-title>
                    </v-list-item>
                    <div class="header__login" v-if="login">
                        <p>Пасечник Даниил</p>
                        <v-btn @click="Login" color="success" variant="plain" class="ml-3 header__button">Выход</v-btn>
                    </div>
                    <v-btn v-else @click="Login" outlined variant="plain"  class="ml-3 header__button" color="success">Вход</v-btn>
                    <v-list-item>
                        <v-list-item-title><router-link to="../../../public/articles.json">Просмотр файла</router-link></v-list-item-title>
                    </v-list-item>
                    <v-list-item>
                        <v-list-item-title><router-link to="https://gitlab.com/Kat_masl/veb_vue">Гит</router-link></v-list-item-title>
                    </v-list-item>
                </v-list>
                </v-menu>
            </div>
        </v-toolbar>
    </v-container>
</template>

<script>
export default{
  data() {
    return {
        login: false,
    }
  },
  methods: {
    Login () {
      this.login = !this.login;
    }
  },
};

</script>
<style scoped>
.header__login{
    margin-top: 15px;
}
.header__button{
    color:#E5E82E;
}
.button1{
    color: #E8605D;
}
</style>
