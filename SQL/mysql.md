# mysql 学习
## 数据库相关概念
```
    DB:数据库（database）:存储数据的“仓库”。它保存了一系列有组织的数据。
    DBMS:数据库管理系统（Database Manager System）数据库是通过DBMS创建和操作的容器。
    SQL:结构化查询语言（Structure Query Language） 专门用来与数据库通信的语言。
        1、不是某个特定数据库供应商专有语言，几乎所有DBMS都支持SQL
```
## 配置文件 my.ini
```
    1、port 端口
    2、basedir 安装目录
    3、datadir 数据存放目录 
    4、character-set-server 字符集设置
    5、default-storage-engine 默认数据库引擎
```
## dos命令起停mysql服务
*   net stop mysql0815
*   net start mysql0815

## dos命令登录数据库
```
    mysql [-h主机名 -p端口号] -u用户名 -p密码
    mysql -h localhost -P 3306 -u root -p 这是不带密码
    mysql -h localhost -P 3306 -u root -pvertrigo 自带密码
    mysql -u root -pvertrigo 本机3306端口可以简写
    退出:exit
```
## mysql常见命令
```
    show databases; 显示所有数据
    use test; 打开test数据库
    show tables; 查询有哪些表
    show tables from mysql; 可以直接查寻mysql 数据库里有哪些表
    select database(); 获取当前数据名称
    create table tuinfo(id int, name varchar(20)); 创建表
    desc tuinfo ; 查寻表结构
    select * from tuinfo; 查寻数据
    insert into tuinfo (id, name) values(2,"rose"); 插入数据
    update tuinfo set name = 'lilei' where id = 1; 更新数据
    delete from tuinfo where id =1; 删除数据
    select version(); 查寻数据库版本号
    mysql --version  或者 mysql -V在dos命令下查看数据库版本

    MYSQL 语法总结：
    1、不区分大小写,但是建议关键字大写，表名，列名小写
    2、每条命令最好用分号结尾
    3、每条命令根据需要，可以进行缩进或换行
    4、注释
        A、单行注释：#注释文字
        B、单行注释：-- 注释文字
        C、多行注释： /* 注释文字 */
```
## SQL基础
```
    SQL主要分成四部分：
    （1）数据定义。（SQL DDL）用于定义SQL模式、基本表、视图和索引的创建和撤消操作。
    （2）数据操纵。（SQL DML）数据操纵分成数据查询和数据更新两类。数据更新又分成插入、删除、和修改三种操作。
    （3）数据控制。包括对基本表和视图的授权，完整性规则的描述，事务控制等内容。
    （4）嵌入式SQL的使用规定。涉及到SQL语句嵌入在宿主语言程序中使用的规则。
```
### 1、DQL语言学习
```
    DQL: Data Query languge
    主要是查询的，主要的关键字就是select
```
#### 1.1、基础查询
```
    语法：
    select 查询列表 
    from 表名;
    特点：
    1、查询表表中可以是：表中的字段、常量值、表达式、函数
    2、查询的结果是一个虚拟的表格

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
```
#### 1.2、条件查询
#### 1.3、排序查询
#### 1.4、常见查询
#### 1.5、常见函数
#### 1.6、分组函数
#### 1.7、分组查询
#### 1.8、连接查询
#### 1.9、子查询
#### 1.10、分页查询
#### 1.11、union联合查询
### 2、DML语言的学习
```
    DML: Data Manipulation Language 数据操纵语言
    主要指数据的增删改: delete\update\insert\call
```
#### 2.1、插入语句
#### 2.2、修改语句
#### 2.3、删除语句
### 3、DDL语言的学习
```
    DDL:Data Definition Language  数据定义语言
    建库、建表、设置约束等：create\drop\alter
```
#### 3.1、库和表的管理
#### 3.2、常见数据类型介绍
#### 3.3、常见约束
### 4、TCL语言的学习
```
    TCL:TCL（Transaction Control Language）事务控制语言
    SAVEPOINT 设置保存点
    ROLLBACK  回滚
    SET TRANSACTION
```
#### 4.1、事务和事务处理
### 5、DCL语言的学习
```
    DCL（Data Control Language）数据库控制语言  授权，角色控制等
    GRANT 授权
    REVOKE 取消授权
```
### 5、视图的讲解
### 6、存储过程和函数
### 7、流程控制结构







