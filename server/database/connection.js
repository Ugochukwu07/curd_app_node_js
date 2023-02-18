const mongoose = require('mongoose')
mongoose.set('strictQuery', true);

const connctDB = async () => {
    try{
        //mongodb connection query
        const con = await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser:true,
            useUnifiedTopology:true,
            // useFindAndModify:false,
            // useCreateIndex:true
        })

        console.log(`MongoDB connected : ${con.connection.host}`)
    }catch(err){
        console.log(err)
        process.exit(1)
    }
}

module.exports = connctDB;