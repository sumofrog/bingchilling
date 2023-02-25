    //last row is for edge search
    const searchTerms = [
        "hello", "buddy", "my head", "dbz",
        "crest", "fallen", "antsy", "blue",
        "lamp", "holdup", "black eyed", "shade",
        "shoes", "man time", "juicy", "couture",
        "blessed", "blursed", "boomer", "backend", 
        "pumpkin", "moose", "pokemon", "temper" 
    ]; 

    const bing = "https://bing.com/search?q=";

    function isEdge() {
        try {
            for (brand_version_pair of navigator.userAgentData.brands) {
                if (brand_version_pair.brand == "Microsoft Edge"){
                    return true;
                }
            }
        } catch (err) {
            return false;
        }
        return false;
    }

    function timeout(ms) {
        return new Promise(resolve => setTimeout(resolve, ms))
    }

    async function slowedForLoop() {
        if (isEdge()) {
            for (i = 20; i < searchTerms.length; i++) {
                window.open(bing + searchTerms[i]);
                await this.timeout(Math.random() * 3000 + 500)  //                   
            }      
        } else {
            for (i = 0; i < 20; i++) {
                window.open(bing + searchTerms[i]);
                await this.timeout(Math.random() * 4000 + 500)
            }
        }
    }

    slowedForLoop();
