import express from "express";
import morgan from 'morgan';
import userRouter from './api/routes/user';
import boatRouter from "./api/routes/boats";

const app = express();

process.on('uncaughtException', (error) => {
	console.log(error);
});

process.on('unhandledRejection', (ex) => {
	console.log(ex);
});

app.use(morgan('dev'));
app.use(express.urlencoded({extended: false})); 
app.use(express.json());
app.set('trust proxy', true);

app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers',
		'Origin, X-Requested-With, Content-Type, Accept, Authorization');
	res.header('Content-Security-Policy-Report-Only', 'default-src: https:');
	if (req.method === 'OPTIONS') {
		res.header('Access-Control-Allow-Methods', 'PUT POST PATCH DELETE, GET');
		return res.status(200).json({});
	}
	next();

});

app.use('/', boatRouter);
app.use('/', userRouter);

const port = process.env.PORT || "3000";

app.listen(port, () => {
  console.log(`Server Running at ${port} 🚀`);
});
