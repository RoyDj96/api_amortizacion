import express from 'express';
import config from './config/config.js';
import postRouter from './router/post.routes.js';
import cors from "cors";
const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', postRouter);


const PORT = config.port;
app.listen(PORT,()=> {
  console.log(`Server is running on port ${PORT}`);
}); 


