import { Router } from "express";
import * as controllerPost from '../controller/post.controllers.js';

const postRouter = Router();

postRouter.post('/quota', controllerPost.Formula);

export default postRouter;