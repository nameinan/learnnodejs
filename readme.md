
1. npm init
start: node index.js
npm run start/npm start
2. npm i -D typescript ts-node nodemon
3. npm i -g typescript
4. tsc --init
5. npm install /npm start
6. npm i express cors
7. npm i -D @types/express @types/cors
8. npm i express-validation --save
9 Install the npm package type orm:
 https://typeorm.io/#/

  npm install typeorm --save
  
  You need to install reflect-metadata shim:
  npm install reflect-metadata --save

  and import it somewhere in the global place of your app (for example in app.ts):
   import "reflect-metadata";

   You may need to install node typings:
   npm install @types/node --save-dev
 
 Install a database driver:
 
    for Microsoft SQL Server
    npm install mssql --save



  10.  npm i bcryptjs
       npm i -D @types/bcryptjs 


  11. npm install jsonwebtoken
      npm install -D @types/jsonwebtoken
      https://jwt.io/
    

12. npm i cookie-parser
     npm i -D @types/cookie-parser


 13. npm install dotenv    
     key = value .env file


14 seeding
   npm run roles:seed
   
   
--mssql
select * from permission
DELETE FROM permission
DBCC CHECKIDENT ('test.dbo.permission', RESEED, 0)


select * from role
DELETE from role
DBCC CHECKIDENT ('test.dbo.role', RESEED, 0)

select  * from role_permissions
DELETE from role_permissions
DBCC CHECKIDENT ('test.dbo.role_permissions', RESEED, 0)

select * from [user]
update [user]
set role_id=null 


select  * from role_permissions

--mysql
SET FOREIGN_KEY_CHECKS=0;
SET FOREIGN_KEY_CHECKS=1;



15. seeding for the products 
   npm run products:seed

   install faker
   npm install faker
   npm install -D @types/faker

16 image upload
   npm install multer
   npm install -D @types/multer




17. Export to csv file
    npm install json2csv