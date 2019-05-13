var Restaurant = require('../models/Restaurant.js');

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/nyg-dev', { useNewUrlParser: true});

var restaurant = [
    new Restaurant({
    imagepath: "/img/restaurant/img1.jpg",
    restaurantURL: "https://www.cousinsmainelobster.com/restaurant/manhattan-ny/",
    title: "Cousins Maine Lobster",
    likes: 0,
    description: "The first NYC brick and mortar shop to spawn from a beloved LA food truck, Cousins Maine Lobster just opened with a major investment from Barbara Corcoran (its founders appeared on Shark Tank).", 
  }),

  new Restaurant({
    imagepath: "/img/restaurant/img2.jpg",
    restaurantURL: "https://www.cotenyc.com/",
    title: "Undercote",
    likes: 0,
    description: "This long-awaited speakeasy-styled spot sits beneath sceney Michelin-starred Korean steak house, Cote (hence, Undercote), where cocktails are already a serious draw.The space has a very specific aesthetic",
    
  }),

  new Restaurant({
    imagepath: "/img/restaurant/img3.jpg",
    restaurantURL: "http://www.zauo.com/en/",
    title: "ZAUO",
    likes: 0,
    description: "At Zauo, you will fish for your own seafood. This might seem impractical at a landlocked venue in Manhattan, but the chain, which already operates several locations Japan, is no marketing gimmick.",
    
  }),

  new Restaurant({
    imagepath: "/img/restaurant/img4.jpg",
    restaurantURL: "http://www.fournos.com/index.php/en/",
    title: "Fournos Theophilos",
    likes: 0,
    description: "Named for a Greek painter, this dual-level Mediterranean restaurant and market is one part fast-casual joint, and one part dining room. On the first floor, Greek chefs sling sandwiches, salads, and Greek pies.",
    
  }),

  new Restaurant({
    imagepath: "/img/restaurant/img5.jpg",
    restaurantURL: "https://frankiegoestobollywood.com/",
    title: "Frankie Goes to Bollywood",
    likes: 0,
    description: "I regret to inform you that, like with most new venues, this quirky Indian street food joint qualifies as fast-casual. Still, Frankie Goes to Bollywood has personality, with a distinct ‘80s vibe and a menu rife with alliteration.",
    
  }),

  new Restaurant({
    imagepath: "/img/restaurant/img6.jpg",
    restaurantURL: "https://gobigeyesushi.com/",
    title: "Bigeye Sushi",
    likes: 0,
    description: "Tucked into the commuter hub at 2 Metrotech Center, Bigeye is the future of sushi production: Some of the spot’s sushi will be rolled delicately by human hands, while the other will come from futuristic sushi robots.",
    
  }),

  new Restaurant({
    imagepath: "/img/restaurant/img7.jpg",
    restaurantURL: "https://www.missionchinesefood.com",
    title: "Mission Chinese Brooklyn",
    likes: 0,
    description: "This outpost of the buzzy Chinatown joint curiously shares a space with popular Bushwick nightclub Elsewhere. The Danny Bowien venture feels almost as sceney as the adjacent music hall.",
    
  }),
  new Restaurant({
    imagepath: "/img/restaurant/img8.jpg",
    restaurantURL: "https://www.oxomoconyc.com/",
    title: "Oxomoco",
    likes: 0,
    description: "The chef behind Speedy Romeo (Brooklyn’s St. Louis-style pizza purveyor) has taken on another part of the world at Oxomoco -- a Mexican joint cooking up Oaxacan bites in a wood-fired oven.",
    
  }),
  new Restaurant({
    imagepath: "/img/restaurant/img9.jpg",
    restaurantURL: "https://www.sansbk.com/",
    title: "Sans",
    likes: 0,
    description: "Sans isn’t the first venue churning out vegan plates for non-vegans, but Chef Champ Jones, who cut his teeth at Eleven Madison Park, is hoping this will be the best one.A five-course tasting menu is also on deck.",
    
  }),

  new Restaurant({
    imagepath: "/img/restaurant/img10.jpg",
    restaurantURL: "http://www.thefinchnyc.com/",
    title: "The Finch",
    likes: 0,
    description: "Helmed by chef Gabe McMackin of Blue Hill and Gramercy Tavern. The Finch earned its star in just 10 months. The cozy brunch and dinner spot is hidden in plain residential block in Clinton Hill.",
    
  }),

  new Restaurant({
    imagepath: "/img/restaurant/img11.jpg",
    restaurantURL: "http://www.lavarany.com/",
    title: "La Vara",
    likes: 0,
    description: "Like so many buzzy dinner joints in South Brooklyn, La Vara is a storefront wedged between walkups on a tree-lined street, with a tin ceiling and exposed brick inside. The food is less expected.",
    
  }),

  new Restaurant({
    imagepath: "/img/restaurant/img12.jpg",
    restaurantURL: "http://www.evelinabk.com/",
    title: "Evelina",
    likes: 0,
    description: "Over the years, Fort Greene has become a dining destination, and Evelina is among the area’s culinary points. Chef Lanfranco re-writes specials daily depending on the morning’s market produce.",
    
  })





];

var a = 0;
for(var i=0; i < restaurant.length; i++) {
    restaurant[i].save(function(err, n){
    a++;
    if(err){
        console.log(err);
    }
    if(a === restaurant.length) {
      exit();
    }
  });

}


function exit() {
  mongoose.disconnect();
}
