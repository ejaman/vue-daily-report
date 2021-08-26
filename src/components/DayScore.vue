<template>
 <div class="score">
     <button
     v-for="button in buttons"
     :key="button.score"
     @click="updateScore(button.score)"
     :class="{'active': button.score === item.score}"
     ><!--동적 클래스 줄때 :class-->
     {{button.label}}</button>

 </div>
</template>


<script>

export default {
  name: 'DayScore',
  methods:{
      updateScore(score) {
          console.log(score);
          this.$emit('onUpdateScore',this.item,score)//emit의 첫번째 파라미터는 부모에게 호출될 메소드, score는 부모에 전달될 값
      }
  },
  data() {
    return {
        buttons: [
            {label: 'GOOD', score: 3},
            {label: 'SOSO', score: 2},
            {label: 'BAD', score: 1},
        ]
    }
  },
  props: [
      'item'
  ]  
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
