export function initialPageLoad (){
    const contentDiv = document.getElementById('content');

    contentDiv.replaceChildren();
    
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
    
    //top part of the screen
    // const topMenu = document.createElement("div");
    //     topMenu.classList.add("topMenu");
    //     contentDiv.appendChild(topMenu);
    
    //     //ul list
    //     const list = document.createElement("ul");
    //         topMenu.appendChild(list);
    
    //         //li items
    //         const home = document.createElement("li");
    //             home.textContent = "Home";
    //             list.appendChild(home);
            
    //         const menu = document.createElement("li");
    //             menu.textContent = "Menu";
    //             list.appendChild(menu);
    
    //         const reservations = document.createElement("li");
    //             reservations.textContent = "Reservations";
    //             list.appendChild(reservations);
            
    //         const contact = document.createElement("li");
    //             contact.textContent = "Contact";
    //             list.appendChild(contact);
    
    
    //right pane of the screen         
    const rightPane = document.createElement("div");
        rightPane.classList.add("rightPane");
        contentDiv.appendChild(rightPane);
    
        const title = document.createElement("div");
            title.classList.add("title");
            rightPane.appendChild(title);
    
            const titleContent = document.createElement("h1")
                titleContent.textContent = "Restaurant."
                title.appendChild(titleContent);
        
        const footer = document.createElement("div");
            footer.classList.add("footer");
            rightPane.appendChild(footer);
    
            const menuButton = document.createElement("button")
                menuButton.classList.add("menuButton");
                menuButton.textContent = "Discover Our Menu";
                footer.appendChild(menuButton);
    
    }