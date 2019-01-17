<template>
  <div class="app">
    <div v-for="(play, index) in playList" :key="index" class="item">
      <div >이름 : {{ play.name }}</div>
      <div >태그 : 
        <span v-for="(tag, index) in play.tags" :key="index" class="item">
           {{ tag }}
        </span>
      </div>
      <div >위치 : {{ play.address }}</div>
      <div >비고 : {{ play.etc }}</div>
      <div >주차 : {{ play.parking }}</div>

      <br>
      <br>
    </div>
  </div>
</template>
<script>
  import * as moment from "moment"
  import "moment-timezone"

  const playList = require("~/assets/json/jeju_nomad.json").list

  export default {
    async asyncData({app: {$axios}}) {
    },
    data() {
      return {
        playList: playList
      }
    },
    mounted() {
    },
    methods: {
    },
  }
</script>
