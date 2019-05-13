var Shopping = require('../models/Shopping.js');

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/nyg-dev', { useNewUrlParser: true});

var shopping = [
    new Shopping({
    imagepath: "img/shopping/shopping_1.jpg",
    imagelink: "http://www.northsails.com/",
    title: "North Sails",
    description: "(8 GB/256 GB SSD/Windows 10 Home) 9370 Thin and Light Laptop  (13 inch, Silver, 1.21 kg, With MS Office) Get more productive with the Dell XPS 13 laptop. Featuring a Windows 10 Home operating system, an 8th Gen Intel Core i5 processor, and 8 GB of DDR3 RAM, this laptop offers a seamless computing experience even when you’re multitasking.",
    
  }),

  new Shopping({
    imagepath: "img/shopping/shopping_2.jpg",
    imagelink: "https://unitedbyblue.com/",
    title: "United By Blue",
    description: "(8 GB/256 GB SSD/Windows 10 Home) 9370 Thin and Light Laptop  (13 inch, Silver, 1.21 kg, With MS Office) Get more productive with the Dell XPS 13 laptop. Featuring a Windows 10 Home operating system, an 8th Gen Intel Core i5 processor, and 8 GB of DDR3 RAM, this laptop offers a seamless computing experience even when you’re multitasking.",
    
  }),

  new Shopping({
    imagepath: "img/shopping/shopping_3.jpg",
    imagelink: "https://www.uniqlo.com/us/en/home/",
    title: "Uniqlo",
    description: "(8 GB/256 GB SSD/Windows 10 Home) 9370 Thin and Light Laptop  (13 inch, Silver, 1.21 kg, With MS Office) Get more productive with the Dell XPS 13 laptop. Featuring a Windows 10 Home operating system, an 8th Gen Intel Core i5 processor, and 8 GB of DDR3 RAM, this laptop offers a seamless computing experience even when you’re multitasking.",
    
  }),

  new Shopping({
    imagepath: "img/shopping/shopping_4.jpg",
    imagelink: "https://davesnewyork.com/",
    title: "Dave's New York",
    description: "(8 GB/256 GB SSD/Windows 10 Home) 9370 Thin and Light Laptop  (13 inch, Silver, 1.21 kg, With MS Office) Get more productive with the Dell XPS 13 laptop. Featuring a Windows 10 Home operating system, an 8th Gen Intel Core i5 processor, and 8 GB of DDR3 RAM, this laptop offers a seamless computing experience even when you’re multitasking.",
    
  }),

  new Shopping({
    imagepath: "img/shopping/shopping_5.jpg",
    imagelink: "https://www.zara.com/us/",
    title: "Zara",
    description: "(8 GB/256 GB SSD/Windows 10 Home) 9370 Thin and Light Laptop  (13 inch, Silver, 1.21 kg, With MS Office) Get more productive with the Dell XPS 13 laptop. Featuring a Windows 10 Home operating system, an 8th Gen Intel Core i5 processor, and 8 GB of DDR3 RAM, this laptop offers a seamless computing experience even when you’re multitasking.",
    
  }),

  new Shopping({
    imagepath: "img/shopping/shopping_6.jpg",
    imagelink: "https://www.rei.com/",
    title: "REI",
    description: "(8 GB/256 GB SSD/Windows 10 Home) 9370 Thin and Light Laptop  (13 inch, Silver, 1.21 kg, With MS Office) Get more productive with the Dell XPS 13 laptop. Featuring a Windows 10 Home operating system, an 8th Gen Intel Core i5 processor, and 8 GB of DDR3 RAM, this laptop offers a seamless computing experience even when you’re multitasking.",
    
  }),

  new Shopping({
    imagepath: "img/shopping/shopping_7.jpg",
    imagelink: "http://us.topshop.com/",
    title: "Top Shop",
    description: "(8 GB/256 GB SSD/Windows 10 Home) 9370 Thin and Light Laptop  (13 inch, Silver, 1.21 kg, With MS Office) Get more productive with the Dell XPS 13 laptop. Featuring a Windows 10 Home operating system, an 8th Gen Intel Core i5 processor, and 8 GB of DDR3 RAM, this laptop offers a seamless computing experience even when you’re multitasking.",
    
  }),

  new Shopping({
    imagepath: "img/shopping/shopping_8.jpg",
    imagelink: "https://trade-mark.com/",
    title: "Trade Mark",
    description: "(8 GB/256 GB SSD/Windows 10 Home) 9370 Thin and Light Laptop  (13 inch, Silver, 1.21 kg, With MS Office) Get more productive with the Dell XPS 13 laptop. Featuring a Windows 10 Home operating system, an 8th Gen Intel Core i5 processor, and 8 GB of DDR3 RAM, this laptop offers a seamless computing experience even when you’re multitasking.",
    
  }),

  new Shopping({
    imagepath: "img/shopping/shopping_9.jpg",
    imagelink: "https://www.filson.com/",
    title: "Filson",
    description: "(8 GB/256 GB SSD/Windows 10 Home) 9370 Thin and Light Laptop  (13 inch, Silver, 1.21 kg, With MS Office) Get more productive with the Dell XPS 13 laptop. Featuring a Windows 10 Home operating system, an 8th Gen Intel Core i5 processor, and 8 GB of DDR3 RAM, this laptop offers a seamless computing experience even when you’re multitasking.",
    
  }),

  new Shopping({
    imagepath: "img/shopping/shopping_10.jpg",
    imagelink: "https://www.woolrich.com/",
    title: "Woolrich",
    description: "(8 GB/256 GB SSD/Windows 10 Home) 9370 Thin and Light Laptop  (13 inch, Silver, 1.21 kg, With MS Office) Get more productive with the Dell XPS 13 laptop. Featuring a Windows 10 Home operating system, an 8th Gen Intel Core i5 processor, and 8 GB of DDR3 RAM, this laptop offers a seamless computing experience even when you’re multitasking.",
    
  }),

  new Shopping({
    imagepath: "img/shopping/shopping_11.jpg",
    imagelink: "https://www.aetherapparel.com/",
    title: "Aether",
    description: "(8 GB/256 GB SSD/Windows 10 Home) 9370 Thin and Light Laptop  (13 inch, Silver, 1.21 kg, With MS Office) Get more productive with the Dell XPS 13 laptop. Featuring a Windows 10 Home operating system, an 8th Gen Intel Core i5 processor, and 8 GB of DDR3 RAM, this laptop offers a seamless computing experience even when you’re multitasking.",
    
  }),

  new Shopping({
    imagepath: "img/shopping/shopping_12.jpg",
    imagelink: "https://birdbrooklyn.com/",
    title: "Bird",
    description: "(8 GB/256 GB SSD/Windows 10 Home) 9370 Thin and Light Laptop  (13 inch, Silver, 1.21 kg, With MS Office) Get more productive with the Dell XPS 13 laptop. Featuring a Windows 10 Home operating system, an 8th Gen Intel Core i5 processor, and 8 GB of DDR3 RAM, this laptop offers a seamless computing experience even when you’re multitasking.",
    
  }),
];

var a = 0;
for(var i=0; i < shopping.length; i++) {
  shopping[i].save(function(err, n){
    a++;
    if(err){
        console.log(err);
    }
    if(a === shopping.length) {
      exit();
    }
  });

}


function exit() {
  mongoose.disconnect();
}

