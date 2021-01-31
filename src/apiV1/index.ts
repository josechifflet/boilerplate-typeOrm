import express from 'express';

const router: express.Router = express.Router();

router.get('/', (req: express.Request, res: express.Response): void => {
  // add controller
  res.status(200).json({success: true})
});

export default router;
