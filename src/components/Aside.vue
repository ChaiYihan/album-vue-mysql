<template>
    <div :style="albumStyle">
        <div :style="cataStyle">
            img
        </div>
    </div>
</template>

<script>

var availH = screen.availHeight - (window.outerHeight - window.innerHeight);
var availW = screen.availWidth - (window.outerWidth - window.innerWidth);
var albumW = availW*0.225;
var albumH = availH*0.95;

var posl=-availW*0.225+availW*0.014;
var posm=availW*0.014;
var posr=availW*0.225+availW*0.014;
var posrr=availW*0.225*2+availW*0.014;
var posDis = availW*0.225;

export default{
    name: 'Aside',
    data(){
        return{
            albumStyle : '',
            cataStyle : '',
        };
    },
    created(){
        const albumsrc = require('@/assets/img/background/album.png');
        this.albumStyle = ''
            +'position: absolute; '
            +'left: '+availW*0.75+'px; '
            +'width: '+albumW+'px; '
            +'height: '+albumH+'px; '
            +'background-size: '+availW*0.225+"px "+availH*0.95+"px; "
            +'background-repeat: no-repeat; '
            +'background-image: url('+albumsrc+'); '
            +'overflow: hidden; '
            +'top: '+availH*0.01+'px ; '
            ;
        this.cataStyle = ''
            +'position: absolute; '
            +'overflow: auto;'
            +'width: '+availW*0.20+"px; "
            +'left: '+posm+'px; '
            +'height: '+availH*0.75+"px; "
            +'top:'+availH*0.12+"px; "
            ;
        console.log(this.cataStyle);

        
    }
}


</script>

<style scoped>
</style>