# badep
具体问题：有个数组，里面有 9 个元素，现在要从里面删除 3 个元素。
要求：被删除的元素，应是**均匀分布**在数组里。
比如，不能删除前 3 个元素，也不能删除最后 3 个；可以删除第 2、5、8 号元素。

但是，另一个问题：还是有个数组，里面有 L 个元素，现在要从里面删除 D 个元素。
……

**BA**lencing **DE**leting **P**roblem -- chapgpt 如是说。
但我在 google 和百度上都没搜索到相关词条。

## 用法
``` bash
npm install badep
```

L 为 8，D 为 3 时：
``` js
import { badep } from 'badep'

console.log(
  badep(8, 3)
) // [2, 5, 7]
```
badep() 的返回值，是被删除元素的下标。
