const app =require('./app')
require('dotenv').config()
const Connect=require('./config/db')
const PORT =process.env.PORT
console.log(PORT)
Connect()
app.listen(PORT,()=>{
    console.log('server Run On',PORT)
})