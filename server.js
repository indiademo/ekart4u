import { default as express} from './config/express';

const app = express();

app.listen( 2000, ()=>{
    console.log("Server listening to port:", 2000);
})

export {app};