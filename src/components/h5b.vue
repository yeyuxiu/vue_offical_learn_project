<template>
    <div class="outer">
        <div class="line"></div>
        <br>

        <div class="t2"></div>
        <span><slot></slot></span>

    </div>
</template>

<script>
    export default {
        name: "h5b"
    }

</script>

<style scoped>
    .outer {
        margin: 9px 0;
    }
    .t2{
        margin-left: 10px;
        display: inline-block;
        border: 13px transparent solid;
        border-left-color: #FF4444;
        border-right-color: #FFBB33;
        border-top-color:  #99CC00;
        border-bottom-color: #33B5E5;
    }
    span{
        font-size: 18px;
        vertical-align: top;
        color: crimson;
        margin-left: 13px;
    }
    .line {
        width: 100%;
        height: 1px;
        background: #d9d9d9;
    }
</style>