<template>
  <article class="thread">
    <div>
      <router-link :to="{ name: 'ThreadShow', params: {id: thread.id} }">{{ thread.title }}</router-link>
      <p class="text-faded text-xsmall">
        By <a href="profile.html">{{ user.name }}</a>, <app-date :timestamp="thread.publishedAt" />.
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
        <app-date class="text-xsmall text-faded" :timestamp="thread.publishedAt" />
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