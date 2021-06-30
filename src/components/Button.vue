<template lang="pug">
  button.button(
    @click="$emit('click')"
  ) {{ text }}
</template>
<script>
export default {
  props: {
    text: {
      type: String,
      default: 'Add',
    }
  },
}
</script>
<style lang="scss" scoped>
.button {
  cursor: pointer;
  border: none;
  outline: none;
  font-size: 14px;
  border-radius: 4px;
}
</style>
