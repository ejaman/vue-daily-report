<template>
  <div class="day">
    <h1 class="day-title">
      {{$route.params.date}}<!--url router에서 제공하는 파라미터 date는 갑자기 나온거 아니고 라우터에서 /day/:date에서 설정한 것 -->
    </h1>

    <ul class="day-list">
      <li
      v-for="item in items"
      :key="item.id"
      class="day-list-item"
      :class="{'open': item.open}">
      <div class="time">
        <h2>
          {{item.id}}
        </h2>
      </div>

      <div class="action">
        <p
        v-if="!item.open"
        @click="toggleOpen(item)"
        >
          {{item.action}}
          <span v-if="item.action.length === 0">내용을 작성해주세요</span>
        </p>
        <input v-if="item.open" type="text" v-model="item.action" @keyup.enter="updateItem(item)" placeholder="한 일을 작성해주세요"> <!--input이라 바인딩 해줘야함-->
      </div>
      <day-score
      @onUpdateScore="onUpdateScore"
      :item="item"></day-score>
      <!--score를 아이템에 있는 score로 저장하려면 dayscore에서 해당 아이템이 뭔지 알아야함 
      -> item 전달 dayscore에 props로 전달됨 -->

      <div class="note" v-if="item.open">
        <textarea v-model="item.note" 
        placeholder="노트를 작성해주세요"></textarea>
      </div>
      <div class="buttons" v-if="item.open">
        <button class="save" @click="updateItem(item)">save</button><!--item은 각 슬롯에 들어있는 키-->
        <button class="cancel" @click="toggleOpen(item)">cancel</button>
      </div>

      </li>
     
    </ul>
  </div>
</template>

<script>
import DayScore from '../components/DayScore'
import axios from 'axios'
import moment from 'moment'

import {mapGetters} from 'vuex'

export default {
  name: 'Day',
  methods: {
    onUpdateScore(item, score) {
      item.score = score;
      this.updateItem(item);
    },
    getItems() {
      console.log('get items');
      let url =  `https://new-daily-report-d0f23-default-rtdb.firebaseio.com/items.json?orderBy="$key"&startAt="${this.$route.params.date}"&endAt="${this.$route.params.date}-22-24"`;
      axios.get(url).then((res) => {//res 안에 데이터가 들어있음
        this.items = this.displayItems(res.data);
       
      });
    },
    displayItems(result) {
      console.log(result);

     let items = [];
      let startTime =this.savedSettings.starttime;//setting에서 지정한 시간부터 시작되도록 
      for (let i = 0; i<12; i++){
        let datetime = moment(this.$route.params.date + ' ' + startTime);
        let itemkey = `${this.$route.params.date}-${datetime.add(i*2, 'hours').format('HH')}-${datetime.add(2, 'hours').format('HH')}`;
  
        let item = {
          id: itemkey,
          action:'',
          note:'',
          open:false,
          score: undefined
        }

        Object.keys(result).map((key) => {
          if(key === itemkey) {
            item = result[key];
          }
        })
    
        items.push(item);
      }

      return items;
    },
    updateItem(item) {
     // console.log('update', item);
      let url =`https://new-daily-report-d0f23-default-rtdb.firebaseio.com/items/${item.id}.json`
      axios.put(url, item).then((res) => {
          console.log(res);
          this.getItems();
      });
    },
    toggleOpen(item) {
      item.open = !item.open
    }
  },
  components: {
    DayScore 
    },
    computed:{
      ...mapGetters(['savedSettings'])
    },
  data() {
    return {
      items: [

      ]
    }
  },
  props: {

  },
  created(){
    this.getItems();
  },
  // watch:{
  //   '$route'(to, from){
  //     this.getItems();
  //   }
  // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
