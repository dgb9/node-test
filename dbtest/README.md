<h3>Mysql</h3>
- create environment variable called CONFIG_FOLDER that points to folder where we put
a file config.json that holds the configuration settings. On my machine we I have variable
created only when run the application from IDE and has the value ``C:\Users\dgabrov\IdeaProjects\testnode\dbtest\config``
so always full path, especially in deployment environments. 

- create module with config which is loaded wherever needed

- mysql

- create database test1
``create database test1;``
 
- create user test1 that has access to test1.* to do everything. Password test1pass
```sql
create user test1 identified by 'test1pass;
grant all privileges on test1.* to test1;
```
- create table t with fields first varchar(255) primary key and second
```sql
create table t (
    first varchar(255) primary key, 
    second varchar(255) not null
)
```
- write module to insert, select etc in that table

This is what resulted:

```text
"C:\Program Files\nodejs\node.exe" C:\Users\dgabrov\IdeaProjects\testnode\dbtest\index.js
{ dbUser: 'test1',
  dbPassword: 'test1pass',
  dbName: 'test1',
  port: '3306',
  machine: 'localhost' }
insert successful
successful selecting info
results: [{"first":"the first value","second":"the second value"}]

```

