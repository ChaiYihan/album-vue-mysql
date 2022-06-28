<template>

<div class="Head">
</div>

</template>

<script>

import { mapState } from 'vuex';

var availH = screen.availHeight - (window.outerHeight - window.innerHeight);
var availW = screen.availWidth - (window.outerWidth - window.innerWidth);

export default{
    computed: {
        ...mapState(['isLoading'])
    },
    name: 'Header',
    data: {
        return: {
            classObj: { Head:true, },
        }
    }
}
</script>


<style scoped>

.Head{
    height: 10vh;
    /* border: 1px solid blue; */
}

</style>