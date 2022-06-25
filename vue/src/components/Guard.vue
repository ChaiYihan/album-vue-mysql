<template>

<img src="@/assets/img/pictures/0koishi.jpg" alt="koishi0" :style="guardStyle[0]">
<img src="@/assets/img/pictures/1koishi.jpg" alt="koishi1" :style="guardStyle[1]">

</template>

<script>

var availH = screen.availHeight - (window.outerHeight - window.innerHeight);
var availW = screen.availWidth - (window.outerWidth - window.innerWidth);
var guardL = availH*0.2;

export default{
    name: 'Header',
    data() {
        return {
            guardStyle : ['',''],
        }
    },
    created(){
        for(var i=0; i<this.guardStyle.length; ++i){
            this.guardStyle[i] += 'position: fixed; ';
            this.guardStyle[i] += 'width: '+guardL+'px; ';
            this.guardStyle[i] += 'top: '+'calc('+availH+"px - "+availH*0.2+"px); ";
            this.guardStyle[i] += 'left: '+'calc('+(availW*0.1*(1-i)+availW*0.7*i)+'px - '+availH*0.1+'px); ';
            this.guardStyle[i] += 'height: '+guardL+'px; ';
        }
    },
}
</script>


<style scoped>

</style>