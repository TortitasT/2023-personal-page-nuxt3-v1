<template>
  <main class="about">
    <section>
      <h1>About</h1>

      <p>
        I'm a software developer, I like to make games and web apps. I
        currently work at
        <a href="https://descom.es/">
          <span>Descom</span>
        </a>.
      </p>

      <p>
        I've made a few games, you can check them out on
        <a href="https://tortitas.itch.io/">
          <span>Itch.io</span>
        </a>.
      </p>
    </section>

    <section class="about__reach">
      <h1>Reach out</h1>

      <form action="" >
        <div class="about__reach__row">
          <div>
            <label for="name">Name</label>
            <input type="text" name="name" id="name" placeholder="Your name" />
          </div>

          <div>
            <label for="email">Email</label>
            <input type="email" name="email" id="email" placeholder="Your email" />
          </div>
        </div>

        <div>
          <label for="message">Message</label>
          <textarea name="message" id="message" cols="30" rows="10" placeholder="A message"></textarea>
        </div>

        <button type="submit">Send</button>
      </form>
    </section>
  </main>
</template>

<style lang="scss">
  @import '~/assets/styles/pages/about.scss';
</style>