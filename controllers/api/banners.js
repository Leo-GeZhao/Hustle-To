const Banner = require('../../models/banner')

function create(req,res){
    // const name = req.body.name
    // const image = req.file.location
    // const newBanner = new Banner(req.body)
    // newBanner.image = image
    // newBanner.name=name
    // newBanner.save()
    // console.log(newBanner)
    // res.json(newBanner)
    console.log(req.body)
    res.json(req.body)
}

module.exports = {
    create
}