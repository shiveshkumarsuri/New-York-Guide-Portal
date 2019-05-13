var Attraction = require('../models/Attractions.js');

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/nyg-dev', { useNewUrlParser: true});

var attractions = [
    new Attraction({
    imagepath: "img/attractions/attractions1.jpg",
    imagelink: "http://www.esbnyc.com/",
    title: "Empire State Building",
    description: "It's practically impossible to imagine the sparkling New York skyline without the iconic Empire State Building. A famed piece of Art Deco architecture that took over 400 days to structurally complete, the skyscraper reaches an astonishing height of 1,454-feet, it held that title for several decades following its 1931 completion date. Keep your eyes peeled for some of the finer details in the lobby, which was lovingly restored in 2009. Enjoy visions of the topper’s three tiers of lights, which illuminate up to nine colors at a time and don't miss the rod at the top of the building, which is frequently hit by lightning.",
    
  }),

  new Attraction({
    imagepath: "img/attractions/attractions2.jpg",
    imagelink: "https://www.brooklynbridgepark.org/",
    title: "Brooklyn Bridge",
    description: "No mere river crossing, this span is an elegant reminder of New York’s history of architectural innovation. When it opened in 1883, the Brooklyn Bridge was a feat of engineering: It was the first structure to cross the East River and, at the time, the longest suspension bridge in the world. Now it attracts thousands of tourists and locals, who enjoy spectacular views of lower Manhattan and other city landmarks as they stroll its more-than-mile-long expanse. Heads up, though: You may run into the occasional cyclist trying to navigate through the crowds on the pedestrian walkway. —Amy Plitt",
    
  }),

  new Attraction({
    imagepath: "img/attractions/attractions3.jpg",
    imagelink: "http://www.centralparknyc.org/",
    title: "Central Park",
    description: "Gotham’s love affair with its most famous green space is well documented in song, literature and film, but there’s still plenty to adore about the country’s first landscaped public park. Urban visionaries Frederick Law Olmsted and Calvert Vaux sought a harmonious balance of scenic elements: pastoral, formal and picturesque. Today, the 843-acre plot draws millions of visitors to its skyscraper-bordered vistas in all seasons: sunbathers and picnickers in summer, ice-skaters in winter, and bird-watchers in spring and fall —Carolyn Stanley",
    
  }),

  new Attraction({
    imagepath: "img/attractions/attractions4.jpg",
    imagelink: "https://www.nps.gov/stli/index.htm",
    title: "The Statue of Liberty",
    description: "Perhaps no other New York attraction is as iconic—or as avoided by tourist-averse New Yorkers—as Lady Liberty. Our tip: Dodge the foam-crown-sporting masses and skip the line for the ferry by prebooking a combo cruise-and-tour ticket. A climb to the crown affords a panoramic view of New York Harbor and the chance to see the literal nuts and bolts of Frédéric Auguste Bartholdi’s creation. If only to marvel at the initial ambivalence of 19th-century New Yorkers when they were asked to fund the construction of the pedestal. Ferries depart from Castle Clinton—Jonathan Shannon",
    
  }),

  new Attraction({
    imagepath: "img/attractions/attractions5.jpg",
    imagelink: "https://oneworldobservatory.com/en-US",
    title: "One World Observatory",
    description: "Although the One World Observatory occupyies floors 100 to 102 of the tallest building of the Western Hemisphere, this observation deck can be reached in just 60 seconds via a set of visually immersive 'Sky Pod' elevators. During the interactive tour experience, guests walk through some of the bedrock on which the building is built before entering the elevators, which are fitted with floor-to-ceiling LED screens showing a video of the city and building's history. One Dine for a full dining experience with large windows looking onto the horizon (reservations required). —Dan Q. Dao",
    
  }),

  new Attraction({
    imagepath: "img/attractions/attractions6.jpg",
    imagelink: "https://www.metmuseum.org/",
    title: "The Metropolitan Museum of Art",
    description: "Sprawling doesn’t even begin to describe this Manhattan institution: It’s one of the few spots in the city where you could spend literally an entire day and see only a fraction of the holdings. Behind the doors of its iconic neoclassical facade lie 17 curatorial collections spanning countless eras and cultural perspectives, from prehistoric Egyptian artifacts to contemporary photography. Those seeking to satisfy their anthropological curiosity can explore the extensive assemblage of musical instruments, weapons and armor or the Costume Institute’s centuries of wearable art. ",
    
  }),

  new Attraction({
    imagepath: "img/attractions/attractions7.jpg",
    imagelink: "https://www.nycgo.com/attractions/chrysler-building",
    title: "Chrysler Building",
    description: "Triangle-shaped windows in its crown are lined with lights, creating a beautiful effect come nighttime. Oozing a moneyed sophistication oft identified with old New York, the structure pays homage to its namesake with giant eagles in lieu of traditional gargoyles and a brickwork relief sculpture of racing cars, complete with chrome hubcaps. During the famed three-way race to construct Manhattan’s tallest building, the Chrysler added a needle-sharp stainless-steel spire to best 40 Wall Street—but was outdone shortly after its completion in 1930 by the Empire State Building. —Tim Lowery",
    
  }),

  new Attraction({
    imagepath: "img/attractions/attractions8.jpg",
    imagelink: "https://www.thehighline.org/",
    title: "The High Line",
    description: "When the weather is pleasant, there’s nothing quite like walking the High Line. NYC’s elevated park is certainly one of more popular New York attractions everyone needs to check off their list. To give you a bit of history, the High Line was once a railway line, in use until 1980. In 2009, the 1.45-mile-long strip was transformed into what is now considered one of the most unique parks in NYC. Featuring wildflowers, greenery and outdoor art installations in addition to killer views of New York’s skyline. —Evelyn Derico",
    
  }),

  new Attraction({
    imagepath: "img/attractions/attractions9.jpg",
    imagelink: "https://www.broadway.org/map",
    title: "Theatre District",
    description: "Each year, about 13 million locals and tourists take in Broadway shows at one of NYC's 40 Broadway theaters. Most of those venues are located in the theater district—roughly, 41st Street to 52nd Street and Sixth Ave to Eighth Ave. Each season brings a new wave of megamusicals, plays and star-driven revivals. Some boast gold from the Tony Awards. At the height of the fall and spring seasons, be sure to check our homepage for new critics picks, reviews and cheap broadway tickets. The savvy consumer can find discount tickets at most Broadway shows. NYC hurry—the curtain’s about to rise! — David Cote",
    
  }),

  new Attraction({
    imagepath: "img/attractions/attractions10.jpg",
    imagelink: "https://www.wtc.com/memorial",
    title: "The 9/11 Memorial and Museum",
    description: "The twin reflecting pools, the 9/11 Memorial designed by Michael Arad, are a solemn reminder of all that was lost during the terrorist attacks on September 11, 2001 and the World Trade Center bombing in 1993. Lining the pools, each one acre in size, are bronze panels with the names of the 3,000 deceased victims from the attacks. For those who wish to pay their respects to the tragedy and learn more about the events that transpired, the museum serves as the leading collection of artifacts and documentation of September 11.",
    
  }),

  new Attraction({
    imagepath: "img/attractions/attractions11.jpg",
    imagelink: "https://www.rockefellercenter.com/",
    title: "Rockefeller Center",
    description: "You’ll find a smorgasbord of New York sites in this distinctive, multi-block complex—in fact, the ground level alone is home to the tourist-packed ice-skating rink, the bronze Atlas statue and the ‘Today Show’ plaza. Higher up, Top of the Rock rivals the Empire State Building in panoramic city views. You may not be able to access the five private rooftop gardens if you’re not a Saturday Night Live cast member, but you can still peek at the spaces from Saks Fifth Avenue’s eighth-floor shoe department if you can't help but be curious."
    
  }),

  new Attraction({
    imagepath: "img/attractions/attractions12.jpg",
    imagelink: "https://www.timessquarenyc.org/",
    title: "Times Square",
    description: "Manhattan’s heart was once a hub for vice, teeming with sex shops and drug dealers. Over time that notorious reputation has eroded, and now the area can feel like a tourist-clogged shopping mall. Still, changes such as the stairs above the TKTS booth and a pedestrian plaza along Broadway have improved the sightseeing experience…sort of. If the thought of attending the annual glitzy New Year’s Eve celebration gives you hives, you can see the midnight countdown re-created on a smaller scale at the Times Square Visitor Center, thanks to one of the Waterford crystal balls used in years past. —Allison Williams",
    
  }),
];

var a = 0;
for(var i=0; i < attractions.length; i++) {
  attractions[i].save(function(err, n){
    a++;
    if(err){
        console.log(err);
    }
    if(a === attractions.length) {
      exit();
    }
  });

}


function exit() {
  mongoose.disconnect();
}

