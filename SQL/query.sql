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