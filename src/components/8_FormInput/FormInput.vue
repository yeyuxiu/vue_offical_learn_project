<template>
    <div>
<!--        -->
        <h3b>1. 基础用法</h3b>
        <h5b>html标签拥有 value selected checked 属性 (只是告诉你 value checked selected怎么用)</h5b>
        <p>value : input textarea select</p>
        <el-input type="text"
                value="123"
        ></el-input>

        <p>checked: input</p>
        <el-checkbox checked></el-checkbox>

        <p>selected: select</p>

        <select name="" id="">
            <option value="">volvo</option>
            <option value="" selected>selected</option>
        </select>
        <h5b>v-model的等价实例</h5b>
<!--
        <input v-model="searchText">
        等价于
        <input
                v-bind:value="searchText"
                v-on:input="searchText = $event.target.value"
        >
        -->

        <h5b>用法</h5b>

        <el-input type="textarea" cols="10" rows="1" placeholder="请输入内容" v-model="textareaMsg"></el-input>
        <p>你输入了:{{ textareaMsg }}</p>

        <h3b>2. 复选框</h3b>
<!--        单选框-->
        <h5b>单选框</h5b>
        <el-radio v-model="singleCheck" id="checkbox" value="true的话在标签中设置了value值"></el-radio>
        <!--    如果设置了value 只有当singleCheck为数组的时候才能显示 value的值   单选框就不会 -->
        <label for="checkbox">{{singleCheck}}</label>
<!--        复选框-->
        <h5b>复选框</h5b>
        <el-checkbox-group v-model="checkedNames">
            <el-checkbox label="Jack"></el-checkbox>
            <el-checkbox label="Tom"></el-checkbox>
            <el-checkbox label="Edison" disabled></el-checkbox>
            <el-checkbox label="Puma"></el-checkbox>
        </el-checkbox-group>
        <p>{{checkedNames}}</p>
<!--        单选按钮 -->
        <h5b>单选按钮</h5b>
        <el-radio v-model="picked" label="One">One</el-radio>
        <el-radio v-model="picked" label="Two">Two</el-radio>
        <br>
        <span>Picked: {{ picked }}</span>
<!--        选择框-->
        <h5b>选择框</h5b>
        <el-select v-model="selected" placeholder="请选择">
            <el-option value="A">A</el-option>
            <el-option value="B">B</el-option>
        </el-select>
        <p>选择:{{selected}}</p>
        <br>
        <select v-model="mulSelected" multiple>
            <option v-for="(option, index) in options"
                :key="index"
                    :value="option.value"
            >{{ option.text }}</option>
        </select>
        <p>选择:{{mulSelected}}</p>
        <h5b>值绑定</h5b>
        <input type="radio" v-model="radioModel" value="v-model的值会被本身的value属性覆盖">
        <p>{{radioModel}}</p>
<!--        -->
        <h3b>3. 修饰符</h3b>
        <h5b>.lazy</h5b>
        <p>在默认情况下，v-model 在每次 input 事件触发后将输入框的值与数据进行同步 (除了上述输入法组合文字时)。你可以添加 lazy 修饰符，从而转为在 change 事件_之后_进行同步</p>
        <input  v-model.lazy="lazyInput" @change="lazyChange($event)">
        <h5b>.number</h5b>
        <p>自动转为数字类型</p>
        <h5b>.trim</h5b>
        <el-input v-model.trim="msg" placeholder="请输入内容"></el-input>
        <p>{{msg}}</p>
    </div>
</template>

<script>
    export default {
        name: "HFormInput",
        data() {
            return {
                textareaMsg: '',
                singleCheck: false,
                checkedNames: [],
                picked: '',
                selected: 'A',
                mulSelected: [],
                options: [
                    { text: 'one', value: 'A'},
                    { text: 'two', value: 'B'}
                ],
                radioModel: 'a',
                msg: 'as',
                lazyInput: 0
            }
        },
        methods: {
            lazyChange(e) {
                console.log('lazy开启的情况下 v-model是在我运行完后更新的')
                console.log(e.target.value)
                this.lazyInput = this.lazyInput + '1'

            }
        }
    }
</script>

<style scoped lang="scss">
    @import "@/static/scss/8_FormInput.scss";
</style>