<template>
    <div>
        <input type="checkbox" :checked="checked" @change="$emit('change', $event.target.checked)">
        <p>{{checked}}</p>
    </div>

</template>

<script>
    export default {
        name: "vModel",
        props:{
            checked: Boolean
        },
        model: {
            prop: 'checked',
            event: 'change'
        }
    }
</script>

<style scoped>

</style>