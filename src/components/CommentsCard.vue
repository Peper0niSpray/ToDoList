<template>
  <v-row>
        <v-list two-line>
            <v-subheader class="font-weight-bold"
            >
              Комментарии
            </v-subheader>
            <template>
              <v-list-item>
                <v-list-item-avatar>
                  <img src="https://urgi-stv.ru/wp-content/uploads/2/0/a/20a36d4b97812877f541baacf16f5d58.jpeg" alt="avatar">
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title ><span class="font-weight-bold">Андрей Адрин</span></v-list-item-title>
                  <v-list-item-subtitle >Это очень интересный пост, обязательно скачаю себе.</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
          </template>

          <template v-for="(item) in items.slice(0, 6)">

            <v-list-item :key="item.title">
              <v-list-item-avatar>
                <img src="https://cdn.vuetifyjs.com/images/lists/3.jpg" alt="avatar1">
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title ><span class="font-weight-bold">Арина Холина</span></v-list-item-title>
                <v-list-item-subtitle></v-list-item-subtitle>
                <v-list-item-subtitle >{{item}}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </template>
            <v-textarea style="width:500px" class="md-2"
                outlined
                v-model="newComment"
                name="input-7-4"
                label="Добавить комментарий"
                value=" "
                required=""
            ></v-textarea>
            <v-btn type="submit"  v-on:click="items.push(newComment)" color="accent"><span style="color: black;">Добавить</span></v-btn>
        </v-list>
  </v-row>
</template>
<script>
export default {
    data() {
        return {
        newComment: '',
        items: [
        ]
        }
    }, 
}

</script>