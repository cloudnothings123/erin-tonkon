//method for opening contact page
module.exports = {
    getContactIndex: async (req,res) => {
            res.render('contact.ejs')
    }
}