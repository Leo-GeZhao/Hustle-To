const Banner = require('../../models/banner')
const ObjectId = require('mongodb').ObjectId

async function create(req,res){
    try{
        const newBanner = new Banner(req.body)
        newBanner.image = req.file.location
        newBanner.name= req.body.name
        newBanner.save()
        res.json(newBanner)
    }catch{
        res.status(400).json(err)
    }
}

async function index(req,res){
    try{
        const banners = await Banner.find({});
        res.json(banners)
    }catch{
        res.status(400).json(err);
    }
}

async function deleteBanner(req,res){
        console.log(req.params)
        await Banner.deleteOne({_id:ObjectId(req.params.id)})
        // await Banner.deleteMany({})
        res.json()
}

module.exports = {
    create,
    index,
    delete:deleteBanner
}