<template>
  <div class="content" :style="contentStyle">
    <Header></Header>
    <Guard></Guard>
    <Display></Display>
    <Aside></Aside>
  </div>

</template>

<script>
import Header from "./components/Header.vue"
import Aside from "./components/Aside.vue"
import Guard from './components/Guard.vue'
import Display from './components/Display.vue'

var availH = screen.availHeight - (window.outerHeight - window.innerHeight);
var availW = screen.availWidth - (window.outerWidth - window.innerWidth);

export default {
  name: 'Layout',
  components: {
    Header,
    Aside,
    Guard,
    Display,
  },
  setup() {
  },
  data() {
    return {
      contentStyle: '',
    }
  },
  created() {
    const img = require('@/assets/img/background/background.png');
    this.contentStyle = ''
      // +'border: 2px solid blue; '
      +'width: '+availW+'px; '
      +'height: '+availH+'px; '
      +'background-image: url(' + img + '); '
      +'background-size: ' + availW + 'px ' + availH + 'px; '
      + 'padding: 0px; '
      ;
    console.log(this.contentStyle);
  },
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
