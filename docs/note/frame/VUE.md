# VUE

## 一、简介

### 1. 什么是 VUE

“渐进式 JavaScript 框架，易学易用，性能出色，适用场景丰富的 Web 前端框架”。  
Vue (发音为 /vjuː/，类似 view) 是一款用于构建用户界面的 JavaScript 框架。它基于标准 HTML、CSS 和 JavaScript 构建，并提供了一套声明式的、组件化的编程模型，帮助你高效地开发用户界面。无论是简单还是复杂的界面，Vue 都可以胜任。

### 2. 官网

- [VUE2 官方文档](https://v2.cn.vuejs.org/)
- [VUE3 官方文档](https://cn.vuejs.org/)

## 二、部分应用

### 1. 组件通信：`glinda`

#### Props与Emit

作用 : 用于父子组件通信 , 父组件通过`props`的方式向子组件传递数据，而通过`emit` 子组件可以向父组件发送自定义事件 ,  setup 语法糖默认不会对外部暴露任何内部声明的属性与方法 , 子组件可以通过 `defineExpose` 向外暴露属性与方法。

```html
<template>
    <el-button @click="open"> Button </el-button>
    <!-- 子组件 -->
    <child
        ref="childRef"
        :data="data"
        @confirm="confirm"
    />
</template>
```

```typescript
// Parent.vue
<script setup lang="ts">
    import child from './child.vue';
    const childRef = ref();

    // 回调: 父组件通过模板 ref 获取到子组件的实例，以此访问子组件暴露的属性与方法;
    function open() {
        childRef.value.open();
    }

    // 监听子组件发出的自定义事件
    const confirm = (childData: any) => {};
</script>
```

```typescript
// Child.vue
<script setup lang="ts">
    import { ref, defineProps, defineEmits, withDefaults, defineExpose } from 'vue';
    const props = withDefaults(
        defineProps<{
            data?: string;
        }>(),
        {
            data: '',
        }
    );
    const emit = defineEmits(['confirm']);

    // 回调: 用于暴露的方法
    async function open() {
        ......
        dialogVisible.value = true;
    }
    // 回调: 子组件向外发送自定义事件
    function confirm() {
        emit('confirm', childData);
    }

    // 子组件向外暴露属性与方法
    defineExpose({
        open,
    });
</script>
```

#### Provide 与 Inject

作用 : 用于父组件向子孙组件传递数据 , `provide`在父组件中返回要传给下级的数据，`inject`在需要使用这个数据的子辈组件或者孙辈等下级组件中注入数据。

```typescript
// Parent.vue
<script setup>
   import { provide } from "vue";
   provide("name", "张三");
</script>
```

```typescript
// Child.vue
<script setup>
   import { inject } from "vue";
   const name = inject("name");
   console.log(name);  // 张三
</script>
```

### 2. 全局事件总线：`hr`

- 安装 mitt

``` shell
npm install mitt
```

- 在工具文件夹中单独创建 `event-bus.ts` 文件

``` typescript
import mitt from 'mitt';
const emitter = mitt();
export default emitter;
```

- 在需要通信的文件中分别引入 `@/util/event-bus.ts`

``` typescript
import emitter from '@/util/event-bus.ts'

// A组件发送自定义事件, params是携带的参数信息;
emitter.emit('childFunction', params);

// B组件监听自定义事件, msg是接收到的参数信息;
emitter.on('childFunction', msg => {
    ......
});
```

### 3. 状态管理模式：`vuex`

- 路径 : `store/index.ts`

```typescript
import { createStore } from "vuex"
export default createStore({
   state:{ 
       permissionList: [],
   },
   getters:{},
   mutations:{
       SET_STATE(state, params) {
           state[params.name] = params.value;
       },
   },
   actions:{}
})
```

- 路径 : `main.ts`

```typescript
import { createApp } from "vue"
import App from "./App.vue"
import store from "./store"
createApp(App).use(store).mount("#app")
```

- 路径 : `Page.vue`

```typescript
// 定义store
<script setup>
   import { useStore } from "vuex";
   const store = useStore();
   // 存值
   store.commit('SET_STATE', { name: 'permissionList', value: pcPerms });
   // 取值: 响应式
   let permissionList = store.state.permissionList;
</script>
```

### 4. 监听：`watch`

```typescript
// 监听单个数据源
watch(
    () => props.value,
    (newValue, oldValue) => {
        console.log(newValue);
        console.log(oldValue);
    },
    { 
        deep: true,         // 深度监听
        immediate: true,    // 立即监听
    }, 
);
```

### 5. 路由跳转页面：`yj`

- 路由配置路径 : `src/router/index.ts`

```typescript
{
    path: '/quality-management/specification-set',
    name: 'specification-set',
    redirect: '/quality-management/specification-set/list',
    component: () =>
        import('@/views/H-quality-management/B-specification-set/index.vue'),
    meta: {
        icon: 'el-icon-set-up',
        title: '控制规范设置',
    },
    children: [
        {
            path: '/quality-management/specification-set/list',
            name: 'specification-set-list',
            props: true,
            component: () =>
                import('@/views/H-quality-management/B-specification-set/list.vue'),
            meta: {
                icon: 'el-icon-finished',
                title: '控制规范设置列表',
                hidden: true,
            },
        },
        {
            path: '/quality-management/specification-set/detail/:id',
            name: 'specification-set-detail',
            props: true,
            component: () =>
                import('@/views/H-quality-management/B-specification-set/detail.vue'),
            meta: {
                icon: 'el-icon-finished',
                title: '控制规范设置详情',
                hidden: true,
            },
        },
    ],
},
```

- 文件夹路径 : `@/views/H-quality-management/B-specification-set`

   其中包含 `index.vue`  `list.vue`  `detail.vue` 

```html
<!-- index.vue -->
<template>
    <router-view></router-view>
</template>
```

- 从 `list.vue` 跳转到  `detail.vue`

```typescript
// 跳转页面回调,并携带ID作为参数传递
function openDetail(row: Record<string, unknown>): void {
    router.push(`/quality-management/specification-setting/detail/${row.id}`);
}
```
