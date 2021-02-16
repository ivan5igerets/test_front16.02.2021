<template>
    <div 
        class="post"
        @click="goTo(post.id)"
    >
        <div class="post-title">
            <h3>
                {{ post.title }}
            </h3>

            {{ post.id }}
        </div>
    </div>
</template>

<script>
export default {
    name: 'post',
    props: ['post'],
    methods: {
        goTo(id) {
            this.$router.push({name: 'PostOpen', params:{id: id}})
        }
    }
}
</script>

<style>
.post {
    width: 60%;
    /* background: red; */
    margin: 10px auto;
    border-radius: 5px;
    padding: 10px 30px;
    cursor: pointer;
    box-shadow: 0 0px 2px 2px rgba(0,0,0,0.22);
}

.post-title {
    text-align: left;
    margin-bottom: 10px;
}
</style>