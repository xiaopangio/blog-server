USE tempdb

GO
-- 创建测试表

CREATE TABLE tb(`id` char(8))

 
-- 创建用于自动过滤重复值的唯一索引

CREATE UNIQUE INDEX IX_tb ON tb(id)

WITH IGNORE_DUP_KEY 

GO

 
-- 测试数据插入的处理时间, 记录开始处理的时间点

DECLARE @dt datetime

SET @dt = GETDATE()

 
-- 插入随机数据

SET NOCOUNT ON

DECLARE @row int

SET @row = 1000 -- 设置总记录数

WHILE @row >0

BEGIN

    -- 显示提示信息, 表示还需要插入多行数据

    RAISERROR('need %d rows', 10, 1, @row) WITH NOWAIT

 

    -- 插入随机的位编码数据

    SET ROWCOUNT @row

    INSERT tb SELECT

        id = RIGHT(100000000 + CONVERT(bigint, ABS(CHECKSUM(NEWID()))), 8)

    FROM syscolumns c1, syscolumns c2

    SET @row = @row - @@ROWCOUNT

END

 

-- 显示插入数据使用的时间

SELECT BeginDate = @dt, EndDate = GETDATE(), 

    Second = DATEDIFF(Second, @dt, GETDATE()),

GO

 

-- 显示最终的结果记录是否正确

SELECT COUNT(*) FROM tb

GO

 

-- 删除测试

DROP TABLE tb