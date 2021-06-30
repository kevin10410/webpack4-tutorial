<template>
  <div>
    <Input
      :value="inputValue"
      @input="inputHandler"
    />
    <Button
      text='submit'
      @click="submitHandler"
    />
  </div>
</template>

<script>
import Input from './components/Input.vue';
import Button from './components/Button.vue';

export default {
  data () {
    return {
      inputValue: '',
    }
  },
  methods: {
    inputHandler(event) {
      const { value } = event.target;
      this.inputValue = value;
    },
    submitHandler() {
      alert(this.inputValue + ' Submit!');
    },
  },
  components: {
    Input,
    Button,
  },
}
</script>
