## 1. JS介绍
### (1)变量提升
1. 变量提升案例
```js
function hd() {
  // var str 提升
  if (false) {
    var str='qql'
  }
  console.log(str);
}

hd()
```
2. let和const的暂时性死区
```js
// let const的一块区域必须先申明后使用，没有变量提升
console.log(str,str1);

// err
let str = 'qql' 
const str1=''
// success
function run (a=3,b=a){} 
```
### (2)可怕的全局污染
1. 全局污染
```js
// 可怕的全局污染,开启严格模式
function run() {
  str = 'qql'
}
run()
console.log(str)
```
2. for循环的全局污染
```js
// 不要用var定义
var i = 99
for (var i = 0; i < 6; i++) {}
console.log(i)
```
### (3)变量冻结和类型判断
1. 冻结变量
```js
const host = {
  a: '',
  b: '',
}
// 变量被冻结了,无法修改
Object.freeze(host)

host.a = 'qql'
console.log(host);

```
2. 类型判断
```js
// typeof
let a = 1
console.log(typeof a)

// instanceof 判断参照对象的prototype属性所指向的对象是否在被行测对象的原型链上
class Person{
  constructor(name){
   this.name= name;  
 }
}
let p = new Person('张三')
console.log(p instanceof Person) 

// constructor 
function Person(){}
const Tom = new Person();
console.log(Tom.constructor==Person)

// Object.prototype.toString.call 最准确的方法
Object.prototype.toString.call(num)
```
### (4)传值和传址，自增
1. 传值和传址
```js
// 传值
let a = 1
let b = a
// 传址(一改都改)
let c = { a: '1' }
let d = c
d.a = 2
console.log(c)
```
2. 自增
```js
let a = 1
let c = 18
let b = 2
// ++a前置先计算，后参加计算
console.log(b + ++a)
// c++ c先参加计算,后++
console.log(b + c++)
```
### (5)while,do while循环
1. while循环
```html
<script>
    let y = 0
    while (y < 5) {
      let x = 0
      while (x <= y) {
        ++x
        document.write('*')
      }
      document.write('<br/>')
      ++y
    }
  </script>
```
2. do while循环
```html
<body>
  <script>
    let start = 0
    do {
      let n = 0
      do {
        document.write('刘小龙')
      } while (++n <= start)
      document.write('<br/>')
    } while (++start <= 5);
  </script>
</body>
```
3. for循环实现杨辉三角
```html
<script>
    let arr = Array.from({ length: 5 }, () => ([]))
    for (let i = 0; i < arr.length; i++) {
      arr[i].length = i
      for (let j = 0; j <= i; j++) {
        if (i == 0 || j == 0 || j == i) {
          arr[i][j] = 1;   //将两侧数组元素值赋为1
        } else {
          arr[i][j] = arr[i - 1][j] + arr[i - 1][j - 1];
        }
        document.write(arr[i][j])
      }
      document.write('<br/>')
    }
  </script>
```
### (6)for-of和for-in循环
1. for-in循环(遍历对象,数组,字符串)
```js
// 伪数组对象（拥有一个 length 属性和若干索引属性的任意对象）
// 可迭代对象（可以获取对象中的元素，如 Map 和 Set 等）
let obj = { a: 'a', b: 'b', c: 'c' }
let arr = Array.from('abc', (x) => x)
let str = 'abc'
// 遍历对象
for (let key in obj) {
  console.log(obj[key])
}
// 遍历数组
for (let key in arr) {
  console.log(arr[key])
}
// 遍历字符串
for (let key in str) {
  console.log(str[key])
}
```
2. for-of循环(遍历数组,字符串)
```js
let arr = Array.from('abc', (x) => x)
let str = 'abc'
let obj = { a: 'a', b: 'b', c: 'c' }
// 遍历数组
for (let item of arr) {
  console.log(item)
}
// 遍历字符串
for (let item of str) {
  console.log(item)
}

```
## 2. 基本数据类型
### 1.类型判断
1. 类型判断
```js
// typeof
let a = 1
console.log(typeof a)

// instanceof 判断参照对象的prototype属性所指向的对象是否在被行测对象的原型链上
class Person{
  constructor(name){
   this.name= name;  
 }
}
let p = new Person('张三')
console.log(p instanceof Person) 
```
### 2.String类型
#### (1)String类型介绍
1. 字符串的转译
```js
// 换行转译
let str = 'a\
\
'
console.log(str);
```
2. 嵌套使用模板版字面量
```js
let a=1
let str = `1${`1${a}1`}1 `
console.log(str);
```
#### (2)String类型的方法
1. 字符串的常用简单方法
```js
let str = ' a '
// 长度
console.log(str.length)
// 大小写转化
console.log(str.toUpperCase())
console.log(str.toLowerCase())
// 去掉空白
console.log(str.trim())
// 查找字符串,查找位置,返回位置
console.log(str.indexOf('a',1))
console.log(str.lastIndexOf('a',2))
// 判断一字符串中是否有其他字符串
console.log(str.includes('a'));
// 字符串替换,可以用正则
console.log(str.replace(/a/,'v'));
```
2. 字符串截取方法
```js
const str = 'A,B,C,D,E,F,G'
// 根据间隔符分割成数组
console.log(str.split(','))
// 根据索引截取中间字符串（start,stop）
console.log(str.substring(1, 6))
// 根据索引截取中间字符串(start,end)
console.log(str.slice(1, 6))
// 根据索引截取,长度可选（start,lenght）,默认截取到结尾
console.log(str.substr(1, 3))
```
3. 字符串的不常用方法
```js
const str = 'abc'
// 返回指定位置字符
console.log(str.charAt(0))
// 返回指定字符位置Unicode编码
console.log(str.charCodeAt(0))
// 连接两个多个字符串
console.log(str.concat('d', 'e'))
// 字符串是否以某字符串开头
console.log(str.startsWith('a'))
// 字符串是否以某字符串结束
console.log(str.endsWith('c'))
// 返回匹配正则的子字符串的索引
console.log(str.search(/a/))
// 字符串匹配正则
console.log(str.match(/a/g))
// 字符串迭代,返回字符多次复制结果
console.log(str.repeat(2))
```
4. 字符串转化数值
```js
// 字符串相关的类型转换
const str = '1'
const num = 1.11
// 字符串转换数字
console.log(+str + num)
console.log(Number(str) + num)
console.log(parseInt(str) + num)
console.log(parseFloat(str) + num)
```
#### (3)String类型的日期方法
1. Date的基本方法
```js
// 对象
const date = new Date() // 对象
const hd = Date() // 字符串
// 获取时间戳
console.log(date * 1)
console.log(Date.now())

// 计算cpu效率
const start = Date.now()
for (let i = 0; i < 20000000; i++) {}
const end = Date.now()
console.log((end - start) / 1000 + '秒')

// 日期的方法
// 获取年
console.log(date.getFullYear())
// 获取月0-11
console.log(date.getMonth())
// 获取日
console.log(date.getDate())
// 获取星期几
console.log(date.getDay())
```
2. Date中时间与时间戳的转换
```js
// 对象
const date = new Date() // 对象
const hd = Date() // 字符串 不要用
// 获取时间戳
console.log(date * 1)
console.log(Date.now())
// 转换成时间戳
console.log(date.getTime())
console.log(Number(date))
console.log(date.valueOf())
console.log(date.getTime())
// 时间戳转换成
console.log(new Date(date * 1))

```
3. 格式化时间函数
```js
const formatDate = (num) => {
  // 补0函数
  const zero = (num) => (num >= 10 ? num : '0' + num)

  const date = new Date(num)
  // 获取年
  const year = zero(date.getFullYear())
  // 获取月
  const month = zero(date.getMonth() + 1)
  // 获取日
  const day = zero(date.getDay())
  // 小时
  const hours = zero(date.getHours())
  // 分钟
  const minut = zero(date.getMinutes())
  // 秒
  const seconds = zero(date.getSeconds())
  // 获取星期
  const week = '星期' + date.getDate()

  return `${year}年${month}月${day}日 ${hours}:${minut}:${seconds} ${week}`
}
console.log(formatDate(new Date()))

```
#### (4)String类型的JSON类型
1. JSON序列化的基本使用
```js
// json的基本使用
const obj = { name: 'zs', age: 24 }
// 变成json格式
console.log(JSON.stringify(obj))
/**
 * obj转化值
 * [] 保留的参数
 * 4 json格式
 */
console.log(JSON.stringify(obj, ['name', 'age'], 4))

const obj1 = {
  name: 'zs',
  age: 24,
  // 定义json序列化
  toJSON: function () {
    return {
      name: 'ls',
    }
  },
}

console.log(JSON.stringify(obj1))

```
2. JSON的反序列化
```js
// json的基本使用
const obj = { name: 'zs', age: 24 }

JSON.parse(JSON.stringify(obj), (key, value) => {
  console.log(key, value)
})
```
### 3.Boolean类型
1. Boolean类型的隐式转换
```js
const str = ''
const num = 0
const arr = []

// 空数组,字符串,0隐式转换成false
console.log(str == false)
console.log(num == false)
console.log(arr == false)
// 空数组是引用类型,if为true
if (arr) console.log(1)
```
2. Boolean类型的隐式转换
```js
const str = ''
const num = 0
const arr = []

// 显示转换成boolean
console.log(!!str) // \!!num !!arr
console.log(Boolean(str)) // Boolean(num) Boolean(arr)
```
### 4.Number类型
#### (1)Number类型的方法
1. Number类型的状态判断
```js
const num = 1

// 判断浮点数
console.log(Number.isFinite(num))
// 判断整数
console.log(Number.isInteger(num))
// 判断NaN
console.log(Number.isNaN(num))
// 判断是否是一个安全整数
console.log(Number.isSafeInteger(num))
```
2.  数值转字符串
```js
const num = 1
// 数值转字符串
console.log(num + '')
console.log(num.toString())
// 保留小说(数值转字符串)
// toFixed() 能够把数值转换为字符串，并显示小数点后的指定位数
console.log(num.toFixed(1));
// toExponential() 方法专门用来把数字转换为科学计数法形式的字符串。
console.log(num.toExponential());
// toPrecision() 方法与 toExponential() 方法相似，但它可以指定有效数字的位数，而不是指定小数位数。
console.log(num.toPrecision());
```
#### (2)Number类型的数学方法
1. 数学的计算方法
```js
// 最大值最小值
console.log(Math.max(1, 2, 3))
console.log(Math.min(1, 2, 3))
// 向上取整
console.log(Math.ceil(5.6))
// 向下取整
console.log(Math.floor(5.6))
// 四舍五入
console.log(Math.round(5.6))
```
2. 随机数
```js
// 0-1
console.log(Math.random())
// 0-5
console.log(Math.ceil(Math.random() * 5))
// 2-5
console.log(2 + Math.ceil(Math.random() * 3))
```
### 5.Symbol类型
1. Symbol类型的介绍
```js
let s = Symbol('a') // s
// Symbol 不可以添加属性
// 读取symbol的描述
console.log(s.description)

// 根据描述获取Symbol，如果不存在则新建一个Symbol
// 使用Symbol.for会在系统中将Symbol登记
// 使用Symbol则不会登记
let s1 = Symbol.for('a')
let s2 = Symbol.for('a')
console.log(s1 === s2) // true
// Symbol.keyFor 根据使用Symbol.for登记的Symbol返回描述
console.log(Symbol.keyFor(s1))

```
2. Symbol的应用
```js
//对象中名字相同的会被覆盖
let user1 = {
  name: 'zs',
  key: Symbol(),
}
let user2 = {
  name: 'zs',
  key: Symbol(),
}
let obj = {
  [user1.key]: { 数学: 100 },
  [user2.key]: { 数学: 30 },
}

// 缓存的前缀
class Cache {
  static data = {}
  static set(name, value) {
    return (this.data[name] = value)
  }
  static get(name) {
    return this.data[name]
  }
}

let user = {
  name: 'apple',
  key: Symbol('用户'),
}
let cart = {
  name: 'apple',
  key: Symbol('购物车'),
}
Cache.set(user.key, user)
Cache.set(cart.key, cart)
```
3. Symbol保护对象
```js
// Symbol 不能使用 for/in、for/of 遍历操作

let symbol = Symbol()
let obj = {
  name: 'zs',
  [symbol]: 'zs',
}

// 可以使用 Object.getOwnPropertySymbols 获取所有Symbol属性
for (const key of Object.getOwnPropertySymbols(obj)) {
  console.log(key)
}
// 也可以使用 Reflect.ownKeys(obj) 获取所有属性包括Symbol
for (const key of Reflect.ownKeys(obj)) {
  console.log(key)
}
// 如果对象属性不想被遍历，可以使用Symbol保护

```
## 3. 引用数据类型
### 1.Array类型
#### (1)Array类型介绍
1. 创建一维数组和二维数组
```js
const arr = new Array('a', 'b')
const arr1 = ['a', 'b']
const arr2 = arr
const arr3 = Array.of(1, 2, 3, 4)

console.log(arr3)
// 引用类不可以判等
console.log(arr === arr1)
// 引用类型赋值为浅拷贝
arr2[1] = 'c'
// 改变了arr
console.log(arr)

// 创建二维数组
let arrTwo = Array.from({ length: 10 }, () => [])
console.log(arrTwo)
```
2. 数组的类型检测和转换
```js
const arr = [1, 2, 3]
// 判断是否为数组
console.log(Array.isArray())
// 转换成字符串
console.log(arr.toString())
console.log(arr.join(','))

const str = '123'
// 字符串转换
console.log(Array.from(str))
console.log(str.split(''))
// 用解构转化
const [...arr]=str
```
3. Array.from方法的详解
```js
const str = '123'

/**
 * Array.from({length:1},)
 * 第一参数必须有长度
 * 第二参数可以为空,也可是函数,返回值填充数组
 */
// 字符串转换
console.log(Array.from(str))
// 生成二维数组
console.log(Array.from({ length: 10 }, (item, index) => [index]))
```
#### (2)Array类型的方法
1. 改变原数组的方法
```js
const arr = [1, 2, 3]

// 添加
arr.push(4, 5) // 末尾
arr.unshift(-1, 0) // 开头
// 删除
arr.shift() // 开头
arr.pop() // 末尾
// 排序
arr.sort()
arr.sort((a, b) => b - a)

const arr1 = [{ id: 3 }, { id: 4 }, { id: 2 }, { id: 1 }]
arr1.sort((a, b) => {
  return a.id - b.id
})
console.log(arr1)



// 不常用改变原数组的方法,
/**
 * arr.splice(index,num,item1,...,itemx)
 * 添加删除原数组
 * index:添加删除位置
 * num:删除的数量
 * item1..itemx:添加的值
 */
arr.splice(0, 1, 1, 2, 3)
// 数组反转
arr.reverse()
// 填充数组fill(value,start,end),
arr.fill(100, 0, arr.length)
console.log(arr)
```
2. 不改变原数组的方法
```js
const arr = [1, 2, 3]

// 截取数组 更据索引截取
console.log(arr.slice(0, 2))
// 数组转换字符串
console.log(arr.join(','))
// 合并数组
console.log(arr.concat([4, 5, 6]))
// 查找数组元素(适应基本数据类型数组),第二参数查找起始点
console.log(arr.indexOf(1))
console.log(arr.lastIndexOf(1))
// 查找数组包含某个元素
console.log(arr.includes(1))
```
3. es6新增加数组方法
```js
// es6的数组新方法
const arr = [1, 2, 3]
// 返回符合条件所有元素的数组
console.log(arr.filter((item) => item > 2)) // 返回大于2的形成性的数组 [3]
// 每个元素是否都符合条件
console.log(arr.every((item) => item > 2)) // 每个item大于2 false
// 返回符合条件的数组元素
console.log(arr.find((item) => item > 2)) // 3
// 返回符合条件的数组元素索引
console.log(arr.findIndex((item) => item > 2))
// 循环数组,不会退出
arr.forEach((item) => {
  console.log(item)
  if (item > 1) return true
})
// 循环数组,返回true退出
arr.some((item) => {
  console.log(item)
  if (item > 1) return true
})
// 数组的映射返回新数组
arr.map(item=>item)
// 将数组元素计算为一个值
console.log(arr.reduce((pre, item) => (pre += item), 0))
// 找出价格最贵的
console.log(cart.reduce((pre, item) => (pre.p > item.p ? pre : item)))
// 数组的展开
let arr1 = [...arr]
// 数组的解构
let [a, b] = arr
```
4. splice的详细用法
```js
const arr = [1, 2, 3, 4]
// 删除,默认删除后面全部,添加1删除一个
arr.splice(1, 1)
// 替换
arr.splice(1, 1, 7)
// 添加
arr.splice(0, 0, -1)
arr.splice(arr.length, 0, 5)
console.table(arr)
```
5. 数组的迭代器
```js
// 返回数组的可迭代对象(生成链表){value:any,done:boolean} done表示是否迭代完成 
const obj = arr.entries()
console.log(obj.next().value)
console.log(obj.next().value)
console.log(obj.next().value)
// 返回键值链表
const obj2 = arr.keys()
console.log(obj2.next().value)
console.log(obj2.next().value)
console.log(obj2.next().value)
```
#### (3)Array类型去重
1. 数组去重set方法
```js
var removeDuplicates = function(nums) {
	// set转换成数组
	// 1.Array.from()
return Array.from(new Set(nums)) 
    // 2.扩展运算符
	// return [...new Set(nums)]
};
```
2. 双循环去重
```js
var removeDuplicates1 = function(nums){
	for(let i=0;i<nums.length;i++){
		for(let j=i+1;j<nums.length;j++){
			if(nums[i]===nums[j]){// 第一个等于第二个去掉
				nums.splice(j,1)// 删除第二个
			}
		}
	}
	return nums
}
```
3. 新建一个数组push进去,重复的就不push进去
```js
var removeDuplicates2 = function(nums){
	var arr=[]
	for(let i=0;i<nums.length;i++){
		if(arr.indexOf(nums[i])===-1){
			arr.push(nums[i])
		}
	}
	return arr
	}
```
4. 使用filter
```js
var removeDuplicates3 = function(nums){
		// indexOf() 方法可返回某个指定的字符串值在字符串中首次出现的位置。字符首次出现的索引位置
	return nums.filter((item,index,arr)=>{
		return arr.indexOf(item)===index //返回每个数组第一次出现的位置
	})
	}
```
5. 递归去重
```js
var removeDuplicates4 = function(nums){
	function loop(index){
		if(index>=0){
			if(nums[index]===nums[index-1]){// 如果最后一个等于倒数第二个就删除一个
				nums.splice(index,1)
			}
			loop(index-1) //递归
		}
	}
	loop(nums.length-1)
	return nums
	}
```
6. 快指针法
```js
var removeDuplicates5 = function (nums) {
  var n = nums.length
  let slow = 1
  let fast = 1
  if (n == 0) return
  while (fast < n) {
    if (nums[fast] !== nums[fast - 1]) {
      nums[slow] = nums[fast]
      slow++
    }
    fast++
  }
  nums.length = slow
  return nums
}
// 数组要排序好
console.log(removeDuplicates5([1, 1, 1, 1, 1, 2, 3, 5]))
```
### 2.Set类型
1. Set类型的介绍
```js
// Set类型的介绍
const set = new Set([1, 1, 2, 3])
// Set类型中没有重复值
set.add(2)
// set的长度
console.log(set.size)
// set中是否包含某值
console.log(set.has(2))
// 删除元素
console.log(set.delete(1))
// 清空
set.clear()
// set类型的迭代
set.entries()
set.keys()
console.log(set)
 
```
2. Set类型的转化数组(实现数组去重)
```js
const arr = [1, 2, 2, 2, 3]

console.log(Array.from(new Set(arr)))
console.log([...new Set(arr)])
// 字符转化Set类型的转化
console.log(new Set('1234'))
```
3. 垃圾回收和WeakSet
```js
// WeakSet保存的对象不会增加引用计数器，如果一个对象不被引用了会自动删除。
// 向里面添加的必须是引用类型,弱引用，无法用迭代循环
// 当垃圾回收时对象被删除，这时WakeSet也就没有记录了
let set = new WeakSet([['a'], ['b']])
```
### 3.Map类型
1. map类型的简单使用
```js
const map = new Map()
// map中什么都可以当作键名
map.set('name', '1')
map.set([], 2)
map.set({}, 3)
map.set(4, 4)
//创建
const map1 = new Map([
  [1, 2], // key-value
  [3, 4],
])

console.log(map, map1)

```
2. map类型的方法
```js
const map = new Map()
// 添加
map.set(1, 2)
map.set(1, 3)
map.set(1, 4)
map.set(1, 5)
// 读取
console.log(map.get(1))
// 删除
map.delete(1)
// 清空
map.clear()
// 是否存在
map.has()
// 生成迭代对象
map.keys()
map.entries()
// 循环跟数组差不多
const map = new Map()
// 添加
map.set(1, 2)
map.set(2, 3)
map.set(3, 4)
map.set(4, 5)
// 值
console.log([...map.values()])
// 键
console.log([...map.keys()]);

```
3. map遍历操作div
```js
<body>
  <div name="1">1</div>
  <div name="2">2</div>
  <script>
    const map = new Map()
    document.querySelectorAll('div').forEach(item => {
      map.set(item, {
        content: item.getAttribute('name')
      })
    })

    map.forEach((content, key) => {
      key.addEventListener("click", function () {
        alert(map.get(this).content);
      });
    })
  </script>
</body>
```
4. 垃圾回收和WeakMap
```js
// WeakSet保存的对象不会增加引用计数器，如果一个对象不被引用了会自动删除。
// 向里面添加的必须是引用类型,弱引用，无法用迭代循环
// 当垃圾回收时对象被删除，这时WakeSet也就没有记录了
let set = new WeakSet([['a'], ['b']])
```
5. 使用WeakMap实现选课案例
```js
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<style>
  * {
    padding: 0;
    margin: 0;
  }

  body {
    padding: 20px;
    width: 100vw;
    display: flex;
    box-sizing: border-box;
  }

  div {
    border: solid 2px #ddd;
    padding: 10px;
    flex: 1;
  }

  div:last-of-type {
    margin-left: -2px;
  }

  ul {
    list-style: none;
    display: flex;
    width: 200px;
    flex-direction: column;
  }

  li {
    height: 30px;
    border: solid 2px #e67e22;
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 10px;
    color: #333;
    transition: 1s;
  }

  a {
    border-radius: 3px;
    width: 20px;
    height: 20px;
    text-decoration: none;
    text-align: center;
    background: #16a085;
    color: white;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 5px;
  }

  .remove {
    border: solid 2px #eee;
    opacity: 0.8;
    color: #eee;
  }

  .remove a {
    background: #eee;
  }

  p {
    margin-top: 20px;
  }

  p span {
    display: inline-block;
    background: #16a085;
    padding: 5px;
    color: white;
    margin-right: 10px;
    border-radius: 5px;
    margin-bottom: 10px;
  }
</style>

<body>
  <div>
    <ul>
      <li><span>php</span> <a href="javascript:;">+</a></li>
      <li><span>js</span> <a href="javascript:;">+</a></li>
      <li><span>vue</span><a href="javascript:;">+</a></li>
    </ul>
  </div>
  <div>
    <strong id="count">共选了0门课</strong>
    <p id="lists"></p>
  </div>
</body>

<script>
  class Lesson {
    constructor() {
      this.lis = document.querySelectorAll("ul>li");
      this.countELem = document.getElementById("count");
      this.listElem = document.getElementById("lists");
      this.map = new WeakMap();
    }
    // 点击+添加select属性(判断是否有，则移除，无则添加)
    run() {
      this.lis.forEach(item => {
        item.querySelector('a').addEventListener('click', event => {
          const el = event.target;
          const state = el.getAttribute("select");
          if (state) {
            el.removeAttribute("select")
            this.map.delete(el.parentElement)
            el.innerHTML = "+"
            el.style.backgroundColor = "green";
          } else {
            el.setAttribute("select", true)
            this.map.set(el.parentElement, true)
            el.innerHTML = "-"
            el.style.backgroundColor = "red";
          }
          this.render();
        })
      })
    }
    count() {
      return [...this.lis].reduce((count, item) => {
        return (count += this.map.has(item) ? 1 : 0);
      }, 0);
    }
    lists() {
      return [...this.lis]
        .filter(item => {
          return this.map.has(item);
        })
        .map(item => {
          return `<span>${item.querySelector("span").innerHTML}</span>`;
        });
    }
    render() {
      this.countELem.innerHTML = `共选了${this.count()}课`;
      this.listElem.innerHTML = this.lists().join("");
    }
  }
  new Lesson().run();
</script>

</html>
```
### 4.Function类型
#### (1)函数的定义
1. 直接定义
```js
function func() {}
const func1 = () => {}
const func2 = new Function()
// 通过字面量或new生成函数可以new
console.log(new func())
console.log(new func2())
// 箭头函数是匿名函数无法new
// console.log(new func1()) //error
```
2. 对象中定义函数
```js
const user = {
  name: 'zs',
  getName() {
    console.log(this.name)
  },
  setName(name) {
    this.name = name
  },
}

user.setName('ls')
user.getName()
```
3. 函数中定义函数
```js

// 函数的静态方法
function User() {}
User.username = 'zs'
User.getName = () => {
  return User.username
}
console.log(User.getName())
// 实例对象无法调用静态方法
const user = new User()
user.getName()


// 函数定义的类
function User() {
  this.name = 'zs'
  this.getName = () => {
    return this.name
  }
}
const user = new User()
console.log(user.getName())

// 函数定义的类减少开销(定义在原型上)
function User() {}
User.prototype.username = 'zs'
User.prototype.getName = () => {
  return User.prototype.username
}
const user = new User()
console.log(user.getName())

```
4. 函数递归
```js
// 递归
// 5！
function digu(item) {
  return item === 1 ? 1 : item * digu(item - 1)
}
console.log(digu(5))

// 最大公约数
function gongyueshuo(a, b) {
  return a % b == 0 ? b : gongyueshuo(b, a % b)
}
console.log(gongyueshuo(2, 3))

// 递归求和
function sum(...args) {
  return args.length === 0 ? 0 : args.pop() + sum(...args)
}

console.log(sum(1, 2, 3, 4))

```
#### (2)函数中的this指向
1. 普通函数和箭头函数指向
```js
// 函数中的this指向问题
let user = {
  name: 'zs',
  getName() {
    console.log(this)
    const self=this
    function fun1() {
      // 这里函数指向了全局对象
      console.log(this)
      console.log(self)
    }
    const fun2 = () => {
      // 指向上面一级的this
      console.log(this)
    }
    fun1()
    fun2()
  },
}
user.getName()

```
2. call,apply,bind改变this指向
```js
let zs = { url: '666' }
function User(name, host) {
  this.name = name
  this.host = host
}

// call改变this指向
User.call(zs, 'zs', '8080') // 向zs中添加了{name:'zs'},this指向了zs
// apply改变this指向
User.apply(zs, ['zs', '8080']) // 第二参数是数组
//  bind返回对应函数, 便于稍后调用； apply, call则是立即调用
User.bind(zs, 'zs', '8080')()

console.log(zs)
```
3. 使用call完成函数方法的继承
```js
function Request() {
  this.baseurl = 'http://119.91.55.9:3000/'
  this.get = function (params) {
    let str = Object.keys(params)
      .map((item) => `${item}=${params[item]}`)
      .join('&')
    let url = `${this.baseurl}${this.url}/?${str}`
    console.log(url)
  }
}

// Article继承了Request的方法
function Article() {
  this.url = 'article'
  Request.call(this)
}
let article = new Article()
article.get({ id: 1, cat: 'js' })

// User继承了Request的方法
function User() {
  this.url = 'user'
  Request.call(this)
}
let user = new User()
user.get({ id:1,role:'zs'})
```
4. 使用bind完成随机变色
```js
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<style>
  * {
    padding: 0;
    margin: 0;
  }

  body {
    width: 100vw;
    height: 100vh;
    font-size: 3em;
    padding: 30px;
    transition: 2s;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #34495e;
    color: #34495e;
  }
</style>

<body>

</body>
<script>
 function Color(elem) {
    this.elem = elem;
    this.colors = ["#74b9ff", "#ffeaa7", "#fab1a0", "#fd79a8"];
    this.run = function() {
      setInterval(
        function() {
          let pos = Math.floor(Math.random() * this.colors.length);
          this.elem.style.background = this.colors[pos];
        }.bind(this),
        1000
      );
    };
  }
  let obj = new Color(document.body);
  obj.run();
</script>

</html>
```
#### (3)函数的作用域和闭包
+ 闭包 : 函数可以访问其他函数作用域的数据
+ 作用域 : 函数调用后会生成新的作用域
1. 函数的作用域和其回收机制
```js
// 全局作用域不会被回收

// 函数调用后会生成新的作用域
function show() {
  let n = 1
  // 每次调用sum1里面的n用不到就会回收
  function sum1() {
    console.log(++n, '-')
  }
  sum1()
  // 不会被回收,在全局中会用到不会回收
  return function sum() {
    console.log(++n, '--')
    return sum
  }
}

show() // 开辟了新的内存空间
show() // 开辟了新的内存空间
// 演长作用域存在时间
show()()()()() // 内存中的数据要使用不会被回收

```
2. for循环块级作用域对var和let影响
```js
for (var i = 0; i < 4; i++) {
  // var有函数作用域
  // 循环时生成块级作用域,但是var无块级作用域概念，块级作用域的每个定时器都会指向全局var
  setTimeout(function () {
    console.log(i)
  }, 1000)
}

for (let i = 0; i < 4; i++) {
  // 循环时生成块级作用域，0 - setTimeout ,1-setTimeout ...
  setTimeout(function () {
    console.log(i)
  }, 1000)
}


```
3. 闭包实现高阶函数(函数柯里化)和动画
```js
// 函数可以访问其他函数作用域的数据
let arr = [1, 2, 3, 4, 5, 6, 7, 8]

// 使用闭包复用逻辑
function between(a, b) {
  return function (x) {
    return (x > a) & (x < b)
  }
}

console.log(arr.filter(between(4, 7)))



<body>
  <button style="position:absolute;">left</button>
  <script>
    let buttons = document.querySelectorAll('button')
    buttons.forEach(function (item) {
      //  动画放在这每次点击都会生成新环境,生成新的定时器,让动画越来越快
      let left = 1
      // 使用节流限制定时器的生成
      let timer = null
      item.addEventListener('click', function () {
        // 动画放在这每次点击都会让left=1，形成抖动，不同作用域会让left位置不同
        // let left = 1
        clearInterval(timer)
        timer = setInterval(function () {
          item.style.left = left++ + 'px'
        }, 100)
      })
    })
  </script>
</body>
```
4. 闭包造成的内存泄露和内存溢出
```js
<body>
  <div desc="zszszszs">zszszszs</div>
  <div desc="lslslsls">lslslsls</div>
  <script>
    let divs = document.querySelectorAll("div")
    divs.forEach(function (item) {
      let desc = item.getAttribute('desc')
      item.addEventListener('click', function () {
        // 为了取的desc,泄露了整个div,item没有清除造成内存溢出可能
        console.log(desc);
        console.log(item);
      })
      // 清理内存
     // item = null
    })
  </script>
</body>
```
### 5.Object类型
+ 对象是属性和方法的集合即封装
+ 将复杂功能隐藏在内部，只开放给外部少量方法，更改对象内部的复杂逻辑不会对外部调用造成影响即抽象
+ 继承是通过代码复用减少冗余代码
+ 根据不同形态的对象产生不同结果即多态
#### (1)Object类型的介绍
1. 对象的基本使用
```js
let user = {
  name: 'zs',
  age: 18,
}
let property = 'name'
// 获取属性
console.log(user[property])
console.log(user.name)
// 赋值
user[property] = 'ls'
user.name = 'ls'
// 删除属性
delete user.age
```
2. 对象的展开和解构
```js
let user = {
  name: 'zs',
  age: 18,
}
// 对象的展开
console.log({...user});
// 解构
const {name} = user
// 解构的默认值
const {age = 23} = user
//  嵌套解构
const {lessons: { title }} = user
```
3. 对象的遍历(迭代)
```js
const obj = { a: 'a', b: 'b' }

for (const key in obj) {
  console.log(key)
}

//对象类型无法使用for of
// for (const item of obj) {
//   console.log(item);
// }

// Object.entries(obj)转换成二维数组,[[key，value]]
for (const [key, value] of Object.entries(obj)) {
  console.log(value)
}
```
#### (2)Object上的方法
1. Object.hasOwnProperty检测属性在否
```js
const a = { name: 'zs' }
const b = { age: 18 }
// 方法设置一个指定的对象的原型（即，内部 [[Prototype]] 属性）到另一个对象
Object.setPrototypeOf(a, b)
console.log(obj.hasOwnProperty('name')); //true
// 使用 in 可以在原型对象上检测
console.log('age' in a)
```
2. Object.assign合并对象和属性的计算
```js
// 合并对象
console.log(Object.assign({ a: 1 }, { b: 2 })); 
const obj = {}
let id = 0
// 对象的key值可以通过计算实现
obj[++id] = id
obj[++id] = id
obj[++id] = id
obj[++id] = id
console.log(obj)
//数通过计算成为对象
const lessons = [
  {
    title: 'a',
  },
  {
    title: 'b',
  },
  {
    title: 'b',
  },
]
const newObj = lessons.reduce((pre, item, index) => {
  pre[`${item.title}-${index}`] = item
  return pre
}, {})
console.log(newObj)

```
3. Object.getOwnPropertyDescriptor(s)获取对象属性的特征
```js
const obj = { name: 'zs', age: 14 }

/**
 * {
 * value: 'zs', 属性值
 * writable: true,可修改
 * enumerable: true,可遍历
 * configurable: true 可以重新配置特征
 * }
 *
 */
//  获取单个属性特征
console.log(Object.getOwnPropertyDescriptor(obj, 'name'))
// 获取多个属性特征
console.log(Object.getOwnPropertyDescriptors(obj))

// 方法同样可以获取数组的属性
const obj = [1, 2, 3]
//  获取单个属性特征
console.log(Object.getOwnPropertyDescriptor(obj, 'length'))
```
4. Object.defineProperty向对对象中添加属性
```js
const user = {}
// 直接添加属性全部为true
user.age = 18
/**
 * 向对对象中添加属性(默认)
 * writable: false,可修改
 * enumerable: false,可遍历
 * configurable: false 可以重新配置特征
 */
Object.defineProperty(user, 'name', {
  value: 'zs',
  writable: false,
  enumerable: false,
  configurable: false,
})
// 可以进行添加多个属性
Object.defineProperties(user, {
  age: {
    value: 22,
    writable: false,
    enumerable: false,
    configurable: false,
  },
  host: {
    value: 8080,
    writable: false,
    enumerable: false,
    configurable: false,
  },
})

console.log(Object.getOwnPropertyDescriptors(user))
```
5. Object.preventExtensions不可向对象中写入
```js
const user = {
  name: 'zs',
}

// 将对象中的writable变成false,不能向里面添加属性
Object.preventExtensions(user)
// 判断对象中writable
if (Object.isExtensible(user)) {
  user.host = 8080
}

```
6. Object.seal封闭对象
```js
const user = { name: 'zs' }

// 对象处于封闭状态，
Object.seal(user)
// 可以修改值
user.name = 'ls'
// 无法向里面添加值，删除值
user.age = 12
// 判断是否处于封闭状态
console.log(Object.isSealed(user))
```
7. Object.freeze冻结对象
```js
const user = { name: 'zs' }

Object.freeze(user)
// 无法删除，添加。修改属性
delete user.name
user.name = 'ls'
user.age = 19

console.log(user) //{ name: 'zs' }

// 判断是否被冻结
console.log(Object.isFrozen(user))
```
8. Object.getPrototypeOf获取原型
```js
let obj = {}
let obj1 = {}
console.log(Object.getPrototypeOf(obj) === Object.getPrototypeOf(obj1))
```
9. Object.create创建新的对象,可指定原型
```js
 Object.create(null, {
  name: {
    value: 'zs',
  },
})
```
10. Object.values和Object.keys获取对象的键和值
```js
let zs = {
  lesson: { js: 99, node: 90, java: 40, vue: 80 },
  get data() {
    // 获取对象中的值
    return Object.values(this.lesson)
  },
  get key(){
     // 获取对象中的键
     return Object.keys(this.lesson)
  }
}
```
#### (3)Object的拷贝
1. 浅拷贝
```js
const obj = {
  name: 'zs',
  age: 17,
  js: {
    host: 1234,
  },
  arr: [],
}
// 浅拷贝(无法拷贝对象中的对象)
let obj1 = Object.assign({}, obj)
let obj2 = { ...obj }
obj1.js.host = 456
// 修改新对象会影响的原来的对象
console.log(obj)
```
2. 深拷贝递归函数
```js
const obj = {
  name: 'zs',
  age: 17,
  js: {
    host: 1234,
  },
  arr: [],
}
// 深拷贝(拷贝对象中的对象)
function copy(object) {
  let obj = {}
  for (let key in object) {
    // 判断object里面是否为对象
    obj[key] = typeof object[key] === 'object' ? copy(object[key]) : object[key]
  }
  return obj
}

let obj3 = copy(obj)
obj3.js.host = 789
// 改变新值不会影响原来值
console.log(obj)
```
3. 深拷贝数组的类型判断
```js
// 对象的拷贝
const obj = {
  name: 'zs',
  age: 17,
  js: {
    host: 1234,
  },
  arr: [],
}

// 用typeof会把数组也判断成为object
console.log(typeof []) // object
// 数组与对象原型上都指向了Object
console.log([] instanceof Object) // true
console.log({} instanceof Object) // true
// 数组原型上还指向了Array,对象类型没有
console.log([] instanceof Array) // true
console.log({} instanceof Array) // false

// 深拷贝(拷贝对象中的对象,对象中的数组)
function copyArr(object) {
  let obj = object instanceof Array ? [] : {}
  // 使用Object.entries(object)生成[key, value]数组
  for (let [key, value] of Object.entries(object)) {
    // 判断object里面是否为对象
    obj[key] = typeof value == 'object' ? copyArr(value) : value
  }
  return obj
}
let obj1 = copyArr(obj)
// 改变数组
obj1.arr.push = 1
console.log(obj, obj1)

// 用json完成深拷贝(缺点:如果其中有其他类型都会转换成string)
let obj2 = JSON.parse(JSON.stringify(obj))
```
#### (4)Object与函数
1. 简单工厂创建对象
```js
// 简单工厂(创建对象)
function user(name, age) {
  return {
    name,
    age,
    getName: function () {
      console.log(this.name)
    },
    getAge: function () {
      console.log(this.age)
    },
  }
}

let zs = user('zs')
zs.getName()

let ls = user('ls')
ls.getAge()

```
2. 构造函数创建对象
```js
// 方法最好放入原型中，每个对象都有自己的方法，浪费空间
function User(name, age) {
  // 参数最后保护起来，防止外部修改
  // this.name = name
  // this.age = age

  // 保护其中的参数
  const data = { name, age }
  this.getName = function () {
    // console.log(this.name)
    console.log(data.name)
  },
  this.getAge = function () {
    // console.log(this.age)
    console.log(data.age)
  }

  // 浪费内存
  return this // 返回的this会指向全局，返回值是this全局·添加上面的方法
  // new 默认返回 return this
}

console.log(User('zs', 18))

let zs = new User('zs', 18)
zs.getAge()
```
3. JS中大部分数据类型是通过构造函数创建
```js
const num = new Number(99);
console.log(num.valueOf());

const string = new String("zs");
console.log(string.valueOf());

const boolean = new Boolean(true);
console.log(boolean.valueOf());

const date = new Date();
console.log(date.valueOf() * 1);

const regexp = new RegExp("\\d+");
console.log(regexp.test(99));
```
#### (5)Object的访问器,代理和拦截
1. 对象的访问器
```js
const user = {
  data: { name: 'zs', age: 19 },
  set userinfo(value) {
    console.log('访问了设置访问器')
    const [name, age] = value.split('-')
    this.data.name = name
    this.data.age = age
  },
  get userinfo() {
    console.log('访问了取值访问器')
    return this.data.name + '-' + this.data.age
  },
}

user.userinfo = 'ls-55'
console.log(user.userinfo)

```
2. 对象访问器实现token的读取
```js
<body>
  <script>
    // 使用访问器实现对token
    let Request = {
      set token(content) {
        localStorage.setItem('token', content)
      },
      get token() {
        let token = localStorage.getItem('token')
        if (!token) {
          alert('请登录')
        }
        return token
      },
    }

    Request.token = '1213323232'
    console.log(Request.token);
  </script>
</body>
```
3. 构造函数中使用Object.defineProperties实现访问器
```js
function User(name, age) {
  const data = { name, age }
  Object.defineProperties(this, {
    name: {
      get() {
        console.log('访问属性了')
        return data.name
      },
      set(value) {
        console.log('修改属性了')
        data.name = value
      },
    },
    age: {
      get() {
        console.log('访问属性了')
        return data.age
      },
      set(value) {
        console.log('修改属性了')
        data.age = value
      },
    },
  })
}

const user = new User('zs', 13)
user.age = 99
console.log(user.age)

```
4. Object.defineProperty实现双向数据绑定vue2
```html
<body>
  <input type="text" v-model="title">
  <input type="text" v-model="content">
  <h1 v-bind="title"></h1>
  <h1 v-bind="content"></h1>
  <script>
    function Observer(obj) {
      const keys = Object.keys(obj)
      keys.forEach((key) => {
        Object.defineProperty(this, key, {
          get() {
            console.log('get方法被调用了');
            return obj[key]
          },
          set(val) {
            console.log('set方法调用了')
            obj[key] = val
            document.querySelectorAll(`[v-model=${key}]`).forEach(item => {
              item.value = this[key]
            })
            document.querySelectorAll(`[v-bind=${key}]`).forEach(item => {
              item.innerHTML = this[key]
            })
          }
        })
      })
      this.init = function () {
        // v-model初始化以及改变
        document.querySelectorAll('[v-model]').forEach(item => {
          item.value = this[item.getAttribute('v-model')]
          // 输入时改变this的值
          item.addEventListener('keyup', (e) => {
            this[item.getAttribute('v-model')] = e.target.value
          })
        })
        // v-bind初始化
        document.querySelectorAll('[v-bind]').forEach(item => {
          item.innerHTML = this[item.getAttribute('v-bind')]
        })
      }

    }
    //  vue2中data
    const data = {
      title: 1,
      content: 2

    }

   new Observer(data).init()
 
  </script>

</body>
```
#### (6)Proxy代理
1. Proxy代理对象
```js
// 代理对象
const obj = { name: 'zs', age: 19 }
// proxy代理obj
const proxy = new Proxy(obj, {
  get(obj, key) {
    return obj[key]
  },
  set(obj, key, value) {
    obj[key] = value
  },
})

proxy.name = 'ls'
console.log(proxy.age)

```
2. Proxy代理访问函数
```js
function func(num) {
  console.log(num)
}
let proxy = new Proxy(func, {
  apply(func, obj, args) {
    // 函数添加操作
    func.apply(this, args)
  },
})

proxy.apply({}, [1000])
```
3. Proxy代理数组
```js
// proxy代理数组
const arr = [
  { name: 'zs', age: 20 },
  { name: 'ls', age: 28 },
  { name: 'ww', age: 50 },
]
let proxy = new Proxy(arr, {
  get(arr, key) {
    return arr[key]
  },
  set(arr, key, value) {
    arr[key] = value
  },
})

console.log(proxy[0])

```
4. Proxy实现数据的双向绑定vue3
```html
<body>
  <input type="text" v-model="title">
  <input type="text" v-model="content">
  <h1 v-bind="title"></h1>
  <h1 v-bind="content"></h1>
  <script>
    function View() {
      let proxy = new Proxy({}, {
        get(obj, key) {
          return
        },
        set(obj, key, value) {

          console.log('数据发生了改变', typeof key);
          document.querySelectorAll(`[v-model=${key}]`).forEach(item => {
            item.value = value
          })
          document.querySelectorAll(`[v-bind=${key}]`).forEach(item => {
            item.innerHTML = value
          })
        }
      })
      this.init = function () {
        const models = document.querySelectorAll('[v-model]')
        models.forEach(item => {
          item.addEventListener('keyup', function () {
            // 如果里面没有e,原生函数this指向的是e
            //  修改值
            proxy[this.getAttribute('v-model')] = this.value
          })
        })
      }
    }
    new View().init()
  </script>
</body>
```
5. Proxy实现表单验证
```html
<style>
  .error {
    border: solid 5px red;
  }
</style>

<body>
  <input type="text" validate rule="max:12,min:3" />
  <input type="text" validate rule="max:3,isNumber" />
  <script>
    class Validate {
      max(value, len) {
        return value.length <= len
      }
      min(value, len) {
        return value.length >= len
      }
      isNumber(value) {
        return /^\d+$/.test(value)
      }
    }
    // 代理工厂
    function ProxyFactory(obj) {
      return new Proxy(obj, {
        get(obj, key) {
          return obj[key]
        },
        set(obj, key, el) {
          //  对表单验证
          const rules = el.getAttribute('rule')
          // 声明验证类
          const validate = new Validate()
          let state = rules.split(',').every(rule => {
            const info = rule.split(':')
            return validate[info[0]](el.value, info[1])
          })
          el.classList[state ? 'remove' : 'add']('error')
          return true
        }
      })
    }
    const proxy = ProxyFactory(document.querySelectorAll('[validate]'))
    proxy.forEach((item, i) => {
      item.addEventListener('keyup', function () {
        proxy[i] = this
      })
    })
  </script>
</body>
```
## 4. 原型与继承
### (1)原型的介绍
1. 获取原型和无原型对象
```js
// 父级相当与原型__proto__,父级还有父级原型还有原型__proto__
let obj = {}
let obj1 = {}
console.log(Object.getPrototypeOf(obj) === Object.getPrototypeOf(obj1))

// 创建没有原型的对象
let obj2 = Object.create(null, {
  name: {
    value: 'zs',
  },
})

```
2. 对象方法和对象原型方法的优先级
```js
// 自己的方法的优先级高
let obj = {
  show() {
    console.log('本身的方法')
  },
}
// 向原型上添加属性
obj.__proto__.show = function () {
  console.log('向原型上添加属性')
}
// 如果自己没有会调用原型上的方法,都无报错
obj.show()

```
3. 函数的原型
```js
 <script>
    // 函数有两个不同的长辈prototype(构造原型),__proto__(对象函数原型)
    function User() { }
    console.dir(User.prototype)
    console.log(User.__proto__)

    // 向prototype上添加方法
    User.prototype.show = function () {
      console.log('构造原型上的方法')
    }
    // User.show() User上没有show方法
    // new生成的对象会把原型指向函数构造原型
    const user = new User()
    user.show()
    // new生成对象的原型等于构造函数的构造原型
    console.log(Object.getPrototypeOf(user) === User.prototype); // true


    // 向__proto__上添加方法
    User.__proto__.show = function () {
      console.log('对象函数原型上的方法')
    }
    User.show()

    // 向两个不同的原型上添加方法互相不影响
  </script>
```
### (2)原型链
1. 对象和函数的原型链
```html
<body>
  <script>
    // 函数的原型和对象的原型
    // 对象构造函数和User构造函数的prototype是否相同? 不同:对象的构造方法处于顶层
    function User() { }
    // 创建User对象和Object对象
    const obj = new Object()
    const user = new User()

    console.dir(Object);
    console.dir(User)
    // 向对象构造函数添加方法
    Object.prototype.show = function () {
      console.log('对象构造函数方法');
    }

    // 用User构造函数来读取
    User.prototype.show() // 可以调用
    // 上面读取到了但是不一定是相同,看下User.prototype的父级
    User.prototype.__proto__.show()// 可以调用
    /*
     User的构造原型的原型是对象的原型?
     很显然User创建的对象指向了User的构造原型,
     通过User创建的对象也是对象同样有对象的方法
     要使User创建的对象有的对象的方法,User的构造原型的原型必然指向对象的原型
    */
    console.log(User.prototype.__proto__ === Object.prototype);// true

    // 用User函数读取
    User.show()// 可以调用
    // User中没有show(),看下User的父级
    User.__proto__.show()// 可以调用
    // User.__proto__中没有show(),看下 User.__proto__的父级
    User.__proto__.__proto__.show()// 可以调用
    /*
     * User的原型指向了函数原型
     * 函数也可以使用对象的方法，函数的原型必定指向对象的构造原型
     * User的原型的原型指向了对象的构造原型
    */
    console.log(Object.prototype === User.__proto__.__proto__);// true

    // 总结函数构造原型的原型等于函数原型的原型
    console.log(User.__proto__.__proto__ === User.prototype.__proto__);// true

    console.log(obj.__proto__ === user.__proto__.__proto__); // true
  </script>
</body>
```
![对象和函数的原型链](D:\workCode\FrontEndCode\JavaScript\对象和函数的原型链.png)
2. 设置对象的原型(继承)
```html
  <script>
    // 自定义原型实现对象的继承
    let parent = {
      name: 'zr',
      getName() {
        return this.name
      }
    }
    let obj = { name: 'zs' }

    // obj的原型指向了parent
    Object.setPrototypeOf(obj, parent)
    console.log(Object.getPrototypeOf(obj) === parent);
    // obj可以调用父级的方法
    console.log(obj.getName());
  </script>
```
3. 原型链以及函数方法的继承
```html
 <script>
    function User(name) {
      this.name = name
      this.getName = function () {
        return this.name
      }
    }
    console.log(User.prototype.__proto__ === Object.prototype);
    console.log(User.prototype.constructor === User);
    console.log(User.__proto__.__proto__ ===  Object.prototype);
    console.log(User.prototype.__proto__ === User.__proto__.__proto__);
    console.log((new User()).__proto__ === User.prototype);
    console.log({}.__proto__ === Object.prototype); 
  </script>
</body>
```
![原型链](D:\workCode\FrontEndCode\JavaScript\原型链.png)
4. 根据原型链创建对象
```html
  <script>
    function User(name, age) {
      this.name = name
      this.age = age
    }
    // 使用对象创建对象
    const obj = new User('zs', 123)
    // 获得其原型对象得构键(constructor)
    const constructor = obj.__proto__.constructor
    // 更据其原型创建对象
    const obj2 = new constructor('ls', 19)
    console.log(obj2);
  </script>
```
### (3)原型的使用技巧
+ this跟原型无太大关系,不要滥用原型
1. 原型和属性的检测
```js
function User() {}
const user = new User()
// user的原型是否指向User的构造原型
console.log(user instanceof User)
// User.prototype是否在user的原型链上
console.log(User.prototype.isPrototypeOf(user))


const obj = { name: 'zs' }
const obj1 = { age: 19 }
// obj1设置成obj的原型
Object.setPrototypeOf(obj, obj1)
// 会检测原型的上的数据和对象本身数据
console.log('age' in obj)
// for in 会遍历原型链
for (const key in obj) {
  if (obj.hasOwnProperty(key)) {
    console.log(key)
  }
}

```
2. 原型的借用
```js
let obj = {
  data: [1, 99, 5, 67, 7, 8],
}
Object.setPrototypeOf(obj, {
  max() {
    return this.data.sort((a, b) => b - a)[0]
  },
  min(data) {
    return data.sort((a, b) => a - b)[0]
  },
})

console.log(obj.max())
console.log(obj.min(obj.data))

let zs = {
  lesson: { js: 99, node: 90, java: 40, vue: 80 },
  get data() {
    // 获取对象中的值
    return Object.values(this.lesson)
  },
}
console.log(Object.values(zs.lesson))
// 使用apply
console.log(obj.max.apply(zs))
// 使用call
console.log(obj.min.call(null, Object.values(zs.lesson)))
// 借用Math的方法
console.log(Math.max.apply(null, Object.values(zs.lesson)))
```
3. 节点借用数组的方法
```html
<body>
  <button>1</button>
  <button>2</button>
  <button>3</button>
  <script>
    const btns = document.querySelectorAll('button')
    // 节点数组中没有filter等方法,数组中有
    console.log(btns);
    // 借用方法
    Array.prototype.filter.call(btns, item => {
      if (item.innerHTML > 2) {
        item.addEventListener('click', () => {
          alert('我最大')
        })
      }

    })
  </script>
</body>
```
4. 构造函数合理的添加方法
```js 
function User(name) {
  this.name = name
}
// 方法放入构造原型上减小内存的开销
User.prototype = {
  constructor: User,
  getName() {
    console.log(this.name)
  },
}

let zs = new User('zs')
zs.getName()
```
5. 设置和读取原型
```js
const user = {
  show() {
    console.log('显示')
  },
}
// 定义对象的原型
let obj = Object.create(user, {
  name: {
    value: '后盾人',
  },
})

let obj2 = {}
obj2.__proto__ = user

Object.setPrototypeOf(obj2, user) // 标准

// 输出原型
console.log(obj2.__proto__)
console.log(Object.getPrototypeOf(obj2)) // 标准
```
6. __proto__的实质是访问器
```js
<script>
    // __proto__的实质是访问器
    const user = {
      name: 'zs',
      proto: {}, // 原型对象,无法直接读取
      get _proto_() {
        return proto
      },
      set _proto_(value) {
        if (value instanceof Object) {
          this.proto = value
        }
      },
    }
    Object.setPrototypeOf(user, null)
    // 原型对象必须是对象
    console.log(user);
  </script>
```
### (4)原型的继承和多态
1. 改变构造函数的构造原型不叫继承
```js
function User() {}
User.prototype.name = 'zs'

function Admin() {}
// 不合理
Admin.prototype.role1 = function () {
  console.log('方法丢失')
}
// 改变构造函数的原型不叫继承
Admin.prototype = User.prototype
// 不合理
Admin.prototype.role2 = function () {
  console.log('方法添加到了父级')
}

let admin = new Admin()
console.log(admin.name)

```
2. 原型的继承
```js
function User() {}
User.prototype.name = 'zs'

function Admin() {}
Admin.prototype.role = function () {
  console.log('我是子集方法')
}

// 改变构造原型的原型的指向父级的否则原型
Admin.prototype.__proto__ = User.prototype
// 构建对象仍然有role方法
const admin = new Admin()
admin.role()
```
3. 继承的改进
```js
function User() { }
    User.prototype.name = 'zs'
    /**
     * Admin.prototype.__proto__ = User.prototype
     * 因为:new User().__proto__ === User.prototype
     * 所以:Admin.prototype.__proto__ = new User().__proto__
     * 消去__proto__
     *  Admin.prototype = new User()
     *  数学的方法在程序中不同,上面消去__proto__后直接改变了prototype的指向
     *  所以:子集自己的方法要定义在继承下面,才可以使用
     * */

    // 直接将父级构造原型指向构建函数
    function Admin1() { }
    // 
    Admin1.prototype = new User()
    // 这样原型就改变了,子集自己的方法要定义在继承下面
    Admin1.prototype.role = function () {
      console.log('我是子集方法')
    }
    // 构建对象仍然有role方法
    const admin1 = new Admin1()
    admin1.role()
    
```
4. 继承改进后constructor问题
```js
   function User() { }

    function Admin() { }
    // 继承
    Admin.prototype = new User()

    console.dir(Admin.prototype.constructor) // constructor没有指向Admin而是User
    // new User()中没有constructor指向Adminm,给原型添加上
    Admin.prototype.constructor = Admin
    console.dir(Admin.prototype.constructor)
    // 遍历出constructor不合理
    for (const key in (new Admin())) {
      console.log(key); // constructor
    }

    // 直接添加constructor会导致其可以遍历
    Object.defineProperty(Admin.prototype, 'constructor', {
      value: Admin,
      enumerable: false
    })
    for (const key in (new Admin())) {
      console.log(key);
    }
```
5. 继承后调用父级的变量初始化
```js
 // 使用父级初始化变量
    function User(name, age) {
      // this指向的是window
      this.name = name
      this.age = age
    }
    // apply方法
    // function Admin(introduce, ...args) {
    //   // 调用父级的变量
    //   User.apply(this, args)
    //   this.introduce = introduce
    // }
    // 构建
    //  const admin = new Admin('666', 'zs', 18,)
    function Admin(name, age, introduce) {
      // 调用父级的变量
      User.call(this, name, age)
      this.introduce = introduce
    }
    // 继承
    Admin.prototype = new User()
    Object.defineProperty(Admin.prototype, 'constructor', {
      value: Admin,
      enumerable: false
    })

    // 构建
    const admin = new Admin('zs', 18, '666')
    console.log(admin);
```
6. 多态,多种不同的形态产生不同的结果
```js
function User() {}
User.prototype.show = function() {
  console.log(this.description());
};

function Admin() {}
Admin.prototype = Object.create(User.prototype);
Admin.prototype.description = function() {
  return "管理员在此";
};

function Member() {}
Member.prototype = Object.create(User.prototype);
Member.prototype.description = function() {
  return "我是会员";
};

function Enterprise() {}
Enterprise.prototype = Object.create(User.prototype);
Enterprise.prototype.description = function() {
  return "企业帐户";
};

for (const obj of [new Admin(), new Member(), new Enterprise()]) {
  obj.show();
}
```
### (5)原型继承的封装和多继承
1. 继承后方法的添加和重写
```js
  function User() { }
    User.prototype.show = function () { console.log('show'); }
    function Admin() { }
    // 继承
    Admin.prototype = new User()
    Object.defineProperty(Admin.prototype, 'constructor', {
      value: Admin,
      enumerable: false
    })
    // 方法添加和重写
    Admin.prototype.show = function () {
      console.log('children-show');
    }
    
    const admin = new Admin()
    admin.show()
```
2. 使用原型工厂封装继承
```js
function extend(children, parent) {
  // 继承
  children.prototype = new parent()
  Object.defineProperty(children.prototype, 'constructor', {
    value: children,
    enumerable: false,
  })
}

function User() {
  this.name = 'zs'
}
function Admin() {}
extend(Admin, User)

const admin = new Admin()
console.log(admin.name)
```
3. 使用对象工厂完成继承
```js
// 对象工厂(函数不能用name)
function User(sname, age) {
  this.sname = sname
  this.age = age
}
// retrun 一个原型指向父级的对象
function createExtend(sname, age) {
  const extend = {}
  Object.setPrototypeOf(extend, User)
  User.call(extend, sname, age)
  return extend
}

let admin = createExtend('zs', 18)
console.log(admin.sname)

```
4. 多继承的问题
```js
function extend(children, parent) {
  // 继承
  children.prototype = new parent()
  Object.defineProperty(children.prototype, 'constructor', {
    value: children,
    enumerable: false,
  })
}

function User() {}
function Admin() {}
// 一个用户类是用户也是管理员,用户更管理员
// 没有关系但是要其继承用户和管理员就要强加关系
extend(Admin, User)
User.prototype.show1 = function () {
  console.log('User')
}
Admin.prototype.show2 = function () {
  console.log('Admin')
}
function user() {}
extend(user, Admin)


const u = new user()
u.show1()
u.show2()

```
5. 多继承主类和功能类
```js
function extend(children, parent) {
  // 继承
  children.prototype = new parent()
  Object.defineProperty(children.prototype, 'constructor', {
    value: children,
    enumerable: false,
  })
}

function User() {}
// 一个用户类是用户也是管理员,用户更管理员
User.prototype.show1 = function () {
  console.log('User')
}
const Admin = {
  show2() {
    console.log('Admin')
  },
}
function user() {}
extend(user, User)
// 一个主类其他功能类型
Object.assign(user.prototype, Admin)
// 但是如果两中父级中存在相同的方法就会混乱
const u = new user()
u.show1()
u.show2()

```
6. 使用原型实现tab栏切换
```js
<style>
  * {
    padding: 0;
    margin: 0;
  }

  body {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
  }

  main {
    width: 400px;
    flex-direction: column;
    position: relative;
    margin-right: 20px;
  }

  main nav {
    display: flex;
    height: 50px;
    align-items: center;
  }

  main nav a {
    background: #95a5a6;
    margin-right: px;
    padding: 10px 20px;
    border: solid 1px #333;
    color: #fff;
    text-decoration: none;
  }

  main nav a:first-of-type {
    background: #e67e22;
  }

  section {
    height: 200px;
    width: 100%;
    background: #f1c40f;
    position: absolute;
    font-size: 5em;
    display: none;
  }

  .hd-tab section:first-of-type {
    display: block;
  }

  section:nth-child(even) {
    background: #27ae60;
    display: block;
  }
</style>

<body>
  <main class="tab1">
    <nav>
      <a href="javascript:;">1</a>
      <a href="javascript:;">2</a>
    </nav>
    <section>1</section>
    <section>2</section>
  </main>
  <main class="tab2">
    <nav>
      <a href="javascript:;">1</a>
      <a href="javascript:;">2</a>
    </nav>
    <section>1</section>
    <section>2</section>
  </main>
</body>

<script>
  //继承工厂
  function extend(children, parent) {
    children.prototype = new parent()
    Object.defineProperty(children.prototype, 'constructor', {
      value: children,
      enumerable: false,
    })
  }
  function Animation() { }
  Animation.prototype.hide = function () {
    this.style.display = 'none'
  }
  Animation.prototype.show = function () {
    this.style.display = 'block'
  }
  Animation.prototype.background = function (color) {
    this.style.background = color
  }

  function Tab(el) {
    this.tab = document.querySelector(el)
    this.links = this.tab.querySelectorAll('a')
    this.sections = this.tab.querySelectorAll('section')
  }
  extend(Tab, Animation)
  Tab.prototype.run = function () {
    this.bindEvent()
  }
  Tab.prototype.bindEvent = function () {
    this.links.forEach((el, i) => {
      el.addEventListener('click', () => {
        this.reset()
        this.action(i)
      })
    })
  }
  Tab.prototype.action = function (i) {
    this.background.call(this.links[i], "#e67e22")
    this.show.call(this.sections[i])
  }
  Tab.prototype.reset = function () {
    this.links.forEach((el, i) => {
      this.background.call(this.links[i], '#95a5a6')
      this.hide.call(this.sections[i])
    })
  }
  new Tab('.tab2').run()
  new Tab('.tab1').run()
</script>
```
## 5. 类与继承
### (1)类的介绍
1. 类的基本使用
```js
class User {
  name='zs'
  constructor(name) {
    this.name = name
  }
  getName() {
    return this.name
  }
}

const user = new User('zs')
console.log(user.getName());
```
2. 函数声明对象和类声明对象方法区别
```js
class User {
  show() {}
}

function User1() {}
User1.prototype.show = function () {}
// class中声明的方法挂载到原型无法被变遍历
console.log(Object.getOwnPropertyDescriptor(User.prototype, 'show'))
console.log(Object.getOwnPropertyDescriptor(User1.prototype, 'show'))

```
3. 面向对象静态属性的体现
```js
    // 面向对象静态属性的体现
    function User() { }
    // 分配给静态函数的属性
    User.sname = 'zs'
    User.show = function () {
      console.log('静态方法')
    }
    console.dir(User1)
    User1.show()

    // 类的静态方法
    class User1 {
      static sname = 'zs'
      static show() {
        console.log('静态方法')
      }
    }
    console.dir(User) // 类的静态方法无法被遍历
    User.show()




```
4. 类中的访问器
```js
class User {
  constructor(name) {
    this.data = { name };
  }
  get name() {
    return this.data.name;
  }
  set name(value) {
    if (value.trim() == "") throw new Error("invalid params");
    this.data.name = value;
  }
}
let hd = new User("zs");
hd.name = "ls";
console.log(hd.name);
```
### (2)属性保护
1. 命名保护
```js
class User {
  _age = 18
  constructor(name) {
    this.name = name
  }
  set age(age) {
    if (typeof age !== 'number') {
      throw new Error('类型错误')
    }
  }
}

const user = new User()
user.age = 'zs'
```
2. 受保护(protected)的属性Symbol定义
```js
// Symbol定义受保护的属性
const AGE = Symbol('age')
class User {
  [AGE] = 18
  set age(age) {
    this[AGE] = age
  }
  get age() {
    return this[AGE]
  }
}
class Admin extends User {
  constructor(name) {
    super()
    this.name = name
  }
}

const admin = new Admin('zs')
// 无法直接修改值,通过访问器修改
// 受保护的属性是可以被继承使用的
admin.age = 22
console.log(admin.age)

```
3. 受保护(protected)的属性WeakMao定义
```js
const AGE = new WeakMap()
class User {
  constructor() {
    AGE.set(this, 18)
  }
  set age(age) {
    AGE.set(this, age)
  }
  get age() {
    return AGE.get(this)
  }
}
class Admin extends User {
  constructor(name) {
    super()
    this.name = name
  }
}

const admin = new Admin('zs')
// 无法直接修改值,通过访问器修改
// 受保护的属性是可以被继承使用的
admin.age = 22
console.log(admin.age)

```
5. 私有属性
```js
// 私有属性
class User {
  #age = 15
  // 如果父类里面定义了访问器，则子类可以访问
  // set age(age) {
  //   this.#age = age
  // }
  // get age() {
  //   return this.#age
  // }
}
class Admin extends User {
  constructor(name) {
    super()
    this.name = name
  }
  // 子类里面定义了访问器，无法访问
  // set age(age) {
  //   this.#age = age
  // }
  // get age() {
  //   return this.#age
  // }
}

const admin = new Admin()
console.log(admin.age)

```
### (3)继承的详解
1. 类继承的原理
```js
function User(name) {
  this.name = name
}
User.prototype.getName = function () {
  return this.name
}
// 属性的继承
function Admin(name) {
  User.call(this, name) //子类申明，相当与super
}
// 方法的继承
Admin.prototype = new User()
Object.defineProperty(Admin.prototype, 'constructor', {
  value: Admin,
  enumerable: false,
})

const admin = new Admin('zs')
console.log(admin.getName())

 // 上面是原理

class User {
  constructor(name) {
    this.name = name
  }
  getName() {
    return this.name
  }
}
class Admin extends User {
  constructor(name, age) {
    // 为啥调用用super ，因为要继承父级的属性
    super(name)
    this.age = age
  }
}

const admin = new Admin('zs')

console.log(admin.getName());
```
2. super的原理
```js
class User {
  getName() {
    return 'zs'
  }
}
class Admin extends User {
  constructor() {
    super()
  }
  getName() {
    return super.getName()
  }
}
// super调用父级的方法
let obj = {
  name: 'zs',
  getName() {
    console.log(this.name)
  },
}

let obj2 = {
  __proto__: obj,
  name: 'ls',
  getName() {
    this.__proto__.getName.call(this)
  },
}
obj2.getName()

```
3. super的优势
```js
// super调用父级的方法
let obj = {
  name: 'zs',
  getName() {
    console.log(this.name)
  },
}

let obj2 = {
  __proto__: obj,
  name: 'ls',
  getName() {
    // this.__proto__.getName.call(this)
    super.getName()
  },
}
let obj3 = {
  __proto__: obj2,
  name: 'ww',
  getName() {
    // this.__proto__.getName.call(this) // 多级调用报错
    super.getName()
  },
}
obj3.getName()

```
4. 使用super调用父类方法
```js
class User {
  show() {
    return '父类的方法'
  }
}
class Admin extends User {
  constructor() {
    super()
  }
  hide() {
    return '子类的方法'
  }
  showHide() {
    console.log(this.hide() + super.show())
  }
}

const admin = new Admin()
admin.showHide()

```
5. 静态方法的原理
```js
function UserFn() { }
UserFn.show = function () {
  return '父类的方法'
}
function AdminFn() {}
Object.setPrototypeOf(AdminFn, UserFn)
console.log(AdminFn.show())

// 类实现静态方法实行
class User {
  static show() {
    return '父类的方法'
  }
}
class Admin extends User {}

console.log(Admin.show())
```
6. instanceof的原理
```js
const obj = new Object()

// Object 有构造原型，而通过Object构建的对象是指向其构造原型
function User() {}
const user = new User()
/**
 * user的原型指向User的构造原型
 * user原型的原型指向Object的构造原型
 * User的构造原型的原型指向Object的构造原型
 *
 * User的原型指向了函数原型
 * 函数也可以使用对象的方法，函数的原型必定指向对象
 * User的原型的原型指向了对象的构造原型
 */

function checkinstanceof(obj, constructor) {
  if (!Object.getPrototypeOf(obj)) return false
  if (Object.getPrototypeOf(obj) === constructor.prototype) return true
  return checkinstanceof(Object.getPrototypeOf(obj), constructor)
}

console.log(checkinstanceof(user, Object))

// isPrototypeOf的使用
class User {}
class Admin extends User {}
let hd = new Admin();
console.log(Admin.prototype.isPrototypeOf(hd));
console.log(User.prototype.isPrototypeOf(hd));
```
7. 继承内置类
```js
// 继承,扩展内置类型
function ArrFn(...args) {
  args.forEach((item) => this.push(item))
}
ArrFn.prototype = new Array()
ArrFn.prototype.first = function () {
  return this[0]
}
let arrfn = new ArrFn(1, 2, 3, 4)
console.log(arrfn.first())

class Arr extends Array {
  constructor(...args) {
    super(...args)
  }
  first() {
    return this[0]
  }
}
let arr = new Arr(1, 2, 3, 4)
console.log(arr.first())

```
8. mixin实现类中增加功能
```js
const Tool = {
  max(key) {
    return this.data.sort((a, b) => b[key] - a[key])[0];
  }
};

class Lesson {
  constructor(lessons) {
    this.lessons = lessons;
  }
  get data() {
    return this.lessons;
  }
}

Object.assign(Lesson.prototype, Tool);
const data = [
  { name: "js", price: 100 },
  { name: "mysql", price: 212 },
  { name: "vue.js", price: 98 }
];
let hd = new Lesson(data);
console.log(hd.max("price"));
```
9. 类实现tab选项栏显示隐藏
```js
<body>
  <div class="slide s1">
    <dt>1</dt>
    <dd>
      <div>1</div>
    </dd>
    <dt>2</dt>
    <dd>
      <div>2</div>
    </dd>

  </div>
</body>

<script>
  class Animation {
    constructor(el) {
      this.el = el
      this.isShow = true
      this.defaultHeight = this.height;
    }
    get height() {
      return window.getComputedStyle(this.el).height.slice(0, -2) * 1;
    }
    set height(value) {
      this.el.style.height = value + 'px'
    }
    // 隐藏
    hide(callback) {
      this.isShow = false
      let id = setInterval(() => {
        if (this.height == 0) {
          callback && callback();
          clearInterval(id)
          return
        }
        this.height = this.height - 1
      }, 1)


    }
    // 显示
    show(callback) {
      this.isShow = false
      let id = setInterval(() => {
        if (this.height >= this.defaultHeight) {
          clearInterval(id)
          callback && callback();
          return
        }
        this.height = this.height + 1
      }, 1)

    }
  }

  class Slide {
    constructor(el) {
      this.el = document.querySelector(el);
      this.links = this.el.querySelectorAll("dt");
      this.panels = [...this.el.querySelectorAll("dd")].map(
        item => new Panel(item)
      );
      this.bind();
    }
    bind() {
      this.links.forEach((item, i) => {
        item.addEventListener("click", () => {
          this.action(i);
        });
      });
    }
    action(i) {
      Panel.hideAll(Panel.filter(this.panels, i), () => this.panels[i].show())

    }
  }


  class Panel extends Animation {
    static num = 0
    static hideAll(items, callback) {
      if (Panel.num > 0) return
      items.forEach(item => {
        Panel.num++
        item.hide(() => {
          Panel.num--
        })
      })
      callback && callback()
    }
    static filter(items, i) {
      return items.filter((item, index) => index !== i)
    }
  }
  let hd = new Slide(".s1");
</script>
```
## 6. 模块化开发
### (1)模化的简单使用和分析
1. 模块的原理分析
```html
 <script>
    const module = (function () {
      const moduleList = {}
      function defaults(name, modules, action) {
        // 提取模块
        modules.map((item, i) => {
          modules[i] = moduleList[item]
        })
        // 存储模块
        moduleList[name] = action.apply(null, modules)
      }
      return { defaults }
    })()

    module.defaults('show', [], function () {
      return {
        first(arr) {
          return arr[0]
        },
        max(arr) {
          return arr.sort((a, b) => b - a)[0]
        }
      }
    })

    module.defaults('lesson', ['show'], function (show) {
      let data = [2, 3, 45, 67, 8, 99]
      console.log(show.max(data, "price"));
    })
  </script>
```
2. 浏览器的模块化读取
```html
<!-- 1.js文件 -->
const title = 'zs'
export { title }
<!-- js文件 -->
  <script type="module">
    import { title } from './1.js'
    console.log(title);
  </script>  

```
3. 模块的一些特点
```html
<script type="module">
  /*
  module在所有 html 解析后才执行
  模块默认运行在严格模式
  模块都有独立的顶级作用域
  预解析:
  模块在导入时只执行一次解析，之后的导入不会再执行模块代码，
  而使用第一次解析结果，并共享数据
  */
  // 在body前面可以读取dom
  console.log(document.querySelector('button'));
  // 工作在严格模式
  console.log(this); //undefiend
  //只会解析一次
  import { title } from './1.js'
  import { title } from './1.js'
  console.log(title);
</script>
```
### (2)模块的导入导出
1. 具名导出
```html
<!-- 1.js -->
export const title = 'zs'
const url = 'ss'
export { url }
<!-- 1.js -->
<script type="module">
  import { title,url } from './1.js'
  console.log(title);
</script>
```
2. 批量导入
```html
<!-- 1.js -->
export const title = 'zs'
const url = 'ss'
export { url }
<!-- 1.js -->
<script type="module">
  import * as name from './1.js'
  console.log(name.title, name.url);
</script>
```
3. 默认导出
```html
<!-- 1.js -->
const title = 'zs'
export default title
<!-- 1.js -->

<script type="module">
  import title1 from './1.js'
  console.log(title1);
</script>
```
4. 混合导出
```html
<!-- 1.js -->
export const name = 'zs'
export const age = 14
export default name
<!-- 1.js -->
<script type="module">
  import name1,{name,age} from './1.js'
  console.log(name1,name,age);
</script>
```
5. 导出合并
```html
<!--index.js  -->
export * as one from './1.js'
export * as two from './2.js'
<!--index.js  -->
<script type="module">
  import { one, two } from './module/index.js'
  console.log(one);
  console.log(two);
  console.log(one.default);
  console.log(two.default);
</script>
```
6. 动态导入
```html
<script type="module">
  if (true) {
    import('./1.js').then(res => {
      console.log(res.default);
    })
  }
</script>
```
## 7. 正则表达式
### (1)正则表达式基本使用
1. 正则表达式的优势
```js
// 分割字符串中数字
let str = 'asd12esq21ed12'
// 非正则方法
let arr = [...str]
console.log(arr.filter((item) => !Number.isNaN(parseInt(item))))
// 正则方法
console.log(str.match(/\d/g))
```
2. 正则表达式的声明
```js
const str = 'aba'
// 字面量
let reg = /b/
// eval,字符串转化正则
let b = 'b'
let reg2 = eval(`/${b}/`)
// 构造函数 参数：匹配内容，匹配模式
let reg3 = new RegExp(b)

console.log(reg, reg2, reg3)

```
3. 模拟搜索关键字替换
```html
 <div>
    111刘
  </div>
  <script>
    let con = prompt()
    let reg = new RegExp(con, 'g')
    let div = document.querySelector('div')
    div.innerHTML = div.innerHTML.replace(reg, item => {
      return `<span style="color:red">${item}</span>`
    })
  </script>
</body>
```
4. 正则中的字符
```js
const str = '1234abcd.'

// 选择符
console.log(/1|2/.test(str))

// 原子表
console.log(/[12]/.test(str))

// 转义符
// .除了换行外任何字符 .普通点,
console.log(/\./.test(str))
// 转义符在构造函数创建时要\\
console.log(new RegExp('\\.'))

// 边界符 ^开始 $结束，开始和结束都符合(完全符合)，用于表单验证,
console.log(/^\d|\w$/.test(str))
```
6. 元子字符
```js
/**
 * \d	匹配任意一个数字	[0-9]
 * \D	与除了数字以外的任何一个字符匹配	[^0-9]
 * \w	与任意一个英文字母,数字或下划线匹配	[a-zA-Z_]
 * \W	除了字母,数字或下划线外与任何字符匹配	[^a-za-z_]
 * \s	任意一个空白字符匹配，如空格，制表符\t，换行符\n	[\n\f\r\t\v]
 * \S	除了空白符外任意一个字符匹配	[^\n\f\r\t\v]
 * .  匹配除换行符外的任意字符
 */
const str = `a1b2c3:$
1d
`
// + 匹配一个或多个数字
console.log(str.match(/\d+/g))
// + 匹配一个或多个非数字
console.log(str.match(/\D+/g))
// + 匹配一个或多个字母,数字或下划线
console.log(str.match(/\w+/g))
// + 匹配一个或多个非字母,数字或下划线
console.log(str.match(/\W+/g))
// 匹配一个或多个空白字符匹配，如空格，制表符\t，换行符\n
console.log(str.match(/\s+/g))
// 匹配一个或多个除了空白符外任意一个字符匹配
console.log(str.match(/\S+/g))

// 验证邮箱
const reg=/^\w+@\.\w+$/
// 验证用户名
const reg = /^[a-z]\w{4,8}$/
// 匹配所有字符
let hd = `
  <span>
   1
   2
  </span>
`
let res = hd.match(/<span>[\s\S]+<\/span>/)
console.log(res[0])

```
### (2)匹配模式
1. i统一小写匹配
```js
const str = 'ABC'
// 结果null
console.log(str.match(/[abc]/))
// 结果A
console.log(str.match(/[abc]/i))
```
2. g全局匹配
```js
const str = 'ABC'
// 结果A
console.log(str.match(/[abc]/i))
// 结果ABC
console.log(str.match(/[abc]+/i))
// 结果A,B,C
console.log(str.match(/[abc]/gi))
```
3. m内容视为多行匹配
```js
const str = `
#1 js,200元 #
#2 php,300元 #
#3 css,599元 #
#4 node.js,180元 #
`
console.log(str.match(/^\s*#\d+\s+.+\s+#$/gm))

```
4. s内容视为单行匹配
```js
let hd = `
  a
   1
   2
  a
`
let res = hd.match(/a[\s\S]+a/gs)
console.log(res)

```
5. u简写属性匹配
```js
const str = 'abc123,流批'
// L属性表示是字母
console.log(str.match(/\p{L}/gu))
// P 表示标点符号
console.log(str.match(/\p{P}/gu))
// sc=Han 匹配中文
console.log(str.match(/\p{sc=Han}/gu))

```
6. y遍历匹配第一个字符
```js
const str = 'abcabc'

const reg1 = /a/y
// 加入y后匹配移除就不会继续匹配了
console.log(reg1.exec(str))
console.log(reg1.exec(str))

```
7. 遍历模式
```js
// 遍历匹配
const str = 'abc'
// 必须时全局属性
const reg = /\w/g
console.log(reg.lastIndex) // 当前位置
console.log(reg.exec(str))
console.log(reg.lastIndex) // 当前位置
console.log(reg.exec(str))
console.log(reg.lastIndex) // 当前位置
console.log(reg.exec(str))

```
### (3)原子表和原子组
1. 原子表的基本使用
```js
const str = 'abc'
// 匹配[]中任意字符
console.log(str.match(/[ab]/))

const str1 = '2022/11/18'
// 原子表中除了/之外的字符无需转义
const reg1 = /^\d{4}[-\/]\d{2}[-\/]\d{2}$/
console.log(str1.match(reg1))

```
2. 原子表的区间匹配
```js
const str = 'abc123ABC'
console.log(str.match(/[a-z0-9A-Z]+/))

// 验证用户名(字母开始，后跟字母数字下划线)
const reg = /^[a-z]\w{3,6}$/i

const name1 = 'a1231_2'
console.log(name1.match(reg))

```
3. 原子表的排除匹配
```js
const str = 'abc'

// 匹配除了a和b
console.log(str.match(/[^ab]/g))
// 匹配一段有中文数字
const str1 = '张三:010-1221312,李四:010-2341312'
console.log(str1.match(/[^\d:\-,]+/g))
// 匹配所有内容
console.log(str1.match(/[\s\S]+/)[0])
```
4. 原子组的基本使用
```js
const str = `
<h1>
abc
</h1>`
const reg = /<(h[1-6])>[\s\S]*<\/\1>/g // \1表和前面的原子组为一组
console.log(str.match(reg))

```
5. 原子组实现邮箱匹配
```js
const str = '2300071698@qq.com.cn'

let reg = /^[\w-]+@([\w-]+\.)+(com|org|cc|cn)$/g

console.log(str.match(reg))

```
6. 原子组的引用分组
```js
const str = `
  <h1>1</h1>
  <span>2</span>
  <h2>3</h2>
`
const str1 = str
const str2 = str

const reg = /<(h[1-6])>([\s\S]*)<\/\1>/g
// $2表示正则中第二个匹配的原子组
console.log(str.replace(reg, '$2'))
console.log(str2.match(reg))
// y1表示第一个原子组
str1.replace(reg, (item, y1, y2) => {
  console.log(y2)
})

// 原子组?:只希望组参与匹配，便不希望返回到结果中使用
const reg1 = /<(h[1-6])>(?:[\s\S]*)<\/\1>/g
// $2无意义
console.log(str2.replace(reg1, '$2'))
console.log(str2.match(reg1))

```
### (4)匹配方法
1. 贪婪匹配
```js
const str = 'aabbbbb' //
// +重复一次或更多次
console.log(str.match(/ab+/))
// *重复零次或更多次,b匹配0个结果为a
console.log(str.match(/ab*/))
// {}重复 n 次
console.log(str.match(/ab{5}/))
// {n,}重复 n 次或更多次
console.log(str.match(/ab{1,}/))
// {n,m}重复 n 到 m 次
console.log(str.match(/ab{1,5}/))
// ? 0个或1个
console.log(str.match(/ab?/))

// 验证密码必须包含大写字母并在 5~10 位之间
const regs = [/^[a-zA-Z0-9]{5,10}$/, /[A-Z]/]
const password = 'Wwqdsaw123'
console.log(regs.every((item) => item.test(password)))

```
2. 禁止贪婪
```js
// *?	重复任意次，但尽可能少重复
// +?	重复 1 次或更多次，但尽可能少重复
// ??	重复 0 次或 1 次，但尽可能少重复
// {n,m}?	重复 n 到 m 次，但尽可能少重复
// {n,}?	重复 n 次以上，但尽可能少重复

const str = `<span>houdunwang</span>
<span>hdcms.com</span>
<span>houdunren.com</span>`
// 没有紧张贪婪
const reg = /<span>[\s\S]+<\/span>/ // 全匹配
console.log(str.match(reg))
// 禁止贪婪
const reg1 = /<span>[\s\S]+?<\/span>/ //匹配第一个span
console.log(str.match(reg1))

```
3. 字符方法
```js
const str = 'aabbcc'
// search
console.log(str.search(/b/))
// match
const res = str.match(/(b)/)
console.log(res[0]) // 匹配结果
console.log(res['index']) // 出现位置
// matchAll 返回迭代对象
let reg = /[a-z]/gi
for (const iterator of str.matchAll(reg)) {
  console.log(iterator)
}
// split 使用正则拆分
console.log(str.split(/bb/))
// replace
// $&表示匹配内容
console.log(str.replace(/bb/, '$&'))
// $1表示第一个元组
console.log(str.replace(/(bb)/, '$1'))
// $`表示匹配的子串左边的内容
console.log(str.replace(/(bb)/, '$`'))
// $'匹配的子串右边的内容
console.log(str.replace(/(bb)/, "$'"))

```
4. 原型定义matchAll方法
```js
String.prototype.matchAll = function (reg) {
  const res = this.match(reg)
  if (res) {
    let str = this.replace(res[0], '^', this.repeat(res[0].length))
    let match = str.matchAll(reg) || []
    return [res, ...match]
  }
}

const str = 'aabbcc'
console.log(str.matchAll(/(b)/))
```
5. 正则方法
```js
// test表单验证
const emil = 'asdasdsa@qq.com'
console.log(/[\w-]+@(\w+\.)+[a-z]+/i.test(emil))
// exec不使用 g 修饰符时与 match 方法使用相似
console.log(/[\w-]+@(\w+\.)+[a-z]+/.exec(emil))
// 使用 g 修饰符多次操作时使用同一个正则使用 
// 使用 g 修饰符最后匹配不到时返回 null
const reg = /b/g
let num = 0
while ((result = reg.exec('bbbb'))) {
  num++
}
console.log(num)
```
6. replace方法详解
```js
 content.innerHTML = content.innerHTML.replace(
    reg,
    (
      search, //匹配到的字符
      p1, //第一个原子组
      p2, //第二个原子组
      index, //索引位置
      source //原字符
    ) => {
      return `
    <${p1} class="hot">${p2}</${p1}>
    `;
    }
  );
```
7. 提取网页链接
```js
const str = ` <a style="color:red" href="http://www.baidu.com"></a>

<a href="http://yahoo.com"></a>`

const reg = /<a.*href=['"](http)(:\/\/)(www\.)?(\w+\.\w+)/g

str.replace(reg, (...args) => {
  const arr = []
  for (let i = 1; i < 5; i++) {
    if (!args[i]) {
      args.splice(i, 1)
    }
  }
  for (let key in args) {
    if (key > 0 && key < 5) arr.push(args[key])
  }
  console.log(arr.join(''))
})

```
8. 起别名提前网页链接
```js
const str = `<a style="color:red" href="http://www.baidu.com">百度</a>
<a href="http://yahoo.com">雅虎</a>`

// ?<link>给这段元组起别名
const reg = /<a.*?href=(['"])(?<link>.*)\1>(?<title>.*?)<\/a>/gi

const links = []
for (const iterator of str.matchAll(reg)) {
  links.push(iterator['groups'])
}
console.log(links)

```
### (5)断言匹配
1. 零宽先行断言?=exp
```js
// 零宽先行断言?=exp 匹配后面为 exp 的内容
const str = 'aaac'
const reg = /a(?=c)/
// 取后面为c的内容
console.log(str.match(reg))

// 取出后面为元的内容
const lessons = `
    js,200元,300次
    php,300.00元,100次
    node.js,180元,260次
  `
  // (?=元)是条件不是组
const reg = /[0-9]+\.?[0-9]+(?=元)/g
console.log(lessons.match(reg))

```
2. 零宽后行断言?<=exp 
```js
// 零宽后行断言 ?<=exp 匹配前面为 exp 的内容
const str = `
aaa
cccc
`
// 匹配前面是aaa的
const reg = /(?<=aaa)[\s\S]+/
console.log(str.match(reg))
// 匹配两个字母中间的内容
const str = `
aaa
cccc
bbb
`
const reg = /(?<=aaa)[\s\S]+(?=bbb)/
console.log(str.match(reg))

// 取a标签的链接
const str = `
<a href="https://baidu.com">百度</a>
<a href="https://yahoo.com">雅虎</a>
`
const reg = /(?<=href=(['"])).+(?=\1)/
console.log(str.match(reg))

```
3. 零宽负向先行断言(?!exp)
```js
// 零宽负向先行断言 后面不能出现 exp 指定的内容
const str = `abc123def`
// 取后面不是数字的
const reg = /[a-z]+(?!\d+)$/
console.log(str.match(reg))

// 用户名不能包含数字(不能出现.\d.)
const reg = /^(?!.*\d.*)[\w]+/

const cname = 'zs'
console.log(cname.match(reg))

```
4. 零宽负向后行断言(?<!exp) 
```js
// 零宽负向后行断言 前面不能出现 exp 指定的内容
// 取前面不是数字的字母
const str = 'abc123def'
const reg = /(?<!\d+)[a-z]+/
console.log(str.match(reg))


// 取前面不是数字的字母
const str = `
<a href="https://www.1.com/1.jpg">1.jpg</a>
<a href="https://oss.2.com/2.jpg">2.jpg</a>
<a href="https://cdn.3.com/2.jpg">3.jpg</a>
<a href="https://scc.4.com/2.jpg">3.jpg</a>`
const reg = /https:\/\/([a-z]+)?(?<!oss)\..+?(?=\/)/g
console.log(str.match(reg))

// 取网页中的图片
const str1 = `
<image src="https://www.1.com/1.jpg">1.jpg</a>
<image src="https://oss.2.com/2.jpg">2.jpg</a>
<image src="https://cdn.3.com/2.jpg">3.jpg</a>
<image src="https://scc.4.com/2.jpg">3.jpg</a>`
// 前面是image
const reg1 = /(?<=image)[\s]+src=['"](https:\/\/([a-z]+)?\.[\w]+\.[\w]+\/[\w]+\.(jpg|png))/gi

for (const iterator of str1.matchAll(reg1)) {
  console.log(iterator[1])
}

```
## 9. 异步编程Promise
### (1)回调以及Promise
1. 定时器的回调
```js
<style>
  div {
    width: 100px;
    height: 100px;
    background: yellowgreen;
    position: absolute;
  }
</style>

<body>
  <div></div>
</body>

<script>
  function interval(callback, delay) {
    let id = setInterval(() => callback(id), delay)
  }
  interval(function (id) {
    const div = document.querySelector('div')
    let left = parseInt(window.getComputedStyle(div).left)
    div.style.left = left + 1 + 'px'
    if (left >= 200) {
      clearInterval(id)
      interval((timer) => {
        let width = parseInt(window.getComputedStyle(div).width)
        div.style.width = width - 1 + 'px'
        if (width <= 20) {
          clearInterval(timer)
        }
      }, 1)
    }
  }, 1)
</script>
```
2. 回调地狱
```js
function notice(msg, callback) {
  callback(msg)
}
// 开始做饭
// 你的饭已经做好
// 我开吃了
// 我吃完饭了
// 事情结束
function meal() {
  notice('开始做饭', (msg) => {
    console.log(msg)
    notice('你的饭已经做好', (msg) => {
      console.log(msg)
      setTimeout(() => {
        notice('我开吃了', (msg) => {
          console.log(msg)
          notice('我吃完饭了', (msg) => {
            console.log(msg)
            notice('事情结束', (msg) => {
              console.log(msg)
            })
          })
        })
      }, 2000)
    })
  })
}
meal()

```
3. Promise解决回调地狱
```js
function notice(msg) {
  return new Promise((resolve, reject) => {
    resolve(msg)
  })
}
// 开始做饭
// 你的饭已经做好
// 我开吃了
// 我吃完饭了
// 事情结束
function meal() {
  notice('开始做饭')
    .then((res) => {
      console.log(res)
      return notice('你的饭已经做好')
    })
    .then((res) => {
      console.log(res)
      return notice('我开吃了')
    })
    .then((res) => {
      console.log(res)
      return notice('我吃完饭了')
    })
    .then((res) => {
      console.log(res)
      return notice('事情结束')
    })
    .then((res) => {
      console.log(res)
    })
}

meal()

```
4. Promise的介绍
```js
// pending 指初始等待状态，初始化 promise 时的状态
// resolve 指已经解决，将 promise 状态设置为fulfilled
// reject 指拒绝处理，将 promise 状态设置为rejected
// promise中的任务队列是微任务队列(先执行)
new Promise((resolve, reject) => {
  resolve('成功的信息')

  // reject('失败的信息')
}).then(
  (success) => {
    console.log(success) //'成功的信息'
  },
  (error) => {
    // console.log(error); // '失败的信息'
  },
)

```
4. Promise任务队列
```js
// 同步任务队列,宏任务队列,微任务队列
// 同步任务(new Promise)
new Promise((resolve) => {
  console.log('同步任务队列')
  // 宏任务(定时器  )
  setTimeout(() => {
    console.log('宏任务队列')
    // 加入微任务队列
    resolve('微任务队列')
  })
  // 微任务(then)
}).then((res) => {
  console.log(res)
})
// 同步任务队列 宏任务队列 微任务队列
// 宏任务队列添加了微任务
```
5. Promise接收带then方法的对象
```js
const obj = {
  then(resolve, reject) {
    resolve('成功')
  }
}
Promise.resolve(obj).then(res => {
  console.log(res);
})
```
### (2)Promise的详细使用
1. then的详细使用
```js
const p1 = new Promise((resolve, reject) => {
  reject('失败的信息')
})

const p2 = p1.then(
  (res) => {
    console.log(res)
  },
  (err) => {
    // console.log(err)
    // promise
    // return new Promise((resolve, reject) => {}) 等待
    // return {then(reslove, reject) {}}
  },
)
// 直接输出promise.then他是一个等待promise
console.log(p2)
/**
 * 放在宏任务中他是成功promise,先执行微任务
 *    return new Promise((resolve, reject) => {})
 * then中的逻辑如果返回的是一个的promise,他的结果是对应promise的状态
 *    return {then(reslove, reject) {}}
 * then中的逻辑如果返回的是一个包含then函数的对象则会被封装成promise
 *    throw new Error()
 * then中的逻辑发生了失败就先当与返回了一个失败的promise   
 * then中的逻辑如果返回是其他值都成功的promise
 *  */
setTimeout(() => {
  console.log(p2)
})

// 因为.then返回的是promise所以可以实现链式调用
p2.then((res) => {
  console.log(res)
})


```
2. catch的详细使用
```js
/**
 * promise中有三种失败的方法,then中也遵循
 * 1. 逻辑错误(会自定封装了try{}catch(e){})
 * 2. 抛出错误
 * 3. 调用reject
 * catch相当于只有一个错误结果的then,放回值也是Promise,同样支持链式调用
 */
const p1 = new Promise((resolve, reject) => {
  // reject('')
  // n + 1
  throw new Error()
})

const p2 = p1.then(null, (err) => {
  throw new Error()
})

// 使用catch进行捕获
const p3 = p2.catch((err) => {
  console.log(err)
})

```
3. finally的详细使用
```js
const p1 = new Promise((resolve, reject) => {
  resolve('1')
})
/**
 * 1. 不管成功和失败都会执行
 * 2. 等待状态不会执行
 * 3. 返回值是上一个promise结果
 * 4. finally中返回的值无论是什么值最后结果都是上一个promise结果
 *  */
const p2 = p1.finally(() => {
  console.log('')
  return new Promise((resolve, reject) => {
    resolve('2')
  })
})

setTimeout(() => {
  console.log(p2)
})

```
4. 使用Promise封装ajax
```js
function ajax(url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest()
    xhr.open('GET', url)
    xhr.send()
    xhr.onload = function () {
      if (this.status === 200) {
        resolve(JSON.parse(this.response))
      } else {
        reject('加载失败')
      }
    }
    xhr.onerror = function () {
      reject(this)
    }
  })
}

```
5. 使用Promise加载图片
```js
  <script>
    function loadImage(src) {
      return new Promise((resolve, reject) => {
        const image = new Image()
        image.src = src
        image.onload = () => {
          resolve(image)
        }
        image.onerror = reject
        document.body.appendChild(image)
      })
    }
    loadImage('./原型链.png').then(image => {
      image.style.border = "20px solid red"
      console.log(image);
    })
  </script>
```
6. 使用Promise封装定时器
```js
function setTime(time = 1000) {
  return new Promise((resolve, reject) => {
    // 1秒后执行resolve
    setTimeout(() => resolve('成功'), time)
  })
}

setTime(2000).then((res) => {
  console.log(res,'定时器')
})

```
7. 使用Promies封装持续定时器
```js
<style>
  div {
    width: 100px;
    height: 100px;
    background: yellowgreen;
    position: absolute;
  }
</style>

<body>
  <div></div>
</body>

<script>
  function interval(delay, callback) {
    return new Promise((resolve) => {
      const id = setInterval(() => callback(id, resolve), delay)
    })
  }
  const p1 = interval(1, (id, resolve) => {
    const div = document.querySelector('div')
    let left = parseInt(window.getComputedStyle(div).left)
    div.style.left = left + 1 + 'px'
    if (left >= 200) {
      clearInterval(id)
      resolve(div)
    }
  })
  const p2 = p1.then(div => {
    interval(1, (id, resolve) => {
      let width = parseInt(window.getComputedStyle(div).width)
      div.style.width = width - 1 + 'px'
      if (width <= 20) {
        clearInterval(id)
      }
    })
  })
</script>
```
### (3)Promise的方法
1. resolve方法模拟走缓存
```js
const p1 = Promise.resolve('成功').then((res) => {
  console.log(res)
})


function ajax(name) {
  // 创建缓存
  const cache = ajax.cache || (ajax.cache = new Map())

  // 判断缓存中有没有
  if (cache.has(name)) {
    console.log('走了缓存')
    return Promise.resolve(cache.get(name))
  }
  console.log('没有走缓存')
  return new Promise((reslove) => {
    cache.set(name, name)
    reslove(name)
  })
}

// 请求
ajax('张三').then((res) => {
  console.log(res)
})

setTimeout(() => {
  ajax('张三').then((res) => {
    console.log(res)
  })
}, 1000)

```
2. reject方法
```js
const p1 = Promise.reject('错误')
const p2 = p1.catch((res) => {
  console.log(res)
})

// 使用场景
new Promise((resolve, reject) => {
  resolve('1')
}).then((res) => {
  if (typeof res !== 'number') {
    return Promise.reject('类型不正确')
  }
}).catch(err => {
  console.log(err);
})

```
3. all方法
```js
/**
 * Promise.all
 * 1. 任何一个Promise执行失败都会返回错误的Promise
 * 2. 适用于一次发送多个异步操作
 * 3. 参数必须是可迭代类型，如 Array/Set
 * 4. 成功后返回Promise结果的有序数组
 */
// 请求函数
function ajax(info) {
  return Promise.resolve(info)
}
const p1 = ajax('第一个请求')
const p2 = ajax('第二个请求')

// 都成功结果是成功的Promise的有序数组
Promise.all([p1, p2]).then((res) => {
  console.log(res)
})

// 有一个失败就失败
Promise.all([p1, p2, Promise.reject('')])
  .then((res) => {
    console.log(res)
  })
  .catch((err) => {
    console.log(err)
  })

```
4. allSettled方法
```js
/**
 * Promise.allSettled
 * 1. 不关注Promise的失败情况,返回结果始终是成功
 * 2. 适用于一次发送多个异步操作
 * 3. 参数必须是可迭代类型，如 Array/Set
 * 4. 成功的Promise将{ status: 'fulfilled', value: '' }添加到数组中
 * 5. 成功的Promise将{ status: 'rejected', reason: '' }添加到数组中
 */
// 请求函数
function ajax(info) {
  return Promise.resolve(info)
}
const p1 = ajax('第一个请求')
const p2 = ajax('第二个请求')

// 不管中间的promise是失败还是成功结果返回结果都是成功promise
Promise.allSettled([p1, p2, Promise.reject('第三个请求')])
  .then((res) => {
    console.log(res)
  })
  .catch((err) => {
    console.log(err)
  })

```
5. race方法
```js
/**
 * Promise.race
 * 1. Promise 快用哪个结果是那个
 * 2. 适用于一次发送多个异步操作,处理容错异步
 * 3. 如果最快返加的状态为rejected 那整个promise为rejected执行 cache
 */
// 请求
function ajax(res, time, state = true) {
  return new Promise((resolve, rejcet) => {
    state ? setTimeout(() => resolve(res), time) : setTimeout(() => rejcet(res), time)
  })
}
//请求
const p1 = ajax('张三', 3000)
const p2 = ajax('请求超时', 2000, false)

// 超过两秒就会请求超时
Promise.race([p1, p2])
  .then((res) => {
    console.log('成功', res)
  })
  .catch((err) => {
    console.log('错误', err)
  })

```
### (4)Promise的微任务队列原理
1. 了解Promise的任务队列
```js
const p1 = Promise.resolve('1')

// 宏任务包微任务,微任务先执行,宏任务执行完已经返回了undefined无法达到队列执行效果
const p2 = p1.then((res) => {
  setTimeout(() => {
    console.log(res)
    return Promise.resolve(res)
  }, 1000)
})

// 宏任务包微任务,等待宏任务执行完成在执行后面的微任务
const p3 = p2.then((res) => {
  console.log(res)
  return {
    then(resolve) {
      setTimeout(() => {
        console.log('2')
        resolve('3')
      }, 1000)
    },
  }
})
// 等待上一个微任务执行完成
p3.then((res) => {
  console.log(res)
})

```
2. 使用Map实现任务队列
```js
function queue(num) {
  let p1 = Promise.resolve()
  num.map((item) => {
    p1 = p1.then((res) => {
      return item()
    })
  })
}

function p1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('p1')
      resolve()
    }, 1000)
  })
}
function p2() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('p2')
      resolve()
    }, 1000)
  })
}
queue([p1,p2])

```
3. 使用reduce实现任务队列
```js
function queue(num) {
  num.reduce((promise, n) => {
    return promise.then(() => {
      return new Promise((resolve) => {
        setTimeout(() => {
          console.log(n)
          resolve()
        }, 1000)
      })
    })
  }, Promise.resolve())
}
queue([1, 2, 3, 4, 5])

```
4. 使用Promise队列实现渲染
```js
  <script>
    class User {
      ajax(item) {
        return new Promise(resolve => {
          setTimeout(() => {
            resolve(item)
          }, 1000)
        })
      }
      render(arrs) {
        arrs.reduce((promise, user) => {
          return promise
            .then(_ => {
              return this.ajax(user)
            })
            .then(arr => {
              return this.view(arr)
            })
        }, Promise.resolve())
      }
      view(arr) {
        return new Promise(resolve => {
          const h2 = document.createElement('h2')
          h2.innerHTML = arr
          document.body.appendChild(h2)
          resolve()
        })
      }
    }

    new User().render(Array.from({ length: 10 }, (element, index) => index))
  </script>
```
### (5)async和await方法
1. async和await简单使用
```js
/**
 * 返回的值始终是Promise
 * @returns Promise
 */

async function p() {
  // return Promise.resolve(1)
  return 1
}

/**
 * @await 是then的语法糖
 */
async function p1() {
  // 加上await返回的结果是promise的结果
  const p2=await p()
  p().then((res) => {
    console.log(res===p2)
  })
}
p1()

```   
2. async延迟函数
```js
async function sleep(delay = 2000) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, delay)
  })
}

async function show() {
  for (const user of Array.from({ length: 10 }, (item, index) => index)) {
    await sleep() // 阻塞
    console.log(user)
  }
}
show()

```
3. 加载的进度条案例
```js
<body>
  <style>
    div {
      height: 50px;
      width: 0px;
      background: green;
    }
  </style>
  <div id="loading"></div>
  <script>
    function request(item) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(item)
        }, 2000)
      })
    }
    async function load(arr) {
      for (let i = 0; i < arr.length; i++) {
        const index = await request(arr[i])
        let progress = ((i + 1) / arr.length) * 100
        loading.style.width = progress + "%";
        loading.innerHTML = progress + '%'
      }
    }
    load(Array.from({ length: 10 }, (item, index) => index))
  </script>
```
4. 类中使用Promise
```js
function request(item) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(item)
    }, 2000)
  })
}
/**
 * 类中的then函数自动会封装成promise
 */
class User {
  constructor(name) {
    this.name = name
  }
  then(resolve, reject) {
    resolve(request(this.name))
  }
}

async function get() {
  let user = await new User(1)
  console.log(user)
}
get()



class User1 {
  constructor(name) {
    this.name = name
  }
  async get(name) {
    let user = await request(name)
    user = user + '1'
    return user
  }
}

const user1 = new User1()
user1.get("zs").then(res => {
  console.log(res);
})

```
5. async/await的错误处理
```js
async function func() {
  // n+1
  throw new Error()
}
// 多个 await 时当前面的出现失败，后面的将不可以执行
// 如果对前一个错误进行了处理，后面的 await 可以继续执行
// 1.使用catch捕获
func().catch((err) => {
  console.log('发生错误')
})
// 2.使用trycatch
async function func2() {
  try {
    const err = await func()
  } catch (error) {
    console.log('发生错误')
  }
}
func2()

```
6. await并发执行
```js
function func1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(1)
    }, 2000)
  })
}
function func2() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(2)
    }, 2000)
  })
}
// 队列执行
async function func3() {
  const p1 = await func1()
  const p2 = await func2()
  //  执行了4秒先后执行
  console.log(p1, 'f3')
  console.log(p2, 'f3')
}
func3()

// 并行执行
async function func4() {
  const p1 = func1()
  const p2 = func2()
  //  执行了2秒并行执行
  console.log(await p1)
  console.log(await p2)
  //  执行了2秒并行执行
  console.log(await Promise.all([func1(), func2()]))
}
func4()

```
## 10. Event loop
1. 宏任务和微任务
```js
// 宏任务
setTimeout(() => {
  console.log('宏任务')
}, 10)
// 同步任务
new Promise((resolve) => {
  resolve()
  console.log('同步任务')
})
// 微任务
Promise.resolve().then((res) => {
  console.log('微任务')
})

// 输出结果:同步任务 微任务 宏任务

```
2. 定时器实现进度条
```js
<body>
    <style>
        body {
            padding: 30px;
        }

        #hd {
            height: 30px;
            background: yellowgreen;
            width: 0;
            text-align: center;
            font-weight: bold;
        }
    </style>
    <div id="hd"></div>
</body>

<script>
    function view() {
        let i = 0;
        (function handle() {
            hd.innerHTML = i + "%";
            hd.style.width = i + "%";
            if (i++ < 100) {
                setTimeout(handle, 20);
            }
        })();
    }
    view();

</script>
```
3. 任务的分解
```js
let count = 0
let num = 987654321
function func1() {
  for (let i = 0; i < num; i++) {
    count += num--
  }
}
func1()
console.log('被阻塞了')

// 把任务分解成宏任务,放入队列中不影戏主进程
function func2() {
  for (let i = 0; i < 1000000; i++) {
    if (num <= 0) break
    count += num--
  }
  
  if (num > 0) {
    setTimeout(func2)
  }
}
func2()
console.log('没有被阻塞了')

```
4. 任务的分解Promise
```js
let count = 0
let num = 987654321

function func2() {
  return new Promise((resolve) => {
    setTimeout(() => {
      for (let i = 0; i < num; i++) {
        count += num--
      }
      resolve(count)
    })
  })
}
func2().then((res) => {
  console.log(res);
})
console.log('没有被阻塞了')

```
## 11. 手写Promise
### (1)实现基本的构建
1. Promise状态改变的实现
```js
class SXPromise {
  static PENDING = 'pending'
  static FULFILLEN = 'fulfilled'
  static REJECTED = 'rejected'
  constructor(callback) {
    // 初始状态
    this.status = SXPromise.PENDING
    // 默认值
    this.value = null
    /**
     * 1.调用回调改变状态
     * 2.回调中逻辑错误抛给拒绝
     */
    try {
      callback(this.#resolve.bind(this), this.#reject.bind(this))
    } catch (error) {
      this.#reject.bind(this)(error)
    }
  }
  /**
   * 1.状态的唯一性
   */
  #resolve(value) {
    if (this.status !== SXPromise.PENDING) return
    this.status = SXPromise.FULFILLEN
    this.value = value
  }
  #reject(reason) {
    if (this.status !== SXPromise.PENDING) return
    this.status = SXPromise.REJECTED
    this.value = reason
  }
}

console.log(
  new SXPromise((resolve, reject) => {
    // b + 1
    // reject('拒绝')
    resolve('解决')
  }),
)

```
2. then方法基本功能实现
```js
class SXPromise {
   ......
  /**
   *
   * @param {*} onFulfilled  返回成功的结果
   * @param {*} onRejected   返回失败的结果
   * 1.只有不在等待状态才会执行函数
   * 2.调用then时不传失败函数不会报错
   * 3.then函数中出现逻辑错误调用失败结果
   */
  then(onFulfilled, onRejected = () => {} /* 2.调用then时不传失败函数不会报错*/) {
    // 1.只有不在等待状态才会执行函数
    if (this.status === SXPromise.FULFILLEN) {
        // 3.then函数中出现逻辑错误调用失败结果
        try {
          onFulfilled(this.value)
        } catch (error) {
          onRejected(error)
        }
    
    }
    if (this.status === SXPromise.REJECTED) {
        try {
          onRejected(this.value)
        } catch (error) {
          onRejected(error)
        }
    }
  }
}

const p1 = new SXPromise((resolve, reject) => {
  // reject('拒绝')
    resolve('解决')
})

p1.then(
  (res) => {
    console.log(res)
  },
  (err) => {
    console.log(err)
  },
)
```
3. then方法的异步执行和等待
```js
class SXPromise {
 ......
  constructor(callback) {
    ......
    // 等待的状态改变的数组
    this.callbacks = []
  }
  /**
   * 1.状态的唯一性
   */
  static resolve(value) {
   ......
   // 7.宏任务中的状态改变宏任务中代码先执行
    setTimeout(() => {
      // 执行等待的状态改变的函数
      this.callbacks.map((item) => {
        item.onFulfilled(this.value)
      })
    })
  }
  static reject(reason) {
   ......
      setTimeout(() => {
      this.callbacks.map((item) => {
        item.onRejected(this.value)
      })
    })
  }
  /**
   *
   * @param {*} onFulfilled  返回成功的结果
   * @param {*} onRejected   返回失败的结果
   * 1.只有不在等待状态才会执行函数
   * 2.调用then时不传失败函数不会报错
   * 3.then函数中出现逻辑错误调用失败结果
   * 4.then中的参数函数是异步执行的(把任务放入队列中)
   * 5.then是等待状态时要等待宏任务中的状态改变
   * 6.等待函数的逻辑错误处理
   * 7.宏任务中的状态改变宏任务中代码先执行
   */
  then(onFulfilled, onRejected = () => {} /* 2.调用then时不传失败函数不会报错*/) {
    // 1.只有不在等待状态才会执行函数
    if (this.status === SXPromise.FULFILLEN) {
      // 4.then中的参数函数是异步执行的(把任务放入队列中)
      setTimeout(() => {
        // 3.then函数中出现逻辑错误调用失败结果
        try {
          onFulfilled(this.value)
        } catch (error) {
          onRejected(error)
        }
      })
    }
    // 5.then是等待状态时要等待宏任务中的状态改变
    if (this.status === SXPromise.PENDING) {
      this.callbacks.push({
        onFulfilled: (value) => {
          // 6.等待函数的逻辑错误处理
          try {
            onFulfilled(value)
          } catch (error) {
            onRejected(error)
          }
        },
        onRejected: (value) => {
          try {
            onRejected(value)
          } catch (error) {
            onRejected(error)
          }
        },
      })
    }
    if (this.status === SXPromise.REJECTED) {
      setTimeout(() => {
        try {
          onRejected(this.value)
        } catch (error) {
          onRejected(error)
        }
      })
    }
  }
}

const p1 = new SXPromise((resolve, reject) => {
  // reject('拒绝')
  setTimeout(() => {
    resolve('解决')
    console.log('宏任务主线')
  }, 1000)
})

p1.then(
  (res) => {
    console.log(res)
  },
  (err) => {
    console.log(err)
  },
)

console.log('主线任务')

```
### (2)链式调用的实现
1. then返回Promise
```js
class SXPromise {
 ......
  then(onFulfilled, onRejected) {
    /* 2.调用then时不传失败成功函数不会报错*/
    if (typeof onFulfilled !== 'function') {
      onFulfilled = () => {}
    }
    if (typeof onRejected !== 'function') {
      onRejected = () => {}
    }
    /**
     * 8.then函数的返回值是新promise
     * 9.promise的状态是由改变状态的返回值决定
     * 10.then中发生错误返回的promise是异常状态
     */
    //  8.then函数的返回值是新promise
    return new SXPromise((resolve, reject) => {
      // 1.只有不在等待状态才会执行函数
      if (this.status === SXPromise.FULFILLEN) {
        // 4.then中的参数函数是异步执行的(把任务放入队列中)
        setTimeout(() => {
          // 3.then函数中出现逻辑错误调用失败结果
          try {
            let result = onFulfilled(this.value)
            // 9.promise的状态是由改变状态的返回值决定
            resolve(result)
          } catch (error) {
            reject(error)
          }
        })
      }
      // 5.then是等待状态时要等待宏任务中的状态改变
      if (this.status === SXPromise.PENDING) {
        this.callbacks.push({
          onFulfilled: (value) => {
            // 6.等待函数的逻辑错误处理
            try {
              let result = onFulfilled(value)
              resolve(result)
            } catch (error) {
              reject(error)
            }
          },
          onRejected: (value) => {
            try {
              let result = onRejected(value)
              resolve(result)
            } catch (error) {
              reject(error)
            }
          },
        })
      }
      if (this.status === SXPromise.REJECTED) {
        setTimeout(() => {
          try {
            let result = onRejected(this.value)
            resolve(result)
          } catch (error) {
            reject(error)
          }
        })
      }
    })
  }
}


```
2. then的处理穿透和返回状态
```js
class SXPromise {
 ......
  then(onFulfilled, onRejected) {
   ......
    /**
     * 8.then函数的返回值是新promise
     * 9.promise的状态是由改变状态的返回值决定
     * 10.then中发生错误返回的promise是异常状态
     * 11.then()不进行处理会发生穿透
     * 12.如果时promise是由Promise状态决定
     */
    //  8.then函数的返回值是新promise
    return new SXPromise((resolve, reject) => {
      // 1.只有不在等待状态才会执行函数
      if (this.status === SXPromise.FULFILLEN) {
        // 4.then中的参数函数是异步执行的(把任务放入队列中)
        setTimeout(() => {
          // 3.then函数中出现逻辑错误调用失败结果
          try {
            let result = onFulfilled(this.value)
            // 9.promise的状态是由改变状态的返回值决定
            if (result instanceof SXPromise) {
              // 12.如果时promise是由Promise状态决定
              result.then(resolve, reject)
              //   (res) => {
              //     resolve(res)
              //   },
              //   (err) => {
              //     reject(err)
              //   },
              // )
            } else {
              resolve(result)
            }
          } catch (error) {
            reject(error)
          }
        })
      }
      // 5.then是等待状态时要等待宏任务中的状态改变
      if (this.status === SXPromise.PENDING) {
        this.callbacks.push({
          onFulfilled: (value) => {
            // 6.等待函数的逻辑错误处理
            try {
              let result = onFulfilled(value)
              // 9.promise的状态是由改变状态的返回值决定
              if (result instanceof SXPromise) {
                result.then(resolve, reject)
              } else {
                resolve(result)
              }
            } catch (error) {
              reject(error)
            }
          },
          onRejected: (value) => {
            try {
              let result = onRejected(value)
              // 9.promise的状态是由改变状态的返回值决定
              if (result instanceof SXPromise) {
                result.then(resolve, reject)
              } else {
                resolve(result)
              }
            } catch (error) {
              reject(error)
            }
          },
        })
      }
      if (this.status === SXPromise.REJECTED) {
        setTimeout(() => {
          try {
            let result = onRejected(this.value)
            // 9.promise的状态是由改变状态的返回值决定
            if (result instanceof SXPromise) {
              result.then(resolve, reject)
            } else {
              resolve(result)
            }
          } catch (error) {
            reject(error)
          }
        })
      }
    })
  }
}

```
3. 减少逻辑复用和返回的是promise细节
```js
class SXPromise {
 ......
  /**
   * 13.如果then返回的是promise是内置promise则报错
   *  */  
  then(onFulfilled, onRejected) {
   ......
 
    //  8.then函数的返回值是新promise
   const p =  new SXPromise((resolve, reject) => {
         // 1.只有不在等待状态才会执行函数
      if (this.status === SXPromise.FULFILLEN) {
        // 4.then中的参数函数是异步执行的(把任务放入队列中)
        setTimeout(() => {
          this.#parse(p, onFulfilled(this.value), resolve, reject)
        })
      }
      // 5.then是等待状态时要等待宏任务中的状态改变
      if (this.status === SXPromise.PENDING) {
        this.callbacks.push({
          onFulfilled: (value) => {
            this.#parse(p, onFulfilled(value), resolve, reject)
          },
          onRejected: (value) => {
            // 3.then函数中出现逻辑错误调用失败结果
            this.#parse(p, onRejected(value), resolve, reject)
          },
        })
      }
      if (this.status === SXPromise.REJECTED) {
        setTimeout(() => {
          this.#parse(p, onRejected(this.value), resolve, reject)
        })
      }
    })
    return p
  }
  /**
   * @param {*} p 上面返回的promise
   * @param {*} result 结果
   * @param {*} resolve 成功的回调
   * @param {*} reject 失败的回调
   */
  #parse(p,result, resolve, reject) {
    // 13.如果then返回的是promise是内置promise则报错
      if (p === result) {
      throw new TypeError('Chaining cycle detected')
    }
    try {
      // 9.promise的状态是由改变状态的返回值决定
      if (result instanceof SXPromise) {
        // 12.如果时promise是由Promise状态决定
        result.then(resolve, reject)
        //   (res) => {
        //     resolve(res)
        //   },
        //   (err) => {
        //     reject(err)
        //   },
        // )
      } else {
        resolve(result)
      }
    } catch (error) {
      reject(error)
    }
  }
}


const p1 = new SXPromise((resolve, reject) => {
  resolve('解决')
})
// 返回的是promise是内置promise则报错
let p2 = p1.then((value) => {
  return  p2 
})
```
### (3)静态方法的实现
### (4)其他方法的实现
1. resolve和reject方法
```js
class SXPromise {
  ....
  static resolve(value) {
    return new SXPromise((resolve, reject) => {
      if (value instanceof SXPromise) {
        value.then(resolve, reject)
      } else {
        resolve(value)
      }
    })
  }
  static reject(value) {
    return new SXPromise((resolve, reject) => {
      if (value instanceof SXPromise) {
        value.then(reject,reject)
      } else {
        reject(value)
      }
    })
  }
  ......
}

console.log(SXPromise.resolve('1'))

```
2. all方法
```js
....
 static all(arrPromise) {
    return new SXPromise((resolve, reject) => {
      const arr = []
      arrPromise.forEach((item) => {
        item.then(
          (res) => {
            arr.push(res)
            if (arr.length === arrPromise.length) {
              resolve(arr)
            }
          },
          (err) => {
            reject(err)
          },
        )
      })
    })
  }
 ...

 const p1 = SXPromise.resolve('解决1')
const p2 = SXPromise.resolve('解决2')
const p3 = SXPromise.reject('错误')

SXPromise.all([p1, p2]).then((res) => {
  console.log(res)
})
```
3. race方法
```js
......
 static race(arrPromise) {
    return new SXPromise((resolve, reject) => {
      arrPromise.map((item) => {
        item.then(
          (res) => {
            resolve(res)
          },
          (err) => {
            reject(err)
          },
        )
      })
    })
  }
......
  const p1 = new SXPromise((resolve, reject) => {
  setTimeout(() => {
    resolve('解决1')
  }, 1000)
})
const p2 = new SXPromise((resolve, reject) => {
  setTimeout(() => {
    resolve('解决2')
  }, 2000)
})

SXPromise.race([p1, p2]).then((res) => {
  console.log(res)
})

```
### (5)Promise的全部信息
```js
class SXPromise {
  static PENDING = 'pending'
  static FULFILLEN = 'fulfilled'
  static REJECTED = 'rejected'
  static resolve(value) {
    return new SXPromise((resolve, reject) => {
      if (value instanceof SXPromise) {
        value.then(resolve, reject)
      } else {
        resolve(value)
      }
    })
  }
  static reject(value) {
    return new SXPromise((resolve, reject) => {
      if (value instanceof SXPromise) {
        value.then(reject, reject)
      } else {
        reject(value)
      }
    })
  }
  static all(arrPromise) {
    return new SXPromise((resolve, reject) => {
      const arr = []
      arrPromise.forEach((item) => {
        item.then(
          (res) => {
            arr.push(res)
            if (arr.length === arrPromise.length) {
              resolve(arr)
            }
          },
          (err) => {
            reject(err)
          },
        )
      })
    })
  }
  static race(arrPromise) {
    return new SXPromise((resolve, reject) => {
      arrPromise.map((item) => {
        item.then(
          (res) => {
            resolve(res)
          },
          (err) => {
            reject(err)
          },
        )
      })
    })
  }
  constructor(callback) {
    // 初始状态
    this.status = SXPromise.PENDING
    // 默认值
    this.value = null
    /**
     * 1.调用回调改变状态
     * 2.回调中逻辑错误抛给拒绝
     */
    try {
      callback(this.#resolve.bind(this), this.#reject.bind(this))
    } catch (error) {
      this.#reject.bind(this)(error)
    }

    // 等待的状态改变的数组
    this.callbacks = []
  }
  #resolve(value) {
    // 1.状态的唯一性
    if (this.status !== SXPromise.PENDING) return
    this.status = SXPromise.FULFILLEN
    this.value = value

    // 7.宏任务中的状态改变宏任务中代码先执行
    setTimeout(() => {
      // 执行等待的状态改变的函数
      this.callbacks.map((item) => {
        item.onFulfilled(this.value)
      })
    })
  }
  #reject(reason) {
    if (this.status !== SXPromise.PENDING) return
    this.status = SXPromise.REJECTED
    this.value = reason
    setTimeout(() => {
      this.callbacks.map((item) => {
        item.onRejected(this.value)
      })
    })
  }
  /**
   *
   * @param {*} onFulfilled  返回成功的结果
   * @param {*} onRejected   返回失败的结果
   * 1.只有不在等待状态才会执行函数
   * 2.调用then时不传失败函数不会报错
   * 3.then函数中出现逻辑错误调用失败结果
   * 4.then中的参数函数是异步执行的(把任务放入队列中)
   * 5.then是等待状态时要等待宏任务中的状态改变
   * 6.等待函数的逻辑错误处理
   * 7.宏任务中的状态改变宏任务中代码先执行
   *
   */
  then(onFulfilled, onRejected) {
    /* 2.调用then时不传失败成功函数不会报错*/
    if (typeof onFulfilled !== 'function') {
      onFulfilled = () => {
        // 11.then()不进行处理会发生穿透(你不处理交给下一个)
        return this.value
      }
    }
    if (typeof onRejected !== 'function') {
      onRejected = () => {
        // return this.value
      }
    }
    /**
     * 8.then函数的返回值是新promise
     * 9.promise的状态是由改变状态的返回值决定
     * 10.then中发生错误返回的promise是异常状态
     * 11.then()不进行处理会发生穿透
     * 12.如果时promise是由Promise状态决定
     * 13.如果then返回的是promise是内置promise则报错
     */
    //  8.then函数的返回值是新promise
    const p = new SXPromise((resolve, reject) => {
      // 1.只有不在等待状态才会执行函数
      if (this.status === SXPromise.FULFILLEN) {
        // 4.then中的参数函数是异步执行的(把任务放入队列中)
        setTimeout(() => {
          this.#parse(p, onFulfilled(this.value), resolve, reject)
        })
      }
      // 5.then是等待状态时要等待宏任务中的状态改变
      if (this.status === SXPromise.PENDING) {
        this.callbacks.push({
          onFulfilled: (value) => {
            this.#parse(p, onFulfilled(value), resolve, reject)
          },
          onRejected: (value) => {
            // 3.then函数中出现逻辑错误调用失败结果
            this.#parse(p, onRejected(value), resolve, reject)
          },
        })
      }
      if (this.status === SXPromise.REJECTED) {
        setTimeout(() => {
          this.#parse(p, onRejected(this.value), resolve, reject)
        })
      }
    })
    return p
  }
  /**
   * @param {*} p 返回的promise
   * @param {*} result 结果
   * @param {*} resolve 成功的回调
   * @param {*} reject 失败的回调
   */
  #parse(p, result, resolve, reject) {
    if (p === result) {
      throw new TypeError('Chaining cycle detected')
    }
    try {
      // 9.promise的状态是由改变状态的返回值决定
      if (result instanceof SXPromise) {
        // 12.如果时promise是由Promise状态决定
        result.then(resolve, reject)
        //   (res) => {
        //     resolve(res)
        //   },
        //   (err) => {
        //     reject(err)
        //   },
        // )
      } else {
        resolve(result)
      }
    } catch (error) {
      reject(error)
    }
  }
}

const p1 = new SXPromise((resolve, reject) => {
  setTimeout(() => {
    resolve('解决1')
  }, 1000)
})
const p2 = new SXPromise((resolve, reject) => {
  setTimeout(() => {
    resolve('解决2')
  }, 2000)
})

SXPromise.race([p1, p2]).then((res) => {
  console.log(res)
})

```
## 12. 文档对象
### (1)什么是文档节点
1. 节点对象node
```html
<body id="zs">
    <!-- 注释 -->
</body>
<script>
  /**
 * 包括 12 种类型的节点对象
 * 常用了节点为 document、标签元素节点、文本节点、注释节点
 * 节点均继承自 Node 类型，所以拥有相同的属性或方法
 * document 是 DOM 操作的起始节点
 */
    // document节点 noteType为9
    console.log(document.nodeType)

    // 第一个子节点为<!DOCTYPE html>，且nodetype为10
    console.log(document.childNodes.item(0).nodeType)

    // body 是标签节点 nodeType为1
    console.log(document.body.nodeType)

    // body的属性节点 nodeType 为2
    console.log(document.body.attributes[0].nodeType)

    // body的第一个节点为文本节点，nodeType为3
    console.log(document.body.childNodes.item(0).nodeType)

    // body的第二个节点为注释，nodeType类型为8
    console.log(document.body.childNodes[1].nodeType)
</script>

```
2. 节点的原型链
```html
<body>
    <h1 id="zs"></h1>
    <script>
        function prototype(el) {
            const arr = []
           
            arr.push(Object.getPrototypeOf(el))
            console.dir(Object.getPrototypeOf(el));
            arr.push(...(Object.getPrototypeOf(el) ? prototype(Object.getPrototypeOf(el)) : []))
            return arr
        }
        // 节点对象
        const node = document.getElementById('zs')
        /**
         * Object 对象的构造函数
         * EventTarget 提供 addEventListener、removeEventListener 等监听事件支持方法
         * Node 提供 firstChild、parentNode 等节点操作方法
         * Element 提供 getElementsByTagName、querySelector 等方法
         * HTMLElement 所有元素的基础类，提供 childNodes、nodeType、nodeName、className、nodeName 等方法
         * HTMLHeadingElement Head 标题元素类
         * */
        console.log(prototype(node));
    </script>
</body>
```
3. 为元素添加原型方法
```html
<body>
    <h1 onclick="this.color('red')">JavaScript</h1>
    <h1 onclick="this.hide()">TypeScript</h1>
    <script>
        const h1 = document.querySelector('h1')
        HTMLHeadingElement.prototype = Object.assign(HTMLHeadingElement.prototype, {
            color(color) {
                this.style.color = color
            },
            hide() {
                this.style.display = 'none'
            }
        })
    </script>
</body>
```
4. 节点对象添加属性(更改样式)
```html
<body>
    <h1>JavaScript</h1>
    <script>
        // DOM 与我们其他 JS 创建的对象特征相仿，所以也可以为 DOM 对象添加属性或方法
        const h1 = document.querySelector('h1')
        // 为h1添加标题
        h1.title = '脚本语言'
        // 输出标题 <h1 title="脚本语言">JavaScript</h1>
        console.log(h1);
        // 添加方法
        Object.assign(h1, {
            color() {
                this.style.color = 'red'
            },
            onclick() {
                this.color()
            }
        })
        // 使用对象特性更改样式属性
        Object.assign(h1.style, {
            backgroundColor: 'pink',
            fontSize: '50px'
        })
    </script>
</body>
```
5. 常用节点
```html
<body>
    <h1 id="js">JavaScript</h1>
    <a href="" name="n1"></a>
    <a href="" name="n2"></a>
    <img src="" alt="" />
    <img src="" alt="" />
    <script>
        // 设置标题或读取
        document.title = 'JavaScript'
        // 获取当前 URL
        console.dir(document.URL)
        // 获取所有 a 标签
        console.dir(document.links)
        // 通过锚点name属性获取元素
        console.dir(document.anchors.n2)
        // 获取所有图片节点
        console.dir(document.images)
    </script>
</body>
```
6. 节点属性
```html
<body>
    <h1 id="js">JavaScript</h1>

    <script>
        const node = document.querySelector(`#js`)
        /**
         * nodeType
         * 1. 元素节点
         * 2. 属性节点
         * 3. 文本节点
         * 8. 注释节点
         * 9. document 对象
         */
        console.log(node.nodeType);
        /**
         *  Prototype 
         * 1. section,main,aslide标签的原型对象为HTMLElement
         * 2. 其他非系统标签的原型对象为HTMLUnknownElement
         * */
        console.log(node instanceof HTMLHeadingElement);
        /**
         * nodeName指定节点的名称
         * nodeType-1:元素名称如 DIV
         * nodeType-2:属性名称
         * nodeType-3:#text
         * nodeType-8:#comment
        */
        console.log(node.nodeName);
        /**
         * nodeName 可以获取不限于元素的节点名，tagName 仅能用于获取标签节点的名称
         * 1. tagName 存在于 Element 类的原型中
         * 2. 文本、注释节点值为 undefined
         * 3. 获取的值为大写的标签名
        */
        console.log(node.tagName);
        /**
          * 使用 nodeValue或data 函数获取节点值，也可以使用节点的 data 属性获取节点内容
          * nodeType-1:null
          * nodeType-2:属性值
          * nodeType-3:文本内容
          * nodeType-8:注释内容
         */
        console.log(node.nodeValue);
        console.log(node.attributes.id.nodeValue);
        console.log(node.data);
    </script>
</body>
```
7. 使用递归获取树状节点
```html
<body>
    <div id="app">
        <ul>
            <li><span></span><span></span></li>
            <li><span></span><span></span></li>
            <li><span></span><span></span></li>
        </ul>
    </div>
    <script>
        function tree(el) {
            return Array.from(el.childNodes).filter(node => node.tagName).map(node => ({
                name: node.tagName,
                children: tree(node)
            }))
        }
        const app = document.querySelector('#app')
        console.log(tree(app));
    </script>
</body>
```
8. 节点集合
```html
<body>
    <div id="div1"></div>
    <div name="div2"></div>
    <div></div>
    <script>
        /**
         * Nodelist 与 HTMLCollection 都是包含多个节点标签的集合，大部分功能也是相同的。
         * 1. getElementsBy...等方法返回的是 HTMLCollection
         * 2. querySelectorAll 返回的是 NodeList
        */
        const NodeList = document.querySelectorAll('div')
        const HTMLCollection = document.getElementsByTagName('div')

        console.log(NodeList, HTMLCollection)
        // length 记录了节点元素的数量
        console.log(NodeList.length, HTMLCollection.length);
        // item()方法来根据索引获取元素
        console.log(NodeList.item(0), HTMLCollection.item(0));
        // HTMLCollection 具有 namedItem 方法可以按 name 或 id 属性来获取元素
        console.dir(HTMLCollection.namedItem('div1'))
        console.dir(HTMLCollection.namedItem('div2'))
    </script>
</body>
```
9. 节点集合的动态与静态
```html
<body>
    <h1>1</h1>
    <h1>2</h1>
    <button>添加元素</button>
    <script>
        /**
         * 动态:元素添加或移动操作将实时反映最新状态
         * 1. 使用 getElement...返回的都是动态的集合
         * 2. 使用 querySelectorAll 返回的是静态集合
        */
        const h1s = document.getElementsByTagName('h1')
        const h1sq = document.querySelectorAll('h1')
        console.log(h1s, h1sq);
        document.querySelector('button').addEventListener('click', () => {
            document.querySelector('body').insertAdjacentHTML('beforeend', '<h1>3</h1>')

            console.log(h1s, h1sq)
        })
    </script>
</body>

```
### (2)文档节点的获取
1. 遍历节点
```html
<body>
    <h1>1</h1>
    <h1>2</h1>
    <h1>3</h1>
    <h1>4</h1>
    <script>
        // forOf (Nodelist,HTMLCollection)
        const nodes = document.getElementsByTagName('h1')
        const nodesNodelist = document.querySelectorAll('h1')
        for (const item of nodes) {
            console.log(item)
        }
        // forEach  (Nodelist)
        nodesNodelist.forEach((node, index) => {
            console.log(node)
        })
        // call/apply 借用数组方法
        Array.prototype.map.call(nodes, (node, index) => {
            console.log(node, index)
        })
        // Array.from 用于将类数组转为组件
        Array.from(nodes, (node, index) => node).forEach((item) => {
            console.log(item);
        });
        // 展开语法
        [...nodes].map((item) => {
            console.log(item);
        })
    </script>
</body>
```
2. 节点关系
```html
<body>
    <h1>a</h1>
    <ul>
        <li>
            <span>b</span>
            <strong>c</strong>
        </li>
    </ul>
    <h1>d</h1>
    <script>
        /**
         *  子节点
         *  1. childNodes	获取所有子节点  
         *  2. firstChild	第一个子节点
         *  3. lastChild	最后一个子节点
        */
        const ul = document.querySelector('ul')
        console.dir(ul.childNodes);
        console.dir(ul.firstChild) //第一个子节点是文本节点
        console.dir(ul.lastChild) //最后一个子节点也是文本节点

        /**
         * 兄弟节点
         * 1. nextSibling  下一个兄弟节点
         * 2. previousSibling  上一个兄弟节点	 
         * */
        console.dir(ul.previousSibling); //上一个节点也是文本节点
        console.dir(ul.nextSibling);//下一个兄弟节点是文本节点

        /**
         * 父节点
         * 1.parentNode 获取父节点
        */
        console.log(ul.parentNode);
    </script>
</body>
```
3. 递归获取父节点和子节点(排除文本)
```html
<body>
    <div>
        <ul>
            <li><span></span></li>
        </ul>
    </div>
    <script>
        // 根据子节点递归获取父节点
        const span = document.querySelector('span')
        function parentNodes(node) {
            const arr = []
            arr.push(node.parentNode)
            if (node.parentNode) {
                arr.push(...parentNodes(node.parentNode))
            }
            return arr
        }
        console.log(parentNodes(span));

        // 根据父节点递归获取子节点 
        const div = document.querySelector('div')
        function getChildNodeByName(el) {
            const items = []
            Array.from(el.childNodes, (item) => item).forEach(node => {
                console.log(node.nodeType);
                // 3为文本节点
                if (node.nodeType !== 3) {
                    items.push(node)
                    items.push(...getChildNodeByName(node))
                }
            })
            return items
        }
        console.log(getChildNodeByName(div));
    </script>
</body>

```
4. 标签关系
```html
<body>
    <h1>a</h1>
    <ul>
        <li>
            <span>b</span>
            <strong>c</strong>
        </li>
    </ul>
    <h1>d</h1>
    <script>
        /**
         *  子元素
         *  1. children	 获取所有子元素
         *  2. childElementCount	子标签元素的数量
         *  3. firstElementChild	第一个子标签
         *  4. lastElementChild	    最后一个子标签
        */
        const ul = document.querySelector('ul')
        console.dir(ul.children);
        console.dir(ul.childElementCount);
        console.dir(ul.firstElementChild);
        console.dir(ul.lastElementChild);
        /**
         * 兄弟元素
         * 1. previousElementSibling	上一个兄弟标签
         * 2. nextElementSibling	下一个兄弟标签
        */
        console.dir(ul.previousElementSibling);
        console.dir(ul.nextElementSibling);
        /**
         * 父元素
         * 1. parentElement 获取父元素
         * 
        */
        console.dir(ul.parentElement);
        /**
         * 节点判断
         * 1. contains	返回布尔值，判断传入的节点是否为该节点的后代节点
        */
        console.log(ul.contains(document.querySelector('span')));
    </script>
</body>
```
5. 按类名获取标签
```html
<body>
    <div>
        <ul>
            <li>
                <span class="span"></span>
                <span class="span"></span>
                <span class="span"></span>
            </li>
        </ul>
    </div>
    <script>
        function getTagByClassName(className, doc = document) {
            const items = []

            Array.from(doc.children, (item) => item).map(el => {

                if (el.className.includes('span')) {
                    items.push(el)
                }
                items.push(...getTagByClassName(className, el))
            })

            return items
        }
        console.log(getTagByClassName(document.querySelector('span')));
    </script>
</body>
```
6. 选择器和检测查找元素
```html
<body>
    <div id="id"></div>
    <div name="zs"></div>
    <div class="ls">
        <li></li>
    </div>
    <script>
        // 标签选择器
        /**
         * 获取单元素
         * 1. getElementById 只能通过 document 访问，不能通过元素读取拥有 ID 的子元素
        */
        console.log(document.getElementById('id'));
        /**
         * 获取多元素
         * 1. getElementsByName (属性name)一般用来对表单元素进行操作时使用
         *  (1)返回 NodeList 节点列表对象
         *  (2)NodeList 顺序为元素在文档中的顺序
         *  (3)需要在 document 对象上使用
         * 2. getElementsByTagName(标签名)
         *  (1)返回 HTMLCollection 节点列表对象
         *  (2)是不区分大小的获取
         * 3. getElementsByClassName 使用getElementsByTagName用于按标签名获取元素
         *  
        */
        console.log(document.getElementsByName('zs'));
        console.log(document.getElementsByTagName('div'));
        console.log(document.getElementsByClassName('ls'));

        // 样式选择器
        /**
         *  1.querySelectorAll 获取的 NodeList 节点列表是静态的，添加或删除元素后不变
         *  2.querySelector querySelector 使用 CSS 选择器获取一个元素，
        */
        console.log(document.querySelector('[name=zs]'));
        console.log(document.querySelectorAll('div'));

        // 元素检测
        /**
         * 1. matches  用于检测元素是否是指定的样式选择器匹配
         * 2. closest 查找最近的符合选择器的祖先元素(包括自身)
        */
        console.log([...document.querySelectorAll('div')].filter(node => {
            return !node.matches(`[name]`)
        }))

        console.log(document.querySelector('li').closest('.ls'));

    </script>
</body>
```
7. 元素DOM属性(标准属性)操作(点操作)
```html
<body>
    <div class="zs"></div>
    <img src="" alt="" />
    <input type="number" value="3" />
    <input type="checkbox" checked="false" />
    <a href="#zs" id="home">zs</a>
    <script>       
        // 元素的标准属性可以直接进行操作-属性别名:class:className
        const zs = document.querySelector('.zs')
        zs.className = 'ls'
        console.log(zs);
        const img = document.querySelector('img')
        img.src = './原型链.png'
        img.alt = '原型链'
        img.style.width = '100px'
        img.addEventListener('click', function () {
            this.hidden = true
        })
        /**
         * 多类型,大部分属性值是都是字符串
         * 1. 表单 input.value可以为数字
         * 2. 表单 checked.value Boolean 类型
         * 3. 返回的 href 属性值是完整链接
        */
        const number = document.querySelector('[type=number]')
        number.value = parseInt(number.value) + 22

        const checkbox = document.querySelector('[type=checkbox]')
        checkbox.checked = true
        const herf = document.querySelector('#home')
        console.log(herf.href);
    </script>
</body>
```
8. 元素特征属性(标准属性,定制属性等)操作(方法)
```html
<body>
    <div id="app" name="vue" color="red" data-color="yellow" data-title-color="red">JavaScript</div>
    <script>
        /**
         * 特征中记录标准和定制属性
         *  1.getAttribute	获取属性
         *  2.setAttribute	设置属性
         *  3.removeAttribute	删除属性
         *  4.hasAttribute	属性检测
         *  5.attributes   获取元素的全部属性
        */
        const app = document.querySelector('#app')
        // 获取属性
        console.log(app.getAttribute('name'));
        // 设置属性
        app.setAttribute('name', 'vue3')
        // 删除属性
        app.removeAttribute('color')
        // 检测属性
        app.hasAttribute('id')
        // 遍历属性
        for (const { name, value } of app.attributes) {
            console.log(name, value);
        }
        console.dir(app.attributes);
        /**
         * 定制属性
         * 1. 元素中以 data-为前缀的属性会添加到属性集中
         * 2. 使用元素的 dataset 可获取属性集中的属性
         * 3. 改变 dataset 的值也会影响到元素上
        */
        // 设置data-color
        app.dataset.color = "black"
        // 获取data-color
        console.log(app.dataset.color);
        // 获取data-title-color
        console.log(app.dataset.titleColor);
      
    </script>
</body>
```
9. 元素DOM属性和元素特征属性的同步
```html
<body>
    <div class="zs"></div>
    <input type="text" value="2">
    <script>
        // 特征和属性是记录元素属性的两个不同场所，大部分更改会进行同步操作。
        // 同步
        const div = document.querySelector('.zs')
        div.className = 'ls'
        console.log(div.getAttribute('class'));
        // 不同步 对 input 值使用属性设置，但并没有同步到特征
        const text = document.querySelector('[type=text]')
        text.value = '1'
        console.log(text.getAttribute('value')); //2
    </script>
</body>
```
### (3)文档节点的创建和管理
1. 创建节点
```html
<body>
    <div></div>
    <script>
        /**
         * 创建节点
         * 1.append 用于添加元素，同时他也可以直接添加文本等内容
         * 2.createTextNode 创建文本节点对象
         * 3.createElement 创建标签节点对象
         * 4.cloneNode&importNode 复制节点对象操作
         *  (1)cloneNode 是节点方法
         *  (2)cloneNode 参数为 true 时递归复制子节点即深拷贝
         *  (3)importNode 是 documet 对象方法,第一个参数为节点对象,第二个参数为 true 时递归复制
        */
        // 1.添加元素和文本
        const div = document.querySelector('div')
        div.append((document.createElement('strong')))
        div.append('666')
        // 2.创建文本节点
        div.append(document.createTextNode('555'))
        // 3.创建标签节点
        const h1 = document.createElement('h1')
        h1.innerHTML = 'h1'
        div.append(h1)
        // 4.复制节点对象
        div.append(h1.cloneNode(true))
        div.append(document.importNode(h1, true))
    </script>
</body>
```
2. 节点内容
```html
<body>
    <div>
        <h1>JavaScript</h1>
    </div>
    <script>
        const div = document.querySelector('div')
        /**
          * 1. innerHTML 用于向标签中获取添加html内容，
          *  (1)重绘:删除原内容然后设置新内容
          *  (2)重绘后无监听事件
          * 2. outerHTML 获取内容是包含父标签
          *  (1)outerHTML 不会删除原来的旧元素
          *  (2)只是用新内容替换替换旧内容，旧内容（元素）依然存在
          * 3. textContent 与 innerText
          *  (1)textContentb 部分 IE 浏览器版本不支持
          *  (2)innerText 部分 FireFox 浏览器版本不支持
          *  (3)获取时忽略所有标签,只获取文本内容
          *  (4)设置时将内容中的标签当文本对待不进行标签解析
          * 4. outerText:与 innerText 差别是会影响所操作的标签
        */
        console.log(div.innerHTML);
        //  innerHTML
        div.addEventListener('click', function () {
            this.parentElement.innerHTML += '<h1>TypeScript</h1>'
        })
        //  outerHTML
        console.log(div.outerHTML);
        div.outerHTML = '<h1>PHP</h1>'
        // textContent
        div.textContent = "<h1>Nest.js</h1>"
        console.log(div.textContent)
        // innerText
        div.innerText = "<h1>Java</h1>"
        console.log(div.innerText)
    </script>
</body>

```
3. 节点管理
```html
<body>
    <h1>JavaScript</h1>
    <h2>JavaScript</h2>
    <h3>JavaScript</h3>
    <script>
        const h1 = document.querySelector('h1')
        /**
         * 标准方法
         * 1.append	    节点尾部添加新节点或字符串
         * 2.prepend	    节点开始添加新节点或字符串
         * 3.before	    节点前面添加新节点或字符串
         * 4.after	    节点后面添加新节点或字符串
         * 5.replaceWith	将节点替换为新节点或字符串
         * 6.remove 删除节点
        */
        //  里面的后面
        h1.append('-PHP')
        //  里面的前面
        h1.prepend('TypeScript-')
        //  节点的前面
        h1.before('Vue')
        //  节点的后面
        h1.after('React')
        // 删除
        h1.remove()
        // 替换(节点被删除了无法替换)
        h1.replaceWith('666')
        /**
         * 插入方法
         * 1.insertAdjacentText 文本插入到元素指定位置
         * 2.insertAdjacentHTML  html文本插入到元素指定位置
         * 3.insertAdjacentElement 指定元素插入到元素的指定位置
         *  第一个参数
         *   (1)beforebegin	元素本身前面
         *   (2)afterend	元素本身后面
         *   (3)afterbegin	元素内部前面
         *   (4)beforeend	元素内部后面
        */
        const h2 = document.querySelector('h2')
        h2.insertAdjacentText('beforebegin', 'React')
        h2.insertAdjacentHTML('afterend', '<strong>Vue</strong>')
        const strong = document.createElement('strong')
        strong.innerHTML = "-PHP"
        h2.insertAdjacentElement('beforeend', strong)
        /**
         * 古老方法
         * 1.appendChild  添加节点
         * 2.insertBefore 用于插入元素到另一个元素的前面
         * 3.removeChild  删除节点
         * 4.replaceChild 进行节点的替换操作
        */
        const h3 = document.querySelector('h3')
        h3.appendChild(strong)
        h3.insertBefore(h2, strong)
        // h3.removeChild(h2)
        h3.replaceChild(h2, h1)
    </script>
</body>
```
4. 表单控制
```html
<body>
    <form action="" name="zs">
        <input type="text" name="title" />
    </form>
    <script>
        /**
         * 使用 document.forms 获取表单集合
         * 使用 form 的 name 属性获取指定 form 元素
         * 根据表单项的 name 属性使用 form.elements.title 获取表单项，
         * 也可以直接写成 form.name 形式，不需要 form.elements.title
         * 针对 radio/checkbox 获取的表单项是一个集合
        */
        const form = document.forms
        // name
        console.log(form.zs) //true
        // 表单项
        console.log(form.zs.elements.title);
        console.log(form.zs.title);
    </script>
</body>
```
5. 样式管理
```html
<body>
    <div class="zs">JavaScript</div>
    <script>
        // 设置class
        const div = document.querySelector('div')
        // 根据dom属性
        div.className = 'ls'
        // 根据特征
        div.setAttribute('class', 'ww')

        /**
         * classList
         * node.classList.add	添加类名
         * node.classList.remove	删除类名
         * node.classList.toggle	切换类名
         * node.classList.contains	类名检测
        */
        div.classList.add('zs')
        div.classList.remove('zs')
        div.addEventListener('click', function () {
            this.classList.toggle('zs')
            console.log(div.classList.contains('zs'));
        })
        /**
         * 设置行样式
         * 1.节点的 style 对象来设置行样式
         * 2.使用 cssText 属性可以批量设置行样式
        */
        div.style.backgroundColor = "pink"
        div.setAttribute('style', `font-size:30px;font-weight: 700;`)
        div.style.cssText = `background-color:red;color:yellow`
        Object.assign(div.style, {
            backgroundColor: 'pink',
            textAlign: 'center'
        })
        /**
         * 获取样式
         * 1. style 对象不能获取行样式外定义的样式
         * 2. window.getComputedStyle 可获取所有应用在元素上的样式
        */
        console.dir(div.style);
        console.dir(window.getComputedStyle(div));
    </script>
</body>

```
## 13. 空间坐标
### (1)视口宽高
```html
<body>
    <script>
        /**
         * 视口尺寸
         * document.documentElement.clientWidth	视口宽度
         * document.documentElement.clientHeight 视口高度
        */
        console.log(document.documentElement.clientWidth);
        console.log(document.documentElement.clientHeight);
    
    </script>
</body>
```
### (2)几何尺寸
1. 元素宽高
```html
<style>
    .div1 {
        width: 200px;
        height: 200px;
        padding: 40px;
        background-color: pink;
        border: 10px solid red;
    }

</style>

<body>
    <div class="div1">
        11111111111111111111111111111111111111
    </div>
    <script>
        /**
         * 元素宽高尺寸，包括内边距与边框和滚动条
         * 1.element.offsetWidth 
         * 2.element.offsetHeight
        */
        const div1 = document.querySelector('.div1')
        console.log(div1.offsetWidth);
        console.log(div1.offsetHeight);
        /**
         * 元素宽高，不包含边框，只包含内容和内边距，行元素尺寸为 0
         * 1.element.clientWidth
         * 2.element.clientHeight
        */
        console.log(div1.clientWidth);
        console.log(div1.clientHeight);

        /**
         * 元素宽度，内容+内边距+内容溢出的尺寸
         * 1.element.scrollWidth
         * 2.element.scrollHeight	
        */
        console.log(div1.scrollWidth);
        console.log(div1.scrollHeight);
    </script>
</body>
```
2. 元素偏移量
```html
<style>
    .div1 {
        width: 200px;
        height: 200px;
        padding: 40px;
        background-color: pink;
        border: 10px solid red;
    }

    .div2 {
        position: absolute;
        top: 100px;
        left: 400px;
        width: 200px;
        height: 200px;
        background-color: pink;
    }
</style>

<body style="height:1000px">
    <div class="div1">

    </div>
    <div class="div2">

    </div>
    <script>
        const div1 = document.querySelector('.div1')
        const div2 = document.querySelector('.div2')
        /**
         * 相对于祖先元素的 XY 轴坐标
         * 1.element.offsetLeft 
         * 2.element.offsetTop
        */
        console.log(div2.offsetLeft);
        console.log(div2.offsetTop);
        /**
         * 内容距离外部的距离，滚动条在左侧时包括滚动条尺寸
         * 1.element.clientLeft
         * 2.element.clientTop
        */
        console.log(div1.clientLeft);
        console.log(div1.clientTop);
        /**
         * 水平滚动条左侧已经滚动的宽高
         * 1.element.scrollLeft
         * 2.element.scrollTop	
        */
        console.log(div2.scrollLeft);
        console.log(div2.scrollTop);
    </script>
</body>

```
3. 鼠标的偏移量
```html
<body>
    <div class="box"></div>
    <script>
        // pageX获取鼠标相对与文档的坐标
        let box = document.querySelector('.box');
        box.addEventListener('mousemove', function (e) {
            let x = e.pageX - this.offsetLeft;
            let y = e.pageY - this.offsetTop;
            this.innerHTML = x + ';' + y;
        })
    </script>
</body>
```
4. 鼠标按下拖动方块
```html
<style>
    .box {
        position: absolute;
        left: 10px;
        top: 10px;
        width: 200px;
        height: 200px;

        background-color: aqua;
    }
</style>
<body>
    <div class="box"></div>
    <script>
        // 鼠标位置
        const box = document.querySelector('.box')
        const move = (e) => {
            box.style.left = e.pageX - 100 + 'px'
            box.style.top = e.pageY - 100 + 'px'
        }
        // 鼠标按下事件
        box.addEventListener('mousedown', () => {
            box.addEventListener('mousemove', move)
        })
        box.addEventListener('mouseup', () => {
            box.removeEventListener('mousemove', move)
        })
    </script>
</body>
```
### (3)滚动控制
1. 文档或元素的滚动操作
```html
<body style="height: 2000px;">
    <div id="app" style="width: 300px; height: 300px; border: solid 6px #e34334; overflow: auto">
        <div style="width: 1000px; height: 1000px; background: #833ca4"></div>
    </div>
    <script>
        /*
       1.element.scrollLeft	获取和设置元素 X 轴滚动位置
       2.element.scrollTop	获取和设置元素 Y 轴滚动位置
       3.element.scrollBy()	按偏移量进行滚动内容
         (1)参数为对象
         (2){ top: 垂直偏移量, left: 水平偏移量, behavior: '滚动方式' }	
       4.element.scroll() 或 element.scrollTo()	滚动到指定的具体位置	
         (1)参数为对象
         (2){ top:X 轴文档位置, left:Y 轴文档位置, behavior: '滚动方式' }
       5.element.scrollIntoView(bool)	定位到顶部或底部	
         (1)参数为 true 元素定位到顶部
         (2)参数为false 定位到窗口底部
        */
        const app = document.getElementById('app')
        app.addEventListener('scroll', (e) => {
            e.target.scrollIntoView(false)
            if (e.target.scrollTop > 722) {
                e.target.scrollIntoView(true)
            }
        })
        // smooth平滑滚动
        setInterval(() => {
            document.documentElement.scrollBy({ top: 30, behavior: 'smooth' })
            if (document.documentElement.scrollTop > 1021) {
                document.documentElement.scrollTop = 0

            }

        }, 10000)
        app.scrollIntoView({ block: 'end', behavior: 'smooth' })
    </script>
</body>
```
2. 回到顶部
```html
<style>
    * {
        padding: 0;
        margin: 0;
    }

    span {
        width: 50px;
        height: 50px;
        background-color: #e34334;
        color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        position: fixed;
        right: 50px;
        bottom: 50px;
        border-radius: 10px;
        opacity: 0;
        transition: 1s;
        cursor: pointer;
    }

    span.show {
        opacity: 1;
        transform: rotate(360deg);
    }
</style>

<div id="app" style="height: 2000px">

</div>

<span id="bt">TOP</span>

<script>
    window.addEventListener('scroll', () => {
        // 判断是否距离底部200px
        const state = document.documentElement.offsetHeight - 200 <
            document.documentElement.scrollTop + document.documentElement.clientHeight

        const span = document.querySelector('span')
        span.classList[state ? 'add' : 'remove']('show')
    })
    // 回到顶部按钮事件
    document.querySelector('#bt').addEventListener('click', function () {
        // 平滑回滚到页面顶部
        document.documentElement.scrollIntoView({ block: 'start', behavior: 'smooth' })
    })
</script>
```
3. 漂浮广告
```html
<main>
    <div id="app" style="width:260px;height:96px;background-color: red;">
        <img src="./zp.jpg" alt="">
    </div>
</main>
<script>
    class GG {
        constructor(options) {
            this.$el = document.querySelector(options.el)
            this.$options = Object.assign({ timeout: 2, step: 1 }, options)
            //初始移动方向，1向下/向右 -1 向上/向左
            this.x = this.y = 1
            // 设置定位
            this.$el.style.position = 'fixed'
            setInterval(this.run.bind(this), this.$options.timeout)
        }
        left() {
            // 元素宽度和距离
            let { x, width } = this.$el.getBoundingClientRect()
            // 视口宽度
            let { clientWidth } = document.documentElement
            if (x > clientWidth - width) this.x = -1
            if (x < 0) this.x = 1
            return x + this.x * this.$options.step
        }
        top() {
            let { y, height } = this.$el.getBoundingClientRect()
            let { clientHeight } = document.documentElement
            if (y > clientHeight - height) this.y = -1
            if (y < 0) this.y = 1

            return y + this.y * this.$options.step
        }
        run() {
            this.$el.style.left = this.left() + 'px'
            this.$el.style.top = this.top() + 'px'
        }
    }
    new GG({ el: '#app', timeout: 10, step: 1 })
</script>

```
## 14. 事件对象
### (1)事件的绑定和监听
1. 事件的绑定
```html
<body>
    <button onclick="show()">按键1</button>
    <button>按键2</button>
    <button>按键3</button>
    <button>按键4</button>
    <button>按键5</button>
    <script>
        // 事件绑定
        function show() {
            alert('按键1')
        }
        const btns = document.querySelectorAll('button')
        btns[1].onclick = function () {
            alert('按键2');
        }
        const alert1 = () => {
            alert('按键3,点击按键4移除事件')
        }
        // 事件监听(推荐)
        btns[2].addEventListener('click', alert1)
        btns[3].addEventListener('click', function () {
            btns[2].removeEventListener('click', alert1)
        })
        /*
        addEventListener 的第三个参数为定制的选项
       1. once true/false	只执行一次事件
       2. capture true/false 事件是在捕获/冒泡哪个阶段执行，true:捕获阶段 false:冒泡阶段
       3. passive true/false 声明事件里不会调用 preventDefault()，可以减少系统默认行为的等待
        */
        btns[4].addEventListener('click', function () {
            alert('按键5只会触发一次');
        }, { once: true, capture: true, passive: true })
    </script>
</body>
```
2. 事件对象
```js
        type	事件类型
        target	事件目标对象，冒泡方式时父级对象可以通过该属性找到在哪个子元素上最终执行事件
        currentTarget	当前执行事件的对象
        timeStamp	事件发生时间
        x	相对窗口的 X 坐标
        y	相对窗口的 Y 坐标
        clientX	相对窗口的 X 坐标
        clientY	相对窗口的 Y 坐标
        screenX	相对计算机屏幕的 X 坐标
        screenY	相对计算机屏幕的 Y 坐标
        pageX	相对于文档的 X 坐标
        pageY	相对于文档的 Y 坐标
        offsetX	相对于事件对象的 X 坐标
        offsetY	相对于事件对象的 Y 坐标
        layerX	相对于父级定位的 X 坐标
        layerY	相对于父级定位的 Y 坐标
        path	冒泡的路径
        altKey	是否按了 alt 键
        shiftKey	是否按了 shift 键
        metaKey	是否按了媒体键
        window.pageXOffset	文档参考窗口水平滚动的距离
        window.pageYOffset	文档参考窗口垂直滚动的距离
```
### (2)事件处理
```事件处理三个阶段:事件捕获，事件目标，事件冒泡```
1. 事件捕获
```html
    <style>
        #dv1 {
            width: 300px;
            height: 200px;
            background-color: red;
        }

        #dv2 {
            width: 250px;
            height: 150px;
            background-color: green;
        }

        #dv3 {
            width: 200px;
            height: 100px;
            background-color: blue;
        }
    </style>
    <script>
    </script>
</head>

<body>
    <div id="dv1">
        <div id="dv2">
            <div id="dv3"></div>
        </div>
    </div>

    <script>
        //事件捕获:是从外向里
        const divs = document.querySelectorAll('div')
        // 让事件在捕获阶段触发: div1-div2-div3
        divs.forEach(function (ele) {
            //为每个元素绑定事件
            ele.addEventListener("click", function (e) {
                console.log(this.id);
            }, { capture: true });
        });

    </script>
</body>

```
2. 事件冒泡
```html
    <style>
        #dv1 {
            width: 300px;
            height: 200px;
            background-color: red;
        }

        #dv2 {
            width: 250px;
            height: 150px;
            background-color: green;
        }

        #dv3 {
            width: 200px;
            height: 100px;
            background-color: blue;
        }
    </style>
    <script>
    </script>
</head>

<body>
    <div id="dv1">
        <div id="dv2">
            <div id="dv3"></div>
        </div>
    </div>

    <script>
        //事件冒泡:是从里向外
        const divs = document.querySelectorAll('div')
        // 让事件默认在冒泡阶段触发: div3-div2-div1
        divs.forEach(function (ele) {
            ele.addEventListener("click", function (e) {
                console.log(this.id);
            });
        });
 
    </script>
</body>
```
3. 阻止冒泡
```html
<head>
    <meta charset="UTF-8">
    <title>title</title>
    <style>
        #dv1 {
            width: 300px;
            height: 200px;
            background-color: red;
        }

        #dv2 {
            width: 250px;
            height: 150px;
            background-color: green;
        }

        #dv3 {
            width: 200px;
            height: 100px;
            background-color: blue;
        }
    </style>
    <script>
    </script>
</head>

<body>
    <div id="dv1">
        <div id="dv2">
            <div id="dv3"></div>
        </div>
    </div>

    <script>
        /**
         * 阻止事件冒泡
         * 1.e.stopPropagation()
         * 2.e.preventDefault()
        */
        const divs = document.querySelectorAll('div')
        divs.forEach(function (ele) {
            ele.addEventListener("click", function (e) {
                e.stopPropagation()
                e.preventDefault();
                console.log(this.id);
            });
        });
    </script>
</body>
```
4. 事件代理
```html
<style>
    .bg {
        border: solid 2px #ddd;
        background-color: red;
        color: white;
    }
</style>

<body>
    <ul>
        <li>zs</li>
        <li>ls</li>
    </ul>
    <script>
        /*
        借助冒泡思路，我们可以不为子元素设置事件，
        而将事件设置在父级。然后通过父级事件对象的
        event.target 查找子元素，并对他做出处理
        */
        const ul = document.querySelector('ul')
        ul.addEventListener('click', () => {
            if (event.target.tagName === 'LI') 
            event.target.classList.toggle('bg')
        })
    </script>
</body>
```
5. 多级菜单处理
```html
<style>
    .bg {

        background-color: red;
        color: white;
    }
</style>

<body>
    <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <li>6</li>
        <li>7</li>
        <li>8</li>
        <li>9</li>
        <li>10</li>
    </ul>
    <script>
        const ul = document.querySelector('ul')
        ul.addEventListener('mousemove', (e) => {
            if (e.target.tagName === 'LI') {
                [...e.target.parentElement.children].forEach(node => {
                    node.classList.remove('bg')
                })
                e.target.classList.add('bg')
            }
        })
    </script>
</body>
```
6. 处理未来元素
```html
<div id="app">
    <h2>1</h2>
</div>

<script>
    function show() {
        console.log(this.textContent)
    }
    const app = document.querySelector('#app')
    const h2 = document.querySelectorAll('h2')
    // 
    app.addEventListener('click', () => {
        show.call(event.target)
    })
    let newH2 = document.createElement('h2')
    newH2.textContent = '2'
    app.append(newH2)
</script>
```
7. 鼠标事件
```html
  <script>
        /*
        click	鼠标单击事件，同时触发 mousedown/mouseup
        dblclick	鼠标双击事件
        contextmenu	点击右键后显示的所在环境的菜单
        mousedown	鼠标按下
        mouseup	鼠标抬起时
        mousemove	鼠标移动时
        mouseover	鼠标移动时
        mouseout	鼠标从元素上离开时
        mouseup	鼠标抬起时
        mouseenter	鼠标移入时触发，不产生冒泡行为
        mosueleave	鼠标移出时触发，不产生冒泡行为
        copy	复制内容时触发
        scroll	元素滚动时，可以为元素设置 overflow:auto; 产生滚动条来测试
        */
        document.addEventListener('copy', () => {
            event.preventDefault()
            alert('禁止复制内容')
        })
    </script>
```
8. 键盘事件
```js
which	执行 mousedown/mouseup 时，显示所按的键 1 左键，2 中键，3 右键
clientX	相对窗口 X 坐标
clientY	相对窗口 Y 坐标
pageX	相对于文档的 X 坐标
pageY	相对于文档的 Y 坐标
offsetX	目标元素内部的 X 坐标
offsetY	目标元素内部的 Y 坐标
altKey	是否按了 alt 键
ctrlKey	是否按了 ctlr 键
shiftKey	是否按了 shift 键
metaKey	是否按了媒体键
relatedTarget	mouseover 事件时从哪个元素来的,mouseout 事件时指要移动到的元素。当无来源（在自身上移动）或移动到窗口外时值为 null

```
9.  表单事件
```js
focus	获取焦点事件
blur	失去焦点事件
element.focus()	让元素强制获取焦点
element.blur()	让元素失去焦点
change	文本框在内容发生改变并失去焦点时触发，select/checkbox/radio 选项改变时触发事件
input	Input、textarea 或 select 元素的 value 被修改时，会触发 input 事件。而 change 是鼠标离开后或选择一个不同的 option 时触发。
submit	提交表单
```
## 15. canvas
 