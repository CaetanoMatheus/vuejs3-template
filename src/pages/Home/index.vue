<template>
  <div class="home-page">
    <Title title="Hello World" smallText="VueJS 3 template" />
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'

export default {
  components: {
    Title: defineAsyncComponent(() => import('@/components/text/Title')),
  },
}
</script>

<style>

</style>
