	
var mongoose = require('mongoose');
require('../models/hotels');
const hotels = mongoose.model('hotels');
mongoose.connect('mongodb://localhost/nyg-dev', { useNewUrlParser: true});

var hotels_list = [
    new hotels({
    name: "The Ritz-Carlton New York Central Park",
    star:"5",
    cost:"1000",
    area:"Central Park, Manhattan",
    description: "The Ritz-Carlton New York, Central Park offers all the elegance and charm of a private home in the heart of New York City. Unwind with striking views over Central Park, or step out the doors to enjoy all the adventures that New York City has to offer.",
    url:"https://ritzcarlton.grandluxuryhotels.com/en/h/155/ritz-carlton-new-york-central-park",
    imagepath: "img/hotels/ritz.jpg"
  }),
  new hotels({
    name: "Novotel New York Times Square",
    star:"5",
    cost:"200",
    area:"Down Town, Manhattan",
    description: "Occupying a modern high-rise in Midtown, this relaxed hotel is a 3-minute walk from the 7th Avenue subway station, a 6-minute walk from Radio City Music Hall and a mile from the Empire State Building. Room service is available.  There's a trendy restaurant and bar with panoramic city views, plus a rooftop terrace overlooking Times Square. Other amenities include a fitness room and a business center, as well as parking",
    url:"https://www.accorhotels.com/gb/hotel-0753-novotel-new-york-times-square/index.shtml",
    imagepath: "img/hotels/novotel.jpg"  
  }),
  new hotels({
    name: "Park Hyatt New York",
    star:"5",
    cost:"750",
    area:"Central Park, Manhattan",
    description: "Excellent business hotel. Close to Columbus Circle. Good for sightseeing and close to the city center. Great pool. Great room. Awesome vibe.",
    url:"https://parkhyatt.grandluxuryhotels.com/en/h/473/park-hyatt-new-york",
    imagepath: "img/hotels/hyatt.jpg"   
  }),
  new hotels({
    name: "Casablanca Hotel by Library Hotel Collection",
    star:"4",
    cost:"450",
    area:"Times square, Manhattan",
    description: "Free high-speed wireless Internet Complimentary continental breakfast 24/7 Complimentary refreshments in our clubroom Complimentary evening wine & cheese reception Free bottled water, turndown service Free health club passes and more!",
    url:"https://casablancahotel.com/",
    imagepath: "img/hotels/casablanca.jpg"  
  })

];

var a = 0;
for(var i=0; i < hotels_list.length; i++) {
    hotels_list[i].save(function(err, n){
    a++;
    if(err){
        console.log(err);
    }
    if(a === hotels_list.length) {
      exit();
    }
  });

}


function exit() {
  mongoose.disconnect();
}

