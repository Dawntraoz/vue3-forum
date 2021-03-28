<template>
  <forum-list v-for="category in categories" :key="category.id" :forums="getForumsByCategory(category)" :category="category" />
</template>

<script>
import sourceData from '@/data.json'
import ForumList from './ForumList.vue'

export default {
  components: { ForumList },
  props: {
    categories: {
      required: true,
      type: Array
    }
  },
  methods: {
    getForumsByCategory (category) {
      return sourceData.forums.filter(forum => forum.categoryId === category.id)
    }
  }
}
</script>

<style>

</style>