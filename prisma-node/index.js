const express = require("express");
const morgan = require('morgan');

const app = express();
const routes = require('./api/routes');

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

const port = process.env.PORT || "3000";

app.listen(port, () => {
  console.log(`Server Running at ${port} 🚀`);
});

app.use('/', routes);