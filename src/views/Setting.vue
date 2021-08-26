<template>
  <div class="setting">
    <div class="setting-inner">
      <h1>설정</h1>
      <form @submit.prevent="saveSettingsForm">
        <fieldset>
          <label for="starttime">start time</label>
          <select id="starttime" v-model="settings.starttime">
            <option value="06:00">06:00</option>
            <option value="07:00">07:00</option>
            <option value="08:00">08:00</option>
            <option value="09:00">09:00</option>
            <option value="10:00">10:00</option>
          </select>
        </fieldset>
        <fieldset>
          <label for="lang">language</label>
          <select id="lang" v-model="settings.lang">
            <option value="ko">한국어</option>
            <option value="en">영어</option>
          </select>
        </fieldset>
        <fieldset class="submit">
          <button type="submit" class="save">save</button>
        </fieldset>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'Setting',
  methods: {
    ...mapActions(['saveSettings']),
    saveSettingsForm() {
        let url = 
          `https://new-daily-report-d0f23-default-rtdb.firebaseio.com/settings.json`;
        // eslint-disable-next-line
        axios.put(url, this.settings).then((res) => {
          this.saveSettings(this.settings);
          alert('저장 완료');
        })
    },
    getSettings() {
      // let url = 
      //   `https://new-daily-report-d0f23-default-rtdb.firebaseio.com/settings.json`;
      // // eslint-disable-next-line
      // axios.get(url).then((res) => {
      //   this.settings = res.data;
      // });  // App.vue에서 스토어를 이용해서 처음에 받아오니까 여기선 안받아와도 됨
      this.settings = this.savedSettings;
    }
  },
  computed: {
    ...mapGetters(['savedSettings'])
  },
  data() {
    return {
      settings: {
        starttime: '08:00',
        lang: 'ko'
      }
    }
  },
  created() {
    this.getSettings();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>