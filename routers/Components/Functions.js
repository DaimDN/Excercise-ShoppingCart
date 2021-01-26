const message = "500 - Internal Server Error"
const api = require('../../api/products/index.json');

const array = [];
module.exports.getLanding = async(req, res)=>{
    
    try {
        res.status(200).json({msg: "welcome to the backend"})
        
    } catch (error) {
        res.json({msg: message})
        
    }
}


module.exports.ProductApi = async(req, res)=>{
   
    try {
        res.status(200).json(api.items)
        
    } catch (error) {
        res.json({msg: message})
        
    }
}


module.exports.getCheckData = async(req, res)=>{

  
   
    try {
        var data = req.body;
        array.push(data);

        
    } catch (error) {
        res.json({msg: message})
        
    }
}

module.exports.Basket = async(req, res)=>{

  
   
    try {
        res.status(200).json(array)

        
    } catch (error) {
        res.json({msg: message})
        
    }
}



module.exports.Errorway = async(req, res)=>{
    
    try {
        res.status(400).json({msg: "Forbidden Access"})
    } catch (error) {
        res.json({msg: message})
        
    }
}