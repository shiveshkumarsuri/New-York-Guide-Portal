const Cafe = require('../models/Cafe.js');

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/nyg-dev', { useNewUrlParser: true});

var cafe = [
    new Cafe({
    imagepath: "/img/cafe/abbotsford-road.jpg",
    cafeURL: "http://www.cultureespresso.com/",
    title: "Culture Espresso",
    description: "A solid cortado and drip coffee anchor the menu of this stylish coffee bar near Bryant Park. It’s a much stronger choice for coffee than the several chain stores closer to the park, and as a bonus it serves a superb chocolate chip cookie.", 
  }),

  new Cafe({
    imagepath: "/img/cafe/birch-coffee.jpg",
    cafeURL: "http://birchcoffee.com/",
    title: "Birch Coffee",
    description: "This cafe has high energy, yet a relaxed vibe with accompanying music. Birch usually has a formidable line of young people from the office spaces nearby, despite prices that are typically 25 cents higher across the board than elsewhere.", 
  }),

  new Cafe({
    imagepath: "/img/cafe/black-fox.jpg",
    cafeURL: "https://www.stumptowncoffee.com/",
    title: "Stumptown Coffee Roasters",
    description: "The Ace Hotel staff keeps the ever present line moving at a good clip. The cappuccino is especially stellar: perfect milk to espresso ratio, and milk temperature. It's ground zero for nitro.", 
  }),

  new Cafe({
    imagepath: "/img/cafe/coffee-project.jpg",
    cafeURL: "https://www.padocabakery.com/",
    title: "Padoca",
    description: "Billing itself as a “creative bakery,” this shop can feel a little too much like a Panera bakery, with Oasis playing on the speakers and a too-corporate vibe.", 
  }),

  new Cafe({
    imagepath: "/img/cafe/box-lite.jpg",
    cafeURL: "http://boxkitenyc.com/",
    title: "Box Kite",
    description: "The digs at the UWS location of Box Kite are small, but the team here is big on serving some of the best coffee to the neighborhood. Arrive during off-peak times since it's tough to land a seat. but all is forgiven with an espresso dispensed from the stylish Modbar sheer aluminum fittings.", 
  }),

  new Cafe({
    imagepath: "/img/cafe/culture-espresso.jpg",
    cafeURL: "http://www.littlecollinsnyc.com/",
    title: "Little Collins",
    description: "The Aussies running this Midtown shop have provided a getaway for a neighborhoodotherwise filled with Starbucks and Le Pains. Alongside flat whites and pour overs the shop serves sandwiches salads, and a behemoth of toasted banana bread.", 
  }),

  new Cafe({
    imagepath: "/img/cafe/daily-press.jpg",
    cafeURL: "https://www.drinkpatent.com/",
    title: "Patent Coffee",
    description: "This standing room-only shop in Nomad’s Made Hotel has something for everyone, from nitro cold brew and matcha to cookies and croissants. The single origin beans regularly rotate.", 
  }),

  new Cafe({
    imagepath: "/img/cafe/hi-collor.jpg",
    cafeURL: "http://www.sweetleaflic.com/",
    title: "Sweetleaf",
    description: "This is the original location for this growing coffee chain. Besides the standard lineup of high quality espresso drinks, there are two special iced coffee drinks here, both a far cry.", 
  }),

  new Cafe({
    imagepath: "/img/cafe/hrc.png",
    cafeURL: "http://www.cultureespresso.com/",
    title: "Toby's Estate Coffee",
    description: "This West Village location is the third addition to the Toby's Estate family in NYC and also the most comprehensive. The large space is outfitted with all sorts of brewing devices, and the menu includes a range of single-origin coffees. ", 
  }),

  new Cafe({
    imagepath: "/img/cafe/little-collins.jpg",
    cafeURL: "http://www.theelknyc.com/",
    title: "The ELK",
    description: "Look for a Vancouver vibe from Canadian native Claire Chan, who has opened a destination for a fine cortado and single-origin pour-over. The general store-slash-coffee shop also has light menu with bruleed grapefruit and baked egg toast.", 
  }),

  new Cafe({
    imagepath: "/img/cafe/seven-points.jpg",
    cafeURL: "http://www.thirdrailcoffee.com/",
    title: "Third Rail Coffee",
    description: "A small and rustic-chic venue that's packed into the evening with NYU students, this is a go-to spot for a coffee before a movie at the IFC Center.Also, Rail serves Vegemite. The Best one in town, you can have.", 
  }),

  new Cafe({
    imagepath: "/img/cafe/sweatshop.jpg",
    cafeURL: "https://www.hi-collar.com/",
    title: "Hi-Collar",
    description: "The ability to 'choose your bean' among several on the menu as well as an array of different brewing methods makes the experience here as much of a draw as the coffee.",
    
  })

];

var a = 0;
for(var i=0; i < cafe.length; i++) {
    cafe[i].save(function(err, n){
    a++;
    if(err){
        console.log(err);
    }
    if(a === cafe.length) {
      exit();
    }
  });

}

function exit() {
  mongoose.disconnect();
}
