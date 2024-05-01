-- INSERT INTO teachers (
--     id,
--     username,
--     nikname,
--     teacherimage,
--     email,
--     ieltslevel,
--     age,
--     addressteacher,
--     roleuser,
--     teacherroom,
--     password,
--     birthday
--   )
-- VALUES (
--     'id:character varying',
--     'username:character varying',
--     'nikname:character varying',
--     'teacherimage:character varying',
--     'email:character varying',
--     'ieltslevel:character varying',
--     age:integer,
--     'addressteacher:character varying',
--     'roleuser:character varying',
--     'teacherroom:character varying',
--     'password:character varying',
--     'birthday:timestamp without time zone'
--   );

-- DROP TABLE students


-- CREATE TABLE students (
--     id VARCHAR(60) NOT NULL,
--     username VARCHAR(60) NOT NULL,
--     nikname VARCHAR(60) NOT NULL,
--     studentimage VARCHAR(60),
--     email VARCHAR(60) NOT NULL,
--     age INTEGER,
--     addressStudent VARCHAR(60),
--     roleuser VARCHAR(60),
--     password VARCHAR(60) NOT NULL,
--     birthday TIMESTAMP,
--     courses TEXT[]
-- );


INSERT INTO students (id,username,nikname,email,studentimage,age,addressStudent,roleuser,birthday,password,courses) 
        VALUES('1a2dcfe7-e524-4f4e-9e12-70e0b3f4fe7b','Dilshodbek','moxir','myprofileforgithub@gmail.com','somsa','23','Namangan','student','22.04.2001','20010422','{math,it}')