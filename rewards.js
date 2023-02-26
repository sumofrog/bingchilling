//last row is for edge search
const searchTerms = [
    "hello", "buddy", "my head", "dbz",
    "crest", "fallen", "antsy", "blue",
    "lamp", "holdup", "eyes", "shade",
    "shoes", "man time", "juicy", "couture",
    "blessed", "blursed", "boomer", "backend", 
    "pumpkin", "moose", "sleeptoad", "temper",
    "moon", "bloom", "tonic", "orange", 
    "fruit", "banana", "flower", "shredded",
    "wheat", "somber", "noodles", "asian",
    "jamba", "marley", "holly", "jolly",
    "bama", "cracks", "dry", "burger", 
    "can", "tuna", "pouch", "laptop",
    "notes", "shallow", "kale", "dust",
    "olive", "wine", "moo", "cow", 
    "ninja", "bluebook", "mess", "paper",
    "towel", "bathrobe", "shower", "roll",
    "jamaica", "metallic", "silver", "index",
    "gold", "fund", "wealth", "moocher", 
    "tests", "baby", "slipper", "disney",
    "metal", "gear", "hotrod", "race",
    "find", "time", "last dance", "scout",
    "crew", "chief", "lambast", "clothes",
    "throw", "sleeping", "boxes", "pinewood",
    "amazon", "stomps", "amping", "generation",
    "shopping", "socrates", "webcam", "napolean",
    "headphones", "printer", "mohogany", "teak",
    "sage", "aries", "pike", "pots", 
    "greenmen", "will", "save", "us",
    "lambast", "balast", "area51", "roswell",
    "xenomorphius", "mexico", "linens", "tablet",
    "quests", "cereal", "flying", "saucer", 
    "spiral", "fibonacci", "scifi", "fastest",
    "airborne", "accelerate", "light", "drones",
    "adamantium", "wolves", "cardboard", "glamour",
    "stumps", "polyester", "aintnoway", "mahgood"
]; 

const bing = "https://bing.com/search?q=";

function generateTerms() {
    var safetySwitch = 0; 
    var terms = [];
    
    while (terms.length < 34) {              // number of search terms to populate
        if (safetySwitch > 2000) {            // iteration limit to find unique search terms
            return ["Error generating full list of search terms"]; 
        };
        safetySwitch++;

        var randomNum = Math.floor(Math.random() * searchTerms.length);  
        if (terms.indexOf(searchTerms[randomNum]) == -1 ) {
            terms.push(searchTerms[randomNum]);
        }
    }
    return terms;
}

function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

async function search() {
    const terms = generateTerms();
    for (const t of terms) {
        window.open(bing + t);
        await this.timeout(Math.random() * 5000 + 500); // time delay in milliseconds
    }
}

search();
