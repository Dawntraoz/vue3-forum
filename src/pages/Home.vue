<template>
  <h1>Welcome to the Forum</h1>
  <category-list :categories="categories" />
</template>

<script>
import sourceData from '@/data.json'
import CategoryList from '@/components/CategoryList.vue'

export default {
  components: {
    CategoryList
  },
  data () {
    return {
      categories: sourceData.categories
    }
  },
}
</script>

<style scoped>

</style>