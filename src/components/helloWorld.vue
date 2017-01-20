<template>
  <div>
      Hello world, {{name}}!
      <div>count: {{count}}</div>
      <button @click="calc">Click</button>
  </div>
</template>

<script>

export default {
  data: function () {
    return {
      name: 'Bob',
      count: 0,
    }
  },
  methods: {
    calc () {
      this.count++;
      console.log('calc do');
    },
  }
}
</script>
