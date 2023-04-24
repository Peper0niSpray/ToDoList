<template>
  <v-main>
    <div class="staticHero">
        <h2 class="text-center">Ждем Ваш отзыв!</h2>
    </div>
    <div class="block">
      <v-container>
        <div class="alert alert-success" v-if="isSuccess">Спасибо за оставленный отзыв</div>
        <v-form ref="form" @submit.prevent="onContact" v-model="valid" id="form" lazy-validation>
          <v-text-field v-model="name" :counter="10" :rules="nameRules" label="Имя" required></v-text-field>
          <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>
          <v-textarea v-model="message" :rules="messageRules" label="Отзыв" required></v-textarea>
          <v-btn :disabled="!valid" color="primary" class="mr-4" type="submit" @click="validate"><span style="color: black;">Добавить</span></v-btn>
          <v-btn color="error" class="mr-4" @click="reset">Очистить</v-btn>
        </v-form>
      </v-container>
    </div>
  </v-main>
</template>

<script>
import axios from 'axios';
export default {
  data: () => ({
    isSuccess: false,
    valid: true,
    name: "",
    nameRules: [
      v => !!v || "Укажите имя",
      v => (v && v.length <= 10) || "Имя должно быть меньше 10 символов"
    ],
    email: "",
    emailRules: [
      v => !!v || "Электронная почта обязательна",
      v => /.+@.+\..+/.test(v) || "Электронная почта должна быть действующей"
    ],
    message: "",
    messageRules: [
      v => !!v || "Требуется сообщение",
      v => (v && v.length >= 10) || "Сообщение должно быть больше 10 символов"
    ],
  }),

  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        this.snackbar = true;
      }
    },
    reset() {
      this.$refs.form.reset();
    },
    onContact(){
      axios.post(`https://eoxzymhrjbxkkre.m.pipedream.net`,
        {name: this.name, 
        email: this.email,
        message: this.message}
      ).then(response => {
        this.isSuccess = true;
        console.log(response)
      })
    }
  }
};
</script>