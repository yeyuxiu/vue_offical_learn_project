import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '*',
        name: 'errorOrFalse',
        component: () => import('@/components/testComponent')
    },

    {
        path: '/',
        redirect: {name: 'LifeCycle'}
    },
    {
        path: '/LifeCycle',
        name: 'LifeCycle',
        component: () => import('@/components/1_LifeCycle/LifeCycle')
    },
    {
        path: '/ModuleSyntax',
        name: 'ModuleSyntax',
        component: () => import('@/components/2_ModuleSyntax/ModuleSyntax')
    },
    {
        path: '/ComputedWatch',
        name: 'ComputedWatch',
        component: () => import('@/components/3_ComputedWatch/ComputedWatch')
    },
    {
        path: '/ClassAndStyle',
        name: 'ClassAndStyle',
        component: () => import('@/components/4_ClassAndStyle/ClassAndStyle')
    },
    {
        path: '/ConditionRender',
        name: 'ConditionRender',
        component: () => import('@/components/5_ConditionRender/ConditionRender')
    },
    {
        path: '/ListRender',
        name: 'ListRender',
        component: () => import('@/components/6_ListRender/ListRender')
    },
    {
        path: '/EventManage',
        name: 'EventManage',
        component: () => import('@/components/7_EventManage/EventManage')
    },
    {
        path: '/FormInput',
        name: 'FormInput',
        component: () => import('@/components/8_FormInput/FormInput')
    },
    {
        path: '/ComponentChapter',
        name: 'ComponentChapter',
        component: () => import('@/components/9_Component/ComponentChapter')
    },
    {
        path: '/PropChapter',
        name: 'PropChapter',
        component: () => import('@/components/10_Prop/PropChapter')
    },
    {
        path: '/CustomEvent',
        name: 'CustomEvent',
        component: () => import('@/components/11_CustomEvent/CustomEvent')
    },
    {
        path: '/SlotComponent',
        name: 'SlotComponent',
        component: () => import('@/components/12_Slot/SlotComponent')
    },
    {
        path: '/dynamicAsyncComponent',
        name: 'dynamicAsyncComponent',
        component: () => import('@/components/13_dynamicAsyncComponent/dynamicAsyncComponent')
    },
    {
        path: '/manageBorder',
        name: 'manageBorder',
        component: () => import('@/components/14_manageBorder/manageBorder')
    },
    {
        path: '/ListTransition',
        name: 'ListTransition',
        component: () => import('@/components/15_ListTransition/ListTransition.vue')
    },
    {
        path: '/stateTransition',
        name: 'stateTransition',
        component: () => import('@/components/16_stateTransition/stateTransition')
    },
    {
        path: '/mixin',
        name: 'mixin',
        component: () => import('@/components/17_Mixin/mixin')
    },
    {
        path: '/customInstruct',
        name: 'customInstruct',
        component: () => import('@/components/18_customInstruct/customInstruct')
    },
    {
        path: '/renderFunction',
        name: 'renderFunction',
        component: () => import('@/components/19_renderFunction/renderFunction.vue')
    },
    {
        path: '/plug',
        name: 'plug',
        component: () => import('@/components/20_Plug/plug.vue')
    },
    {
        path: '/filtrator',
        name: 'filtrator',
        component: () => import('@/components/21_filtrator/filtrator')
    },
    // 23 高级路由
    {
        path: '/highRankingRouter',
        name: 'highRankingRouter',
        component: () => import('@/components/23_highRankingRouter/highRankingRouter'),
        children: [
            {
                path: '/highRankingRouter/loginDemo1/:userPwd',
                name: 'loginDemoOne',
                components: {demoOne: () => import('@/components/23_highRankingRouter/1_loginDemo1')},
                props: {demoOne: true},
                meta: {requiresAuth: true},
                // 路由独享守卫
                beforeEnter: (to, from, next) => {
                    if (to.params.userPwd) {
                        console.log(typeof (to.params.userPwd))
                        next();
                    } else next({name: 'errorOrFalse'});
                }
            },
            {
                path: '/highRankingRouter/faileRouter',
                name: 'faileRouter',
                component: () => import('@/components/23_highRankingRouter/faileRouter'),
                beforeEnter: ((to, from, next) => {
                    next(false)
                })
            }
        ]
    },
    {
        path: '/API',
        name: 'API',
        component: () => import('@/components/24_API/API')
    },
    {
      path: '/StoreComponent',
      name: 'StoreComponent',
      component: () => import('@/components/25_StoreComponent/StoreComponent')
    },
    {
        // 26 axios
      path: '/AxiosComponent',
      name: 'AxiosComponent',
      component: () => import('@/components/26_axios/AxiosComponent')
    },
    // 增加一层路由 但凡访问 loginComponent 都直接跳转到 login页面
    {
        path: '/LoginComponent',
        redirect: {name: 'loginComponentLogin'}
    },
    {
      // 27 登陆
      path: '/LoginComponent',
      name: 'LoginComponent',
      component: () => import('@/components/27_LoginComponent/LoginComponent'),
        children: [
            {
                path: '/LoginComponent/resign',
                name: 'loginComponentResign',
                component:() => import('@/components/27_LoginComponent/resign')
            },
            {
                path: '/LoginComponent/login',
                name: 'loginComponentLogin',
                component: () => import('@/components/27_LoginComponent/login')
            },
            {
                path: '/LoginComponent/showMe',
                name: 'LoginComponentShowMe',
                components: {showMe: () => import('@/components/27_LoginComponent/showMe')}
            }
        ]
    },
    //28 上传下载
    {
        path: '/uploadDownload',
        name: 'uploadDownload',
        component: () => import('@/components/28_uploadDownload/uploadDownload')
    },
    {
      path: '/vueLoader',
      name: 'vueLoader',
      component: () => import('@/components/29_vueLoader/vueLoader')
    },
    {
        path: '/responTheory',
        name: 'responTheory',
        component: () => import('@/components/30_responTheory/responTheory')
    },
    {
        path: '/testComponent',
        name: 'testComponent',
        component: () => import('@/components/testComponent')
    },
    {
        path: '/vueRouter',
        name: 'vueRouter',
        component: () => import('@/components/22_vueRouter/vueRouter'),
        children: [
            // router chapter
            {
                path: '/vueRouter/RouterPush/:user',
                name: 'userPush',
                components: {a: () => import('@/components/22_vueRouter/1_dynamicRouter')},
                children: [
                    {
                        path: '/vueRouter/RouterPush/:user/goRouterPlay',
                        name: 'goRouterPlay',
                        components: {a: () => import('@/components/22_vueRouter/2_goRouterPlay')}

                    }
                ]
            },
            {
                path: '/vueRouter/RouterReplace/:user',
                name: 'userReplace',
                components: {b: () => import('@/components/22_vueRouter/2_replaceRouter')}
            },
            {
                path: '/vueRouter/RouterProps/:user',
                name: 'userProps',
                components: {c: () => import("@/components/22_vueRouter/5_propsRouter")},
                props: {c: true}
            }
        ]
    },
]

const router = new VueRouter({
    // mode: 'history',

    base: process.env.BASE_URL,
    routes,
    scrollBehavior(to, from, savedPosition) {
        // 锚点行为
        if (to.hash) {
            return {
                selector: to.hash
            }
        }
        // 浏览器的 history.pushState
        if (savedPosition) {
            return {
                savedPosition,
                behavior: 'smooth'
            };
        } else {
            return {

                // x: 0,
                // y: 0,
                // 平滑滚动
                behavior: 'smooth'
            }
        }
    }
})
router.beforeEach((to, from, next) => {
    console.log(to);
    console.log(from);
    next()
})
export default router
