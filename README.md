# Prisma Nodejs PostgreSQL
 - In this repository you will see an example nodejs ( express js ) project which using prisma with postgresql database.
 - In this project we are saving & filtering json object.

 - Node version === v16.11.1

### Setup
- mkdir prisma-node
- npm init -y
- npm install prisma
- npx prisma init
- When you create your model etc. run this command to sync it with our db. ```npx prisma migrate dev```
- Then install express ``` npm i express ```
- Finally create file for main server file ``` index.js ```

### Model

- We have a model ( Job ) and we have 3 params. ``` id , boat , saved ```.

        "id" SERIAL NOT NULL, CONSTRAINT, PRIMARY KEY 
        "boat" JSONB NOT NULL,
        "saved" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP

- Check schema.prisma to see **prismatic** version. 

### Example Data
- The **boat** variable store this object. 

```
{
    "id": 8076018,
    "url": "https://www.yachtworld.com/yacht/1996-bavaria-44-holiday-8076018/",
    "fuel": "diesel",
    "make": "Bavaria",
    "model": "44 Holiday",
    "price": 91971.37,
    "title": "1996 Bavaria 44 Holiday",
    "engine": "Volvo Penta",
    "images": [
        {
            "url": "https://images.boatsgroup.com/resize/1/60/18/8076018_20211020085804109_1_XLARGE.jpg",
            "date": {
                "created": "2021-10-20T15:58:04Z",
                "modified": "2021-10-20T16:03:37Z"
            },
            "format": "jpg"
        },
    ]
}
```

### Routes 

- Check **routes** folder to see more information.
- For now we have 1 route which is **/boat** and have 2 endpoints **/save** & **/:id**.
- Example request;


- ```localhost:3000/boat/save``` -> accepts **POST** request and **request.body**

- <a id="#Example Data">body data should be.</a>

- ```localhost:3000/boat/1``` -> accepts **GET** request and parameter **id** to find row by id.