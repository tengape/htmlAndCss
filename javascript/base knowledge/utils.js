/**
 * 定义一些功能性的函数
 * export 导出函数
 */
// 格式化日期
/**
 * 
 * @param {Date} date 
 */
// export function formatDate(date){
//     return `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
// }

// export const DAY_OF_YEAR = 365;

// 也可以使用 export {} 一起导出

function formatDate(date) {
    return `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
}

const DAY_OF_YEAR = 365;

// export {
//     formatDate,
//     DAY_OF_YEAR
// };

// 也可以使用default 导出，这样入的时侯就可以不用指定名字
export default formatDate;
export {
    DAY_OF_YEAR
};