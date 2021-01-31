const express = require('express');
const Router = express.Router();
const {getLanding, ProductApi, Errorway, getCheckData, Basket, UpdateApi, deleteData} = require('./Components/Functions')


//@All of the Landing Page Functions 

Router.get('/', getLanding )
Router.get('/api/products', ProductApi)
Router.get('/api/cart', Basket )
Router.get('*', Errorway )




//@All of the POST ROutes

Router.post('/add', getCheckData);


//@All of the Update Routes

Router.put('/update', UpdateApi);





module.exports = Router;