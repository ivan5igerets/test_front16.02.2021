<template>
    <div class="posts">
        
        <Post 
            v-for="post in posts" :key="post.id"
            v-bind:post="post"
        />

    </div>
</template>

<script>
import {mapActions, mapState} from 'vuex'

import Post from '@/components/Post.vue'

export default {
    name: 'posts',
    components: {
        Post
    },
    computed: {
        ...mapState(['posts'])
    },
    methods: {
        ...mapActions({
            getPosts: 'GET_POSTS'
        })
    },
    mounted() {
        this.getPosts()
    }
}
</script>