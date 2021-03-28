<template>
  <div class="col-full">
    <div class="forum-list">
      <h2 class="list-title">
        <router-link v-if="category" :to="{ name: 'Category', params: { id: category.id } }">{{ category.name }}</router-link>
        <span v-else>Forums</span>
      </h2>
      <div class="forum-listing" v-for="forum in forums" :key="forum.id">
        <div class="forum-details">
          <router-link class="text-xlarge" :to="{ name: 'Forum', params: { id: forum.id } }">{{ forum.name }}</router-link>
          <p>{{ forum.description }}</p>
        </div>
        <div class="threads-count">
          <p><span class="count">{{ forum.threads?.length || 0 }}</span> {{ forumThreadsWord(forum) }}</p>
        </div>
        <div class="last-thread">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    forums: {
      required: true,
      type: Array
    },
    category: {
      type: Object
    }
  },
  methods: {
    forumThreadsWord (forum) {
      return forum.threads?.length > 1 ? 'threads' : 'thread'
    }
  }
};
</script>

<style>
</style>