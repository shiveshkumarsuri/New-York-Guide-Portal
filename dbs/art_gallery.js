var ArtGallery = require('../models/Art_gallery.js');

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/nyg-dev', { useNewUrlParser: true});

var art_gallery = [
    new ArtGallery({
    imagepath: "img/artgallery/art_gallery1.jpg",
    imagelink: "https://gagosian.com/",
    title: "Gagosian Gallery",
    description: "Larry Gagosian’s mammoth (20,000-square-foot) contribution to 24th Street’s top-level galleries was launched in 1999 with a thrilling Richard Serra show.",
    
  }),

  new ArtGallery({
    imagepath: "img/artgallery/art_gallery2.jpg",
    imagelink: "https://www.davidzwirner.com/",
    title: "David Zwirner",
    description: "David Zwirner is a contemporary art gallery with spaces in New York, London, and Hong Kong, which currently represents over sixty artists and estates.",
    
  }),

  new ArtGallery({
    imagepath: "img/artgallery/art_gallery3.jpg",
    imagelink: "https://gladstonegallery.com/",
    title: "Gladstone Gallery",
    description: "Gladstone Gallery is a leading contemporary art gallery with locations in New York and Brussels. Representing more than fifty artists with major foundations",
    
  }),

  new ArtGallery({
    imagepath: "img/artgallery/art_gallery4.jpg",
    imagelink: "http://www.c-l-e-a-r-i-n-g.com/",
    title: "CLEARING",
    description: "Based in New York and Brussels, C L E A R I N G focuses on young contemporary artists and has given several internationally acclaimed emerging artists",
    
  }),

  new ArtGallery({
    imagepath: "img/artgallery/art_gallery5.jpg",
    imagelink: "http://www.jttnyc.com/6953",
    title: "JTT",
    description: "JTT is proud to present BOLO: Be On (the) Lookout, the gallery's first solo exhibition with New York-based artist Sable Elyse Smith (b.1986, Los Angeles, CA)",
    
  }),

  new ArtGallery({
    imagepath: "img/artgallery/art_gallery6.jpg",
    imagelink: "http://www.47canal.us/main.php?1=&2=",
    title: "47 Canal",
    description: "Over the last few years, one of the most reliably surprising, and downright unusual art destinations in New York has been a little gallery  called 47 Canal.",
    
  }),

  new ArtGallery({
    imagepath: "img/artgallery/art_gallery7.jpg",
    imagelink: "https://www.acquavellagalleries.com/",
    title: "Acquavella Galleries",
    description: "Acquavella Galleries is an art gallery located at 18 East 79th Street between Madison and Fifth Avenues in the Upper East Side neighborhood of Manhattan, New York City.",
    
  }),
  new ArtGallery({
    imagepath: "img/artgallery/art_gallery8.jpg",
    imagelink: "http://michaelwerner.com/",
    title: "Michael Werner",
    description: "In 1963, Michael Werner opened his first gallery, Werner, in Berlin, with the first solo exhibition of Georg Baselitz. Galerie Michael Werner was later established in 1969.",
    
  }),
  new ArtGallery({
    imagepath: "img/artgallery/art_gallery9.jpg",
    imagelink: "http://halfgallery.com/",
    title: "Half Gallery",
    description: "Half Gallery is pleased to present Vaughn Spann's first solo exhibition in New York, Orange, Yellow, Purple, Blue Skies, comprised of Spann's social abstraction and figurative painting",
    
  })
];

var a = 0;
for(var i=0; i < art_gallery.length; i++) {
  art_gallery[i].save(function(err, n){
    a++;
    if(err){
        console.log(err);
    }
    if(a === art_gallery.length) {
      exit();
    }
  });

}


function exit() {
  mongoose.disconnect();
}

