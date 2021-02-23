## API

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| afterVisibleChange | 切换抽屉时动画结束后的回调 | function(visible) | - |  |
| bodyStyle | 可用于设置 Drawer 内容部分的样式 | CSSProperties | - |  |
| className | 对话框外层容器的类名 | string | - |  |
| closable | 是否显示右上角的关闭按钮 | boolean | true |  |
| closeIcon | 自定义关闭图标 | ReactNode | &lt;CloseOutlined /> |  |
| destroyOnClose | 关闭时销毁 Drawer 里的子元素 | boolean | false |  |
| drawerStyle | 用于设置 Drawer 弹出层的样式 | CSSProperties | - |  |
| footer | 抽屉的页脚 | ReactNode | - |  |
| footerStyle | 抽屉页脚部件的样式 | CSSProperties | - |  |
| forceRender | 预渲染 Drawer 内元素 | boolean | false |  |
| getContainer | 指定 Drawer 挂载的 HTML 节点, false 为挂载在当前 dom | HTMLElement \| () => HTMLElement \| Selectors \| false | body |  |
| headerStyle | 用于设置 Drawer 头部的样式 | CSSProperties | - |  |
| height | 高度, 在 `placement` 为 `top` 或 `bottom` 时使用 | string \| number | 256 |  |
| keyboard | 是否支持键盘 esc 关闭 | boolean | true |  |
| mask | 是否展示遮罩 | boolean | true |  |
| maskClosable | 点击蒙层是否允许关闭 | boolean | true |  |
| maskStyle | 遮罩样式 | CSSProperties | {} |  |
| placement | 抽屉的方向 | `top` \| `right` \| `bottom` \| `left` | `right` |  |
| push | 用于设置多层 Drawer 的推动行为 | boolean \| { distance: string \| number } | { distance: 180 } | 4.5.0+ |
| style | 可用于设置 Drawer 最外层容器的样式，和 `drawerStyle` 的区别是作用节点包括 `mask` | CSSProperties | - |  |
| title | 标题 | ReactNode | - |  |
| visible | Drawer 是否可见 | boolean | - |  |
| width | 宽度 | string \| number | 256 |  |
| zIndex | 设置 Drawer 的 `z-index` | number | 1000 |  |
| onClose | 点击遮罩层或右上角叉或取消按钮的回调 | function(e) | - |  |
