const Sneaker = require('../../models/sneaker')

async function create (req, res, next){
    try{
        const sneaker = new Sneaker(req.body)
        sneaker.image = req.file.location
        await sneaker.save()
        res.json( { sneaker } )
    }catch(err){
        res.status(400).json(err);
    }
}

async function index(req,res){
    try{
        const sneakers = await Sneaker.find({});
        res.json(sneakers)
    }catch{
        res.status(400).json(err);
    }
}

async function show(req,res){
    try {
        const sneaker = await Sneaker.find({'name':req.params.sneakerName})
        res.json(sneaker)
    }catch{
        res.status(400).json(err);
    }
}

async function deleteSneaker(req,res){
    try {
        await Sneaker.findOneAndDelete({'name':req.params.sneakerName})
        res.json()
    }catch{
        res.status(400).json(err)
    }
}

async function edit(req,res){
    try {
        const updateSneaker = await Sneaker.updateOne(
            {'name':req.params.sneakerName},
             req.body
             )
        res.json(updateSneaker)
    }catch(err){
        res.status(400).json(err);
    }
}

async function addVariant(req,res){
    try {
        const sneaker = await Sneaker.findOneAndUpdate(
            {'name':req.params.sneakerName},
            {"$push":{variant:req.body}}
            )
        sneaker.save()
        res.json(sneaker)
    }catch(err){
        res.status(400).json(err)
    }
}

module.exports = {
    create,
    index,
    show,
    delete:deleteSneaker,
    edit,
    add:addVariant,
}