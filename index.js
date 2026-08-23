import express from 'express';
import products_routes from './routes/products_routes.js';
import employee_routes from './routes/employee_routes.js';

const app = express();

app.use(express.json());

app.use('/products', products_routes);
app.use('/employees', employee_routes);

app.listen(3000, () => {
  console.log(' Server is up and running');
})

