const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const cors = require('cors');
// const dotenv = require('dotenv').config();

const teacherRouter = require("./Routes/TeacherRouter.js");
const studentRouter = require("./Routes/StudentRouter.js");


app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));


app.use('/api/academy/teacher',teacherRouter);
app.use('/api/academy/student',studentRouter);
// app.use(notFound)

const PORT = process.env.PORT || 8000;

app.listen(PORT,()=>{
    console.log(`server is running in port ${PORT}`);
})