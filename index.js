import {MediaFactory} from "./components/media-factory.js";
import {Media} from "./components/media.js";
import {EightTrack} from "./components/eight-track.js";


const mediaFactory = new MediaFactory();


/***
 * Lets create a simple array here. It'll let us organize a little
 */
const recordCollection = [];
recordCollection.push( mediaFactory.create({
  mediaType: "LP", 
  title:"OK Computer", 
  artist: "Radiohead",
  date: 1993, 
  sides: [
    ["Airbag",
    "Paranoid Android",
    "Subterranean Homesick Alien",
    "Exit Music (For a Film)",
    "Let Down",
    "Karma Police"
    ],[
      "Fitter Happier",
      "Electioneering",
      "Climbing Up the Walls",
      "No Surprises",
      "Lucky",
      "The Tourist"
    ]
  ]
}) );
// We'll create another. We're changing the mediaType,
//  so we'll get a different object back.
recordCollection.push( mediaFactory.create({
  mediaType: "8-track",
  title: "In-A-Gadda-Da-Vida",
  artist: "Iron Butterfly",
  date: 1967,
  tracks: [
    [
      "In-A-Gadda-Da-Vida (part 1)"
    ],[
      "In-A-Gadda-Da-Vida (part 2)",
      "Most Anything You Want (part 1)"
    ],[
      "Most Anything You Want (part 2)",
      "Flowers and Beads",
      "My Mirage (part 1)"
    ],[
      "My Mirage (part 2)",
      "Termination",
      "Are You Happy"
    ]
  ]
}) );

/***
 * Now, let's do some stuff with each of the media in the collection!
 ***/
recordCollection.forEach(mediaThing =>{

  console.log(`${mediaThing.toString()}
  ${mediaThing.hasOwnProperty("sides") ? "Side "+(Number(mediaThing.sideIndex)+1)+", " : mediaThing.hasOwnProperty("tracks") ? "Track "+(Number(mediaThing.trackIndex)+1)+", " : ""} Song ${mediaThing.songIndex+1}: ${mediaThing.song}`);
  // Here, we use the interface methods.
  mediaThing.flip().next().next();
  console.log(` ${mediaThing.hasOwnProperty("sides") ? "Side "+(Number(mediaThing.sideIndex)+1)+", " : mediaThing.hasOwnProperty("tracks") ? "Track "+(Number(mediaThing.trackIndex)+1)+", " : ""} Song ${mediaThing.songIndex+1}: ${mediaThing.song}
  Is this an 8-track? ${mediaThing instanceof EightTrack ? "Yes":"No"}
  Is it a Media object? ${mediaThing instanceof Media ? "Yes" : "No"}
  It is a ${Object.getPrototypeOf(mediaThing).constructor}.
  _____________________
  `)
  })




