# Prisma Nodejs PostgreSQL
 - In this repository you will see an example nodejs ( express js ) project which using prisma with postgresql databse.

 - Node version === v16.11.1

### Setup
- mkdir prisma-node
- npm init -y
- npm install prisma
- npx prisma init
- When you create your model etc. run this command to sync it with our db. ```npx prisma migrate dev```
- Then install express ``` npm i express ```
- Finally create file for main server file ``` index.js ```