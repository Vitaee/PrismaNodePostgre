#!/bin/sh

npm i

npx prisma generate

npx prisma migrate dev

npm run test
npm run dev