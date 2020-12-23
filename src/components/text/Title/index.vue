<template>
  <div class="title">
    <h2>{{ title }}</h2>
    <small>{{ smallText }}</small>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    smallText: String,
  },
}
</script>

<style>

</style>
