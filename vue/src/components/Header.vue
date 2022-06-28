<template>

<div class="Head" :style="headStyle">
	<img v-if="this.isLoading" src="@assets/img/loading.gif" alt="logding..." :style="gifStyle"><img/>
</div>

</template>

<script>
import { mapState } from 'vuex';

var availH = screen.availHeight - (window.outerHeight - window.innerHeight);
var availW = screen.availWidth - (window.outerWidth - window.innterWidth);

export default{
	computed: {
		...mapState(['isLoading'])
	},
    name: 'Header',
    data() {
        return {
            classObj: { Head:true, },
			gifStyle : ''
				+'height: '+availH*0.08+'px; '
				+'float: left; '
				,
			headStyle: 'height: '+availH*0.1+'px; ',
        }
    }
}
</script>


<style scoped>

</style>
