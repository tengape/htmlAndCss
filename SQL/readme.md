<!-- TOC -->

- [mysql 学习](#mysql-学习)
  - [数据库相关概念](#数据库相关概念)
  - [配置文件 my.ini](#配置文件-myini)
  - [dos命令起停mysql服务](#dos命令起停mysql服务)
  - [dos命令登录数据库](#dos命令登录数据库)
  - [mysql常见命令](#mysql常见命令)
  - [SQL基础](#sql基础)
    - [1、DQL语言学习](#1dql语言学习)
      - [1.1、基础查询](#11基础查询)
      - [复习](#复习)
      - [1.2、条件查询](#12条件查询)
      - [综合练习](#综合练习)
      - [复习](#复习-1)
      - [1.3、排序查询](#13排序查询)
      - [1.4、常见查询](#14常见查询)
      - [1.5、常见函数](#15常见函数)
      - [1.6、分组函数](#16分组函数)
      - [1.7、分组查询](#17分组查询)
      - [1.8、连接查询](#18连接查询)
      - [1.9、子查询](#19子查询)
      - [1.10、分页查询](#110分页查询)
      - [1.11、union联合查询](#111union联合查询)
    - [2、DML语言的学习](#2dml语言的学习)
      - [2.1、插入语句](#21插入语句)
      - [2.2、修改语句](#22修改语句)
      - [2.3、删除语句](#23删除语句)
    - [3、DDL语言的学习](#3ddl语言的学习)
      - [3.1、库和表的管理](#31库和表的管理)
      - [3.2、常见数据类型介绍](#32常见数据类型介绍)
      - [3.3、常见约束](#33常见约束)
    - [4、TCL语言的学习](#4tcl语言的学习)
      - [4.1、事务和事务处理](#41事务和事务处理)
    - [5、DCL语言的学习](#5dcl语言的学习)
    - [5、视图的讲解](#5视图的讲解)
    - [6、存储过程和函数](#6存储过程和函数)
    - [7、流程控制结构](#7流程控制结构)

<!-- /TOC -->
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
#### 复习
```
    一、语法
        select 查询列表
        from 表名;

    二、特点
        1、查询列表可以是字段、常量、表达式、函数，也可以是多个
        2、查询结果一个虚拟表

    三、示例
        1、查询单个字段
            select 字段名 from 表名;
        2、查询多个字段
            select 字段名,字段名 from 表名;
        3、查询所有字段
            select * from 表名;
        4、查询常量
            select 常量值
            注意：字符型和日期型的常量值必须用单引号引起来，数值型不需要
        5、查询函数
            select 函数名(实参列表);
        6、查询表达式
            select 100/1234;
        7、起别名 
            A、AS
            B、空格
        8、去重 
            select distinct 字段名 from 表名; 其中 字段名，只能放一个字段
            select distinct a, b from 表名; 这样是不可以的。
        9、+
            作用：做加法运算
            select 数值+数值; 直接运算
            select 字符+数值; 先试图将字符转换成数值，如果转换成功，则继续运算，否刚转换成0，再做运算
            select null+值，结果都为null;
        10、【补充】concat函数
            功能：拼接字符
            select concat(字符1，字符2，字符3,...)
        11、【补充】IFNULL 函数
            功能：判断某字段或表达式是否为null,如果为null 返回指定的值，否则返回原本的值
            select ifnull(commission_pct, 0) from employees;
        12、【补充】ISNULL 函数
            功能：判断某个字段或表达式是否为null，如果是则返回1，返则返回0；
```

#### 1.2、条件查询
```
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
    -- 2.between and
    /*
        A、使用between and 可以提高语句的简洁度
        B、包含临界值 例如 BETWEEN 100 AND 200 实际就包换 100和200 之间的数值
        C、两个临界值不能调换顺序
    */
    -- 案例1：查询员工编号在100在120之间的员工信息
    -- SELECT
    --     *
    -- FROM
    --     employees
    -- WHERE
    --     employee_id >=100 AND employee_id <= 120
    -- 
    -- 
    -- SELECT
    --     *
    -- FROM
    --     employees
    -- WHERE
    --     employee_id  BETWEEN 100 AND  120
    #3 in
    /*
        含义：判断某个字段的值是否属于in列表中的某一项
        特点：
            A、使用in比使用or提高了语句简便度
            B、in列表的值类型必须一致或兼容
    */
    #案例：查询员工的工种编号是 IT_PROG、AD_VP、AD_PRES中的一个员工名和工程编号
    -- SELECT
    -- 	last_name,
    -- 	job_id
    -- FROM
    -- 	employees
    -- WHERE
    -- 	job_id IN('IT_PROG','AD_VP','AD_PRES');

    #4、is NULL
    /*
        = 或者<>不能用于判断null值
        is null 或 is not null 可以判断 null 值
    */
    #案例1：查询没有奖金的员工名和奖金率
    SELECT
        last_name,
        commission_pct
    FROM
        employees
    WHERE
        commission_pct IS NULL -- =号不能判断Null值要使用IS NULL

    #案例2：查询有奖金的员工名和奖金率
    SELECT
        last_name,
        commission_pct
    FROM
        employees
    WHERE
        commission_pct IS NOT NULL -- =号不能判断Null值要使用IS NULL

    #安全等于 <=> 也可以判断 Null 值
    #案例1：查询没有奖金的员工名和奖金率
    SELECT
        last_name,
        commission_pct
    FROM
        employees
    WHERE
        commission_pct <=>  NULL 

    #案例2：查询工资为12000的员工信息
    SELECT
        last_name,
        salary
    FROM
        employees
    WHERE
        salary <=>  12000

    # is null pk <=>
    -- is null: 仅仅可以判断null值  建义使用这个 
    -- <=>:即可以判断null值，也可以判断普通数值
    #案例2：查询员工号为176的员工的姓名和部门号和年薪
    SELECT
        last_name,
        department_id,
        salary*12*(1+IFNULL(commission_pct,0)) AS 年薪 -- IFNULL 必须有这个，因为同null做运算最终也会等于null
    FROM
        employees
    -- K_ing	90	288000.00
    -- Kochhar	90	204000.00
    -- De Haan	90	204000.00
    -- Hunold	60	108000.00
    -- Ernst	60	72000.00
    -- Austin	60	57600.00
    -- Pataballa	60	57600.00

```
#### 综合练习
```
    #综合练习
    #1、查询没有奖金、且工资小于18000的salary, last_name
    SELECT
        last_name,
        salary
    FROM
        employees
    WHERE
        commission_pct IS NULL AND salary < 18000

    #2、查询employees表中，job_id不为 ‘IT’ 或者 工资为12000的员工信息
    SELECT
        *
    FROM
        employees
    WHERE 
        job_id <> 'IT' OR salary = 12000

    #3、查寻部departments表的结构，查询效果如下
    DESC departments
    -- department_id	int(4)	NO	PRI		auto_increment
    -- department_name	varchar(3)	YES			
    -- manager_id	int(6)	YES			
    -- location_id	int(4)	YES	MUL		

    #4、查寻部门departments表中涉及到了哪些位置编号
    SELECT
        DISTINCT location_id
    FROM
        departments
```
#### 复习
```
    一、语法
        select 查询列表
        from 表名
        where 筛选条件

    二、筛选条件的分类
        1、简单条件运算符
            > <> < = != <=> <= >=
        2、逻辑运算符
            && and 
            || or 
            ! not
        3、模糊查询
            like:一般搭配通配符使用，用于判断字符型数值 ,数字型也可以支持。
                通配符：%任意多个字符，_任意单个字符
            between and
            in
            is null / is not null 用于判断null值
            is null PK <=>
                    普通类型的数值    null值    可读性
            is null    ×              √          √
            <=>        √              √          ×
```
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







