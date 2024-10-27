import { Router } from 'express'
import { body} from 'express-validator';
import { inputErrorsHandler } from './middlewares/errorInputHandler';
import { createProduct, deleteProduct, getOneProduct, getProducts, updateProduct } from './handlers/product';
import { create } from 'domain';
import { createUpdate } from './handlers/update';

const router = Router();

/**
 *  Products
 */

router.get('/product', getProducts)
router.get('/product/:id',getOneProduct)
router.put('/product/:id',
    body('name').isString(),
    body('price').isFloat().optional(),
    inputErrorsHandler, updateProduct)
router.post('/product', body('name').isString(), inputErrorsHandler, createProduct)
router.delete('/product/:id', deleteProduct)

/**
 *  Update
 */

router.get('/update/:productId', (req, res) => {})
router.post('/update',
    body('title').exists().isString(),
    body('body').exists().isString(),
    body('productId').exists().isString(),
    inputErrorsHandler,
    createUpdate
)

router.put('/update/:id',
    body('title').optional(),
    body('body').optional(),
    body('status').isIn(['IN_PROGRESS', 'SHIPPED', 'DEPRECATED']).optional(),
    body('version').optional(),
    body('productId').optional(),
    inputErrorsHandler,
    (req, res) => {

})

router.post('/update',
    body('title').exists().isString(),
    body('body').exists().isString(),
    body('productId').optional(),
    inputErrorsHandler,
    (req, res) => {})
router.delete('/update/:id', (req, res) => {})

/**
 * Update point
 */

router.get('/updatepoint', (req, res) => {})
router.get('/updatepoint/:id', (req, res) => {})

router.put('/updatepoint/:id',
    body('name').optional().isString(),
    body('description').optional().isString(),
    inputErrorsHandler,
    (req, res) => {})

router.post('/updatepoint',
    body('name').exists().isString(),
    body('description').exists().isString(),
    body('updateId').exists().isString(),
    inputErrorsHandler, 
    (req, res) => {})

router.delete('/updatepoint/:id', (req, res) => {})

export default router;