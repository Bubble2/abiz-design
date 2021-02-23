## API

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| alt | 图像描述 | string | - | 4.6.0 |
| fallback | 加载失败容错地址 | string | - | 4.6.0 |
| height | 图像高度 | string \| number | - | 4.6.0 |
| placeholder | 加载占位, 为 `true` 时使用默认占位 | ReactNode | - | 4.6.0 |
| preview | 预览参数，为 `false` 时禁用 | boolean \| [previewType](#previewType) | true | 4.6.0 [previewType](#previewType):4.7.0 |
| src | 图片地址 | string | - | 4.6.0 |
| width | 图像宽度 | string \| number | - | 4.6.0 |

### previewType

```js | pure

{
  visible?: boolean;
  onVisibleChange?: (visible, prevVisible) => void;
  getContainer: string | HTMLElement | (() => HTMLElement); // V4.8.0
}
```

其他属性见 [&lt;img>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#Attributes)
