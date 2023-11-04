const express = require('express');
const app = express();
const PORT = 8080;

app.use(express.json());

app.use('/users', require('./routes/users'));
app.use('/tokens', require('./routes/tokens'));
app.use('/products', require('./routes/products'));
app.use('/categories', require('./routes/categories'));
app.use('/orders', require('./routes/orders'));
app.use('/paymethods', require('./routes/paymethods'));

app.listen(PORT, () => console.log('Server connected on ' + PORT));