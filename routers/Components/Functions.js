const message = "500 - Internal Server Error"
const api = require('../../api/products/index.json');

const productdata = api.items;

const array = [];
module.exports.getLanding = async(req, res, next)=>{
    
    try {
        res.status(200).json({msg: "welcome to the backend"})
        next();
        
    } catch (error) {
        res.json({msg: message})
        
    }
}



module.exports.ProductApi = async(req, res)=>{
   
    try {
        res.status(200).json(productdata);
        
        
    } catch (error) {
        res.json({msg: message})
        
    }
}


module.exports.UpdateApi = async(req, res)=>{
   
    try {

        var basketset = req.body;
        
        basketset.forEach(function(val){
            var stocklevel = val.times;
            var Obj = val.item;

            var inx =   productdata.findIndex(obj => obj.sku === Obj.sku);
            productdata[inx].stockLevel = productdata[inx].stockLevel - stocklevel;          
            
        })


        res.status(200).json({msg: basketset})
        
        
    } catch (error) {
        res.json({msg: message})
        
    }
}


module.exports.getCheckData = async(req, res, next)=>{

  
   
    try {
        var data = req.body;
        array.push(data);
        next();

        
    } catch (error) {
        res.json({msg: message})
        
    }
}

module.exports.Basket = async(req, res, next)=>{

  
   
    try {
        res.status(200).json(array)
        next();

        
    } catch (error) {
        res.json({msg: message})
        
    }
}



module.exports.Errorway = async(req, res,next)=>{
    
    try {
        res.status(400).json({msg: "Forbidden Access"});
        next();
    } catch (error) {
        res.json({msg: message})
        
    }
}