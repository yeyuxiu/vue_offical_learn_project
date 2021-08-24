<template>
   <div>
       <form method=post enctype=multipart/form-data action="http://127.0.0.1:5000/">
           <input type=file name=file>
           <input type=submit value=Upload>
           <p>只传png</p>
       </form>
   </div>
</template>

<script>
    export default {
        name: 'uploadDownload',

    };
</script>

<style scoped lang="scss">
    @import '@/static/scss/28_uploadDownload.scss';


</style>
