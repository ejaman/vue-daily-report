<template>
  <nav class="nav">
    <ul class="nav-list">
      <li>
        <button @click="gotoday">
          <i class="xi-home"></i>
          <span>today</span>
        </button>
      </li>
      <li>
        <router-link to="/calendar">
          <i class="xi-calendar"></i>
          <span>calendar</span>
        </router-link>
      </li>
      <li>
        <router-link to="/setting">
          <i class="xi-cog"></i>
          <span>setting</span>
        </router-link>
      </li>
      <li>
        <router-link to="/about">
          <i class="xi-emoticon-smiley"></i>
          <span>about</span>
        </router-link>
      </li>
    </ul>

  </nav>
</template>


<script>
import moment from 'moment'
export default {
  name: 'Nav',
  methods:{
    gotoday() {
      let todayUrl = '/day/' + moment(new Date()).format('YYYY-MM-DD');//오늘 날짜를 정해진 포멧으로 가지고 옴
      this.$router.push(todayUrl) ;//이거 기억해두기 사용자 위치를 이동시켜줄때 라우터 오브젝트에 push 메소드에 전달 해달 url로 이동

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
