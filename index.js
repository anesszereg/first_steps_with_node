// using express  

const express = require('express');
const dbConnect = require('./dbConenct');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();


app.use(bodyParser.json());
app.use(cors());
app.use(express.json());
app.use('/api' , require('./routes/User.routes'));




const port = 8001;
app.listen(port, () => {

    console.log(`Server on port ${port}`);
    dbConnect()

}
)