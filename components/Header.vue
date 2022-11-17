<template>
  <header class="header">
    <div class="header__title">
      <h1>Tortitas</h1>
    </div>

    <nav>
      <ul>
        <li>
          <nuxt-link to="/">
            <span>Home</span>
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/about">
            <span>About</span>
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/blog">
            <span>Blog</span>
          </nuxt-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style lang="scss">
@import '~/assets/styles/components/header.scss';
</style>