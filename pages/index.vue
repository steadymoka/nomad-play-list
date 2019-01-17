<template>
  <div class="app">
    <div class="section section-header">
      <div class="container">
        <div class="title">
          모카의 노마드 플레이 리스트
        </div>
        <div class="title-sub">
          moka's nomad play list
        </div>

        <div class="menu">
          <div class="item" v-on:click.native="onClickMenu(0)">
            <span class="active">제주</span>
          </div>
          <div class="item" v-on:click.native="onClickMenu(1)">
            발리
          </div>
          <div class="item" v-on:click.native="onClickMenu(2)">
            치앙마이
          </div>
        </div>
      </div>
    </div>


    <div class="section-container">

      <div v-for="(play, index) in playList" :key="index" class="item">

        <img :src="play.image" alt="image .." class="image">

        <div class="info">
          <div class="name">
            <span class="instalink" v-on:click.native="goLink(play.link)">{{ play.name }}</span>
          </div>
          <div class="address">
            <a class="link" v-on:click.native="goLink(play.address_url)" target="_blank">{{ play.address }}</a>
          </div>
          <div class="temp">-</div>
          <div class="comment">
            "{{ play.etc }}"
          </div>
          <div class="tags">
            <span v-for="(tag, index) in play.tags" :key="index" class="tag-item">
              #{{ tag }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>
<script>
  import * as moment from "moment"
  import "moment-timezone"

  const playList = require("~/assets/json/jeju_nomad.json").list

  export default {
    async asyncData({
      app: {
        $axios
      }
    }) {},
    data() {
      return {
        playList: playList.filter(item => item.name != "")
      }
    },
    mounted() {},
    methods: {
      onClickMenu(menu) {
        if (menu != 0) {
          alert("조만간 갈거에요!")
        }
      },
      goLink(url) {
        window.open(url, '_blank');
      }
    },
  }
</script>