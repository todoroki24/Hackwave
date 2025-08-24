const dotenv = require("dotenv");
const connectDB = require('./config/db.js');

const app = require('./app.js');

dotenv.config();
connectDB();

const userRouter = require('./routes/user.routes.js')
app.use('/user',userRouter);
//app.use('/municipality', municipalityRouter);
app.get('/',(req,res)=>{
    res.render('front');
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
// // server.js (add near other routers)
// const authRouter = require('./routes/auth.routes'); // add this line
// app.use('/auth', authRouter); // mount it



const PORT = process.env.PORT || 8080;

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})