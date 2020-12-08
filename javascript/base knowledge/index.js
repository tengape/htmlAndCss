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

var c = a + b ;
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
function add(a, b){
    return a+ b;
}

add(1,2);

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

console.log('1 + 5 = ', 1+ 5);
console.log('5 - 1 = ', 5-1);
console.log('3 * 9 = ', 3*9);
console.log('7 / 2 = ', 7/2);
console.log('7 % 2 = ', 7%2); //1 取模
console.log('4 ** 2 = ', 4**2); //16 指数 4的二次方
console.clear();

/**
 * 4、比较操作符
 */
console.log("1 > 5 ",1>5);
console.log("1 >= 5 ", 1>=5);
console.log("5 >= 5 ", 5>=5);

console.log("5 == 5 ", 5==5);
console.log("'5' == 5 ", '5' ==5);

console.log("5 === 5 ", 5 === 5);
console.log("'5' === 5 ", '5' === 5);

console.log('undefined == null', undefined == null); // true
console.log('undefined === null ', undefined === null);


