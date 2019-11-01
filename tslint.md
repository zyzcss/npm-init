# tslint规则解释
> 需要禁用某条规则时，使用 /* tslint:disable:disablerule */


## 规则解释
```
// 禁止console语句
"no-console": true,
```

```
// 对象必须排序 - 没必要，禁用,
"object-literal-sort-keys": false,
```

```
// 禁止any类型 - 没必要，禁用
"no-any": false,
```

```
// 空格
"indent": [
    true,
    "spaces",
    2
],
```

```
// 禁止出现空的interface定义
"no-empty-interface": true,'
```

```
// 禁止对函数参数重新赋值
"no-parameter-reassignment": true,
```

```
// 禁止使用var声明变量
"no-var-keyword": true,
```

```
// 禁止重复的引入
"no-duplicate-imports": true,
```

```
// 禁止出现空代码块
"no-empty": true,

<!-- 注意 -->
const func = () {
    <!-- 如果此处有注释内容，不会报错 -->
}
```

```
// 禁止在非模板字符串中出现 ${}
"no-invalid-template-strings": true,
```

```
// 禁止在类外使用this，特殊情况使用以下注释禁用规则
/* tslint:disable:no-invalid-this */
"no-invalid-this": true,
```

```
// 禁止数组中连续的逗号，如[ , , , , 2, 1]
"no-sparse-arrays": true,
```

```
// switch的case必须return或者break
"no-switch-case-fall-through": true,
```

```
// 类型定义的冒号前面不能有空格，后面必须有一个空格 
// 如 const num: number = 5; 正确
// const num : number = 5; 错误
// const func = (x: number, y: string): void => {}
"typedef-whitespace": [
    true,
    {
        "call-signature": "nospace",
        "index-signature": "nospace",
        "parameter": "nospace",
        "property-declaration": "nospace",
        "variable-declaration": "nospace"
    },
    {
        "call-signature": "onespace",
        "index-signature": "onespace",
        "parameter": "onespace",
        "property-declaration": "onespace",
        "variable-declaration": "onespace"
    }
],
```

```
// if 后面必须有 {，除非是单行 if
"curly": [
    true,
    "ignore-same-line"
],
```

```
// 禁止使用 arguments.callee
"no-arg": true,
```

```
// 禁止在分支条件判断中有赋值操作
"no-conditional-assignment": true,
<!-- 错误 -->
<!-- if (a = 1) {}  -->
```

```
// 禁止使用 new 来生成 String, Number 或 Boolean
"no-construct": true,

<!-- 正确 -->
const num: number = 5;

<!-- 错误 -->
const num = new Number(5);
```

```
// 禁止 super 在一个构造函数中出现两次
"no-duplicate-super": true,
```

```
// 禁止在 switch 语句中出现重复测试表达式的 case
"no-duplicate-switch-case": true,
```

```
// 禁止出现重复的变量定义或函数参数名
"no-duplicate-variable": [
    true,
    "check-parameters"
],
```

```
// 禁止 throw 字符串，必须 throw 一个 Error 对象
// throw new Error("...")
"no-string-throw": true,
```

```
// 禁止无用的表达式
"no-unused-expression": true,
```

```
// 使用 { ...foo, bar: 1 } 代替 Object.assign({}, foo, { bar: 1 })
"prefer-object-spread": true,
```

```
// 必须使用Number.isNaN(foo)而不是foo === NaN或isNan()，参考[Number.isNaN()与isNaN()的区别](https://juejin.im/post/59f7c5f551882529452fba6b)
"use-isnan": true,
```

```
// 申明后不再被修改的变量必须使用 const 来申明
"prefer-const": true,
```

```
// 限制对象、数组、解构赋值等的最后一项末尾是否需要逗号
"trailing-comma": [
    true,
    {
        "multiline": "always",
        "singleline": "never"
    }
],

<!-- 正确 -->
const { a } = obj;
const {
    a,
    b,
} = obj;

<!-- 错误 -->
const { a, } = obj;
const { 
    a,
    b
} = obj;
```

```
// 函数名前必须有空格
"space-before-function-paren": [
    true,
    "asyncArrow"
],
```

```
// 禁止使用const module = require("module")的形式。而是使用ES6的导入(import ... from '...')或import foo = require('foo')导入。
"no-var-requires": true,
```

```
// 箭头函数的参数必须有小括号   
"arrow-parens": true,
```

```
// 驼峰式命名类名与接口名
"class-name": true,
```

```
// 类、函数等必须写注释  
"completed-docs": false,
```

```
// import 语句中，关键字之间的间距必须是一个空格
"import-spacing": true,
```

```
// new 后面只必须有一个空格
"new-parens": true,
```

```
// 类型断言必须使用 as Type，禁止使用 <Type>
"no-angle-bracket-type-assertion": true,
```

```
// 禁止连续超过三行空行
"no-consecutive-blank-lines": [
    true,
    3
],
```

```
// 如果已经引入过库，则禁止使用三斜杠引入类型定义文件
"no-reference-import": true,
```

```
// 小数必须以 0. 开头，禁止以 . 开头，并且不能以 0 结尾
"number-literal-format": true,
```

```
// 必须使用 a = {b} 而不是 a = {b: b}
"object-literal-shorthand": true,
```

```
// 禁止变量定义时赋值为 undefined
"no-unnecessary-initializer": true,
```

```
// 变量申明必须每行一个，for 循环的初始条件中除外  
"one-variable-per-declaration": [
    true,
    "ignore-for-loop"
],

<!-- 以下正确 -->
const x: number = 5;
const y: number = 10;

<!-- 以下错误 -->
const x: number = 5, y: number = 10;
```

```
// 禁止将this赋值给其他值  
"no-this-assignment": [
    true,
    {
    "allow-destructuring": true
    }
],

<!-- 不允许以下做法 -->
const that = this;
```

```
// parseInt 必须传入第二个参数
"radix": true,

<!-- 正确 -->
parseInt(string, 10);

<!-- 错误 -->
parseInt(string);
```

```
// 必须使用严格相等 - TS本身不允许非严格相等
"triple-equals": true,
```

```
// 接口定义必须开头带上 I - 禁用，不需要 I
"interface-name": [true, "never-prefix"],
```

```
// 注释必须符合 JSDoc 规范
"jsdoc-format": [
    true,
    "check-multiline-start"
],
```

```
// 禁止 JSDoc 中的冗余类型声明，因为 TypeScirpt 已经包含了大部分功能
"no-redundant-jsdoc": true