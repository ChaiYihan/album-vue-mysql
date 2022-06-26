<template>
    <div :style="albumStyle">
        <div :style="cataStyle">
            <img v-for="pic in this.albumList" :src="getSrc(pic['name'])" :style="picStyle" v-on:click="choosePic(pic['id'])" />
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';

var availH = screen.availHeight - (window.outerHeight - window.innerHeight);
var availW = screen.availWidth - (window.outerWidth - window.innerWidth);
var albumW = availW * 0.225;
var albumH = availH * 0.95;

var posl = -availW * 0.225 + availW * 0.014;
var posm = availW * 0.014;
var posr = availW * 0.225 + availW * 0.014;
var posrr = availW * 0.225 * 2 + availW * 0.014;
var posDis = availW * 0.225;

export default {
    computed:{
        ...mapState(['disSrc'])
    },
    name: 'Aside',
    data() {
        return {
            albumStyle: '',
            cataStyle: '',
            picStyle: '',
            albumList: [],
            // disSrc: '',
        };
    },
    created() {
        const albumsrc = require('@/assets/img/background/album.png');
        this.albumStyle = ''
            + 'position: absolute; '
            + 'left: ' + availW * 0.75 + 'px; '
            + 'width: ' + albumW + 'px; '
            + 'height: ' + albumH + 'px; '
            + 'background-size: ' + availW * 0.225 + "px " + availH * 0.95 + "px; "
            + 'background-repeat: no-repeat; '
            + 'background-image: url(' + albumsrc + '); '
            + 'overflow: hidden; '
            + 'top: ' + availH * 0.01 + 'px ; '
            ;
        this.cataStyle = ''
            + 'position: absolute; '
            + 'overflow: auto;'
            + 'width: ' + availW * 0.20 + "px; "
            + 'left: ' + posm + 'px; '
            + 'height: ' + availH * 0.75 + "px; "
            + 'top:' + availH * 0.12 + "px; "
            ;
        this.picStyle = ''
            + 'height: ' + availH * 0.06 + 'px; '
            + 'margin: 0 5px 0 0; '
            ;
        // console.log(this.cataStyle);

        const url = 'http://db.koishi-cyh.com/thumb/list';
        const resp = fetch(url, {
            method: 'POST',
            mode: 'cors',
        }).then(resp => resp.json()).then(data => {
            this.albumList = data;
        })
    },
    methods: {
        getSrc: function (url) {
            const img = require(`@assets/img/thumbnail/${url}`);
            return img;
        },
        choosePic: function(fid){
            const url = 'http://db.koishi-cyh.com/detail/get';
            var data = {
                "fid" : fid,
            };
            // console.log(JSON.stringify(data));
            fetch(url, {
                body: JSON.stringify({'fid':fid}), // must match 'Content-Type' header
                cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
                credentials: 'same-origin', // include, same-origin, *omit
                headers: {
                'user-agent': 'Mozilla/4.0 MDN Example',
                'content-type': 'application/json'
                },
                method: 'POST', // *GET, POST, PUT, DELETE, etc.
                mode: 'cors', // no-cors, cors, *same-origin
                redirect: 'follow', // manual, *follow, error
                referrer: 'no-referrer', // *client, no-referrer
            }).then(resp => resp.json()).then(data => {
                // console.log(data[0]['name']);
                const img = require(`@/assets/img/pictures/${data[0]['name']}`);
                this.$store.dispatch('setDisSrc', img);
            })
        },
    },
}


</script>

<style scoped>

div::-webkit-scrollbar {
    width: 20px;
}

/* 滚动条轨道 */
div::-webkit-scrollbar-track {
    background-image: url("@/assets/img/background/scrollbar-background.png");
    background-size: 20px;
    background-repeat: repeat-y;
}

/* 小滑块 */
div::-webkit-scrollbar-thumb {
    background-image: url('@/assets/img/background/scrollbar-thumb.png');
    background-size: 20px;
}

div::-webkit-scrollbar-thumb:hover {
    background-image: url('@/assets/img/background/scrollbar-thumb-hover.png');
}

</style>
