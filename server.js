//connect to express
const express = require('express')
const app = express()
//let flash errors exist
const flash = require('express-flash')
//log every action into the terminal
const logger = require('morgan')
//setting location of routers
const mainRoutes = require('./routes/main')
const contactRoutes = require('./routes/contact')
//recognizing dotenv file
require('dotenv').config({path: './config/.env'})
//setting ejs as the view format
app.set('view engine', 'ejs')
//setting a folder for easy access
app.use(express.static('public'))
//just doing something
app.use(express.urlencoded({ extended: true }))
//telling which route to use when home page is requested
app.use('/', mainRoutes)
app.use('/contact', contactRoutes)
//connecting to port
app.listen(process.env.PORT, () => console.log('Server running'))