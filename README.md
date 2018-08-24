##### 正则表达式

| 字符 | 描述 |
| :--- | ------------------------------------------------- |
| $    | 匹配输入字符串的结尾位置                          |
| ()   | 标记一个子表达式的开始和结束位置                  |
| {}   | 标记限定符表达式的开始                            |
| \w   | 匹配包括下划线的任何单词字符,等价于“[A-Za-z0-9_]” |
| \d   | 匹配一个数字字符。等价于[0-9] |
| \s   | 匹配任何空白字符，包括空格、制表符、换页符等等。等价于[ \f\n\r\t\v] |
| \D   | 匹配一个非数字字符。等价于[^0-9] |
| \W | 匹配任何非单词字符。等价于[A-Za-z0-9] |
| [] | 字符范围，匹配指定范围内的任意字符 |
| [xyz] | 字符集合。匹配所包含的任意一个字符 |
| [^xyz] | 负值字符集合。匹配未包含的任意字符。 |
| [a-z] | 字符范围。匹配指定范围内的任意字符 |
| . | 匹配除“\n”之外的任何单个字符 |
| * | 匹配前面的子表达式零次或多次 |
| + | 匹配前面的子表达式一次或多次 |
| ? | 贪婪模式则尽可能多的匹配所搜索的字符串 |
| {n} | n是一个非负整数。匹配确定的n次 |
| {n,} | 至少匹配n次 |
| {n,m} | m和n均为非负整数，其中n<=m。最少匹配n次且最多匹配m次 |


##### 例子

|              |                                    |
| ------------ | ---------------------------------- |
| /\d/         | 匹配数字，无限定符                 |
| /\d+/        | 匹配数字，一次或多次               |
| /\d+/g       | 匹配数字，全局                     |
| /[abc]       | 匹配包含a,b,c                      |
| /[a-z]/g     | 匹配包含a-z，全局                  |
| /[^a-z]/g    | 不匹配a-z的字符                    |
| /b/          | 匹配特定一个字符                   |
| /[^a-z0-9]/g | 不匹配a-z和0-9的字符               |
| /a\|2\|o/g   | 匹配多个指定字符                   |
| /<.*>/       | 匹配从 < 到 > 之间的所有内容       |
| /<.*?>/      | 匹配从 < 到第一个 > 之间的所有内容 |
| /<\w+?>/     | 匹配开始的 < >                     |


```
It's important to note that setTimeout(..) doesn't put your callback on the event loop queue. What it does is set up a timer; when the timer expires, the environment places your callback into the event loop, such that some future tick will pick it up and execute it.

It's very common to conflate the terms "async" and "parallel," but they are actually quite different. Remember, async is about the gap between now and later. But parallel is about things being able to occur simultaneously.

JavaScript's single-threading

Concurrency is when two or more "processes" are executing simultaneously over the same period, regardless of whether their individual constituent operations happen in parallel (at the same instant on separate processors or cores) or not. You can think of concurrency then as "process"-level (or task-level) parallelism, as opposed to operation-level parallelism (separate-processor threads).

Whenever there are events to run, the event loop runs until the queue is empty. Each iteration of the event loop is a "tick." User interaction, IO, and timers enqueue events on the event queue.


```

###  Modularization

#### es6
```js
// file a.js
export function a() {}
export function b() {}
// file b.js
export default function() {}

import {a, b} from './a.js'
import XXX from './b.js'
```

####  CommonJS
```js
// a.js
module.exports = {
    a: 1
}
// or
exports.a = 1

// b.js
var module = require('./a.js')
module.a // -> log 1
```

#### AMD
```js
// AMD
define(['./a', './b'], function(a, b) {
    a.do()
    b.do()
})
define(function(require, exports, module) {
    var a = require('./a')  
    a.doSomething()   
    var b = require('./b')
    b.doSomething()
})

```

```
Promise belongs to microtask and setTimeout belongs to macrotask

Microtasks include process.nextTick, promise, Object.observe and MutationObserver

Macrotasks include script, setTimeout, setInterval, setImmediate, I/O and UI rendering

So the correct sequence of an event loop looks like this:
1.Execute synchronous codes, which belongs to macrotask
2.Once call stack is empty, query if any microtasks need to be executed
3.Execute all the microtasks
4.If necessary, render the UI
5.Then start the next round of the Event loop, and execute the asynchronous operations in the macrotask
```