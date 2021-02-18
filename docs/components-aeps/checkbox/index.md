---
title: Checkbox 多选框
order: 3
nav:
  order: 2
  title: 大优采组件
group:
  path: /components-aeps/components
  order: 2
  title: 组件
---

# Checkbox 多选框

多选框。

## 何时使用

- 在一组可选项中进行多项选择时；
- 单独使用可以表示两种状态之间的切换，和 `switch` 类似。区别在于切换 `switch` 会直接触发状态改变，而 `checkbox` 一般用于状态标记，需要和提交操作配合。

## 代码演示

<Row gutter=8>
<Col span=12>
  <!-- <embed src="@abiz-rc-aeps/checkbox/demo/index.md"></embed> -->
  
</Col> 
<Col span=12>
  
</Col> 
</Row>

## API

### 属性

#### Checkbox

| 参数           | 说明                                    | 类型              | 默认值 | 版本 |
| -------------- | --------------------------------------- | ----------------- | ------ | ---- |
| autoFocus      | 自动获取焦点                            | boolean           | false  |      |
| checked        | 指定当前是否选中                        | boolean           | false  |      |
| defaultChecked | 初始是否选中                            | boolean           | false  |      |
| disabled       | 失效状态                                | boolean           | false  |      |
| indeterminate  | 设置 indeterminate 状态，只负责样式控制 | boolean           | false  |      |
| onChange       | 变化时回调函数                          | function(e:Event) | -      |      |

#### Checkbox Group

| 参数         | 说明                                                         | 类型                   | 默认值 | 版本 |
| ------------ | ------------------------------------------------------------ | ---------------------- | ------ | ---- |
| defaultValue | 默认选中的选项                                               | string\[]              | \[]    |      |
| disabled     | 整组失效                                                     | boolean                | false  |      |
| name         | CheckboxGroup 下所有 `input[type="checkbox"]` 的 `name` 属性 | string                 | -      |      |
| options      | 指定可选项                                                   | string\[] \| Option\[] | \[]    |      |
| value        | 指定选中的选项                                               | string\[]              | \[]    |      |
| onChange     | 变化时回调函数                                               | function(checkedValue) | -      |      |

##### Option

```typescript
interface Option {
  label: string;
  value: string;
  disabled?: boolean;
}
```

### 方法

#### Checkbox

| 名称    | 描述     | 版本 |
| ------- | -------- | ---- |
| blur()  | 移除焦点 |      |
| focus() | 获取焦点 |      |
