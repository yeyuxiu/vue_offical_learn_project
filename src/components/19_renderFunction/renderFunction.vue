<template>
    <div>
        <h3b>1. 基础</h3b>
        <h5b>有时候真的需要JS的完全编程能力 这时就可以用渲染函数</h5b>
        <p>render 函数 跟 template 一样都是创建 html 模板的，但是有些场景中用 template 实现起来代码冗长繁琐而且有大量重复，这时候就可以用 render 函数。</p>

        <h3b>2. render函数讲解</h3b>
            <p>createElement 是 render 函数 的参数，它本身也是个函数，并且有三个参数。</p>
        <ul>
            <li>createElement 函数的返回值是 VNode（即：虚拟节点）。</li>
            <li>createElement 函数的参数（三个）
                <ul style="margin-left: 20px">
                    <li>一个 HTML 标签字符串，组件选项对象，或者解析上述任何一种的一个 async 异步函数。类型：{String | Object | Function}。必需。</li>
                    <li>一个包含模板相关属性的数据对象你可以在 template 中使用这些特性。类型：{Object}。可选。</li>
                    <li>子虚拟节点 (VNodes)，由 createElement() 构建而成，也可以使用字符串来生成“文本虚拟节点”。类型：{String | Array}。可选。</li>
                </ul>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "renderFunction",

        render: function (createElement) {
            let _this = this['$options'].parent	// 我这个是在 .vue 文件的 components 中写的，这样写才能访问this
            let _header = _this.$slots.header   	// $slots: vue中所有分发插槽，不具名的都在default里

            /**
             * createElement 本身也是一个函数，它有三个参数
             * 返回值: VNode，即虚拟节点
             * 1. 一个 HTML 标签字符串，组件选项对象，或者解析上述任何一种的一个 async 异步函数。必需参数。{String | Object | Function} - 就是你要渲染的最外层标签
             * 2. 一个包含模板相关属性的数据对象你可以在 template 中使用这些特性。可选参数。{Object} - 1中的标签的属性
             * 3. 子虚拟节点 (VNodes)，由 `createElement()` 构建而成，也可以使用字符串来生成“文本虚拟节点”。可选参数。{String | Array} - 1的子节点，可以用 createElement() 创建，文本节点直接写就可以
             */
            return createElement(
                // 1. 要渲染的标签名称：第一个参数【必需】
                'div',
                // 2. 1中渲染的标签的属性，详情查看文档：第二个参数【可选】
                {
                    style: {
                        color: '#333',
                        border: '1px solid #ccc'
                    }
                },
                // 3. 1中渲染的标签的子元素数组：第三个参数【可选】
                [
                    'text',   // 文本节点直接写就可以
                    _this.$slots.default,  // 所有不具名插槽，是个数组
                    createElement('div', _header)   // createElement()创建的VNodes
                ]
            )
        },



    }
</script>

<style scoped lang="scss">
    @import "@/static/scss/19_renderFunction.scss";
</style>