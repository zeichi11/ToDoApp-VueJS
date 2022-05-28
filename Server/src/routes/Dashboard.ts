import { Router, Request, Response } from 'express'

const router: Router = express.Router()

router.get('/', (req: Request, res: Response) => {
  res.send('dashboard page')
});


export default router;