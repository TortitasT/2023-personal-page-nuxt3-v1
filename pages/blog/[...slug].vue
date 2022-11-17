<template>
  <main>
    <ContentRenderer :value="data" />
  </main>
  <!-- https://content.nuxtjs.org/v1/community/snippets/ -->
</template>

<script setup>
const { path } = useRoute()

const data = await queryContent(path).findOne()

if (data._empty != false) {
  throw createError({ statusCode: 404, statusMessage: 'Page Not Found' })
}
</script>