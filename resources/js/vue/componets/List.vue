<template>
  <div>
    <h1>Listado de Post</h1>

        <o-field label="Email" variant="danger" message="This email is invalid">
      <o-input type="email" value="john@" maxlength="30"> </o-input>
    </o-field>

    <o-button @click="clickMe">Click Me</o-button>
  </div>
</template>

<script>
export default {
  methods: {
    clickMe() {
      alert("Clicked!");
    },
  },
};
</script>