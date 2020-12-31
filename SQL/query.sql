-- use test;
-- select * from tuinfo;
-- SHOW DATABASES
-- Get a list of databases
-- Create a new database called 'DatabaseName'
-- Connect to the 'master' database to run this snippet

-- Create the new database if it does not exist already

-- CREATE DATABASE myemployees
-- SHOW DATABASES;

-- USE myemployees; -- 选择数据库
-- DESC employees; -- 显示员工表机构

-- 进阶1：基础查询
/*
    语法：
    select 查询列表 
    from 表名;
    特点：
    1、查询表表中可以是：表中的字段、常量值、表达式、函数
    2、查询的结果是一个虚拟的表格
*/
-- 1.查询表中的单个字段
USE myemployees;
-- SELECT last_name FROM employees;
-- 2.查询表中的多个字段
-- SELECT last_name, salary, email FROM employees;
-- 3.查义表中的所有字段
-- SELECT * FROM employees;
-- 4.查询常量值
-- SELECT 100; -- 数据常量
-- SELECT "jonh"; -- 字符常量
-- 5.查询表达式
-- SELECT 100%99;
-- 6.查询函数
-- SELECT VERSION();
-- 7.别名
-- A.便于理解
-- B.如果要查询的字段有重名的情况，使用别名可以区分开来
-- 方式1：使用AS
-- SELECT 100%99 AS 结果;
-- SELECT last_name AS 姓, first_name AS 名 FROM employees;
-- 方式2：使用空格
-- SELECT last_name 姓, first_name 名 FROM employees;
-- 案例：查询salary,显示结果为out put 就必须得 Out put 加上引号才可以。
-- SELECT salary AS "out put"  FROM employees;
-- 8.去掉重复记录 DISTINCT
-- 案例：查询员工表中涉及到的所有的部门编号
-- SELECT DISTINCT department_id FROM employees;
-- 9.+号的作用 CONCAT() 字符链接函数 不能使用加号,加号在mysql中是做算术运算
/*
    +在编程语言中的作用
    1.运算符,两个操作数都为数值型
    2.连接符,只要有一个操作数为字符
    在mysql 中+只有一个功能 :运算符
*/
-- SELECT 100+90; -- 190 两个操作数都为数值型,则做加法运算
-- SELECT '123' + 90; -- 213 其中一方为字符型,试图将字符数值转换成数字型
-- SELECT 'john' + 90; -- 90 如果转换失败,则将字符型转换成0
-- SELECT NULL+10 -- null 如要其中一方为null 结果都为null

-- 案例:查询员工名和姓连接成一个字段,并显示为姓名
-- SELECT CONCAT('a','b','c') AS 结果; -- abc
-- SELECT last_name+first_name AS 姓名 FROM employees;
-- SELECT CONCAT(last_name, first_name) AS 姓名 FROM employees; -- KochharNeena
-- SELECT IFNULL(字段,返回值) -- 判断是否为空
-- SELECT IFNULL(commission_pct,0) AS 结果, commission_pct FROM employees;
-- last_name,first_name,commission_pct 使用concat链接且用逗号隔开 其中commission_pct中有可能有null ,null 同任何字符连接都等于null 所以必须使用 IFNULL判断
-- SELECT CONCAT(`last_name`,',',`first_name`,',',IFNULL(`commission_pct`,0) ) AS out_put FROM employees;  -- K_ing,Steven,0.00


-- 进阶2:条件查寻
/*
    语法:
    select 查询列表 from 表名 where 筛选条件;
    分类:
        1、按条件表达式筛选
            简单条件运算符： > < = !=或者<> >= <=
        2、按逻辑表达式筛选
            作用：用于连接条件表达式
            逻辑运算符： & || ! (与或非) 
            and or not SQL推荐使用
        3、模糊查询
            LIKE 
            BETWEEN AND 
            IN
            IS NULL
*/

-- 1、按条件表达式筛选
-- 案例1：查询工资>12000的员工信息
-- SELECT * FROM employees WHERE salary > 12000;
-- 案例2： 查询部门编号不等 90号的员工和部门编号
-- SELECT last_name,department_id FROM employees WHERE department_id != 90;
/*
建义保用<> 代替 !=
SELECT last_name, department_id
FROM employees
WHERE department_id <> 90;
*/


-- 2、逻辑表达式筛选 
-- 案例1：查询工资在10000到20000之间的员工名、工资及奖金
-- SELECT
--     last_name,
--     salary,
--     commission_pct
-- FROM
--     employees
-- WHERE
--     salary >= 10000 and salary <= 20000;

-- 案例2：查询部门编号不是在90到110之间，或者工资高于15000的员工信息
-- SELECT
--     *
-- FROM
--     employees
-- WHERE
--     department_id < 90 OR department_id > 110 OR salary > 15000;

-- 或者

-- SELECT
--     *
-- FROM
--     employees
-- WHERE
--    NOT(department_id >= 90 AND department_id <= 110) OR salary > 15000;

-- 3、模糊查询
/*
    like
    特点：
        1、一般和通配符搭配使用
            通配符：
            % 任意多个字符，包含0个字符
            _ 任意单个字符
    between and 
    in
    is null | is not null
*/
-- 1、LIKE
-- 案例1：查询员工名中包含字符a的员工信息
-- SELECT
--     *
-- FROM
--     employees
-- WHERE
--     last_name LIKE '%a%'

-- 案例2：查询员工名中第三个字符为e,第五个字符为a的员工名和工资
-- SELECT
--     last_name,
--     salary
-- FROM
--     employees
-- WHERE 
--     last_name LIKE '__n_l%';

-- 案例3：查询员工名中第二个字符为_的员工名
-- SELECT
--     last_name,
--     salary
-- FROM
--     employees
-- WHERE 
--     last_name LIKE '_\_%'; -- 通过\来转义 也可以通ESCAPE来转义，建义使用ESCAPE 例如

-- SELECT
--     last_name,
--     salary
-- FROM
--     employees
-- WHERE 
--     last_name LIKE '_$_%' ESCAPE '$'; -- 结果也是一样的 ESCAPE 指定转义字符
-- 2.between adn 
-- 案例1：查询员工编号在100在120之间的员工信息
-- SELECT
--     *
-- FROM
--     employees
-- WHERE
--     employee_id >=100 AND employee_id <= 120

SELECT
    *
FROM
    employees
WHERE
    employee_id  BETWEEN 100 AND  120