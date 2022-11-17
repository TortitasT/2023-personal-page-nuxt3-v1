<template>
  <main class="blog">
    <h1>Blog</h1>

    <section>
      <h2>Recent posts</h2>
      <ul class="blog__list">
        <li v-for="(post, index) in posts" :key="index" class="blog__list__post">


          <div>
            <nuxt-link :to="post._path">
              <h3>{{ post.title }}</h3>
            </nuxt-link>
            <small>{{ post.date || 'no date' }}</small>

            <p>
              {{ post.description }}
            </p>
          </div>
          <div>
            <nuxt-link :to="post._path">
              Ver mas
            </nuxt-link>
          </div>
        </li>
      </ul>
    </section>
  </main>
</template>

<script setup>
const posts = await(await queryContent('/blog').find()).sort((a, b) => {
  return new Date(b.date) - new Date(a.date)
})
</script>

<style lang="scss">
@import '~/assets/styles/pages/blog.scss';
</style>