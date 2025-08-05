//method for opening main page
module.exports = {
    getMainIndex: async (req,res) => {
            res.render('main.ejs')
    }
}