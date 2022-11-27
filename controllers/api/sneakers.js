const Sneaker = require('../../models/sneaker')

async function create (req, res, next){
    try{
        console.log(req.body)
        const sneaker = await Sneaker.create(req.body);
        await sneaker.save()
        res.json( { sneaker } )
    }catch(err){
        res.status(400).json(err);
    }
}

async function index(req,res){
    try{
        const sneakers = await Sneaker.find({});
        console.log(sneakers)
        res.json(sneakers)
    }catch{
        res.status(400).json(err);
    }
}

module.exports = {
    create,
    index,
}