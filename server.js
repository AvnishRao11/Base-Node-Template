import app from './src/app.js';
import config from './src/config/index.js';


const port =config.serverConfig.port ; 

app.listen(port,()=>{
    try{
        console.log(`Server is running on port ${port}`);
    }
    catch(err){
        console.log(`server error ${err}`);
    }
})