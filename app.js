const express = require('express');
const path = require('path');
const firebase = require('firebase');
const app = express();
const alert = require('alert-node');
const bodyParser = require('body-parser');
//const firebase = require("../models/connect")
const index = require('./routes/index');
const about = require('./routes/about');
const contactus = require('./routes/ContactUs');
const Features = require('./routes/Features');
const signup = require('./routes/signup');
const products = require('./routes/products');
const error404 = require('./routes/404error');

app.use(express.static(path.join(__dirname, 'assets')))
app.use(express.static(path.join(__dirname)))
app.set('view engine', 'ejs')
app.set('views', 'views')
app.use(bodyParser.urlencoded({ extended: false }));
/*
app.use(index);
app.use(about);
app.use(products);
app.use(signup);
app.use(Features);
app.use(contactus);
app.use(error404);
*/




gamesLsit = [{
        id: 1,
        name: "Dark",
        smalldis: "any discription",
        dis: "is a first-person shooter video game franchise published by Activision. Starting out in 2003, it first focused on games set in World War II, but over time, the series has seen games set in modern times, the midst of the Cold War, futuristic worlds, and outer space. The games were first developed by Infinity Ward, then also by Treyarch and Sledgehammer Games. Several spin-off and handheld games were made by other developers. The most recent title, Call of Duty: Modern Warfare, was released on October 25, 2019. The series originally focused on the World War II setting, with Infinity Ward developing the first (2003) and second (2005) titles in the series and Treyarch developing the third (2006). Call of Duty 4: Modern Warfare (2007) introduced a new, modern setting, and proved to be the breakthrough title for the series, creating the Modern Warfare sub-series. The game's legacy also influenced the creation of a remastered version, released in 2016. Two other entries, Modern Warfare 2 (2009) and 3 (2011), were made. The sub-series received a soft-reboot with Modern Warfare in 2019. Infinity Ward have also developed two games outside of the Modern Warfare sub-series, Ghosts (2013) and Infinite Warfare (2016). Treyarch made one last World War II-based game, World at War (2008)",
        price: 50.0,
        type: "pc",
        imagePath:"../assets/img/dark.jpg"


    },
    {
        id: 2,
        name: "Call Of Duty",
        smalldis: "any discription",
        dis: "is a first-person shooter video game franchise published by Activision. Starting out in 2003, it first focused on games set in World War II, but over time, the series has seen games set in modern times, the midst of the Cold War, futuristic worlds, and outer space. The games were first developed by Infinity Ward, then also by Treyarch and Sledgehammer Games. Several spin-off and handheld games were made by other developers. The most recent title, Call of Duty: Modern Warfare, was released on October 25, 2019. The series originally focused on the World War II setting, with Infinity Ward developing the first (2003) and second (2005) titles in the series and Treyarch developing the third (2006). Call of Duty 4: Modern Warfare (2007) introduced a new, modern setting, and proved to be the breakthrough title for the series, creating the Modern Warfare sub-series. The game's legacy also influenced the creation of a remastered version, released in 2016. Two other entries, Modern Warfare 2 (2009) and 3 (2011), were made. The sub-series received a soft-reboot with Modern Warfare in 2019. Infinity Ward have also developed two games outside of the Modern Warfare sub-series, Ghosts (2013) and Infinite Warfare (2016). Treyarch made one last World War II-based game, World at War (2008)",
        price: 11.24,
        type: "pc",
        imagePath:"../assets/img/call of duty.jpg"
    
    },
    {
        id: 3,
        name: "Super Mario",
        smalldis: "any discription",
        dis: "is a first-person shooter video game franchise published by Activision. Starting out in 2003, it first focused on games set in World War II, but over time, the series has seen games set in modern times, the midst of the Cold War, futuristic worlds, and outer space. The games were first developed by Infinity Ward, then also by Treyarch and Sledgehammer Games. Several spin-off and handheld games were made by other developers. The most recent title, Call of Duty: Modern Warfare, was released on October 25, 2019. The series originally focused on the World War II setting, with Infinity Ward developing the first (2003) and second (2005) titles in the series and Treyarch developing the third (2006). Call of Duty 4: Modern Warfare (2007) introduced a new, modern setting, and proved to be the breakthrough title for the series, creating the Modern Warfare sub-series. The game's legacy also influenced the creation of a remastered version, released in 2016. Two other entries, Modern Warfare 2 (2009) and 3 (2011), were made. The sub-series received a soft-reboot with Modern Warfare in 2019. Infinity Ward have also developed two games outside of the Modern Warfare sub-series, Ghosts (2013) and Infinite Warfare (2016). Treyarch made one last World War II-based game, World at War (2008)",
        price: 22.42,
        type: "ps",
        imagePath:"../assets/img/mario.jpg"

    },
    {
        id: 4,
        name: "Forza",
        smalldis: "any discription",
        dis: "is a first-person shooter video game franchise published by Activision. Starting out in 2003, it first focused on games set in World War II, but over time, the series has seen games set in modern times, the midst of the Cold War, futuristic worlds, and outer space. The games were first developed by Infinity Ward, then also by Treyarch and Sledgehammer Games. Several spin-off and handheld games were made by other developers. The most recent title, Call of Duty: Modern Warfare, was released on October 25, 2019. The series originally focused on the World War II setting, with Infinity Ward developing the first (2003) and second (2005) titles in the series and Treyarch developing the third (2006). Call of Duty 4: Modern Warfare (2007) introduced a new, modern setting, and proved to be the breakthrough title for the series, creating the Modern Warfare sub-series. The game's legacy also influenced the creation of a remastered version, released in 2016. Two other entries, Modern Warfare 2 (2009) and 3 (2011), were made. The sub-series received a soft-reboot with Modern Warfare in 2019. Infinity Ward have also developed two games outside of the Modern Warfare sub-series, Ghosts (2013) and Infinite Warfare (2016). Treyarch made one last World War II-based game, World at War (2008)",
        price: 11.24,
        type: "xbox",
        imagePath:"../assets/img/RE3N0MZ.jpg"

    },
    {
        id: 5,
        name: "Minecraft",
        smalldis: "any discription",
        dis: "is a first-person shooter video game franchise published by Activision. Starting out in 2003, it first focused on games set in World War II, but over time, the series has seen games set in modern times, the midst of the Cold War, futuristic worlds, and outer space. The games were first developed by Infinity Ward, then also by Treyarch and Sledgehammer Games. Several spin-off and handheld games were made by other developers. The most recent title, Call of Duty: Modern Warfare, was released on October 25, 2019. The series originally focused on the World War II setting, with Infinity Ward developing the first (2003) and second (2005) titles in the series and Treyarch developing the third (2006). Call of Duty 4: Modern Warfare (2007) introduced a new, modern setting, and proved to be the breakthrough title for the series, creating the Modern Warfare sub-series. The game's legacy also influenced the creation of a remastered version, released in 2016. Two other entries, Modern Warfare 2 (2009) and 3 (2011), were made. The sub-series received a soft-reboot with Modern Warfare in 2019. Infinity Ward have also developed two games outside of the Modern Warfare sub-series, Ghosts (2013) and Infinite Warfare (2016). Treyarch made one last World War II-based game, World at War (2008)",
        price: 5.99,
        type: "xbox",
        imagePath:"../assets/img/minecraft.png"

    },
    {
        id: 6,
        name: "The Hunters",
        smalldis: "any discription",
        dis: "is a first-person shooter video game franchise published by Activision. Starting out in 2003, it first focused on games set in World War II, but over time, the series has seen games set in modern times, the midst of the Cold War, futuristic worlds, and outer space. The games were first developed by Infinity Ward, then also by Treyarch and Sledgehammer Games. Several spin-off and handheld games were made by other developers. The most recent title, Call of Duty: Modern Warfare, was released on October 25, 2019. The series originally focused on the World War II setting, with Infinity Ward developing the first (2003) and second (2005) titles in the series and Treyarch developing the third (2006). Call of Duty 4: Modern Warfare (2007) introduced a new, modern setting, and proved to be the breakthrough title for the series, creating the Modern Warfare sub-series. The game's legacy also influenced the creation of a remastered version, released in 2016. Two other entries, Modern Warfare 2 (2009) and 3 (2011), were made. The sub-series received a soft-reboot with Modern Warfare in 2019. Infinity Ward have also developed two games outside of the Modern Warfare sub-series, Ghosts (2013) and Infinite Warfare (2016). Treyarch made one last World War II-based game, World at War (2008)",
        price: 11.24,
        type: "xbox",
        imagePath:"../assets/img/page-title-bg.jpg"

    },
    {
        id:7,
        name:"Tomb Raider",
        smalldis: "any discription",
        dis: "is a first-person shooter video game franchise published by Activision. Starting out in 2003, it first focused on games set in World War II, but over time, the series has seen games set in modern times, the midst of the Cold War, futuristic worlds, and outer space. The games were first developed by Infinity Ward, then also by Treyarch and Sledgehammer Games. Several spin-off and handheld games were made by other developers. The most recent title, Call of Duty: Modern Warfare, was released on October 25, 2019. The series originally focused on the World War II setting, with Infinity Ward developing the first (2003) and second (2005) titles in the series and Treyarch developing the third (2006). Call of Duty 4: Modern Warfare (2007) introduced a new, modern setting, and proved to be the breakthrough title for the series, creating the Modern Warfare sub-series. The game's legacy also influenced the creation of a remastered version, released in 2016. Two other entries, Modern Warfare 2 (2009) and 3 (2011), were made. The sub-series received a soft-reboot with Modern Warfare in 2019. Infinity Ward have also developed two games outside of the Modern Warfare sub-series, Ghosts (2013) and Infinite Warfare (2016). Treyarch made one last World War II-based game, World at War (2008)",
        price: 24.04,
        type: "xbox",
        imagePath:"https://images-na.ssl-images-amazon.com/images/I/71m6%2BLvKhmL.AC_SL1024_.jpg"
    },
    {
        id:8,
        name:"Mega-City One ",
        smalldis: "any discription",
        dis: "is a first-person shooter video game franchise published by Activision. Starting out in 2003, it first focused on games set in World War II, but over time, the series has seen games set in modern times, the midst of the Cold War, futuristic worlds, and outer space. The games were first developed by Infinity Ward, then also by Treyarch and Sledgehammer Games. Several spin-off and handheld games were made by other developers. The most recent title, Call of Duty: Modern Warfare, was released on October 25, 2019. The series originally focused on the World War II setting, with Infinity Ward developing the first (2003) and second (2005) titles in the series and Treyarch developing the third (2006). Call of Duty 4: Modern Warfare (2007) introduced a new, modern setting, and proved to be the breakthrough title for the series, creating the Modern Warfare sub-series. The game's legacy also influenced the creation of a remastered version, released in 2016. Two other entries, Modern Warfare 2 (2009) and 3 (2011), were made. The sub-series received a soft-reboot with Modern Warfare in 2019. Infinity Ward have also developed two games outside of the Modern Warfare sub-series, Ghosts (2013) and Infinite Warfare (2016). Treyarch made one last World War II-based game, World at War (2008)",
        price: 24.04,
        type: "ps",
        imagePath:"https://pbs.twimg.com/profile_images/862340024347619328/aUWeenGB_400x400.jpg"
    },
    {
        id:9,
        name:"FIFA 20 ",
        smalldis: "any discription",
        dis: "is a first-person shooter video game franchise published by Activision. Starting out in 2003, it first focused on games set in World War II, but over time, the series has seen games set in modern times, the midst of the Cold War, futuristic worlds, and outer space. The games were first developed by Infinity Ward, then also by Treyarch and Sledgehammer Games. Several spin-off and handheld games were made by other developers. The most recent title, Call of Duty: Modern Warfare, was released on October 25, 2019. The series originally focused on the World War II setting, with Infinity Ward developing the first (2003) and second (2005) titles in the series and Treyarch developing the third (2006). Call of Duty 4: Modern Warfare (2007) introduced a new, modern setting, and proved to be the breakthrough title for the series, creating the Modern Warfare sub-series. The game's legacy also influenced the creation of a remastered version, released in 2016. Two other entries, Modern Warfare 2 (2009) and 3 (2011), were made. The sub-series received a soft-reboot with Modern Warfare in 2019. Infinity Ward have also developed two games outside of the Modern Warfare sub-series, Ghosts (2013) and Infinite Warfare (2016). Treyarch made one last World War II-based game, World at War (2008)",
        price: 60.54,
        type: "ps",
        imagePath:"https://i.redd.it/t3cbgcc9smw21.jpg"
    },
    {
        id:10,
        name:"Watch Dogs",
        smalldis: "any discription",
        dis: "is a first-person shooter video game franchise published by Activision. Starting out in 2003, it first focused on games set in World War II, but over time, the series has seen games set in modern times, the midst of the Cold War, futuristic worlds, and outer space. The games were first developed by Infinity Ward, then also by Treyarch and Sledgehammer Games. Several spin-off and handheld games were made by other developers. The most recent title, Call of Duty: Modern Warfare, was released on October 25, 2019. The series originally focused on the World War II setting, with Infinity Ward developing the first (2003) and second (2005) titles in the series and Treyarch developing the third (2006). Call of Duty 4: Modern Warfare (2007) introduced a new, modern setting, and proved to be the breakthrough title for the series, creating the Modern Warfare sub-series. The game's legacy also influenced the creation of a remastered version, released in 2016. Two other entries, Modern Warfare 2 (2009) and 3 (2011), were made. The sub-series received a soft-reboot with Modern Warfare in 2019. Infinity Ward have also developed two games outside of the Modern Warfare sub-series, Ghosts (2013) and Infinite Warfare (2016). Treyarch made one last World War II-based game, World at War (2008)",
        price: 60.54,
        type: "ps",
        imagePath:"https://i.pinimg.com/originals/0e/40/06/0e4006efbb7209834450c109063c8ab8.jpg"
    }

]


app.get('/signup', (req, res, next) => {
    res.render('signup')
});
app.get('/signin', (req, res, next) => {
    res.render('signup')
});

app.post('/signup', (req, res, next) => {
    var email = req.body.signupemail;
    var password = req.body.signuppassword;
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .catch(function(error) {


            var errorCode = error.code;
            var errorMessage = error.message;
            if (errorCode == 'auth/weak-password') {
                console.log('The password is too weak.');
            } else {

                console.log(errorMessage);


            }
            console.log(error);


        });
    res.redirect('/signin');
});

app.post('/signin', (req, res, next) => {

    var loginemail = req.body.loginemail;
    var loginpassword = req.body.loginpassword;
    const auth = firebase.auth();
    const promise = auth.signInWithEmailAndPassword(loginemail, loginpassword)

    promise.catch(e => {
        alert(e.message);
        res.redirect('/signin')
    })
    firebase.auth().onAuthStateChanged(firebaseUser => {
        if (firebaseUser) {
            res.redirect('/')
        }
    })
});


function getGames(str) {
    let games = []
    for (var i = 0; i < gamesLsit.length; i++) {
        if (str == (gamesLsit[i].type).toLowerCase() || str == (gamesLsit[i].name).toLowerCase())
            games.push(gamesLsit[i])
    }
    return games;
}
/*

//app.use(games);





app.get("/games/:type", (req, res, next) => {
    let type = req.params.type;

    res.render('games', { games: getGames(type) })
})



app.get("/game/:id", (req, res, next) => {
    let id = req.params.id
    let product;
    for (var i = 0; i < gamesLsit.length; i++) {
        if (gamesLsit[i].id == id) {
            product = gamesLsit[i]
            break;
        }
    }
    res.render("products", { product: product })
})

app.post("/addAccount", urlEncode, (req, res, next) => {
    response = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    }
    console.log(response)
})
app.get("/search", (req, res, next) => {

    let type = req.query['search']

    res.redirect("/games/" + (type.toLowerCase()))

})
*/
app.get('/', (req, res, next) => {
    res.render('index')
})
app.get('/Features', (req, res, next) => {
    res.render('Features')
})
app.get('/ContactUs', (req, res, next) => {
    res.render('ContactUs')
})
app.get('/about', (req, res, next) => {
    res.render('about')
})
app.get('/games', (req, res, next) => {
    console.log("ennn")
    res.render('games', {games:gamesLsit})
})

app.get("/games/:type" , (req, res, next)=> {
    let type  = req.params.type;
   
    res.render('games', {games:getGames(type)})
})

app.get("/game/:id" , (req,res,next)=>{
    let id = req.params.id
    let product ;
    for(var i =0; i <gamesLsit.length;i++){
        if(gamesLsit[i].id == id){
            product = gamesLsit[i]
            break;
        }
    }
    res.render("products" ,{product:product})
})

app.get("/search", (req, res, next) => {

    let type = req.query['search']

    res.redirect("/games/" + (type.toLowerCase()))

})


app.listen(3000, (err) => {
    console.log(err)
    console.log('server listen on port 3000')

})