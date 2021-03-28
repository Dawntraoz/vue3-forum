<template>
  <form @submit.prevent="save" class="col-full">
    <div class="form-group">
      <textarea v-model="text" name="" id="" cols="30" rows="10" class="form-input"></textarea>
    </div>
    <div class="form-actions">
      <button class="btn-blue">Submit post</button>
    </div>
  </form>
</template>

<script>
export default {
  data () {
    return {
      text: ''
    }
  },
  methods: {
    save () {
      const postId = 'qqqq' + Math.random()
      const post = {
        id: postId,
        text: this.text,
        publishedAt: Math.floor(Date.now() / 1000),
        userId: 'ALXhxjwgY9PinwNGHpfai6OWyDu2'
      }
      this.$emit('save', { post })

      this.text = ''
    }
  }
}
</script>

<style>

</style>