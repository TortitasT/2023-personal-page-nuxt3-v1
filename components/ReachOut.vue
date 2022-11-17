<template>
  <form @submit.prevent="send">
    <div class="about__reach__row">
      <div>
        <label for="name">Name</label>
        <input type="text" name="name" id="name" required placeholder="Your name" />
      </div>

      <div>
        <label for="email">Email</label>
        <input type="email" name="email" id="email" required placeholder="Your email" />
      </div>
    </div>

    <div>
      <label for="message">Message</label>
      <textarea name="message" id="message" cols="30" rows="10" required placeholder="A message"></textarea>
    </div>

    <p :class="message.color">{{ message.text }}</p>

    <button type="submit">Send</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      message: {
        text: '',
        color: '',
      },
    };
  },

  methods: {
    async send(event) {
      const form = event.target;
      const formData = new FormData(form);

      try {
        const response = await fetch('https://formspree.io/f/mdojbbgo', {
          method: 'POST',
          body: formData,
          headers: {
            Accept: 'application/json',
          },
        });

        const data = await response.json();

        if (data.ok) {
          this.message = {
            text: 'Message sent!',
            color: 'green',
          };
          form.reset();
        } else {
          this.message = {
            text: 'Something went wrong!',
            color: 'red',
          };
        }

      }
      catch (error) {
        this.message = {
          text: 'Something went wrong!',
          color: 'red',
        };
      }

    },
  },
}
</script>