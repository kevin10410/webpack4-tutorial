<template lang="pug">
  input.input(
    :value="value"
    @input="$emit('input', $event)"
  )
</template>
<script>
export default {
  props: {
    value: {
      type: String,
      require: true,
    }
  },
}
</script>
<style lang="stylus" scoped>
.input
  border none
  outline none
  color #ffffff
  background-color #444444 
</style>