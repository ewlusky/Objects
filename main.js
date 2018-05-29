
class Candidate {
    constructor(name){
        this.name = name;
        this.district = "";
        this.platform = {}
        this.donation = "";
        this.calendar = {};
        this.volunteers = [];
        this.bio = "";
        this.images = {head: "", fam: "", constit: ""};
        this.mission = "";
        this.register = "";


    }
    // here setPlat expects an object, or what I might think of
    // as a dictionary.  Not sure exactly why to use set rather
    // than just a method.  Sets platform.

    set setPlat(plat) {
        for (let x in plat) {
            this.platform[x] = this.plat[x];
        }
    }

    addVol(volunteer){
        this.volunteers.push(volunteer);
    }
}

let plat = {taxes: "", jobs: "", infra: "", health: "", crime: ""};

class Volunteer {
    constructor(name, address, email, phone, avail, jobs) {
        this.name = name;
        this.address = address;
        this.email = email;
        this.phone = phone;
        this.avail = avail;
        this.jobs = jobs;
    }
}


let Liz = new Candidate("Elizabeth");
Liz.district = "home town";
let Lplat = {taxes: "Yes, taxes.", jobs: "I am pro jobs.", 
            infra: "Infrawhat now?  That's tommorow's problem and I am the candidate of today.",
            health: "More apples, less doctors", crime: "I strongly believe that crime is bad"};

Liz.platform = Lplat;
const main = document.querySelector("#main");
const art = document.createElement("article");
art.setAttribute("id", Liz.district);
for (key in Lplat) {
    console.log(key);
    art.appendChild(document.createTextNode(key.toUpperCase() + ": " + Lplat[key]));
    art.appendChild(document.createElement("br"));
}

main.appendChild(art);
