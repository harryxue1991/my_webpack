<template>
    <div>
            <div>hello world!</div><br>
            <div v-html='msg'></div>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                msg:'Harry Xue'
            }
        }
    }
</script>