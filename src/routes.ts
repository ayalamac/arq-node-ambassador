import {Router} from "express";
import {AuthMiddleware} from "./middleware/auth.middleware";
import {
    CreateProduct,
    DeleteProduct,
    GetProduct,
    Products, ProductsBackend,
    ProductsFrontend,
    UpdateProduct
} from "./controller/product.controller";
import {CreateLink, GetLink, Links, Stats} from "./controller/link.controller";
import {ConfirmOrder, CreateOrder, Orders, Rankings} from "./controller/order.controller";


export const routes = (router: Router) => {
    // Admin
    router.get('/api/admin/products', AuthMiddleware, Products);
    router.post('/api/admin/products', AuthMiddleware, CreateProduct);
    router.get('/api/admin/products/:id', AuthMiddleware, GetProduct);
    router.put('/api/admin/products/:id', AuthMiddleware, UpdateProduct);
    router.delete('/api/admin/products/:id', AuthMiddleware, DeleteProduct);
    router.get('/api/admin/users/:id/links', AuthMiddleware, Links);
    router.get('/api/admin/orders', AuthMiddleware, Orders);

    // Ambassador
    router.get('/api/ambassador/products/frontend', ProductsFrontend);
    router.get('/api/ambassador/products/backend', ProductsBackend);
    router.post('/api/ambassador/links', AuthMiddleware, CreateLink);
    router.get('/api/ambassador/stats', AuthMiddleware, Stats);
    router.get('/api/ambassador/rankings', Rankings);

    // Checkout
    router.get('/api/checkout/links/:code', GetLink);
    router.post('/api/checkout/orders', CreateOrder);
    router.post('/api/checkout/orders/confirm', ConfirmOrder);
}
