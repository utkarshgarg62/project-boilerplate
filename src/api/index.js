import { Router } from 'express';

// TODO: import and mount endpoint routers as your app grows

import sample from './endpoints/sample.js';

const router = Router();

router.use('/sample', sample);

export default router;
