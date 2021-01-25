const express = require('express');
const Router = express.Router();
const {getLanding, ProductApi, Errorway} = require('./Components/Functions')


//@All of the Landing Page Functions 

Router.get('/', getLanding )
Router.get('/api/products', ProductApi)
Router.get('*', Errorway )



module.exports = Router;