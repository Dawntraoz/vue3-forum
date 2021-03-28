<template>
  <article class="thread">
    <div>
      <a :href="`/thread/${thread.id}`">{{ thread.title }}</a>
      <p class="text-faded text-xsmall">
        By <a href="profile.html">{{ user.name }}</a>, {{ thread.publishedAt }}.
      </p>
    </div>

    <div class="activity">
      <p class="replies-count">
        {{ thread.posts.length }} replies
      </p>

      <img class="avatar-medium"
        :src="user.avatar"
        alt="">

      <div>
        <p class="text-xsmall">
          <a href="profile.html">{{ user.name }}</a>
        </p>
        <p class="text-xsmall text-faded">{{ thread.publishedAt }}.</p>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  props: {
    thread: {
      type: Object,
      required: true
    },
    user: {
      type: Object,
      required: true
    }
  }
}
</script>

<style>

</style>