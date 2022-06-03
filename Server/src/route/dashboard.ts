import { Router } from 'express'
import dashboardController from '../module/dashboard'
import auth from '../middleware/authorization/auth'

const router: Router = express.Router()

router.get('/', auth, dashboardController.getDashboard);

export default router;