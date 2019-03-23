const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const item = require('./routes/api/items');
const db = require('./config/keys').mongoURI;
///////////////////////////////////////////////
//						Connect to mongoDB
///////////////////////////////////////////////
mongoose.connect(db, { useNewUrlParser: true })
	.then(() => {
		console.log('Mongo Connected');
	})
	.catch((err) => {
		console.log("Err", err)
	})
///  Middle

// /////////////////////////////////////////////
//							Middleweares
// /////////////////////////////////////////////
app.use(bodyParser.json());

app.use('/api/items', item);
// /////////////////////////////////////////////
//							Express
// /////////////////////////////////////////////
const port = process.env.PORT || 5000;
app.listen(port, () => {
	console.log(`Listening on port ${port}`)
})