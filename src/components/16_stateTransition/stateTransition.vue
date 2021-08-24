<template>
    <div>
        <h3b>1. 状态动画与侦听器</h3b>
        <div id="animated-number-demo">
            <input v-model.number="number" type="number" step="20">
            <p>{{ animatedNumber }}</p>
        </div>

    </div>
</template>

<script>
    export default {
        name: "stateTransition",
        data() {
            return {
                number: 0,
                tweenedNumber: 0
            }
        },
        computed: {
            animatedNumber: function() {
                return this.tweenedNumber.toFixed(0);
            }
        },
        watch: {
            number: function(newValue) {
                this.gsap.to(this.$data, { duration: 0.5, tweenedNumber: newValue });
            }
        }
    }
</script>

<style scoped>

</style>