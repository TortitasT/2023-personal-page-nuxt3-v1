<template>
  <footer class="footer">
      <ul>
        <li>
          <h2>Sitemap</h2>
        </li>
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
      </ul>

      <ul>
        <li>
          <h2>Social</h2>
        </li>
        <li>
          <a href="https://twitter.com/tortitas_t" target="_blank">
            <span>Twitter</span>
          </a>
        </li>
        <li>
          <a href="https://github.com/tortitast" target="_blank">
            <span>Github</span>
          </a>
        </li>
        <li>
          <a href="https://tortitas.itch.io/" target="_blank">
            <span>Itch.io</span>
          </a>
        </li>
      </ul>

      <ul>
        <li>
          <p>
            @tortitast <br />
            2022 - 2023
          </p>
        </li>
      </ul>
    </footer>
</template>

<style lang="scss">
  @import '~/assets/styles/components/footer.scss';
</style>