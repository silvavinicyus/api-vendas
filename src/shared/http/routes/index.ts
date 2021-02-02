import {Router} from 'express';
import productsRouter from '@modules/products/routes/products.routes';
import usersRouter from '@modules/users/routes/users.routes';
import sessionRouter from '@modules/users/routes/sessions.routes';
import passwordRouter from '@modules/users/routes/password.routes';
import profileRouter from '@modules/users/routes/profile.routes';
import customersRouter from '@modules/costumers/routes/customers.routes';
import ordersRouter from '@modules/orders/routes/orders.routes';


const routes = Router();

routes.use('/products', productsRouter);

routes.use('/users', usersRouter);

routes.use('/sessions', sessionRouter);

routes.use('/password', passwordRouter);

routes.use('/profile', profileRouter);

routes.use('/customers', customersRouter);

routes.use('/orders', ordersRouter);

export default routes;
