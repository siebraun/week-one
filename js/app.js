


class RandomPicker{
    items

    constructor(items){
        this.items = items;
    }

    pickRandom(){
        return this.items[Math.floor(Math.random() * this.items.length)]
    }
}


//define fortune cookie class
class FortuneCookie extends RandomPicker {

    outputElement

    
    //fortunes
    constructor(element){
        super(["The headlight spirits, they lead me down the styx, so black it shines.", "I used to think I'd be done by 20, now at 29 the road ahead appears the same", "I'll love some littler things", "Your blood is red and unafraid of living, beginning to end","Venus, planet of love, was destroyed by global warming. Did its people want too much too?","My body's made of crushed little stars.","Wild women don't get the blues.","I am the fire and I am the forest and I am the witness watching it.", "Open up your heart like the gates of Hell"]);
        this.outputElement = element;
    }

    //display fortune
    open(){
        let reply = this.pickRandom();
        this.outputElement.innerHTML = reply;
    }

    //display when new cookie is grabbed
    openNew(){
        this.outputElement.innerHTML = "Please open your cookie.";
    }
}



// disable opening another cookie until you pick up a new one
function disableOpen() {
    document.getElementById("openCookie").disabled = true;
}

function enableOpen() {
    document.getElementById("openCookie").disabled = false;

}



let myCookie = new FortuneCookie(document.getElementById("magicResponse"));

