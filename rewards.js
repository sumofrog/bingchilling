//last row is for edge search
const searchTerms = [
    "hello", "buddy", "my head", "dbz",
    "crest", "fallen", "antsy", "blue",
    "lamp", "holdup", "eyes", "shade",
    "shoes", "man time", "juicy", "couture",
    "blessed", "blursed", "boomer", "backend", 
    "pumpkin", "moose", "pokemon", "temper",
    "moon", "bloom", "tonic", "orange", 
    "fruit", "banana", "flower", "shredded",
    "wheat", "snowboard", "noodles", "asian",
    "jamba", "marley", "holly", "jolly",
    "bama", "cracks", "dry", "burger", 
    "can", "tuna", "pouch", "laptop",
    "notes", "music", "kale", "dust",
    "olive", "wine", "moo", "cow", 
    "ninja", "xbox", "pc", "paper",
    "towel", "bathrobe", "shower", "roll",
    "jamaica", "metallic", "silver", "index",
    "gold", "fund", "wealth", "moocher", 
    "tests", "baby", "slipper", "disney",
    "metal", "gear", "hotrod", "race",
    "find", "time", "last dance", "scout",
    "crew", "chief", "lambast", "clothes",
    "throw", "sleeping", "boxes", "fedex",
    "amazon", "bestbuy", "jcrew", "generation",
    "shopping", "twitch", "webcam", "camera",
    "headphones", "printer", "mousepad", "mice",
    "dog", "cat", "fish", "lizard", 
    "aliens", "will", "save", "us"
]; 

const bing = "https://bing.com/search?q=";

function generateTerms() {
    var safetySwitch = 0;
    var terms = [];
    
    while (terms.length < 24) {
        if (safetySwitch > 200) { 
            console.log('safety switch on');
            break; 
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
        await this.timeout(Math.random() * 3500 + 500);
    }
}


search();
