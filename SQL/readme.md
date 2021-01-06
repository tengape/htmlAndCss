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
      - [1.4、常见函数](#14常见函数)
      - [1.5、分组函数](#15分组函数)
      - [1.6、分组查询](#16分组查询)
      - [1.7、连接查询](#17连接查询)
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
					名称							数据源							位置									关键字
			A、分组前筛选 				原始表              group by 前面					WHERE
			B、分组后筛选					组后的结果表        group by 的后面				HAVING
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
#### 1.7、连接查询
#### 1.8、子查询
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







