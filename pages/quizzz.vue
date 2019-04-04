<template>
  <div class="app">
    <div class="section section-header quiz-header">
      <div class="container">
        <div class="title">
          DroidKnights Quiz !!!
        </div>
        <div class="title-sub">
          1등에 도전해보세요
        </div>
      </div>
    </div>

    <div class="section-container">

      <div v-for="(user, index) in ranks" :key="index" class="quiz-item">

        <div class="info">
          <div class="rank">{{ index + 1 }}위</div>
          <div class="score">
            {{ user.score }}점
          </div>
          <div class="name">
            <span class="instalink">{{ user.name }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>
<script>
  import * as moment from "moment"
  import "moment-timezone"

  let ranks = require("~/assets/json/rank.json")

  export default {
    async asyncData({
      app: {
        $axios
      }
    }) {
      setInterval(function () {
        ranks = require("~/assets/json/rank.json")
      }.bind(this), 2000)
      return {
      }
    },
    data() {
      return {
        ranks: ranks.filter(item => item.name != "")
      }
    },
    mounted() {},
    methods: {
    },
  }
</script>