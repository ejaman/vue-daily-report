<template>
  <div class="calendar">
    <FullCalendar
    :config="config"
    @day-click="dayClick"
    ></FullCalendar>
  </div>
</template>

<script>
import {FullCalendar} from 'vue-full-calendar';
import 'fullcalendar/dist/fullcalendar.css';
import {mapGetters} from 'vuex';

export default {
  name: 'Calendar',
  components: {
    FullCalendar
  },
  methods: {
    dayClick(date){
      //console.log(date);
      let url = `/day/${date.format('YYYY-MM-DD')}`;
      this.$router.push(url);
    },
    applySettings(){
      this.config['local'] = this.savedSettings.lang;
    }
  },
  computed:{
    ...mapGetters(['savedSettings'])
  },
  data() {
    return {
      config: {
        defaultView: 'month',
        header: {
          left: 'prev',
          center: 'title',
          right:'next'
        },
        height: 500,
        //locale: this.savedSettings.lang//data에는 다이나믹 연결 불가 this.savedSettings.lang 사용 안됨ㅜ
      }
    }
  },
  created(){
    this.applySettings();
  },
  props: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
