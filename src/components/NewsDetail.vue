<template>
    <div class="py-md-10">
        <v-container>
            <div class="v-sheet v-sheet--tile theme--light  lighten-4">
                <div class="container py-5 mx-auto">
                    <div class="row fill-height align-center justify-center">
                        <div class="text-left mb-4 col-md-6 col-12">
                            <h3 class="headline mb-3"> {{article.name}}
                                    <v-btn depressed disabled plain
                                    >
                                        <p style="color: #0078d4; font-size: medium; margin-top: 15%;">{{article.date}}</p>
                                    </v-btn>
                            </h3>
                            <p class="mb-0"> {{article.desc}} </p>
                            <v-btn class="mt-3" color="accent">
                                <router-link class="text--primary" color="info" :to="'/news/'">Назад</router-link>
                            </v-btn>
                        </div>
                        <div class="col-md-6 col-12">
                            <div class="v-card v-sheet theme--light elevation-24">
                                <div class="v-responsive v-image" style="height: 300px;">
                                    <div class="v-responsive__sizer" style="padding-bottom: 66.75%;"></div>
                                    <img class="v-image__image" style="background-position: center center;" :src="require('@/assets/images/' + article.preview_image)" alt="...">
                                    <div class="v-responsive__content" style="width: 400px;"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <CommentsCard/>
        </v-container>
    </div>
</template>
<script>
import CommentsCard from '@/components/CommentsCard.vue';
export default {
    mounted() {
        this.$store.dispatch('loadArticles')
    },
    computed: {
        article() {
            return this.$store.getters.getArticleById(this.$route.params.id)
        }
    },
    methods: {
        back() {
            this.$router.go(-1)
        }
    },
    components: {
        CommentsCard
    }
}
</script>

