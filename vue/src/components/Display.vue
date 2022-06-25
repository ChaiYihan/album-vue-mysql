<template>
<div style="height: 50vh; width: 77.5vw">
    <img :src="disSrc" alt="Display" :style="disStyle" />
</div>

</template>

<script>
import { mapState } from 'vuex';

var availH = screen.availHeight - (window.outerHeight - window.innerHeight);
var availW = screen.availWidth - (window.outerWidth - window.innerWidth);

export default{
    computed:{
        ...mapState(['disSrc'])
    },
    name: 'Dispaly',
    data() {
        return {
            // disSrc : '',
            disStyle : '',
        }
    },
    created(){
        this.$store.dispatch('setDisSrc', require('@/assets/img/pictures/koishi1.jpg'));
        this.disStyle = ''
            // +'position: absolute; '
            +'height: '+availH*0.5+'px; '
            // +'top: '+availH*0.1+'px; '
            // +'left: '+(availW*0.4-show.clientWidth*0.5)+'px; '
            ;
    },
}
</script>


<style scoped>

</style>