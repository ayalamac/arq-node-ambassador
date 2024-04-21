import { Router } from "express";
import { UserMiddleware } from "./middleware/user.middleware";
import {
    CreateProduct,
    DeleteProduct,
    GetProduct,
    Products, ProductsBackend,
    ProductsFrontend,
    UpdateProduct
} from "./controller/product.controller";
import { CreateLink, GetLink, Links, Stats } from "./controller/link.controller";
import { ConfirmOrder, CreateOrder, Orders, Rankings } from "./controller/order.controller";


export const routes = (router: Router) => {
    // Admin
    router.get('/api/admin/products', UserMiddleware, Products);
    router.post('/api/admin/products', UserMiddleware, CreateProduct);
    router.get('/api/admin/products/:id', UserMiddleware, GetProduct);
    router.put('/api/admin/products/:id', UserMiddleware, UpdateProduct);
    router.delete('/api/admin/products/:id', UserMiddleware, DeleteProduct);
    router.get('/api/admin/users/:id/links', UserMiddleware, Links);
    router.get('/api/admin/orders', UserMiddleware, Orders);

    // Ambassador
    router.get('/api/ambassador/products/frontend', ProductsFrontend);
    router.get('/api/ambassador/products/backend', ProductsBackend);
    router.post('/api/ambassador/links', UserMiddleware, CreateLink);
    router.get('/api/ambassador/stats', UserMiddleware, Stats);
    router.get('/api/ambassador/rankings', Rankings);

    // Checkout
    router.get('/api/checkout/links/:code', GetLink);
    router.post('/api/checkout/orders', CreateOrder);
    router.post('/api/checkout/orders/confirm', ConfirmOrder);
}
