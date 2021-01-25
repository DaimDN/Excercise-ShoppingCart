const message = "500 - Internal Server Error"
const api = require('../../api/products/index.json');
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

module.exports.Errorway = async(req, res)=>{
    
    try {
        res.status(400).json({msg: "Forbidden Access"})
    } catch (error) {
        res.json({msg: message})
        
    }
}