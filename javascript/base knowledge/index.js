/*第一章基础篇******************************************************************************************************/
/**1、变量 区分大小写 推荐使用驼峰命名或者下划线*/
var name = '峰华';
var fontColor = 'red';
var font_color = 'white';

console.log('hello world');
console.log(name);
console.log(fontColor);
console.log(font_color);

name = '马云';
console.log(name);

var a = 5;
var b = 6;
console.log(a + b);

var c = a + b;
console.log(c + 5);

console.clear();


/**2、常量 定义用const 常量为大小，并且单词之间用下划线链接*/
const FIVE_SECONDS = 5000;
// const button = new Button(); // 也可以用于创建实例


/**3、基础数据类型 
 * bool型
 * 数字整型
 * 浮点型
 * 字符型
 * undefined
 * null
 * object
 * array
 * function
 */
var visible = true;
var isEqual = false;
console.log(visible);
console.log(isEqual);

var num = 100;
var floatingNum = 12.34;
var negative = -100;
var str = "Hello!";
var notInitialized; // undefined 变量没有初始化
console.log(notInitialized)
var emptyValue = null;
console.log(emptyValue);
console.clear();

/**
 * 4、数据类型转换
 * typeof 可以判断数据类型
 */
console.log(typeof visible);
console.log(typeof num);
console.log(typeof floatingNum);
console.log(typeof str);
console.log(typeof notInitialized);
console.log(typeof emptyValue);

var result = num + str;
console.log(result);

var strNum = "123";
console.log(typeof parseInt(strNum));
console.clear();

/**
 * 5、注释
 */
// 姓名 单行注释
var myName = "峰华";

/*
    多行注释
*/

/**
 * 文档注释用于生成API文档的
 */


/**
 * 对两个数进行加法运算
 * @param {number} a 第一个操作数
 * @param {number} b 第二个操作数
 * @returns 返回两个操作数的和
 b
 */
function add(a, b) {
    return a + b;
}

add(1, 2);

/*第二章操作符******************************************************************************************************/
/**
 * 1、赋值操作符
 */
var x = 10;
var y = x;

console.log(x, y);

/**
 * 2、一元操作符
 */

var negativeNum = -5;
console.log(negativeNum);
var strNum = +"3"; // 把字符型转成数字型
console.log(strNum, typeof strNum);

var num = 8;
console.log(num++); // 8
console.log(num); // 9
console.log(++num); // 10
console.log(num); // 10
console.log(num--); //10
console.log(num); // 9
console.log(--num); // 8
console.log(num); // 8
console.clear();

/**
 * 3、算术操作符
 */

console.log('1 + 5 = ', 1 + 5);
console.log('5 - 1 = ', 5 - 1);
console.log('3 * 9 = ', 3 * 9);
console.log('7 / 2 = ', 7 / 2);
console.log('7 % 2 = ', 7 % 2); //1 取模
console.log('4 ** 2 = ', 4 ** 2); //16 指数 4的二次方
console.clear();

/**
 * 4、比较操作符
 */
console.log("1 > 5 ", 1 > 5);
console.log("1 >= 5 ", 1 >= 5);
console.log("5 >= 5 ", 5 >= 5);

console.log("5 == 5 ", 5 == 5);
console.log("'5' == 5 ", '5' == 5);

console.log("5 === 5 ", 5 === 5);
console.log("'5' === 5 ", '5' === 5);

console.log('undefined == null', undefined == null); // true
console.log('undefined === null ', undefined === null);
console.clear();

/**
 * 5、逻辑操作符
 */

console.log("true && true ", true && true); // true
console.log("true && false ", true && false); // false

console.log("true || false ", true || false); // true
console.log("!true ", !true); // false
// 很适合用于第一个条件为true 以后才执行第二个条件
console.log("true && 'hello'", true && "hello"); // hello
// 很适合用于给定默认值，如果第一个值为false 就会得到第二什值
console.log("false || 'default'", false || 'default'); // default

var a = null;
b = a || 5;
console.log(b); // 5
// 短路特性 
// 第一个为false了 与就不会执行后面的了。
console.log('false && "not printed!"', false && "not printed!"); // false;
console.log('true || "not printed!"', true || "not printed!"); // true;
console.log('4+1 || "not printed!"', 4 + 1 || "not printed!"); // 5;

console.log(4);
console.log(!4); // false
console.log(!!4); // true

/**
 * 6、位运算符
 */
console.clear();
// 5 101
// 3 011
console.log("5 & 3", 5 & 3); // 1 与
console.log("5 | 3", 5 | 3); // 7 或
console.log("5 ^ 3", 5 ^ 3); // 6 非
console.log("~5", ~5); // -6 反

console.log("5 << 1", 5 << 1); // 左移1位 10
console.log("5 >> 1", 5 >> 1); // 左移 2
console.log("-5 >>> 1", -5 >>> 1); //无符号右移1位  2147483645

/**
 * 7、三目运算符
 */
console.clear();
var temperature = 10;
console.log(temperature > 15 ? '出门' : '在家') // 在家

/*第三章流程控制******************************************************************************************************/
console.clear();
/**
 * 1、语句块
 */

//  一组大括号就是一组作用域
{
    var name = "峰华";
    let age = 15;
    const y = 15;
    console.log(name);
    console.log(age);
}

console.log(name)
// console.log(age); let 定义的变量不能在外部访问 const定义的变量也同样不行

/**
 * 2、if...else..
 */
// var passcorde = prompt("请输入暗号");
// if (passcorde === "天王盖地虎"){
//     alert("登录成功！");
// }else{
//     alert("登录失败！");
// }
/**
 * 3、if...else if..else
 */
// var role = prompt("请输入用户权限");
// if (role === "超级管理员") {
//     alert(1);
// }else if(role == "管理员"){
//     alert(2);
// }else {
//     alert(3);
// }
/**
 * 4、switch...case...
 * 
 */
// var role = prompt("请输入用户权限");
// switch(role) {
//     case '超级管理员':
//         alert(1);
//         break;
//     case '管理员':
//         alert(2);
//         break;
//     default:
//         alert(3);
// }
/**
 * 5、流程控制 while
 */
// var password = '';
// while(password !== '123456'){
//     password = prompt('请输入密码：');
// }
// console.log("登录成功！");
/**
 * 6、do...while,不管条件成不成立都要执行一次
 */
var x = 5;
do {
    console.log(x);
} while (x > 5 && x <= 10);
console.clear();
/**
 * 7、for
 */
for (let i = 0; i < 10; i += 2) { //i++
    console.log(i);
}
// for(;;){ 死循环
//     console.log(true);
// }

var j = 0;
while (j < 10) {
    console.log(j);
    j++

}
/**
 * 8、break continue
 */
for (let i = 0; i < 10; i++) {
    if (i == 6) {
        break; // 等于6的时候就终止了
    }
    console.log(i);
}


for (let i = 0; i < 10; i++) {
    if (i == 6) {
        continue; // 等于6的时候就跳出本次循环
    }
    console.log(i);
}

/*第四章 函数******************************************************************************************************/
console.clear();

/**
 * 1、声明函数
 */
function putInRefrigerator() {
    console.log("打开冰箱门");
    console.log("把大象放进去");
    console.log("关上冰箱门");
}

function putAnythinInfrigerator(something) {
    console.log("打开冰箱门");
    console.log("把" + something + "放进去");
    console.log("关上冰箱门");
}

/**
 * 
 * @param {*} a 
 * @param {*} b 
 */
function add(a, b) {
    return a + b;
}

/**
 * 
 * @param {*} num 
 */
function testNum(num) {
    if (num < 0) return;
    return num > 10;
}

/**
 * 2、调用函数
 */
putInRefrigerator();
putAnythinInfrigerator('兔子');
console.log(add(1, 2));
console.log(testNum(-5)); // undefined
console.log(testNum(15)); // true

/**
 * 3、函数表达式
 */

console.log(add); // 不加小括号就是打印函数本身
var plus = add;
var res = plus(5, 6);
console.log(res);

var multiply = function (a, b) { // 匿名函数
    return a * b;
}

console.log(multiply(b, 2));

/**
 * 4、变量和函数提升 (hoisting) 函数声明在低部，在上面使用
 */
console.clear();
x = 5;
console.log(x);
var x;


console.log(divide(8, 2));

function divide(a, b) {
    return a / b;
}

/**
 * 5、默认参数
 */

greetings();
greetings("张三");

function greetings(name = '峰华') {
    console.log('你好，' + name);
}

greetingWithWeather(undefined, '晴天'); // 你好，峰华， 今天是：晴天

/**
 * 
 * @param {*} name 
 * @param {*} weather 
 */
function greetingWithWeather(name = "峰华", weather) {
    console.log("你好，" + name + "， 今天是：" + weather);
}

/**
 * 6、递归
 */

console.log(sum(10));
/**
 * 计算某个数 1到n的和
 * @param {*} n 
 */
function sum(n) {
    if (n === 1) {
        return 1;
    }
    return n + sum(n - 1);
}

console.log(fib(5)); // 8

/**
 * 非波拉列
 * @param {*} num 
 */
function fib(num) {
    if (num <= 1) {
        return 1;
    }
    return fib(num - 1) + fib(num - 2);
}

/**
 * 7、arguments
 */

log('abc', '123', '峰华');

function log() {
    for (let i = 0; i < arguments.length; i++) {
        console.log(arguments[i]);
    }
}

/**
 * 8、作用域  全局作用域 或者局部作用域
 */
var x = 5; // 这个就是全局作用域的变量



function add(a) {
    var yy = 10;
    console.log("y=" + y);
    return a + x;
}

console.log(add(8)); // 13

x = 20;
console.log(add(8)); // 28

// console.log(yy); 不能访问内部变量


var num = 100;

function multiplya(num) {
    return num * 10;
}
console.log(multiplya(4)); // 40

/**
 * 9、var/let的区别
 */
console.clear();
var z = 6;
if (z > 2) {
    console.log(z);
    let innerZ = 17;
}

// console.log(innerZ);
/**
 * 10、箭头函数 匿名函数
 */
var greeting = () => {
    console.log("hello");
}

greeting();

var xGreeting = name => { // 一个参数的时候可以不用写括号
    console.log(name);
}

xGreeting('峰华');

var dGreeting = (name, weather) => { // 两个参数
    console.log("hello " + name, "今天是：" + weather);
}
dGreeting('峰华', "晴天");

var increment = x => x + 1; // 只有一个参数，并且只有一行返回可以不需要 括号以及 return 
console.log(increment(6));


/**
 * 11、闭包，是函数里面再定义函数
 */
console.clear();

function squareSum(a, b) {
    function square(x) {
        return x * x;
    }
    return square(a) + square(b);
}

console.log(squareSum(2, 3)); // 13;
// 高级函数 higher-order function 返回函数的一个函数 , 这样外部函数就只能访问值，不能修改值，起到了保护的作用。
function person() {
    let name = '峰华';

    function getName() {
        return name;
    }
    return getName;
}

var getName = person();
console.log(getName); // 函数本身
console.log(getName()); // 调用函数


/**
 * 12、柯里化
 */
console.clear();

function addThreeNums(a, b, c) {
    return a + b + c;
}
console.log(addThreeNums(1, 2, 3));

// 改成柯里化的形式
function addThreeNumsCurry(a) {
    return function (b) {
        return function (c) {
            return a + b + c
        }
    }
}

console.log(addThreeNumsCurry(1)(2)(3));

var fixedTwo = addThreeNumsCurry(1)(2); // 先计算前面两个值 并保存起来。
console.log(fixedTwo(4)); // 7 再同第三个数相加 计算第三个值。
console.log(fixedTwo(5)); // 8
console.log(fixedTwo(6)); // 9

/**
 * 13、自执行函数
 * 函数在定义完以后直接执行操作
 * 内部代码，外部绝对是访问不到的。防止被篡改。
 * 行成自己的作用域，防止自内部的变量同外部的变量发生冲突。
 */
var num1 = 10;
(function () {
    var num1 = 20;
    console.log(num1); // 20;
})();
console.log(num1); // 10;

/**
 * 14、回调函数
 */
function request(cb) {
    console.log('请求数据');
    cb("success");
    console.log('请求结束');
}

function callback(result) {
    console.log("执行回调");
    console.log("执行结果是：" + result);
}

request(callback);

// 使用箭头函数
request(result => {
    console.log("执行回调");
    console.log("执行结果是：" + result);
});

/*第五章 数组******************************************************************************************************/
/**
 * 1、创建数组
 */
console.clear();
var arr1 = [1, 2, 3];
console.log(arr1);
var arr2 = new Array(4, 5, 6);
console.log(arr2);
var arr3 = Array(7, 8, 9);
console.log(arr3);
var arr4 = Array.of(10, 11, 12);
console.log(arr4);

//如果创建数组只有一个元素的话我们只能用 [] , Array.of
var arrSingle = Array(6); // 定义有几个空元素的数组
console.log(arrSingle);
var arrSingle2 = Array(7); // 定义有几个空元素的数组
console.log(arrSingle2);

var arrSingle3 = Array.of(4);
console.log(arrSingle3);
var arrSingle4 = [9];
console.log(arrSingle4);
/**
 * 2、访问数组
 */
console.clear();
var arr = [1, 2, 3];
console.log(arr.__proto__);
console.log(arr.length);
console.log(arr[0]);

/**
 * 3、添加元素
 */
var arr = [1, 2, 3];
arr[0] = 4;
console.log(arr); //[4, 2, 3]
arr[3] = 5;
console.log(arr); //index.js:639 (4) [4, 2, 3, 5]
arr[8] = 9;
console.log(arr); //index.js:641 (9) [4, 2, 3, 5, empty × 4, 9]
console.log(arr[6]); //index.js:642 undefined 还没有值
/**
 * 4、删除元素
 */
var arr = [1, 2, 3];
arr.length = 2;
console.log(arr); //index.js:648 (2) [1, 2]
arr.length = 0;
console.log(arr); //[] 这样就直接清空了。

// 删除任意位置的数组元素
var arr = [1, 2, 3, 4, 5, 6];
arr.splice(2, 1); //splice(位置, 个数),直接更改原数组
console.log(arr); //index.js:655 (5) [1, 2, 4, 5, 6]

arr.splice(1, 2, 3, 7, 8);
console.log(arr); //index.js:658 (6) [1, 3, 7, 8, 5, 6] 删除 2，4 并添加 3,7,8

arr.splice(1, 0, 9, 10); // 在第2个元素后面添加 9和10
console.log(arr); //index.js:661 (8) [1, 9, 10, 3, 7, 8, 5, 6]

/**
 * 5、数组遍历
 */
console.clear();
var arr = [1, 3, 5, 7, 9];
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

console.log("for.....of");

for (let ele of arr) {
    console.log(ele);
}

console.log('.forEach');

/**
 * ele 访问到的元素
 * index 索引
 * self 数组本身
 */
arr.forEach((ele, index, self) => {
    console.log(ele, index, self);
});
/*
index.js: 686 1 0(5)[1, 3, 5, 7, 9]
index.js: 686 3 1(5)[1, 3, 5, 7, 9]
index.js: 686 5 2(5)[1, 3, 5, 7, 9]
index.js: 686 7 3(5)[1, 3, 5, 7, 9]
index.js: 686 9 4(5)[1, 3, 5, 7, 9]
*/

/**
 * 6、栈模式
 */
console.clear();
var stack = [1, 2, 3];
stack.push(4); // 压入元素在末尾
console.log(stack); //index.js:702 (4) [1, 2, 3, 4]
stack.push(5, 6, 7); // 在末尾压入多个元素
console.log(stack); // index.js:704 (7) [1, 2, 3, 4, 5, 6, 7]

var last = stack.pop(); //取出最后一个
console.log(last); // 7;
console.log(stack); // index.js:708 (6) [1, 2, 3, 4, 5, 6]

console.log(stack[stack.length - 1]);
/**
 * 7、队列模式
 */
var queue = [1, 2, 3];
queue.push(4, 5, 6); // 从尾部插入数据
console.log(queue); // index.js:716 (6) [1, 2, 3, 4, 5, 6]
var first = queue.shift();
console.log(first); // 1
console.log(queue); //index.js:719 (5) [2, 3, 4, 5, 6]
queue.unshift(10, 11, 12); // 从头部添加数据
console.log(queue); //index.js:721 (8) [10, 11, 12, 2, 3, 4, 5, 6]

/**
 * 8、反转数组
 */
console.clear();
var arr = [1, 2, 3];
console.log(arr.reverse()); // (3) [3, 2, 1]
console.log(arr); //index.js:729 (3) [3, 2, 1] // 原数组也改变了。

console.log("hello".split("")); //index.js:731 (5) ["h", "e", "l", "l", "o"]
console.log("hello".split("").reverse().join("")); //index.js:732 olleh

/**
 * 9、数组排序
 */
console.clear();
var arr = [1, 5, 3, 2, 4];
arr.sort();
console.log(arr); //index.js:743 (5) [1, 2, 3, 4, 5]

// 降序排列
// arr.sort((a, b) => {
//     if(a > b) {
//         return -1;
//     }else if (a < b) {
//         return 1;
//     }else {
//         return 0;
//     }
// });
arr.sort((a, b) => b - a);
console.log(arr); //index.js:755 (5) [5, 4, 3, 2, 1]

/**
 * 10、数组的连接
 */
var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];
console.log(arr1.concat(arr2)); //index.js:763 (6) [1, 2, 3, 4, 5, 6]

/**
 * 11、数组的裁切 返回数据的一部份
 */
var arr = [1, 2, 3, 4, 5];
console.log(arr.slice(1)); // index.js:769 (4) [2, 3, 4, 5]
console.log(arr.slice(1, 3)); // index.js:770 (2) [2, 3]
console.log(arr.slice(1, -1)); //index.js:771 (3) [2, 3, 4]

/**
 * 12、map 数组
 */
var arr = [1, 2, 3, 4];
var mappedArr = arr.map(ele => ele * 2);
console.log(mappedArr); //index.js:778 (4) [2, 4, 6, 8]
console.log(arr); //index.js:779 (4) [1, 2, 3, 4]

/**
 * 13、reduce 数组
 */

var arr = [1, 2, 3, 4];
var result = arr.reduce((previous, current) => previous + current, 0);
console.log(result); // index.js:787 10

var result2 = arr.reduce((first, second) => first + second);
console.log(result2);

/**
 * 13、数组过滤
 */
var arr = [1, 2, 3, 4, 5, 6];
var filteredArr = arr.filter(item => item > 4);
console.log(filteredArr); //index.js:797 (2) [5, 6]
/**
 * 14、数组测试
 */
var arr = [1, 2, 3, 4, 5, 6];
var result = arr.every(item => item > 0); // 所有的元素为true 就返回true
console.log(result); //index.js:803 true

var resultSome = arr.some(item => item > 5); // 只要有一个元素为true 就返回true
console.log(resultSome); //index.js:803 true

/**
 * 15、数组 destructuring 解构操作符， 是把数组的 元素赋值给变量
 */
var arr = [1, 2, 3];
var [a, b, c] = arr;
console.log(a, b, c); //index.js:813 1 2 3
var [d, e] = arr;
console.log(d, e); // index.js:815 1 2
var [, f] = arr
console.log(f); //2


function multipleReturns() {
    let name = '峰华';
    let positon = '前端工程师';
    return [name, positon];
}

var [myName, myPostion] = multipleReturns();
console.log(myName, myPostion); //index.js:827 峰华 前端工程师

/**
 * 16、rest 操作符，取了部份数据，想把剩余的元素以数组的形式返回
 */

console.clear();

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var [a, b, ...rest] = arr; // 这里的rest 只就是一个变量名称
console.log(a, b, rest); // index.js:837 1 2 (7) [3, 4, 5, 6, 7, 8, 9]

// 如果调过一个元素 rest 是否还包含这个元素
var [a, , b, ...rest] = arr;
console.log(a, b, rest); // 1 3 (6) [4, 5, 6, 7, 8, 9] 2不会被保留


// 可以用于接收多个参数
function variousArgs(...args) {
    console.log(args); // index.js:846 (5) [1, 2, 3, 4, 5]
}

variousArgs(1, 2, 3, 4, 5);

/**
 * 17、多维数组
 */
//创建一个5行4列的数组
var arr = [];
for (let i = 0; i < 5; i++) {
    arr[i] = [];
    for(let j = 0; j < 4; j++){
        arr[i][j] = i + j;
    }
}
console.log(arr);

/*
(5)[Array(4), Array(4), Array(4), Array(4), Array(4)]
0: (4)[0, 1, 2, 3]
1: (4)[1, 2, 3, 4]
2: (4)[2, 3, 4, 5]
3: (4)[3, 4, 5, 6]
4: (4)[4, 5, 6, 7]
 */


 /*第六章 对象******************************************************************************************************/