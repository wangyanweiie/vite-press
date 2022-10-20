# uni-app

## 一、简介

### 1. 什么是 uni-app

uni-app 是一个使用 Vue.js (opens new window)开发所有前端应用的框架，开发者编写一套代码，可发布到 IOS、Android、Web（响应式）、以及各种小程序（微信/支付宝/百度/头条/飞书/QQ/快手/钉钉/淘宝）、快应用等多个平台。

### 2. 优点

- 开发者/案例数量更多
- 平台能力不受限
- 性能体验优秀
- 周边生态丰富
- 学习成本低
- 开发成本低

### 3. 官网

- [官网](https://uniapp.dcloud.net.cn/)

## 二、部分应用

### 1. 常用方法

#### 返回上一页面并调用方法

```js
returnLastPage() {
    setTimeout(() => {
        // 获取当前页
        let pages = getCurrentPages();
        // 获取上一页 (上上页: length-3)
        let beforePage = pages[pages.length - 2];
        // 返回上一页
        uni.navigateBack({
            // 返回上一页 (上上页: 2)
            delta: 1,
            // 返回成功调用上一页的方法
            success: function() {
                beforePage.$vm.resetData();
            }
        });
    }, 2000)
},
```

#### 返回上一页面并传递参数

```js
// 当前页
uni.$emit('selectData',data)
uni.navigateBack({ delta: 1 })
// 上一页
onLoad(){
    let _this = this
    uni.$on('selectData', function(data) {
        if(data){
            _this.form.addressName = data.area
        }
    })
}
```

#### 下拉框与日期选择框复用

```html
<u-form :model="form" ref="uForm" label-width="250rpx">
    <u-form-item label="操作人" prop="operatorUser" required>
        <u-input v-model="form.operatorUserLabel" placeholder="请选择" type="select" @click="select('operatorUser')"/>
    </u-form-item>
    <u-form-item :rightIconStyle="{color: '#888', fontSize: '40rpx'}" right-icon="calendar" label="生产日期" prop="manufactureDate" required>
        <u-input v-model="form.manufactureDate" disabled placeholder="请选择" @click="picker('manufactureDate')" />
    </u-form-item>
</u-form>
<!-- 下拉与日期框-->
<u-select v-model="display.selectShow" mode="single-column" :list="selectList" @confirm="selectConfirm" />
<u-picker v-model="display.pickerShow" mode="time" :params="params" @confirm="pickerConfirm" />
```

```javascript
export default {
    data() {
        return {
            form: {
                manufactureDate: '',    // 生产日期
                operatorUser: '',       // 操作人ID
                operatorUserLabel: '',  // 操作人名称
            },
            // 日期选择配置
            params: {
                year: true,
                month: true,
                day: true,
                hour: false,
                minute: false,
                second: false
            },
            // 当前需要显示的下拉列表
            selectList: [],
            // 用于保存所有下拉列表
            resource: {
                operatorUserList: [],
            },
            // 操作字段名
            fieldName: null,
            // model框是否显示
            display: {
                selectShow: false,
                pickerShow: false,
            },
        }
    },
    async onReady() {
        // 保存操作人下拉列表
        const { data: operatorUserList } = await HTTP.getUserList();
        this.resource.operatorUserList = operatorUserList;
    },
    methods: {
        /**
         * 日期选择回调
         */
        picker(fieldName) {
            this.fieldName = fieldName;
            this.display.pickerShow = true;
        },
        pickerConfirm({ year, month, day, hour, minute, second}) {
            this.form[this.fieldName] = year + '-' + month + '-' + day;
        },

        /**
         * 下拉选择回调
         */
        select(fieldName) {
            this.fieldName = fieldName;
            this.selectList = this.resource[fieldName + 'List'];
            this.display.selectShow = true;
        },
        selectConfirm(e) {
            e.map((val) => {
                this.form[this.fieldName] = val.value;
                this.form[this.fieldName + 'Label'] = val.label;
            });
        },

        /**
         * 在表单生成下拉字段对应的label,用于保存后反显渲染 (后端不保存Label字段时)
         * 调用: this.fieldNameTranslate('airMaterialCode', this.form);
         */
        fieldNameTranslate(fieldName, sourceData) {
            this.resource[fieldName + 'List'].forEach(item => {
                if(item.value === sourceData[fieldName]) {
                    sourceData[fieldName + 'Label'] = item.label;
                }
            })
        },
    }
}
```
