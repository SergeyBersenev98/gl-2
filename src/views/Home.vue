<template>
  <div class="mouse-parallax" id="container2">
    <div class="home mouse-parallax-bg" id="container">
    <div class="shelve-1" id="shelve1"></div>
    <div class="shelve-2"></div>
    <div class="shelve-3"></div>
    <div class="shelve-4"></div>
    <div class="shelve-5"></div>
      <div class="lightbugs" id="lightbugs">
        <div class="mouse">
        </div>
      </div>
      <div class="fastBar">
       {{getList}}
        <span class="fastBar_icons iconify" tabindex="0" data-icon="ant-design:search-outlined"></span>
        <span class="fastBar_icons iconify" tabindex="0" data-icon="jam:write-f"></span>
        <span class="fastBar_icons iconify" tabindex="0" data-icon="si-glyph:typewriter"></span>
        <span class="fastBar_icons iconify" tabindex="0" data-icon="carbon:license-maintenance-draft"></span>
        <span class="fastBar_icons iconify" tabindex="0" data-icon="iconoir:bin-full"></span>
      </div>
    </div>
  </div>
</template>

<script>
//import HelloWorld from '@/components/HelloWorld.vue'
import { mapGetters } from 'vuex';

export default {
  name: 'Home',
  data(){
    return {

    }
  },
  components: {
  //  HelloWorld
  },
  mounted(){
    document.getElementsByClassName('fastBar_icons')[0].addEventListener('onmouseover', function(){alert(0)})
    console.log(this.$store.getters.getList)
  },
  methods: {
  },
  computed: {
    ...mapGetters(['getList'])
  }
}

</script>

<style>
*{
  margin: 0;
  padding: 0;

}
.home{

  /* background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.95), rgba(0, 0, 0, 0.74), rgba(0, 0, 0, 0.76), rgb(0, 0, 0, 1)), url('../images/backgroundLibrary.png'); */
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 40%;
  width: 100%;
  height: 100vh;
  position: relative;
  transition:background-position .5s ease-out;
}

.lightbugs{
  content: "";
  width: 100%;
  height: 100%;

  background-position: center;
  background-repeat:repeat;
  display: block;
  position: absolute;
  z-index: -20;
}

.mouse-parallax{
    overflow: hidden;
}

.shelve-1{
  width: 19.5%;
  height: 80vh;
  position: absolute;
  top:0;
  left:0;
  z-index: 21;
}

.fastBar{
  position: absolute;
  z-index: 30;
  bottom: 0;
  width: 100%;
  height: 30px;
  transition: 0.4s ease-out;
  opacity: 0;
  display: flex;
  justify-content: center;
  padding-top: 15px;
}

.fastBar:hover{
  height: 65px;
  bottom: 0px;
  background-color: rgba(240, 248, 255, 0.06);
  backdrop-filter: blur(2px);
  border-radius: 3px;
  opacity: 1;
}

.fastBar_icons{
  font-size: 50px;
  opacity: .7;
  color: rgb(107, 89, 81);
  transition: .1s ease-in;
  justify-content: space-between;
  cursor: pointer;
  padding: 0 10px 0 10px;
  position: relative;
  z-index: 1;
}

.fastBar_icons:hover{
font-size: 60px;
padding: 0 5px 0 5px;
transform: translate(0, -15px);
z-index: 100;
color: aliceblue;
}

.fastBar_icons:focus{
  color: red;
}
#shelve1{
  background-image: linear-gradient(to bottom, rgba(229, 255, 0, 0.95), rgba(0, 0, 0, 0.74), rgba(0, 0, 0, 0.76), rgb(0, 0, 0, 1));
}
</style>