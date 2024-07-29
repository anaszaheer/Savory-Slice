const express = require('express');
const router = express.Router()
const bodyParser = require('body-parser');
var nodemailer = require('nodemailer');

router.use(bodyParser.json())
router.use(bodyParser.urlencoded({ extended: true }));

router.get('/', (req, res, next) => {
    const data = {
        title: "Savory Slice",
        home:{
            description: "Welcome to Savory Slice!. Everything is home made & fresh. We hope you enjoy our food.",
            header:"Eat Fresh <br> & Home-Made Pizza.",
            subtext:"At Savory Slice, we only make food with the freshest ingredients to delight your taste buds.",
            pizzaImage:"images/pizza.jpg"
        },
        about:{
            header: "Welcome to our PizzaHouse.",
            description: "At our PizzaHouse, everything is home-made and we try to have the richest ingredients that we can find. The most fresh and tasty pizza is made here for our customers. Send your orders as early as 2 days so we can make the best food for you.",
            pizzaImage:"images/pizza1.jpg"
        },
        team:{
            subHeader:"Who is Involved?",
            header: "Words of Chef",
            description:"Our goal is to cook the best/tastiest food we can. Food that would bring delight to our customer's taste buds.",
            name:"~ Savory Slice"
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

router.post('/order', (req,res,next)=>{
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'anaszteen@gmail.com',
          pass: 'siopnsfsihelziqn'
        }
      });
      
      var mailOptions = {
        to: 'anaszteen@gmail.com',
        subject: "New Order",
        text: "Customer Name: "+req.body.customerName+", Phone #: "+req.body.customerPhone+", Order Details: "+req.body.customerOrder
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
      res.redirect('/')
})


router.get('/blog', (req, res, next) => {
    const data = {
        title: "Pizza House",
        home:{
            description: "Welcome to my Pizza House!. Everything is home made & fresh. We hope you enjoy our food.",
        }
    }
    res.render('blog', data);
})

module.exports = router