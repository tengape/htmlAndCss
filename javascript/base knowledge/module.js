// import {要导入的函数} from "模块"; 这里用的是相对路径
// 导入多个条目的话 用,号分隔

// import {
//     formatDate,
//     DAY_OF_YEAR
// } from "./utils.js";

// console.log(formatDate(new Date()));
// console.log(DAY_OF_YEAR);

// 导入默认条目
// import format, {DAY_OF_YEAR} from "./utils.js";
// console.log(format(new Date()));
// console.log(DAY_OF_YEAR);

// 别名导入


// import format, {DAY_OF_YEAR as DAYS} from "./utils.js";
// console.log(format(new Date()));
// console.log(DAYS);

// 另外我们也可以把一个模块所有的条目一次性导入取一个名字
// 他会用这个名字创建一个对象，通过他我们可以访问所有导出
// 的条目

import * as utils from "./utils.js";
console.log(utils.default(new Date()));
console.log(utils.DAY_OF_YEAR);


