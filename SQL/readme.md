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
      - [复习](#复习-2)
      - [1.4、常见函数](#14常见函数)
      - [1.5、分组函数](#15分组函数)
      - [复习](#复习-3)
      - [1.6、分组查询](#16分组查询)
      - [复习](#复习-4)
      - [1.7、连接查询](#17连接查询)
      - [复习](#复习-5)
      - [1.8、子查询](#18子查询)
      - [1.9、分页查询](#19分页查询)
      - [1.10、union联合查询](#110union联合查询)
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
[mysql学习资料](https://www.bilibili.com/video/BV12b411K7Zu?p=75)
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
```
    #进阶3：排序查询
    /*
        SELECT * FROM employees
        语法：
            SELECT 查询列表
            FROM 表
            [WHERE 筛选条件]
            ORDER BY 排序列表 [ASC|DESC]
        特点：
            1、asc代表的是升序，desc代表的是降序
            2、如果不写，默认就是升序
            3、order by 子句中可以支持单个字段、多个字段、表达式、函数、别名
            4、order by 子句一般是放在查询语句的最后面，但是limit 子句除外
            5、执行顺序是 from where select ORDER BY
    */
    #案例：查询员工信息，要求工资从高到低排序
    SELECT
        *
    FROM
        employees
    ORDER BY
        salary DESC

    #案例1：查询员工信息，要求工资从低到高排序
    SELECT
        *
    FROM
        employees
    ORDER BY
        salary -- 默认就是ASC 升级

    #案例2：查询部门编号 >= 90 的员工信息，按入职时间先后进行排序 
    SELECT
        *
    FROM
        employees
    WHERE
        department_id >= 90
    ORDER BY
        hiredate ASC;

    #案例3：按年薪的高低显示员工的信息和年薪【按表达式排序】
    SELECT
        *,
        salary * 12 *(1+IFNULL(commission_pct,0)) AS 年薪
    FROM
        employees
    ORDER BY
        salary * 12 *(1+IFNULL(commission_pct,0)) DESC -- salary * 12 *(1+IFNULL(commission_pct,0)) 或者直接用 年薪这个别名也是可以的。

    #案例4：按年薪的高低显示员工的信息和年薪【按别名排序】

    SELECT
        *,
        salary * 12 *(1+IFNULL(commission_pct,0)) AS 年薪
    FROM
        employees
    ORDER BY
        年薪 DESC

    #案例5：按姓名的长度显示员工的姓名和工资【按函数排序】
    SELECT
        LENGTH(last_name) 字节长度,
        last_name,
        salary
    FROM
        employees
    ORDER BY
        LENGTH(last_name) DESC

    #案例6：查询员工信息，要求先按工资升序，再按员工编号降序【按多个字段排序】 
    SELECT
        *
    FROM
        employees
    ORDER BY
        salary ASC,
        employee_id DESC
    -- employee_id                                              salary
    -- 191	Randall	Perkins	RPERKINS	650.505.4876	SH_CLERK	  2500		122	50	2014-03-05 00:00:00
    -- 182	Martha	Sullivan	MSULLIVA	650.507.9878	SH_CLERK	2500		120	50	2014-03-05 00:00:00
    -- 144	Peter	Vargas	PVARGAS	650.121.2004	ST_CLERK	      2500		124	50	2002-12-23 00:00:00
    -- 先按salary 升序，如果遇到同样的 salary 再按 employee_id 降序，这就是多个字段排序

    #1.查询员工的姓名和部门和年薪，按年薪降序 按姓名升序
    SELECT
        last_name,
        department_id,
        salary*12*(1+IFNULL(commission_pct,0)) AS 年薪
    FROM
        employees
    ORDER BY
        年薪 DESC , last_name ASC

    #2.选择工资不在8000到17000的员工的姓名和工资，按工资降序
    SELECT
        last_name,
        salary
    FROM
        employees
    WHERE
        salary NOT BETWEEN 8000 AND 17000
    ORDER BY salary DESC

    #3.查询邮箱中包含e的员工信息，并先按邮箱的字节数降序，再按部门号升序
    SELECT
        *,LENGTH(email)
    FROM
        employees
    WHERE
        email LIKE '%e%'
    ORDER BY
        LENGTH(email) DESC,
        department_id ASC
```
#### 复习
```
一、语法
    select 查询列表
    from 表
    where 筛选条件
    order by 排序列表 [asc|desc]

二、特点
    1、asc:升序 如果不写默认升序
       desc:降序
    2、排序列表 支持 单个字段、多个字段、函数、表达式、别名
    3、order by的位置一般放在查询语句的最后 (除limit语句之外)
```
#### 1.4、常见函数
```
    #进阶4：常见函数
    /*
        概念：类似编程语言当中的方法，将一组逻辑语句封装在方法体中，对外暴露方法名
        好处：
            1、隐藏了实现细节
            2、提高代码的重用性
        调用：
            select 函数名(实参列表)
            [FROM 表]
        特点：
            1、叫什么（函数名）
            2、干什么（函数功能）
        分类：
            1、单行函数
                如：concat、length、ifnull 等
                A、字符函数
                B、数学函数
                C、日期函数
                D、其他函数【补充】
                E、流程控制函数【补充】
            2、分组函数
                功能：做统计使用，又称为统计函数、聚合函数、组函数
        常见函数总结：
            字符函数
                LENGTH(str)
                CONCAT(str1,str2,...)
                SUBSTR(str FROM pos FOR len)
                INSTR(str,substr)
                TRIM([remstr FROM] str)
                UPPER(str)
                LOWER(str)
                LPAD(str,len,padstr)
                RPAD(str,len,padstr)
                REPLACE(str,from_str,to_str)
            数学函数
                ROUND(X)
                CEIL(X)
                FLOOR(X)
                TRUNCATE(X,D)
                MOD
            日期函数
                NOW()
                CURDATE()
                CURDATE()
                YEAR()
                MONTH(date)
                MONTHNAME(date)
                DAY
                HOUR
                MINUTE(time)
                SECOND(time)
                STR_TO_DATE(str,format)
                DATE_FORMAT(date,format)
            其他函数
                VERSION()
                DATABASE()
                USER()
            控制函数
                IF
                CASE
        
    */
    #一、字符函数
    #1.LENGTH(str) 获取参数值的 字节个数
    SELECT LENGTH('jonh'); -- 4
    SELECT LENGTH('张三丰hahaha'); -- 15 1中文占三个字节
    SHOW VARIABLES LIKE '%char%'; -- character_set_client utf8 获取当前客户端数据编码

    #2.concat 拼接字符串
    SELECT CONCAT(last_name,'_',first_name) FROM employees; -- K_ing_Steven

    #3.upper、lower
    SELECT UPPER('john'); -- JOHN

    #示例：将姓变大写、名变小写，然后拼接
    SELECT CONCAT(UPPER(last_name),'_',LOWER(first_name)) 姓名 FROM employees;

    #4.substr、substring SQL中索引从1开始
    #截取从指定索引处后面所有字符
    SELECT SUBSTR('李莫悉爱上了陆展元' ,7) out_put; -- 陆展元

    #截取从指定索引处指定字符长度的字符
    SELECT SUBSTR('李莫悉爱上了陆展元' ,1,3) out_put; -- 李莫悉

    #案例：姓名中首字符大写，其他字符小写然后用_拼接，显示
    SELECT CONCAT(UPPER(SUBSTR(last_name,1,1)),'_',LOWER(SUBSTR(last_name,2))) AS 姓名 FROM employees;
    -- R_ogers
    -- G_ee
    -- P_hiltanker
    -- L_adwig
    -- S_tiles
    -- S_eo
    -- P_atel
    -- R_ajs
    -- D_avies
    -- M_atos
    -- V_argas
    -- R_ussell
    -- P_artners

    #5.INSTR(str,substr) 返回substr 在str 里面的第一次出现的起始索引，如果没有的话就返回0
    SELECT INSTR('杨不悔爱上了殷六侠','殷六侠') AS out_put ; -- 7

    #6.TRIM([remstr FROM] str) -- 去掉前后空格
    SELECT LENGTH(TRIM('   张翠山  ')) AS out_put; -- 9

    #指定去掉前后字符
    SELECT TRIM('a' FROM 'aaaaaaaaa张aaaaaaaaa翠aaaaaaaaa山aaaaaaaaa') AS out_put; -- 张aaaaaaaaa翠aaaaaaaaa山

    #7.LPAD(str,len,padstr)  用指定的字符实现左填充指定的长度
    SELECT LPAD('殷素素',10,'*') AS out_put; -- *******殷素素

    #8.RPAD(str,len,padstr) 用指定的字符实现右填充指定的长度
    SELECT RPAD('殷素素',10,'*') AS out_put; -- 殷素素*******

    #9.`REPLACE`(str,from_str,to_str) 替换
    SELECT REPLACE('张无忌爱上了周芷若','周芷若','赵敏') AS out_put; -- 张无忌爱上了赵敏



    #二、数学函数
    #1、round 四舍五入
    SELECT ROUND(1.65); -- 2
    SELECT ROUND(1.567,2); -- 1.57 小数点后保留两位

    #2、CEIL(X) 向上取整 返回>=该参数的最小整数
    SELECT CEIL(1.52); -- 2
    SELECT CEIL(1.02); -- 2
    SELECT CEIL(-1.02); -- 1

    #3、floor 向下取整，返回<=该参数的最大整数
    SELECT FLOOR(9.99); -- 9
    SELECT FLOOR(-9.99); -- -10

    #4、truncate 截断
    SELECT TRUNCATE(1.65,1); -- 1.6 

    #MOD 取余
    -- MOD(a,b) = a-a/b*b
    SELECT mod(-10,-3); -- -1;
    -- -10 - -10/-3 * -3 = -1

    SELECT MOD(10,3);  -- 1
    SELECT 10%3; -- 1


    #三、日期函数
    #1、now返回当前系统时期+时间
    SELECT NOW(); -- 2020-12-31 18:15:37

    #2、curdate()返回当前系统日期 不含时间
    SELECT CURDATE(); -- 2020-12-31

    #3、curtime() 返回当前的时间不含时期
    SELECT CURTIME(); -- 18:17:21

    #4、可以获取指定时期时间的部分，年、月、日、小时、分钟、钞
    SELECT YEAR(NOW()); -- 2020
    SELECT YEAR(hiredate) FROM employees;

    SELECT MONTH(NOW()); -- 12
    SELECT MONTHNAME(NOW()); -- December 代name的都是英文
    SELECT DAY(NOW()); -- 31
    SELECT HOUR(NOW()); -- 18
    SELECT MINUTE(NOW()); -- 21
    SELECT SECOND(NOW()); -- 45

    #5、str_to_date() 将日期格式的字符转换成指定格式的日期
    SELECT STR_TO_DATE('2020-09-05','%Y-%m-%d'); -- 2020-09-05

    /*
        %Y 四位的年份
        %y 2位的年份
        %m 月份（01，02......12）
        %c 月份 (1, 2, 3, 12);
        %d 日(01,02);;
        %H 小时(24小时制)
        %i 分钟(00,01,59)
        %s 秒(00,01,59)
    */

    #查询入职日期为 1992-4-3的员工人信息
    SELECT
        *
    FROM
        employees
    WHERE
        hiredate = '1992-04-03'

    SELECT
        *
    FROM
        employees
    WHERE
        hiredate = STR_TO_DATE('4-3 1992','%c-%d %Y');

    -- 100	Steven	K_ing	SKING	515.123.4567	AD_PRES	24000			90	1992-04-03 00:00:00
    -- 101	Neena	Kochhar	NKOCHHAR	515.123.4568	AD_VP	17000		100	90	1992-04-03 00:00:00
    -- 102	Lex	De Haan	LDEHAAN	515.123.4569	AD_VP	17000		100	90	1992-04-03 00:00:00
    -- 103	Alexander	Hunold	AHUNOLD	590.423.4567	IT_PROG	9000		102	60	1992-04-03 00:00:00
    -- 104	Bruce	Ernst	BERNST	590.423.4568	IT_PROG	6000		103	60	1992-04-03 00:00:00

    -- SELECT 
    -- 	*
    -- FROM
    -- 	employees
    -- WHERE 
    -- 	hiredate BETWEEN STR_TO_DATE('1998-01-01','%Y-%m-%d') AND STR_TO_DATE('2020-01-01','%Y-%m-%d');

    #6、date_format() 将日期转换成字符
    SELECT DATE_FORMAT('2020-09-05','%Y年%m月%d日'); -- 2020年09月05日

    #查询有奖金的员工和入职日期（**月**日 **年）
    SELECT last_name, DATE_FORMAT(hiredate,'%m月%d日 %y年') AS 入职日期 FROM employees WHERE commission_pct IS NOT NULL;

    -- Russell	12月23日 02年
    -- Partners	12月23日 02年
    -- Errazuriz	12月23日 02年
    -- Cambrault	12月23日 02年

    #四、其他函数
    SELECT VERSION(); -- 查询版本号
    SELECT DATABASE(); -- 查询当前数据库
    SELECT USER(); -- 查询当前用户 root@localhost

    #五、流程控制函数
    #1、if函数：可以实现 if else 的效果
    SELECT IF(10>5,'大','小'); -- 大
    SELECT last_name, commission_pct, IF(commission_pct IS NULL,'没有奖金，哈哈','有奖金，嘻嘻') FROM employees

    -- Rajs		没有奖金，哈哈
    -- Davies		没有奖金，哈哈
    -- Matos		没有奖金，哈哈
    -- Vargas		没有奖金，哈哈
    -- Russell	0.4	有奖金，嘻嘻
    -- Partners	0.3	有奖金，嘻嘻
    -- Errazuriz	0.3	有奖金，嘻嘻

    #2、case函数的使用一，类似于switch case 的效果
    /*
        switch(变量或表达式){
            case 常量1：语句1; break;
            default:语句n; break;
        }
        mysql 中
        case 要判断的字段或表达式
        when 常量1 then 要显示的值1或语句1; 如果是个值就不用放分号。
        when 常量2 then 要显示的值2或语句2;
        ...
        else 要显示的值n语句n;
        end
    */

    #案例：查询员工的工资，要求
    /*
        部门号 = 30，显示的工资为1.1倍
        部门号 = 40，显示的工资为1.2位
        部门号 = 50， 显示的工资为1.3位
        其他部门，显示的工资为原工资
    */

    SELECT
        salary 原始工资,
        department_id,
        CASE department_id
        WHEN 30 THEN salary * 1.1
        WHEN 40 THEN salary * 1.2
        WHEN 50 THEN salary * 1.3
        ELSE salary
        END AS 新工资
        
    FROM
        employees

    -- 7700	100	7700.00
    -- 7800	100	7800.00
    -- 6900	100	6900.00
    -- 11000	30	12100.00
    -- 3100	30	3410.00
    -- 2900	30	3190.00
    -- 2800	30	3080.00
    -- 2600	30	2860.00
    -- 2500	30	2750.00
    -- 8000	50	10400.00
    -- 8200	50	10660.00
    -- 7900	50	10270.00

    #3.case函数的使用二，类似于 多重if
    /*
        if(条件1){
            语句1;
        }else if (条件2){
            语句2;
        }
        ...
        else {
            语句n;
        }
        mysql中
        case 
        when 条件1 then 要显示的值1或(语句1;)
        when 条件2 then 要显示的值2或(语句2;)
        ...
        else 要显示的值n或显示的(语句n;)
        end
    */
    #案例：查询员式的并新工资
    /*
        如果工资 >20000,显示A级别
        如果工资 >15000,显示B级别
        如果工资 >10000,显示C级别
        否则，显示D级别
    */

    SELECT salary,
    CASE 
    WHEN salary > 20000 THEN 'A'
    WHEN salary > 15000 THEN 'B'
    WHEN salary > 10000 THEN 'C'
    ELSE 'D'
    END AS 工资级别
    FROM
        employees;

    -- 9000	D
    -- 6000	D
    -- 4800	D
    -- 4800	D
    -- 4200	D
    -- 12000	C
    -- 9000	D
    -- 8200	D
    -- 7700	D
    -- 7800	D
    -- 6900	D

    /*
        综合练习
    */
    #1、显示系统时间（注：日期+时间）
    SELECT NOW();


    #2、查询员工号，姓名，工资以及工资提高百分之20%的结果（new salary）
    SELECT
        employee_id,
        last_name,
        salary,
        salary * 1.2 'new salary'
    FROM
        employees;


    -- 100	K_ing	24000	28800.00
    -- 101	Kochhar	17000	20400.00
    -- 102	De Haan	17000	20400.00
    -- 103	Hunold	9000	10800.00
    -- 104	Ernst	6000	7200.00

    #3、将员工的姓名按首字母排序，并写出姓名的长度（length）
    SELECT
        last_name,
    SUBSTR(last_name,1,1),
        LENGTH(last_name) as length
    FROM
        employees
    ORDER BY
        SUBSTR(last_name,1,1) DESC

    -- Zlotkey	Z	7
    -- Weiss	W	5
    -- Walsh	W	5
    -- Whalen	W	6
    -- Vollman	V	7
    -- Vargas	V	6

    #4、
    SELECT CONCAT(last_name,' earns',salary,' monthly but wants ', salary*3) AS 'Dream Salary' FROM employees;

    -- K_ing earns24000.00 monthly but wants 72000.00
    -- Kochhar earns17000.00 monthly but wants 51000.00
    -- De Haan earns17000.00 monthly but wants 51000.00
    -- Hunold earns9000.00 monthly but wants 27000.00
    -- Ernst earns6000.00 monthly but wants 18000.00
    -- Austin earns4800.00 monthly but wants 14400.00
    -- Pataballa earns4800.00 monthly but wants 14400.00

    #5、作用case-when,
    SELECT
        job_id AS job,
        CASE job_id
        WHEN 'AD_PRES' THEN 'A'
        wHEN 'ST_MAN' THEN 'B'
        wHEN 'IT_PROG' THEN 'C'
        wHEN 'SA_REP' THEN 'D'
        wHEN 'ST_CLERK' THEN 'E'
        END AS Grade,
        last_name
    FROM
        employees
    WHERE 
        job_id = 'AD_PRES'
```
#### 1.5、分组函数
```
    /*
        功能：用作统计使用，又称为聚合函数或统计函数或组函数
        分类：
            sum 求和、avg 平均值、max最大值、min最小值、count 计算个数
        特点：
            1、sum、avg一般用于处理数值型
            max、min、count可以处理任何类型

            2、以上分组函数都忽略null值
            3、可以和distinct搭配实现去重统计
            4、count函数的单独介绍，一般使用count(*)用作统计行数
            5、和分组函数一同查询的字段要示是 group by后的字段
    */

    #1、简单使用
    SELECT SUM(salary) FROM employees;
    SELECT AVG(salary) FROM employees;
    SELECT MAX(salary) FROM employees;
    SELECT MIN(salary) FROM employees;
    SELECT COUNT(salary) FROM employees;

    SELECT SUM(salary) 和, AVG(salary) 平均, MAX(salary) 最高, MIN(salary) 最底, COUNT(salary) 个数 FROM employees;
    -- 691400.00	6461.682243	24000.00	2100.00	107

    #搭配其他函数一起使用
    SELECT SUM(salary) 和, ROUND(AVG(salary),2) 平均, MAX(salary) 最高, MIN(salary) 最底, COUNT(salary) 个数 FROM employees;
    -- 691400.00	6461.68	24000.00	2100.00	107

    #2、参数支持哪些类型
    -- SELECT SUM(last_name), AVG(last_name) FROM employees;
    -- 0	0
    SELECT MAX(last_name), MIN(last_name) FROM employees;
    -- Zlotkey	Abel

    SELECT MAX(hiredate), MIN(hiredate) FROM employees;
    -- 2016-03-03 00:00:00	1992-04-03 00:00:00

    SELECT COUNT(commission_pct) FROM employees; -- 35
    SELECT COUNT(last_name) FROM employees; -- 107

    #3、是否忽略null
    SELECT SUM(commission_pct), avg(commission_pct), sum(commission_pct)/35,SUM(commission_pct)/107 FROM employees;
    -- 7.80	0.222857	0.222857	0.072897

    #4、搭配distinct 去重
    SELECT SUM(DISTINCT salary), SUM(salary) FROM employees;
    -- 397900.00	691400.00
    SELECT COUNT(DISTINCT salary),COUNT(salary) FROM employees;
    -- 57	107

    #5、count函数的详细介绍
    SELECT COUNT(*) FROM employees; -- COUNT(*) 统计表里的总行数

    SELECT COUNT(1) FROM employees; -- COUNT(1) 统计表里的总行数
    /*
        效率：
    MYISAM 存储引擎下，count(*);
    */

    #6、和分组函数一同查询的字段限制
    SELECT AVG(salary), employee_id FROM employees;

    #案例
    #1、查义公司员工工资的最大值、最小值、平均值、总和
    SELECT MAX(salary) max_sal, MIN(salary) mi_sal, ROUND(AVG(salary),2) ag_sal,SUM(salary) sm_sal FROM employees;
    -- 24000.00	2100.00	6461.68	691400.00
    #2、查询员工表中的最大入职时间和最小入职时间的相差天数(DIFFRENCE)
    SELECT DATEDIFF('2017-10-1','2017-9-29'); -- 2 datediff 两个日期相差得到天数
    SELECT DATEDIFF(MAX(hiredate),MIN(hiredate)) DIFFRENCE FROM employees; -- 8735
    #3、查询部门编号为90的员工个数
    SELECT COUNT(*) FROM employees WHERE department_id = 90; -- 3
```
#### 复习
```
    一、概述
        功能：类似于方法
        好处：提高重用性和隐藏实现细节
        调用：select 函数名(实参列表);
        
    二、单行函数
        1、字符函数
            concat:字符连接
            substr:截取子串
            upper:变大写
            lower:变小写
            replace:替换
            length:获取字节长度
            trim:去前后空格
            lpad:左填充
            rpad:右填充
            instr:获取子串第一次出现的索引
        2、数学函数
            ceil:向上取整
            round:四舍五入
            mod:取模
            floor:向下取整
            truncate:截断
            rand:获取随机数，返回0-1之间的小数
        3、日期函数
            now:返回当前日期+时间
            year:返回年
            month:返回月
            day:返回日
            date_format:将日期转换成字符
            curdate:返回当前日期
            str_to_date:将字符串转换成日期
            curtime:返回当前时间
            hour:小时
            minute:分钟
            second:秒
            datediff:返回两个日期相差的天数 《日期差异》 
                DATEDIFF() 函数返回两个日期之间的天数。
                date1 和 date2 参数是合法的日期或日期/时间表达式。 只有值的日期部分参与计算。
                SELECT * from action where DATEDIFF(startDate,endDate) = 3;
            timestampdiff:是间差 《时间戳差异》
            monthname:以英文形式返回月
        4、其他函数
            version 当前数据库服务器的版本
            database 当前打开的数据库
            user 当前用户
            password('字符'):返回该字符的密码形式
                SELECT PASSWORD('王世宇')
                *8870AAAFE12B61750DDE665DC26658921ECECD24
            md5('字符'):返回该字符的md5加密形式
        5、流程控制函数
            if(条件表达式, 表达式1，表达式2)：如果条件表达式成产，返回表达式1，否则返回表达式2
            case情况1 类似switch case
                case 变量或表达式或字段
                when 常量1 then 值1
                when 常量2 then 值2
                ...
                else 值n
                end
            case情况2 类似多重if else
                case 
                when 条件1 then 值1
                when 条件2 then 值2
                ...
                else 值n
                end
            
    三、分组函数
        1、分类
            max 最大值
            min 最小值
            sum 和
            avg 平均值
            count 计算个数
        2、特点
            A、语法：select max(字段) from 表名;
            B、sum和avg 一般用于处理数值型,max、min、count可以处理任何类型
            C、以上分组函数都忽略null
            D、都可以搭配distinct使用，实现去重的统计
                select sum(distinct 字段) from 表;
            E、count函数
                count(字段)：统计该字段非空值的个数
                count(*):统计结果集的行数
                count(1):统计结果集的行数
                效率上：
                MyISAM存储引擎：count(*)最高
                InnoDB存储引擎：count(*)和count(1)效率>count(字段)
            F、和分组函数一同查询的字段，要求是group by后出现的字段
```
#### 1.6、分组查询
```
/*
	#引入：查询每个部门的平均工资
	语法：
		SELECT column, group_function(column)
		FROM table
		[WHERE condition]
		[GROUP BY group_by_expression]
		[ORDER BY column]
	注意：
		查询列表必须特殊，要求是分组函数和group by后出现的字段
	特点：
		1、分组查询中的筛选条件分为两类
			名称			数据源		   位置				   关键字
			A、分组前筛选    原始表         group by 前面		WHERE
			B、分组后筛选	 组后的结果表   group by 的后面		 HAVING
		分组函数做条件肯定是放在having子句中
		能用分组前筛选的，就优先考虑使用分组前筛选
		
		2、group by 子句支持单个字段分组，多个字段分组（多个字段之间用逗号隔开没有顺序要求），表达式或函数(用得较少)
		3、也可以添加排序（放在整个语句的后面）
*/
SELECT AVG(salary) FROM employees;

#案例1：查询每个工程的最高工资
SELECT MAX(salary), job_id FROM employees GROUP BY job_id;

-- 8300.00	AC_ACCOUNT
-- 12000.00	AC_MGR
-- 4400.00	AD_ASST
-- 24000.00	AD_PRES
-- 17000.00	AD_VP
-- 9000.00	FI_ACCOUNT
-- 12000.00	FI_MGR
-- 6500.00	HR_REP

#案例2：查询每个位置上的部门个数
SELECT COUNT(*), location_id FROM departments GROUP BY location_id;

-- 1	1400
-- 1	1500
-- 21	1700
-- 1	1800

#案例3：查询邮箱中包含a字符的，每个部门的平均工资
SELECT AVG(salary), department_id FROM employees WHERE email LIKE '%a%' GROUP BY department_id


-- 7000	
-- 4400	10
-- 9500	20
-- 4460	30
-- 6500	40
-- 3496.153846	50
-- 6200	60

#案例4：查询有奖金的每个领导手下员工的最高工资
SELECT MAX(salary), manager_id FROM employees WHERE commission_pct IS NOT NULL GROUP BY manager_id;

-- 14000	100
-- 10000	145
-- 10000	146


#添加分组后的筛选条件 HAVING
#案例5：查询哪个部门的员工个数 >2
/*
	分析：
	1、查询每个部门的员工个数 
	2、根据1的结果进行筛选，查询哪个部门的员工个数 >2
*/
SELECT
	COUNT(*), department_id
FROM 
	employees
GROUP BY
	department_id
HAVING
	COUNT(*) > 2

-- 6	30
-- 45	50
-- 5	60
-- 34	80
-- 3	90
-- 6	100

#案例6：查询每个工种有奖金的员工的最高工资>12000的工种编号和最高工资
SELECT
	job_id,
	MAX(salary)
FROM
	employees
WHERE
	commission_pct IS NOT NULL
GROUP BY
	job_id
HAVING
	MAX(salary) > 12000

-- SA_MAN	14000.00
	
#案例7：查询领导编号 >102 的每个领导手下的最低工资>5000的领导编号是哪个，以及其最低工资

SELECT
	manager_id,
	MIN(salary)
FROM
	employees
WHERE
	manager_id > 102
GROUP BY
	manager_id
HAVING
	MIN(salary) > 5000

-- 108	6900
-- 145	7000
-- 146	7000
-- 147	6200
-- 148	6100
-- 149	6200
-- 201	6000
-- 205	8300


#按表达式或者函数分组
#案例：按员工姓名的长度分组，查询每一组的员工个数，筛选员工个数>5 的有哪些
SELECT COUNT(*) c,LENGTH(last_name) len_name
FROM employees
GROUP BY LENGTH(last_name)
HAVING c > 5


-- 11	4
-- 29	5
-- 28	6
-- 15	7
-- 7	8
-- 8	9
-- 

# 按多个字段分组
#案例：查询每个部门每个工程的员工的平均工资
SELECT AVG(salary), department_id, job_id
FROM employees
GROUP BY department_id, job_id;

-- 7000		SA_REP
-- 4400	10	AD_ASST
-- 13000	20	MK_MAN

#添加排序
#案例：查询每个部门每个工程的员工的平均工资 并且按下半场工资的高低显示
SELECT AVG(salary) a, department_id, job_id
FROM employees
WHERE department_id IS NOT NULL
GROUP BY job_id, department_id
HAVING a > 10000
ORDER BY a DESC;


-- 24000	90	AD_PRES
-- 17000	90	AD_VP
-- 13000	20	MK_MAN
-- 12200	80	SA_MAN
-- 12000	100	FI_MGR

/*综合练习*/
#1.查询各job_id的员工工资的最大值，最小值，平均值，总和，拼按job_id升序
SELECT job_id,MAX(salary),MIN(salary),AVG(salary),SUM(salary) FROM employees GROUP BY job_id ORDER BY job_id ASC
-- AD_VP	17000.00	17000.00	17000	34000.00
-- FI_ACCOUNT	9000.00	6900.00	7920	39600.00
-- FI_MGR	12000.00	12000.00	12000	12000.00
-- HR_REP	6500.00	6500.00	6500	6500.00
-- IT_PROG	9000.00	4200.00	5760	28800.00
-- MK_MAN	13000.00	13000.00	13000	13000.00

#2.查询员工最高工资和最低工资的差距(DIFFERENCE)
SELECT MAX(salary),MIN(salary), MAX(salary)-MIN(salary) DEFFERENCE FROM employees;

#3.查询各个管理者手员工的最低工资，其中最低工资不能低于6000,没有管理者的员工不计算在内
SELECT MIN(salary),manager_id
FROM employees
WHERE manager_id IS NOT NULL
GROUP BY manager_id
HAVING MIN(salary) >= 6000;

-- 9000	102
-- 6900	108
-- 7000	145
-- 7000	146
#4.查询所有部门的编号，员工数量和工资平均值 ，并按平均工资降序
SELECT department_id, COUNT(*), AVG(salary) a
FROM employees
GROUP BY department_id
ORDER BY a DESC;

-- 90	3	19333.333333
-- 110	2	10150
-- 70	1	10000
-- 20	2	9500
-- 80	34	8955.882353
-- 
#5.选择具有各个job_id的员工人数

SELECT	COUNT(*) 个数, job_id
FROM employees
GROUP BY job_id

-- 1	AC_ACCOUNT
-- 1	AC_MGR
-- 1	AD_ASST

```
#### 复习
```
    一、语法
        5、select 分组函数,分组后的字段
        1、from 表
        2、[where 筛选条件]
        3、group by 分组条件
        4、[having 分组后的筛选]
        6、[order by 排序列表]
    二、特点
```

名称|使用关键字|筛选的表|位置
--|:--:|:--:|:--
分组前筛选|where|原始表| group by的前面
分组后筛选|having|分组后的结果|group by的后面

#### 1.7、连接查询
```
#进阶6：连接查询
/*
	含义：又称多表查询，当查询的字段来自于多个表时，就会用到连接查询
	笛卡尔乘积现象：表1有m行，表2有n行，结果=m*n行
	发生原因：没有有效的连接条件
	如何避免：添加有效的连接条件
	分类：
		按年代分类：
			SQL92标准：仅仅支持内连接
			SQL99标准【推荐】：支持内连接+外连接（左外和右外）+交叉连接
		按功能分类：
			内连接：
				等值连接
				非等值连接
				自连接
			外连接：
				左外连接
				右外连接
				全外连接
			交叉连接(笛卡尔)
*/
USE girls;
SELECT * FROM beauty;
-- 1	柳岩	女	1988-02-03 00:00:00	18209876577		8
-- 2	苍老师	女	1987-12-30 00:00:00	18219876577		9
-- 3	Angelababy	女	1989-02-03 00:00:00	18209876567		3
-- 4	热巴	女	1993-02-03 00:00:00	18209876579		2
-- 5	周冬雨	女	1992-02-03 00:00:00	18209179577		9
-- 6	周芷若	女	1988-02-03 00:00:00	18209876577		1
-- 7	岳灵珊	女	1987-12-30 00:00:00	18219876577		9
-- 8	小昭	女	1989-02-03 00:00:00	18209876567		1
-- 9	双儿	女	1993-02-03 00:00:00	18209876579		9
-- 10	王语嫣	女	1992-02-03 00:00:00	18209179577		4
-- 11	夏雪	女	1993-02-03 00:00:00	18209876579		9
-- 12	赵敏	女	1992-02-03 00:00:00	18209179577		1
USE girls;
SELECT * FROM boys;
-- 1	张无忌	100
-- 2	鹿晗	800
-- 3	黄晓明	50
-- 4	段誉	300

USE girls;
SELECT name, boyName FROM beauty, boys;
-- 柳岩	张无忌
-- 柳岩	鹿晗
-- 柳岩	黄晓明
-- 柳岩	段誉
-- 苍老师	张无忌
-- 苍老师	鹿晗
-- 苍老师	黄晓明
-- 苍老师	段誉
USE girls;
SELECT name,boyName 
FROM beauty, boys
WHERE beauty.boyfriend_id = boys.id

-- Angelababy	黄晓明
-- 热巴	鹿晗
-- 周芷若	张无忌
-- 小昭	张无忌
-- 王语嫣	段誉
-- 赵敏	张无忌

#一、sql92标准
#1、等值连接
/*
	1、多表等值连接的结果为多表的交集部分
	2、n表连接，至少需要n-1个连接条件
	3、多表的顺序没有要求
	4、一般需要为表起别名
	5、可以搭配前面介绍的所有子句使用，比如排序、分组、筛选
*/
#案例1、查询女神名和男神名
USE girls;
SELECT name,boyName 
FROM beauty, boys
WHERE beauty.boyfriend_id = boys.id

#案例2、查询员工名和对应的部门名
SELECT last_name, department_name
FROM employees, departments
WHERE employees.department_id = departments.department_id;

#2、为表起别名
/*
	好处：
	A、提高语句的简洁度
	B、区分多个重名的字段
	注意：如果为表起了别名，则查询的字段就不能使用原来的表名来限定
*/
#查询员工名、工程号、工种名
USE myemployees;
SELECT last_name,e.job_id,job_title
FROM employees AS e, jobs j -- AS 也可以省略
WHERE e.job_id = j.job_id;

#3、两个表的顺序是否可以调换
USE myemployees;
SELECT last_name,e.job_id,job_title
FROM jobs j, employees AS e -- AS 也可以省略
WHERE e.job_id = j.job_id;


#4、可以加筛选条件
#案例：查询有奖金的员工名、部门名
SELECT last_name,department_name, commission_pct
FROM employees e, departments d
WHERE e.department_id = e.department_id
AND e.commission_pct IS NOT NULL


#案例2：查询城市名中第二个字符为o的部门名和城市名
SELECT d.department_name, l.city
FROM departments d , locations l
WHERE d.location_id = l.location_id 
AND l.city LIKE '_o%';

#5、可以加分组？
#案例1、查询每个城市的部门个数
SELECT COUNT(*) 个数, l.city
FROM departments d, locations l
WHERE d.location_id = l.location_id
GROUP BY l.city

-- 1	London
-- 1	Munich
-- 1	Oxford
-- 21	Seattle
-- 1	South San Francisco
-- 1	Southlake
-- 1	Toronto

#案例2、查询有奖金的每个部门的部门名和部门的领导编号和该部门的最低工资

SELECT
	d.department_name,
	d.manager_id,
	MIN(e.salary)
FROM
	departments d, employees e
WHERE
	d.department_id = e.department_id
	AND commission_pct IS NOT NULL
GROUP BY
	d.department_id,d.manager_id


#6、可以加排序
#案例：查询每个工程的工程名和员工的个数，并且按员工个数降序

SELECT	job_title, COUNT(*) n
FROM employees e, jobs j
WHERE e.job_id = j.job_id
GROUP BY job_title
ORDER BY n DESC

-- Sales Representative	30
-- Shipping Clerk	20
-- Stock Clerk	20
-- Purchasing Clerk	5
-- Stock Manager	5
-- Accountant	5
-- Programmer	5

#7、可以实现三表连接
#案例：查询员工名、部门名、所在城市
SELECT last_name, department_name, city
FROM employees e, departments d, locations l
WHERE e.department_id = d.department_id
AND	d.location_id = l.location_id
AND city LIKE 's%'
ORDER BY department_name DESC

-- Whalen	Adm	Seattle
-- Hartstein	Mar	Toronto
-- Fay	Mar	Toronto
-- Raphaely	Pur	Seattle

#二、非等值连接
#案例1：查询员工的工资和工资级别

SELECT salary, grade_level
FROM employees e, job_grades g
WHERE e.salary BETWEEN g.lowest_sal AND g.highest_sal;

#三、自链接（自已链接自己）

#案例：查询 员工名和上级的名称
SELECT e.employee_id,e.last_name,e.manager_id,m.employee_id m_id,m.last_name m_l_n
FROM employees e,employees m
WHERE e.manager_id = m.employee_id

-- 101	Kochhar	100	100	K_ing
-- 102	De Haan	100	100	K_ing
-- 103	Hunold	102	102	De Haan
-- 104	Ernst	103	103	Hunold
-- 105	Austin	103	103	Hunold


/*
	练习
*/

#1、显示员工表的最大工资，工资平均值
SELECT MAX(salary), AVG(salary) FROM employees;

#2、查询员工表的employee_id, job_id,last_name,按department_id降序,salary升序
SELECT employee_id, job_id,last_name FROM employees ORDER BY department_id DESC , salary ASC

#3、查询员工表的job_id中包含 a 和e 的,并且a在e前面
SELECT job_id FROM employees WHERE job_id LIKE '%a%e%';

#4、已知 student里面有id(学号)，name,gradeId(年级编号) ; 已知表grade,里面有id(年级编号),name(年级名) ; 已知表result里面有id,score,studentNo(学号) 要求查询姓名、年级名、成绩
SELECT s.name,g.name,r.score
FROM student s, grade g, result r
WHERE s.id = r.studentNo 
AND g.id = s.gradeid;

#5、显示当前日期、以及去前后空格、截取子字符串的函数
SELECT NOW();
SELECT TRIM(字符 FROM str);
SELECT SUBSTR(str FROM pos FOR len);

SELECT PASSWORD('王世宇')

#二、sql99语法
/*
	语法：
		SELECT 查询列表
		FROM 表1 别名 [连接类型]
		JOIN 表2 别名 ON 连接条件
		[WHERE 筛选条件]
		[GROUP BY]
		[HAVING]
		[ORDER BY]
		
	内连接（*）：inner 都是求交集数据
	外连接
		左外（*）:left [outer]
		右外（*）:right [outer]
		全外:full [outer]
	交叉连接: cross
*/

#、一）内连接
/*
	语法：
		SELECT 查询列表
		FROM 表1 别名
		INNER JOIN 表2 别名 ON 连接条件

	分类：
		等值
		非等值
		自连接
	特点：
		1、添加排序、分组、筛选
		2、inner 可以省略
		3、筛选条件放在where后面，连接条件放在on后面，提高分离性，便于阅读
		4、inner join 连接和sql92语法中的等值连接效果是一样的，都是查询多表的交集
*/
#1、等值连接
#案例1、查询员工名、部门名
SELECT last_name, department_name
FROM employees e
INNER JOIN departments d
ON e.department_id = d.department_id;


#案例2、查询名字中包含e的员工名和工种名（筛选）
SELECT last_name, job_title
FROM employees e
INNER JOIN jobs j
ON e.job_id = j.job_id
WHERE e.last_name LIKE '%e%';


#案例3、查询部门个数>3的城市名和部门个数（分组+筛选）
SELECT city, COUNT(*),department_name
FROM departments d
INNER JOIN locations l
ON d.location_id = l.location_id
GROUP BY city
HAVING COUNT(*) > 3


#案例4、查询哪个部门的部门员工个数>3的部门名和员工个数，并按个数降序（排序）
SELECT COUNT(*), department_name
FROM employees e
INNER JOIN departments d
ON e.department_id = d.department_id
GROUP BY department_name
HAVING COUNT(*) > 3
ORDER BY COUNT(*) DESC

#案例5、查询员工名、部门名、工程名、并按部门名降序
SELECT last_name, department_name, job_title
FROM employees e
INNER JOIN departments d ON e.department_id = d.department_id
INNER JOIN jobs j 			 ON e.job_id = j.job_id
ORDER BY department_name DESC

#2、非等值连接
#查询员工的工资级别
SELECT  COUNT(*),grade_level
FROM employees e
INNER JOIN job_grades g ON e.salary BETWEEN g.lowest_sal AND g.highest_sal
GROUP BY grade_level
HAVING COUNT(*) > 2
ORDER BY grade_level DESC

#3、自连接
#查询员工的名字，还有他上级的名字
SELECT e.last_name, m.last_name
FROM employees e
INNER JOIN employees m ON e.manager_id = m.employee_id
WHERE e.last_name LIKE '%k%'

#二、外连接
/*
	应该场景：用于查询一个表中有，另一个表中没有的记录
	特点：
	1、外连接的查询结果为主表中的所有记录，如果从表中有和它匹配的，则显示匹配的值，如果从表中没有则显示null，外连接查询结果 = 内边接结果 + 主表中有需从表没有的记录。
	2、左外连接，left join左边的是主表
		 右外连接，right join右边的是主表
	3、左外和右外交换两个表的顺序，可以实现同样的效果
	4、全外连接 = 内连接的结果 + 表1中有但表2没有的 + 表2中有但表1中没有的
*/
#引入：查询没有男朋友的女神名
USE girls;
SELECT * FROM beauty;
SELECT * FROM boys;
#左外连接
SELECT b.name
FROM beauty b
LEFT OUTER JOIN boys bo ON b.boyfriend_id = bo.id
WHERE bo.id IS NULL

#右外连接
SELECT b.name, bo.*
FROM boys bo
right OUTER JOIN beauty b ON b.boyfriend_id = bo.id
WHERE bo.id IS NULL

#查询哪个部门没有员工
#左外
USE myemployees;
SELECT d.*,e.employee_id
FROM departments d
LEFT OUTER JOIN employees e on d.department_id = e.department_id
WHERE e.department_id IS NULL

#右外
SELECT d.*,e.employee_id
FROM employees e
RIGHT OUTER JOIN departments d on d.department_id = e.department_id
WHERE e.department_id IS NULL

#三、交叉连接
USE girls;
SELECT b.*, bo.* 
FROM beauty b
CROSS JOIN boys bo;

#sql92 和sql99 pk
-- 功能：sql99支持的较多
-- 可读性：sql99实现连接条件和筛选条件的分离，可读性较高

```
#### 复习
```
    一、含义
        当查询中涉及到了多个表的字段，需要使用多表连接
        select 字段1,字段2
        from 表1,表2,...

        笛卡尔乘积：当查询多个表时，没有添加有效的连接条件，导致多个表所有行实现完全连接
        如何解决：添加有效条件
    二、分类
        按年代分类
            sql92:
                等值
                    语法：
                        select 查询列表
                        from 表1 别名, 表2 别名
                        where 表1.key = 表2.key
                        [and 筛选条件]
                        [group by 分组字段]
                        [having 分组后的筛选]
                        [order by 排序字段]
                    特点
                    1、一般为表起别名
                    2、多表的顺序可以调换
                    3、n表连接至少需要n-1个连接条件
                    4、等值连接的结果是多表的交集部分

                非等值
                    语法：
                        select 查询列表
                        from 表1 别名, 表2 别名
                        where 非等值的连接条件
                        [and 筛选条件]
                        [group by 分组字段]
                        [having 分组后的筛选]
                        [order by 排序字段]

                自连接
                    语法：
                        select 查询列表
                        from 表 别名1, 表 别名2
                        where 别名1.key = 别名2.key
                        [and 筛选条件]
                        [group by 分组字段]
                        [having 分组后的筛选]
                        [order by 排序字段]
                        
                也支持一部分外连接(用于oracle、sqlserver、mysql不支持)
                
            sql99【推荐使用】:
                内连接
                    等值
                    非等值
                    自连接
                外连接
                    左外
                    右外
                    全外(mysql不支持)
                交叉连接

```
#### 1.8、子查询
```
#进阶7：子查询
/*
含义：
	出现在其他语句中的select语句，称为子查询或内查询
	外部的查询语句，称为主查询或外查询
分类：
	按子查询出现的位置：
		select 后面：
			仅仅标量子查询
		from 后面
			表子查询
		where 或having后面 ☆
			标量子查询（单行） ☆
			列子查询 （多行）☆

			行子查询(列得较少)
		exists 后面（相关子查询）
			表子查询

	按功能（结果信的行列数不同）:
		标量子查询(结果集只有一行一列)
		列子查询(结果集只有一列多行)
		行子查询(结果集有一行多列)
		表子查询(结果集一般为多行多列)
*/

#一、where 或having后面
/*
分类：
	#1、标量子查询（单行子查询） 一行一列
	#2、列子查询（多行子查询）
	#3、行子查询（多列多行）
特点：
	1、子查询放在小括号内
	2、子查询一般放在条件的右侧
	3、标量子查询，一般搭配着单行操作符使用
		> < >= <= = <>
	4、列子查询，一般搭配着多行操作符使用
		in、  等于列表中的任意一个
		not in、不是列表中的任意一个
		any/some、 和子查询返回的某一个值比较 min
		all 和子查询返回的所有值比较	max
	5、子查询的执行优先于主查询执行，主查询的条件用到了子查询的结果

*/


#1、标量子查询
#案例1：谁的工资比 abel高？
#第一步：查询abel的工资
SELECT salary FROM employees WHERE last_name = 'Abel';

#第二步：查询员工的信息，满足salary > 第一步的结果
SELECT *
FROM employees
WHERE salary > (
	SELECT salary FROM employees WHERE last_name = 'Abel'
);

-- 100	Steven	K_ing	SKING	515.123.4567	AD_PRES	24000			90	1992-04-03 00:00:00
-- 101	Neena	Kochhar	NKOCHHAR	515.123.4568	AD_VP	17000		100	90	1992-04-03 00:00:00
-- 102	Lex	De Haan	LDEHAAN	515.123.4569	AD_VP	17000		100	90	1992-04-03 00:00:00
-- 108	Nancy	Greenberg	NGREENBE	515.124.4569	FI_MGR	12000		101	100	1998-03-03 00:00:00
-- 145	John	Russell	JRUSSEL	011.44.1344.429268	SA_MAN	14000	0.4	100	80	2002-12-23 00:00:00
-- 146	Karen	Partners	KPARTNER	011.44.1344.467268	SA_MAN	13500	0.3	100	80	2002-12-23 00:00:00
-- 147	Alberto	Errazuriz	AERRAZUR	011.44.1344.429278	SA_MAN	12000	0.3	100	80	2002-12-23 00:00:00
-- 168	Lisa	Ozer	LOZER	011.44.1343.929268	SA_REP	11500	0.25	148	80	2014-03-05 00:00:00
-- 201	Michael	Hartstein	MHARTSTE	515.123.5555	MK_MAN	13000		100	20	2016-03-03 00:00:00
-- 205	Shelley	Higgins	SHIGGINS	515.123.8080	AC_MGR	12000		101	110	2016-03-03 00:00:00


#案例2：返回job_id 与 141号员工相同，salary比143号员工多的员工姓名,job_id 和工资
#第一步：查询141号员工的job_id
SELECT job_id
FROM employees
WHERE employee_id = 141
#第二步：查询143号员工的salary
SELECT salary
FROM employees
WHERE employee_id = 143
#第三步：查询员工的 姓名,job_id 和工资 要求 job_id = 第一步 并且 salary > 第二步

SELECT last_name,job_id,salary
FROM employees
WHERE job_id = (
		SELECT job_id
		FROM employees
		WHERE employee_id = 141
) AND salary > (
		SELECT salary
		FROM employees
		WHERE employee_id = 143
);

-- Nayer	ST_CLERK	3200
-- Mikkilineni	ST_CLERK	2700
-- Bissot	ST_CLERK	3300
-- Atkinson	ST_CLERK	2800
-- Mallin	ST_CLERK	3300
-- Rogers	ST_CLERK	2900
-- Ladwig	ST_CLERK	3600
-- Stiles	ST_CLERK	3200
-- Seo	ST_CLERK	2700
-- Rajs	ST_CLERK	3500
-- Davies	ST_CLERK	3100

#案例3、返回公司工资最少的员工的last_name,job_id,salary
#第一步：查询公司的最低工资
SELECT MIN(salary)
FROM employees

#第二步 查询 last_name,job_id,salary ，要求 salary = 第一步
SELECT last_name,job_id,salary 
FROM employees 
WHERE salary =  (
		SELECT MIN(salary) 
		FROM employees
);

-- Olson	ST_CLERK	2100

#案例4：查询最低工资大于50号部门 最低工资的部门id和其最低工资
#1、查询50号部门的最低工资
SELECT MIN(salary)
FROM employees
WHERE department_id = 50
#2、查询每个部门的最低工资
SELECT MIN(salary)
FROM employees
GROUP BY department_id
#3、在2基础上筛选，满足min(salary) > 1
SELECT MIN(salary),department_id
FROM employees
GROUP BY department_id
HAVING MIN(salary) > (
	SELECT MIN(salary)
	FROM employees
	WHERE department_id = 50
);

-- 7000.00	
-- 4400.00	10
-- 6000.00	20
-- 2500.00	30
-- 6500.00	40
-- 4200.00	60
-- 10000.00	70
-- 6100.00	80
-- 17000.00	90
-- 6900.00	100
-- 8300.00	110

#非法使用标量子查询


#2、列子查询（多行子查询）
#案例1、返回location_id是1400或1700的部门中的所有员工姓名
SELECT
	department_id
FROM
	departments
WHERE 
	location_id  in (1400,1700);
-- 	location_id = 1400 OR
-- 	location_id = 1700

SELECT last_name
FROM employees
WHERE department_id in (
		SELECT
			department_id
		FROM
			departments
		WHERE 
			location_id  in (1400,1700)
);

#案例2:返回其它工种中比job_id为IT_PROG工种任一工资低的员工的工号、姓名、job_id以及salary
#1、查询job_id为IT_PROG部门任一工资
SELECT DISTINCT salary 
FROM employees
WHERE job_id = 'IT_PROG'
#2、查询员工的工号、姓名、job_id以及salary < any (1)的任意一个
SELECT last_name,employee_id,job_id,salary
FROM employees
WHERE salary < ANY (
		SELECT DISTINCT salary 
		FROM employees
		WHERE job_id = 'IT_PROG'
) AND job_id != 'IT_PROG';

#或者
SELECT last_name,employee_id,job_id,salary
FROM employees
WHERE salary < (
		SELECT MAX(salary)
		FROM employees
		WHERE job_id = 'IT_PROG'
) AND job_id != 'IT_PROG';

-- Chen	110	FI_ACCOUNT	8200
-- Sciarra	111	FI_ACCOUNT	7700
-- Urman	112	FI_ACCOUNT	7800
-- Popp	113	FI_ACCOUNT	6900
-- Khoo	115	PU_CLERK	3100
-- Baida	116	PU_CLERK	2900

#案例3：返回其它工种中比job_id为IT_PROG工种所有工资低的员工的工号、姓名、job_id以及salary
SELECT last_name,employee_id,job_id,salary
FROM employees
WHERE salary < all (
		SELECT DISTINCT salary 
		FROM employees
		WHERE job_id = 'IT_PROG'
) AND job_id != 'IT_PROG';

-- Khoo	115	PU_CLERK	3100
-- Baida	116	PU_CLERK	2900
-- Tobias	117	PU_CLERK	2800
-- Himuro	118	PU_CLERK	2600
-- Colmenares	119	PU_CLERK	2500
-- Nayer	125	ST_CLERK	3200
-- Mikkilineni	126	ST_CLERK	2700
-- Landry	127	ST_CLERK	2400


#3、行子查询（结果集一行多列或多行多列）
#案例1、查询员工编号最小并且工资最高的员工信息

#第1步查询最小编号
SELECT MIN(employee_id)
FROM employees
#第2步查询最大工资
SELECT MAX(salary)
FROM employees
#第3步查询员工信息
SELECT *
FROM employees
WHERE employee_id = (
	SELECT MIN(employee_id)
	FROM employees
)AND salary = (
	SELECT MAX(salary)
	FROM employees
);

-- 100	Steven	K_ing	SKING	515.123.4567	AD_PRES	24000			90	1992-04-03 00:00:00

#用行子查询方式
SELECT  *
FROM employees
WHERE (employee_id, salary ) = (
	SELECT MIN(employee_id),MAX(salary)
	FROM employees
);

-- 100	Steven	K_ing	SKING	515.123.4567	AD_PRES	24000			90	1992-04-03 00:00:00

#二、放在select后面
/*
	里面只能是标量子查询（1行1列）
*/
#案例1：查询每个部门的员工个数
SELECT d.*, (
	SELECT COUNT(*) 
	FROM employees e
	WHERE e.department_id = d.department_id
) 个数
FROM departments d;


-- 10	Adm	200	1700	1
-- 20	Mar	201	1800	2
-- 30	Pur	114	1700	6
-- 40	Hum	203	2400	1
-- 50	Shi	121	1500	45
-- 60	IT	103	1400	5
-- 70	Pub	204	2700	1
-- 80	Sal	145	2500	34

#案例2：查询员工号=102的部门名
SELECT (SELECT department_name
				FROM departments d
				INNER JOIN employees e ON d.department_id = e.department_id
				where e.employee_id = 102) 部门名;


#三、from后面
/*
	将子查询结果充当一张表，要求必须起别名
*/
#案例1：查询每个部门的平均工资的工资等

#1、查询每个部门的平均工资
SELECT AVG(salary), department_id
FROM employees
GROUP BY department_id;

#2、连接1的结果集和job_grades表，筛选条件平均工资 BETWEEN lowest_sal and highest_sal
SELECT ag_dep.*,g.grade_level
FROM	(
	SELECT AVG(salary) AS ag, department_id
	FROM employees
	GROUP BY department_id
) ag_dep
INNER JOIN job_grades g ON ag_dep.ag BETWEEN lowest_sal and highest_sal

-- 7000		C
-- 4400	10	B
-- 9500	20	C
-- 4150	30	B
-- 6500	40	C
-- 3475.555556	50	B
-- 5760	60	B
-- 10000	70	D
-- 8955.882353	80	C
-- 19333.333333	90	E
-- 8600	100	C
-- 10150	110	D

#四、exists 后面(相关子查询) 
/*
	语法：
	EXISTS(完整的查询语句)
	结果：1或0
*/
SELECT EXISTS(SELECT employee_id FROM employees WHERE salary = 30000);

#案例1：查询有员工的部门名
SELECT department_name
FROM departments d
WHERE EXISTS (
	SELECT * 
	FROM employees e
	WHERE d.department_id = e.department_id
);

-- Adm
-- Mar
-- Pur
-- Hum
-- Shi
-- IT
-- Pub
-- Sal
-- Exe
-- Fin
-- Acc

#使用in的方式
SELECT department_name
FROM departments d
WHERE d.department_id in (
	SELECT department_id
	FROM employees
);
-- Adm
-- Mar
-- Pur
-- Hum
-- Shi
-- IT
-- Pub
-- Sal
-- Exe
-- Fin
-- Acc
```
#### 1.9、分页查询
#### 1.10、union联合查询
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







