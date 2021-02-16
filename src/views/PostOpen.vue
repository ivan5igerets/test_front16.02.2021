<template>
    <div class="post open">
        <div class="post-title">
            <h3> {{ onShow.title }} </h3>
        </div>

        <div class="post-body">
            {{ onShow.body }}
        </div>

        <div class="post-footer">
            <p> Author id: {{ onShow.userId }} </p>
            
            <p> Post id: {{ onShow.id }} </p>
        </div>

        <router-link to="/">back to list</router-link>

        <br>
        <br>
       
    </div>
</template>

<script>
import axios from 'axios'
import {mapState} from 'vuex'

export default {
    name: 'post-open',
    data() {
        return {
            onShow: {}
        }
    },
    props: ['id'],
    computed: {
        ...mapState(['posts'])
    },
    methods: {
        searchCurPost(){
            if (this.posts != null) {
                this.posts.forEach(el => {
                    if (el.id == this.id) {
                        this.onShow = el
                        console.log(el);
                    }
                })
            } else {
                axios.get(`https://jsonplaceholder.typicode.com/posts/${this.id}`)
                    .then(res => {
                        this.onShow = res.data
                    })
                    .catch(err => {
                        console.error(err);
                    })
            }
        }
    },
    mounted() {
        this.searchCurPost()
    }
}
</script>

<style>
.open {
    cursor: auto;
}

.post-body{
    text-align: justify;
    margin-bottom: 10px;
}

.post-footer {
    text-align: left;
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;
}
</style>