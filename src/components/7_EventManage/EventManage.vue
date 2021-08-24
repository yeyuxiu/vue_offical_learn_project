<template>
    <div>
<!--        -->
        <h3b>1. v-on</h3b>
        <el-button type="primary"  @click="count++">{{count}}</el-button>
<!--        -->
        <h3b>2. 内联处理器中的方法</h3b>
        <el-button type="primary" @click="sayWhat('hh')">{{addStr}}</el-button>
<!--        -->
        <h3b>3. $event特殊变量</h3b>
        <el-button type="danger"  @click="warn('传入了$event', $event)">Warn</el-button>
<!--        -->
        <h3b>4. 事件修饰符</h3b>
<!--        stop-->
        <h5b>event.stop</h5b>
        <p>实例阻止冒泡行为 ( 点击下面盒子 观察Console )</p>
        <div class="set-height-stop">

            <div class="event-stop-box l-stop">
                <div @click="Couter">
                    <div @click="Cinter"></div>
                </div>
            </div>
            <div class="event-stop-box r-stop">
                <div @click="Couter">
                    <div @click.stop="Cinter"></div>
                </div>
            </div>
            .stop
        </div>
<!--        prevent-->
        <h5b>event.prevent</h5b>
        <p>阻止默认事件</p>
        <div class="event-prevent-box">
            <a href="https://www.baidu.com" @click="Chref" >跳转到百度</a>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span>同样执行但不会跳转到百度:</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="https://www.baidu.com" @click.prevent="ChrefPrevent" >跳转到百度</a>

        </div>
<!--        capture-->
        <h5b>event.capture</h5b>
        <p>拥有捕获行为 ( 事件默认是只触发冒泡不触发捕获 )</p>
        <div class="set-height-stop">

            <div class="event-stop-box l-stop">
                <div @click="Couter">
                    <div @click="Cinter"></div>
                </div>
            </div>
            <div class="event-stop-box r-stop">
                <div @click.capture="Couter">
                    <div @click="Cinter"></div>
                </div>
            </div>
            .capture
        </div>
<!--        self-->
        <h5b>event.self</h5b>
        <p>当前元素自身触发处理函数时才会触发函数 ( 根据event.target判断是不是自身触发的 )</p>
        <p>点击下面的里层会触发冒泡 但因为event.target检测到不是自身点击触发的所以就不触发了 只触发了inter</p>
        <div class="set-height-stop">

            <div class="event-stop-box l-stop">
                <div @click="Couter">
                    <div @click="Cinter"></div>
                </div>
            </div>
            <div class="event-stop-box r-stop">
                <div @click.self="selfOuter($event)">
                    <div @click="Cinter"></div>
                </div>
            </div>
            .self
        </div>

        <h5b>event.once</h5b>
        <p>只能触发一次 通常会在支付按钮中</p>

        <el-button type="primary" @click.once="OnceSubmit" plain>提交</el-button>
        <h5b>event.passive</h5b>
        <p>不拦截默认事件</p>
        <p>告诉浏览器 不用去查询程序有没有阻止默认事件</p>

        <el-button type="primary">提交</el-button>
        <h5b>小知识点</h5b>
        <p>使用修饰符时，顺序很重要；相应的代码会以同样的顺序产生。因此，用 v-on:click.prevent.self 会阻止所有的点击，而 v-on:click.self.prevent 只会阻止对元素自身的点击。</p>
        <p>不要把 .passive 和 .prevent 一起使用，因为 .prevent 将会被忽略，同时浏览器可能会向你展示一个警告。请记住，.passive 会告诉浏览器你不想阻止事件的默认行为。</p>

<!--        -->
        <h3b>5. 按键修饰符</h3b>
        <p style="color: red;font-size: 20px">没怎么细看</p>
        <!-- 只有在 `key` 是 `Enter` 时调用 `vm.submit()` -->
        <el-input v-on:keyup.enter="submit"></el-input>
        <h5b>按键码</h5b>
        <p>.enter .tab .delete .esc .space .up .down .left .right</p>
<!--        -->
        <h3b>6. 系统修饰键</h3b>
        <p>.ctrl .alt .shift .meta</p>
        <!-- 即使 Alt 或 Shift 被一同按下时也会触发 -->
        <p>Alt 和 Shift 被一同按下时也会触发</p>
        <el-button v-on:click.alt.shift="OnTest">A</el-button>

        <!-- 有且只有 Ctrl 被按下的时候才触发 -->
        <p>有且只有 Ctrl 被按下的时候才触发</p>
        <el-button v-on:click.ctrl.exact="OnTest">A</el-button>

        <!-- 没有任何系统修饰符被按下的时候才触发 -->
        <p>没有任何系统修饰符被按下的时候才触发</p>
        <el-button v-on:click.exact="OnTest">A</el-button>

    </div>
</template>

<script>
    export default {
        name: "EventManage",
        data () {
            return {
                count: 0,
                addStr: '',

            }
        },
        methods: {
            // 2. 内联处理器中的方法
            sayWhat(str) {
                this.addStr += str
            },
            // 3. $event特殊变量
            warn (message, event) {
                if (event) {
                    // 阻止事件默认动作
                    event.preventDefault();
                }
                alert(message)
            },
            // 4. stop修饰符 // 5. capture
            Couter () {
                alert('这个是    outer')
            },
            Cinter () {
                alert('这个是    inter')
            },
            // 6. prevent
            Chref () {
                alert('这是没有prevent')
            },
            ChrefPrevent () {
                alert('这是有prevent')
            },
            // 7. self
            selfOuter (event) {
              console.log(event)
                alert('这是     outer')
            },
            // 8. once
            OnceSubmit () {
                setTimeout(() => {
                    alert('提交成功')
                }, 1500)
            },
            // * test
            OnTest() {
                alert('成功执行')
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '@/static/scss/7_EventManage.scss'

</style>