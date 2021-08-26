<template>
  <div class="intro">
    <div class="intro-inner">
      <h1>Daily<br>Report</h1>
      <router-link
       class="button"
       :to="todayUrl" 
       > 
      START
      </router-link>
      <!--버튼과 같은 기능, to="/day/2021-08-01" to는 ~로 이동, 현재는 computed로 동적 url -->
    </div>
  </div>
</template>

<script>
import moment from 'moment';

export default {
  name: 'Intro',
  computed: {
    todayUrl() {
      let todayUrl = moment(new Date()).format('YYYY-MM-DD');
      return `/day/${todayUrl}`; //todayUrl을 템플릿 문법을 이용해 넣어줌
    }
  },
  data() {
    return {
    }
  },
  props: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
