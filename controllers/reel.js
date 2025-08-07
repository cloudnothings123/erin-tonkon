//method for opening main page
module.exports = {
    getReelIndex: async (req,res) => {
            res.render('reel.ejs')
    }
}