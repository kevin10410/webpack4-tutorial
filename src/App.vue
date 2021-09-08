<template>
  <div>
    <Input
      :value="inputValue"
      @input="inputHandler"
    />
    <BButton
      @click="submitHandler"
    >submit</BButton>
  </div>
</template>

<script>
import Input from './components/Input.vue';
import { BButton } from 'bootstrap-vue';

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
    BButton,
  },
}
</script>
