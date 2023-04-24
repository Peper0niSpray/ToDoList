<template>
  <v-app>
    <v-app-bar
    app
    color=#0078d4
    >
      <TheHeader/>
    </v-app-bar>
    <v-main>
      <router-view/>
    </v-main>
    <v-footer>
      <TheFooter />
    </v-footer>
  </v-app>
</template>

<script>
import TheHeader from '@/components/common/TheHeader.vue';
import TheFooter from '@/components/common/TheFooter.vue';
export default{
  name: 'App',

  components: {
    TheHeader, 
    TheFooter,
  },

  data: () => ({
  }),
};

</script>

