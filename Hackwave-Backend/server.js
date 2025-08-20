const dotenv = require("dotenv");
const connectDB = require('./config/db.js');

const app = require('./app.js');

dotenv.config();
connectDB();

const userRouter = require('./routes/user.routes.js')
app.use('/user',userRouter);
app.get('/',(req,res)=>{
    res.render('index');
})
app.get('/home',(req,res)=>{
    res.render('home')
})
app.get('/contact',(req,res)=>{
    res.render('contact')
})
app.get('/services',(req,res)=>{
    res.render('services');
})
app.get('/about',(req,res)=>{
    res.render('about');
})


const PORT = process.env.PORT || 8080;

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})