console.log("Hello Ristorante");


const contentDiv = document.getElementById('content');

//left part of the screen
const leftPane = document.createElement("div");
    leftPane.classList.add("leftPane");
    contentDiv.appendChild(leftPane);

        // text overlay on image
        const headLine = document.createElement("h1");
            headLine.classList.add("headLine");
            headLine.textContent = "What is your flavor?"
            leftPane.appendChild(headLine);

        const subLine = document.createElement("p");
            subLine.classList.add("subLine");
            subLine.textContent = "Eat local. Simply Honest. Daringly Delicious."
            headLine.appendChild(subLine);

        // image
        const homePageImage = document.createElement("img");
            homePageImage.classList.add("image");
            homePageImage.id = "id";
            homePageImage.src = "poke.jpeg";
            homePageImage.alt = "Image of Delicious Bowl!";
            leftPane.appendChild(homePageImage);


//right top part of the screen
const topMenu = document.createElement("div");
    topMenu.classList.add("topMenu");
    topMenu.appendChild(contentDiv);


//right middle part of the screen

//right footer of the screen