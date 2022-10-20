# Element+

## 一、Element+

### 1. upLoad上传组件 (Element+)

```html
<!-- ① HTML代码块: action绑定的是上传地址, file-list绑定的是上传的图片列表;-->
<el-upload
  :action="upLoadURL"
  multiple
  :limit="3"
  :file-list="fileListTrue"
  list-type="picture"
  :before-upload="beforeUpload"
  :on-error="uploadFileError"
  :on-success="uploadFileSuccess"
  :on-exceed="overNumber"
>
    <el-button size="small" type="success" :loading="upLoadLoading">点击上传图片</el-button>
</el-upload>
```

```typescript
<script setup lang="ts">
    import { ref } from 'vue';
    const upLoadURL = ref<string>((import.meta.env.VITE_API_URL + '/api/upload') as string);
    const fileListTrue = ref<any>([]);                      // 上传的所有图片组成的列表
    const upLoadList = ref<Record<string, any>[]>([]);      // 传递给后台的数据列表: 只包含URL
    const upLoadLoading = ref<boolean>(false);              // 上传加载Loading是否显示

    /**
     ******************* 上传回调 ******************** 
     */
    // 上传之前回调
    function beforeUpload(file: Record<string, any>) {
        upLoadLoading.value = true;
    }
    // 上传错误回调
    function uploadFileError(file: Record<string, any>) {
        fileListTrue.value = [];
        upLoadLoading.value = false;
    }
    // 上传成功回调
    async function uploadFileSuccess(response: any, file: any, fileList: any) {
        if (response.code === 120) {
            // 保存显示文档的列表
            fileListTrue.value = fileList;
            // 保存上传文档的列表
            upLoadList.value.push(response.data);
            upLoadLoading.value = false;
            ElMessage.success('上传成功');
        } else {
            upLoadLoading.value = false;
            fileListTrue.value = [];
            upLoadList.value = [];
        }
    }
    // 超出上传数量限制回调
    function overNumber() {
        ElMessage.warning('最多上传三张图片');
    }
</script>
```

### 2. 动态menu默认高亮显示问题 `nextTick`

```html
<template>
    <div>
        <el-menu
            mode="horizontal"
            class="el-menu-demo"
            :default-active="tagName"
            @select="changePageExample"
        >
            <el-menu-item v-for="(item, index) in menuList" :key="index" :index="item.value">
                {{ item.label }}
            </el-menu-item>
        </el-menu>
    </div>
</template>
```

```typescript
<script setup lang="ts">
    import { ref, onMounted, nextTick } from 'vue';
    import MenuListAPI from '@/api/menu-list';

    /**
     ******************* menu ******************
    */
    // 当前活跃的 menu
    const tagName = ref<string>('');
    // menuList => 下拉列表
    const menuList = ref<any>([]);
    // 切换菜单的回调
    function changePageExample(data: string) {
        tagName.value = data;
    }

    /**
     ***************** 页面渲染 *****************
     */
    onMounted(async () => {
        // 动态获取下拉列表信息
        menuList.value = await MenuListAPI.getStorageList();
        // 赋值下拉列表的首个值的ID,默认高亮显示
        nextTick(() => {
            tagName.value = menuList.value[0].value;
        });
    });
</script>
```

### 3. 下拉框多选存在校验问题 `设置默认值为空数组即可 defalut:[]`

## 二、封装框架用法

### 1. 在表格中根据行数据返回的状态渲染 TAG

```typescript
① conf.ts 
import { XFormItem } from '@/interface/form';
import { XTableColumn } from '@/interface/table';
import MenuListAPI from '@/api/menu-list';
import { ElTag } from 'element-plus';
import { h, Ref } from 'vue';

// 表格列
export const columnList: XTableColumn[] = [
    {
        prop: 'status',
        label: '审核状态',
        formatter: (cellValue: Record<string, any>) => {
            return h(
                ElTag,
                {
                    type:
                        cellValue.status === 1
                            ? 'warning'
                            : cellValue.status === 2
                            ? 'success'
                            : cellValue.status === 3
                            ? 'danger'
                            : 'info',
                },
                cellValue.status === 1
                    ? '待审核'
                    : cellValue.status === 2
                    ? '审核成功'
                    : cellValue.status === 3
                    ? '审核驳回'
            );
        },
    },
];
```

### 2. 下拉框联动

- 下拉项自动生成另一输入框值

```typescript
① conf.ts 
import { Ref } from 'vue';
import { XFormItem, XFormValue, XSelectForm } from '@/interface/form';
import { XTableColumn } from '@/interface/table';
import MenuListAPI from '@/api/menu-list';
import RequestAPI from '@/api/F-simple-storage/B-output-storage-record/index';
// 新增编辑表格列
export const addAndEditFormList: XFormItem[] = [
    {
        prop: 'id',
        label: 'id',
        type: 'input',
        hidden: true,
    },
    {
        prop: 'packageModelId',
        label: '包装物名称',
        type: 'select',
        api: () => MenuListAPI.getPackageModelNameList(),
        elProps: {
            filterable: true,
            placeholder: '请选择包装物名称',
        },
        rule: [
            {
                required: true,
                message: '包装物名称不能为空',
            },
        ],
        change: async (
            value: any,
            selectForm: XSelectForm,
            form: Ref<XFormValue>
        ): Promise<boolean> => {
            if (!value) {
                form.value.volume = '';
                return false;
            }
            const res = RequestAPI.detail({ id: value });
            res.then(async (result: any) => {
                if (result) {
                    form.value.volume = result.volume;
                } else {
                    form.value.volume = '';
                }
            });
            return true;
        },
    },
    {
        prop: 'volume',
        label: '容积 (L)',
        type: 'input',
        elProps: {
            placeholder: '自动生成',
            disabled: true,
        },
        rule: [
            {
                required: true,
                message: '容积不能为空',
            },
        ],
    }
];
```

- 下拉项自动生成另一下拉选择框选项

```typescript
import { Ref } from 'vue';
import { XFormItem, XFormValue, XSelectForm } from '@/interface/form';
import { XTableColumn } from '@/interface/table';
import MenuListAPI from '@/api/menu-list';
import RequestAPI from '@/api/F-simple-storage/B-output-storage-record/index';

// 条件查询列
export const addQueryList: XFormItem[] = [
    {
        prop: 'id',
        label: '仓库号',
        type: 'select',
        api: MenuListAPI.getStorageList,
        elProps: {
            filterable: true,
            placeholder: '请选择仓库号',
        },
        change: async (
            value: any,
            selectForm: XSelectForm,
            form: Ref<XFormValue>
        ): Promise<boolean> => {
            if (!value) {
                form.value.unitId = '';
                selectForm.unitId.options = [];
                return false;
            }
            const res = RequestAPI.getUnitList({
                type: 67,
                field: 'number',
                queryCriteria: `warehouse_model_id='${value}'`,
            });
            res.then(async (result: any) => {
                if (result) {
                    form.value.unitId = '';
                    selectForm.unitId.options = result;
                } else {
                    form.value.unitId = '';
                    selectForm.unitId.options = [];
                }
            });
            return true;
        },
    },
    {
        prop: 'unitId',
        label: '单元号',
        type: 'select',
        options: [],
        elProps: {
            filterable: true,
            placeholder: '请选择单元号',
        },
    },
];
```

### 3. Keep-alive 跳转路由缓存页面 `vue3写法`

- 路径 : `src/layout/component/main.vue`  使用 Keep-alive 缓存一级路由 (暂时存在问题)

```html
<!-- cachePageList: 白名单列表-->
<template>
    <el-main class="layout-main">
        <el-scrollbar>
            <div class="layout-main__content">
                <router-view v-slot="{ Component }">
                    <transition name="fade-slide" mode="out-in">
                        <!-- 缓存 -->
                        <keep-alive :include="cachePageList">
                            <component :is="Component" :key="componentKey"></component>
                        </keep-alive>
                    </transition>
                </router-view>
            </div>
        </el-scrollbar>
    </el-main>
</template>
```

- 路径 : `src/store /index.ts`  添加需要缓存的一级路由的组件名

```typescript
/**
 * ...基础Store
 */
export const store = createStore<State>({
    state: {
        cachePageList: [
            'Demo',
            'Home',
            // 采购管理页面NAME (router中对应的 meta-name 保持相同)
            'PurchasingManagement',
        ],
        collapse: false,
    },
    //......
});
```

- 路径 : `src/types/route-meta.d.ts`  补充`RouteMeta`接口定义

```typescript
import 'vue-router';
declare module 'vue-router' {
    interface RouteMeta {
        // ...是否缓存
        isKeepAlive?: boolean;
        // component key...
        componentKey?: string;
    }
}
```

- 路径 : `src/router/index.ts`  
在需要缓存的一二级路由的`meta`中添加 `isKeepAlive:true` 与 `componentKey:PurchasingManagement`

```typescript
{
    path: '/purchasing-management',
    name: 'purchasing-management',
    component: () => import('@/views/purchasing-management/index.vue'),
    meta: {
        icon: 'el-icon-shopping-cart-2',
        title: '采购管理',
        roles: [...],
        isKeepAlive: true,
        componentKey: 'PurchasingManagement',
    },
    children: [
        {
            path: '/purchasing-management/purchase-details',
            name: 'purchase-details',
            component: () =>
                import('@/views/purchasing-management/purchase-details/index.vue'),
            meta: {
                icon: 'el-icon-s-order',
                title: '采购明细',
                roles: ['finance:purchase:select'],
                isKeepAlive: true,
                componentKey: 'PurchasingManagement',
            },
        },
    ],
},
```

- 路径 : `src/views/purchasing-management/index.vue`  使用 Keep-alive 缓存当前一级路由下的二级路由

```html
<!-- 亦可使用include动态绑定需要缓存的二级路由,不使用则默认缓存当前一级路由下所有的二级路由 -->
<template>
    <router-view v-slot="{ Component }">
        <keep-alive>
            <component :is="Component"></component>
        </keep-alive>
    </router-view>
</template>

<!--定义当前组件的名称,需要与对应路由的name保持相同-->
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'PurchasingManagement',
});
</script>
```
