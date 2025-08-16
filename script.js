const slides = [
    { 
        title: "Isagi(rare)", 
        text: "A smart striker with incredible shooting ability and meta vision.", 
        titleColor: "blue", 
        textColor: "blue" 
    },
    { 
        title: "Igaruri(rare)", 
        text: "A good player with amazing mentality", 
        titleColor: "white", 
        textColor: "white" 
    },
    { 
        title: "Gagamuru(rare)", 
        text: "An amazing goalkeeper with fast reflexes and incredible agility.", 
        titleColor: "silver", 
        textColor: "silver" 
    },
    { 
        title: "Chigiri(epic)", 
        text: "An egoist who relies on pure speed to get past players.", 
        titleColor: "pink", 
        textColor: "pink" 
    },
    { 
        title: "Bachira(epic)", 
        text: "A talented monster with crazy dribbling and flair.", 
        titleColor: "yellow", 
        textColor: "yellow" 
    }
];

let index = 0;
const titleEl = document.getElementById("carousel-title");
const textEl = document.getElementById("carousel-text");

function showSlide(i) {
    titleEl.textContent = slides[i].title;
    textEl.textContent = slides[i].text;

    // Apply different colors for title and text
    titleEl.style.color = slides[i].titleColor;
    textEl.style.color = slides[i].textColor;
}

function nextSlide() {
    index = (index + 1) % slides.length;
    showSlide(index);
}

// Initialize
showSlide(index);
setInterval(nextSlide, 5000);
