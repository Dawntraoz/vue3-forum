<template>
  <h1>{{ category.name }}</h1>
  <forum-list :forums="forumsByCategory" />
</template>

<script>
import sourceData from '@/data.json'
import ForumList from '@/components/ForumList.vue'

export default {
  components: { ForumList },
  props: {
    id: {
      required: true,
      type: String
    }
  },
  computed: {
    category () {
      return sourceData.categories.find(category => category.id === this.id)
    },
    forumsByCategory () {
      return sourceData.forums.filter(forum => forum.categoryId === this.id)
    }
  }
}
</script>

<style>

</style>