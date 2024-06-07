const express = require('express')
const app = express()
const port = 3000
const exphbs = require('express-handlebars')

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')
app.set('views', path.join(__dirname, '../views'));

//static folder
app.use(express.static('public'))

//routes
// const main = require('../routes/main')

app.get('/', (req, res, next) => {
    const data = {
        title: "Pizza House",
        home:{
            description: "Welcome to my Pizza House!. Everything is home made & fresh. We hope you enjoy our food.",
            header:"Eat Fresh <br> & Home-Made Pizza.",
            subtext:"At our Pizza House, we only make food with the freshest ingredients to delight your taste buds.",
            pizzaImage:"images/pizza.jpg"
        },
        about:{
            header: "Welcome to our PizzaHouse.",
            description: "At our PizzaHouse, everything is home-made and we try to have the richest ingredients that we can find. The most fresh and tasty pizza is made here for our customers. Send your orders as early as 2 days so we can make the best food for you.",
            pizzaImage:"images/pizza2.jpg"
        },
        team:{
            subHeader:"Who is Involved?",
            header: "Words of Chef",
            description:"Our goal is to cook the best/tastiest food we can. Food that would bring delight to our customer's taste buds.",
            name:"~ Pizza House"
        }
    }
    var pizza = [
        {
            image:"images/cheese-pizza.jpg",
            name: "Cheese Pizza",
            price:'One 16" for 10$',
        },
        {
            image:"images/chicken-pizza.jpg",
            name: "Chicken Pizza",
            price:'One 16" for 14$',
        },
        {
            image:"images/pepperoni-pizza.jpg",
            name: "Pepperoni Pizza(Beef)",
            price:'One 16" for 14$',
        },
    ]
    var kebabs = [
        {
            image:"images/beef-shami-kebab.jpg",
            name: "Beef Shami Kebab",
            price:'12 pcs for 25$',
        },
        {
            image:"images/seekh-kebab.jfif",
            name: "Beef Seekh Kebab",
            price:'12 pcs for 25$',
        },
        {
            image:"images/chapli-kebab.jpg",
            name: "Beef Chapli Kebab",
            price:'12 pcs for 25$',
        },
    ]
    var samosa = [
        {
            image:"images/samosa.jpg",
            name: "Aloo Samosa",
            price:'12 pcs for 15$',
        },
        {
            image:"images/keema-samosa.jpg",
            name: "Chicken Keema Samosa",
            price:'12 pcs for 20$',
        },
        {
            image:"images/beef-keema-samosa.jpg",
            name: "Beef Keema Samosa",
            price:'12 pcs for 20$',
        },
    ]

    var toppings = ["BellPepper", "Mushroom", "Jalapeno Pepper", "Olives(Green or Black)", "Onion", "Pineapple", "Tomato", "Potato", "Zucchini", "Spinach"]

    var other = [
        {
            name:"Mong Dal Kay Baray.",
            price: "30 for 20$"
        }, 
        {
            name:"Spring-Roll(Veg). ",
            price: "12 for 15$"
        }, 
        {
            name:"Spring-Roll(Chicken&veg). ",
            price: "12 for 20$"
        },
        {
            name:"Chicken Wontons. ",
            price: "24 for 24$"
        }, 
        {
            name:"Crispy Chicken Burger Patties. ",
            price: "12 for $30"
        },
        {
            name:"Chicken Fajita Rolls .",
            price: "12 for 18$"
        },
        {
            name:"Potato & Chicken Cheese Cutlet.",
            price: "12 for 18$"
        },
    ]

    res.render('index', {data, pizza, kebabs, samosa, toppings, other});

})

// app.use('/', main)

module.exports = app;
// app.listen(port, console.log(`Listening on port: ${port}`))