<template>
  <div class="home">
    <swiper :options="swiperOption" ref="mySwiper">
      <swiper-slide v-for="(url, index) in swiperSlides" :key="index">
        <img :src="url" alt="" class="banner-pic">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
// require styles
import 'swiper/dist/css/swiper.css';
import { swiper, swiperSlide } from 'vue-awesome-swiper';
// Could not find a declaration file for module 'vue-awesome-swiper'
// Try `npm install @types/vue-awesome-swiper` if it exists 不存在
// or add a new declaration (.d.ts) file containing `declare module 'vue-awesome-swiper';` 修改完需重新npm run serve
@Component({
  components: {
    HelloWorld,
    swiper,
    swiperSlide,
  },
})
export default class Home extends Vue {
  swiperOption = {
    pagination: {
      el: '.swiper-pagination',
    },
  };
  swiperSlides = [
    'http://img.xinbada.info/1.jpg',
    'http://img.xinbada.info/2.jpg',
    'http://img.xinbada.info/3.jpg',
  ];
  mounted() {
    // 111
  }
  get swiper() {
    return (this.$refs.mySwiper as any).swiper;
  }
  // computed: {
  //   swiper() {
  //     return this.$refs.mySwiper.swiper
  //   }
  // },
}
</script>

<style lang="scss" scoped>
.home {
  .banner-pic {
    width: 100%;
  }
}

</style>