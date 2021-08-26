<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>{{ author }}</h2>
    <p v-html="acticle"></p>

    <p>{{seen ? 'yes': 'no'}}</p>


   
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      score: 0,
      msg: '반갑습니다',
      author: 'bob',
      acticle: `
      <strong>hello</strong> world!`,
      seen: true,

    }
  },
    beforeCreate() {
    console.log('beforeCreate');
    console.log(this.score);
  },
  created() {
    console.log('created');
    console.log(this.score);
  },
  beforeMount() {
    console.log('beforeMount');
    console.log(this.score);
  },
  mounted() {
    console.log('mounted-렌더링');
    console.log(this.score);
  },
  beforeUpdate() {
    console.log('beforeUpdate');
  },
  updated() {
    console.log('updated');
  },
  beforeDestroy() {
    console.log('beforeDestroy');
  },
  destroyed() {
    console.log('destroyed');
  }
  // props: {
  //   msg: String
  // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
