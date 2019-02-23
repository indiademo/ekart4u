
import express from 'express';

import { default as user } from './user-ctrl'


let router = express.Router();

router.get('/api/getUser',user.getuser)



export default router;