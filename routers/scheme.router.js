import express from 'express';
import schemeController from '../controllers/scheme.controller.js'
const router = express.Router();

router.post('/addscheme', schemeController.CreateNewScheme)
router.get('/getschemeall', schemeController.GetAllSchemes)
router.get('/getschemebyId/:id', schemeController.GetSchemebyId)
router.get('/searchschemebyparams', schemeController.SearchSchemebyParams)
router.patch('/editschemebyid/:id', schemeController.EditSchemebyId)
router.delete('/deleteschemebyid/:id', schemeController.DeleteSchemebyId)
router.get('/validatescheme', schemeController.ValidateScheme)

export default router;