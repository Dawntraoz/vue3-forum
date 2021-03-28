<template>
  <div class="col-full">
    <div class="thread-list">
      <h2 class="list-title">Threads</h2>
      <thread-list-item v-for="thread in threads" :key="thread.id" :thread="thread" :user="userById(thread.userId)" />
    </div>
  </div>
</template>

<script>
import sourceData from '@/data.json'
import ThreadListItem from '@/components/ThreadListItem.vue'

export default {
  components: { ThreadListItem },
  props: {
    threads: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      posts: sourceData.posts,
      users: sourceData.users
    }
  },
  methods: {
    postById (postId) {
      return this.posts.find(p => p.id === postId)
    },
    userById (userId) {
      return this.users.find(u => u.id === userId)
    }
  }
}
</script>

<style>

</style>