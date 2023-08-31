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
    "stumps", "polyester", "aintnoway", "mahgood",
    "apple", "banana", "chair", "dog", "elephant",
    "frog", "guitar", "hat", "igloo", "jelly",
    "kite", "lemon", "monkey", "napkin", "octopus",
    "pencil", "quilt", "robot", "sock", "tiger",
    "umbrella", "violin", "whale", "xylophone", "yogurt",
    "zebra", "ant", "bird", "car", "dog",
    "elephant", "fish", "giraffe", "horse", "iguana",
    "jacket", "koala", "lizard", "mouse", "newt",
    "octopus", "penguin", "quokka", "rabbit", "snake",
    "turtle", "urchin", "vulture", "wombat", "x-ray",
    "yak", "zebra", "applebies", "banana", "cherry",
    "date", "elderberry", "fig", "grape", "honeydew",
    "kiwi", "lemon", "mango", "nectarine", "orange",
    "pear", "quince", "raspberry", "strawberry", "tangerine",
    "ugli fruit", "victoria plum", "watermelon", "xigua", "yellow passionfruit",
    "zucchini", "astronaut", "beekeeper", "chef", "detective",
    "electrician", "firefighter", "gardener", "hairdresser", "inventor",
    "juggler", "king", "librarian", "mechanic", "nurse",
    "optometrist", "pilot", "queen", "receptionist", "scientist",
    "teacher", "undertaker", "veterinarian", "waiter", "x-ray technician",
    "yoga instructor", "zookeeper", "accordion", "bassoon", "clarinet",
    "didgeridoo", "electric guitar", "flute", "glockenspiel", "harp",
    "italian mandolin", "jew's harp", "kazoo", "lute", "marimba",
    "nyckelharpa", "ocarina", "panpipes", "quena", "recorder",
    "saxophone", "trombone", "ukulele", "viola", "whistle",
    "xylophone", "yaybahar", "zither", "alley", "beach",
    "canyon", "desert", "estuary", "forest", "gorge",
    "hill", "island", "jungle", "kettle", "lake",
    "mountain", "ocean", "prairie", "quarry", "river",
    "stream", "tundra", "underground", "valley", "waterfall",
    "xerosere", "yellowstone", "zoo", , "elderberry",
    "apricot", "blueberry", "cranberry", "dragonfruit",
    "fig", "grapefruit", "honeydew", "kiwi", "lime",
    "mango", "nectarine", "orange", "peach", "quince",
    "raspberry", "strawberry", "tangerine", "ugli fruit", "watermelon",
    "xigua", "yellow passionfruit", "zucchini", "actor", "baker",
    "clown", "dancer", "entertainer", "firefighter", "gymnast",
    "hunter", "inventor", "juggler", "knight", "lifeguard",
    "magician", "nurse", "officer", "pianist", "queen",
    "rescuer", "scientist", "teacher", "undertaker", "violinist",
    "waiter", "x-ray technician", "yoga instructor", "zoologist", "accordionist",
    "bassist", "clarinetist", "drummer", "electric guitarist", "flutist",
    "guitarist", "harpist", "italian mandolinist", "jazz pianist", "kazooist",
    "lute player", "marimba player", "nyckelharpa player", "oboist", "panpipist",
    "quenist", "rock guitarist", "saxophonist", "trombonist", "ukuleleist",
    "violist", "whistler", "xylophonist", "yaybaharist", "zitherist",
    "alley", "beach", "canyon", "desert", "estuary",
    "forest", "gorge", "hill", "island", "jungle",
    "kettle", "lake", "mountain", "ocean", "prairie",
    "quarry", "river", "stream", "tundra", "underground",
    "valley", "waterfall", "xerosere", "yellowstone", "zoo",
    "anteater", "bird", "cheetah", "dolphin", "elephant",
    "flamingo", "gazelle", "hippo", "iguana", "jaguar",
    "kangaroo", "lemur", "monkey", "newt", "octopus",
    "penguin", "quokka", "raccoon", "seagull", "toucan",
    "urchin", "vulture", "whale", "x-ray tetra", "yellow tang",
    "zebra", "amethyst", "beryl", "citrine", "diamond",
    "emerald", "fossil", "gemstone", "heliodor", "iolite",
    "jade", "kunzite", "lapis lazuli", "moonstone", "nephrite",
    "obsidian", "peridot", "quartz", "ruby", "sapphire",
    "topaz", "unakite", "variscite", "wulfenite", "xenotime",
    "yellow zircon", "zeolite", "destiny", "battlefield",
    "portal", "mario", "halo", "tetris", "minecraft",
    "zelda", "pacman", "overwatch", "fortnite", "skyrim",
    "fallout", "dark souls", "bioshock", "resident evil", "half-life",
    "metroid", "god of war", "final fantasy", "doom", "street fighter",
    "splatoon", "grand theft auto", "counter-strike", "league of legends",
    "red dead redemption", "borderlands", "call of duty", "dead space",
    "mass effect", "silent hill", "metal gear solid", "diablo", "the elder scrolls",
    "assassin's creed", "super nintendo", "playstation", "xbox", "nintendo switch",
    "gamecube", "sega genesis", "atari", "pc gaming", "game boy",
    "movie", "avatar", "star wars", "avengers", "jurassic park",
    "matrix", "inception", "terminator", "titanic", "harry potter",
    "jurassic world", "batman", "spider-man", "guardians of the galaxy", "lord of the rings",
    "transformers", "x-men", "fast and furious", "indiana jones", "mission: impossible",
    "james bond", "deadpool", "wonder woman", "black panther", "frozen",
    "toystory", "finding nemo", "mad max", "the dark knight", "pulp fiction",
    "shrek", "frozen", "the lion king", "toy story", "despicable me",
    "transformers", "hunger games", "pirates of the caribbean", "twilight", "the avengers",
    "iron man", "captain america", "thor", "guardians of the galaxy", "spider-man",
    "doctor strange", "black widow", "hulk", "x-men", "wolverine",
    "justice league", "aquaman", "wonder woman", "superman", "batman",
    "joker", "harley quinn", "suicide squad", "aquaman", "shazam",
    "man of steel", "wonder woman", "captain marvel", "iron man", "thor",
    "hawkeye", "black widow", "star lord", "gamora", "rocket",
    "groot", "doctor strange", "ant-man", "the flash", "green lantern",
    "avatar", "jake sully", "neytiri", "pandora", "the terminator",
    "arnold schwarzenegger", "john connor", "judgment day", "t-800", "skynet",
    "matrix", "neo", "trinity", "morpheus", "agents",
    "zion", "inception", "leonardo dicaprio", "dreams", "reality",
    "terminator", "titanic", "jack", "rose", "iceberg",
    "shrek", "donkey", "fiona", "lord farquaad", "puss in boots",
    "points per game", "rebounds per game", "assists per game",
    "field goal percentage", "free throw percentage",
    "three-point percentage", "steals per game", "blocks per game",
    "turnovers per game", "double-double", "playoffs", "championship",
    "michael jordan", "lebron james", "kobe bryant", "larry bird", "magic johnson",
    "triple-double", "scoring champion", "mvp", "all-star game",
    "shaquille o'neal", "tim duncan", "kevin durant", "stephen curry",
    "giannis antetokounmpo", "wilt chamberlain", "dirk nowitzki",
    "kareem abdul-jabbar", "hakeem olajuwon", "bill russell",
    "celtics", "lakers", "bulls", "warriors", "heat",
    "spurs", "76ers", "rockets", "raptors", "bucks",
    "knicks", "nets", "mavericks", "hawks", "suns",
    "pistons", "cavaliers", "blazers", "jazz", "thunder",
    "clippers", "pacers", "timberwolves", "wizards", "magic",
    "kings", "hornets", "pelicans", "nuggets", "grizzlies",
    "supersonics", "bobcats", "carter", "iverson", "wade",
    "garnett", "pierce", "anthony", "mcgrady", "paul",
    "nash", "leonard", "davis", "harden", "lillard",
    "booker", "embiid", "doncic", "simmons", "williamson",
    "tatum", "irving", "malone", "stockton", "miller",
    "ewing", "bosh", "rose", "griffin", "westbrook",
    "howard", "iverson's crossover", "jordan's flu game", "bryant's 81-point game",
    "james", "the decision", "splash brothers", "bulls 72-win season", "heat's big three era",
    "allen's game 6 buzzer-beater", "grizzlies' grit 'n' grind era", "warriors",
    "spurs' dynasty", "james' block in 2016 finals", "leonard's shot in 2019 playoffs",
    "olajuwon's dream shake", "the shot (havlicek)", "the shot (leonard)", "shaq and kobe feud",
    "the process (76ers)", "chamberlain's 100-point game", "bird's legendary shootout",
    "dunk contest", "the steal (havlicek)", "dunk city", "rose's mvp season",
    "lakers-celtics rivalry", "linsanity", "malice at the palace",
    "ming's impact on globalization", "miller's eight points in nine seconds",
    "russell's championships", "magic vs. bird rivalry",
];

const bing = "https://bing.com/search?q=";

function generateTerms() {
    var safetySwitch = 0;
    var terms = [];

    while (terms.length < 34) {
        if (safetySwitch > 200) {
            return ["Error generating full list of search terms"];
        };
        safetySwitch++;

        var randomNum = Math.floor(Math.random() * searchTerms.length);
        if (terms.indexOf(searchTerms[randomNum]) == -1) {
            terms.push(searchTerms[randomNum]);
        }
    }
    return terms;
}

function combinedRandom() {
    const baseRandom = Math.random();
    const timeRandom = new Date().getTime() % 10000 / 10000; // Time-based randomness between 0 and 1
    return (baseRandom + timeRandom) / 2; // Combine and normalize
}

// Set interval limits
const minInterval = 8000; // 8 seconds
const maxInterval = 30000; // 30 seconds

function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

async function search() {
    const terms = generateTerms();
    for (const t of terms) {
        const randomInterval = minInterval + Math.floor(combinedRandom()
            * (maxInterval - minInterval + 1)); // Generate a random interval within the specified range
        window.open(bing + t);
        await this.timeout(randomInterval); // Usage: Call the timeout function with the random interval
    }
}

search();
