//Alan Gabriel Saldaña Guerrero

import express from "express";
import cors from "cors";
import router from './routes/index.js';

const app = express();
/* mongoose.connect(process.env.MONGO_URL || "mongodb://localhost:27017/gobierno").then(_=>{
    console.log("------* Connected to Database *------");
})

// Exit application on error
mongoose.connection.on('error', (err) => {
    console.error(`MongoDB connection error: ${err}`);
    process.exit(-1);
});
 */
app.use(express.json({limit:'50mb'}));
app.use(express.urlencoded({limit: '50mb', extended: true }));
app.use(cors());

app.use('/api',router);
app.listen(3000,()=>{
    console.log("Servidor funcionando por Alan Gabriel Saldaña Guerrero")
});