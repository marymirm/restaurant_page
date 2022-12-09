export function menu() {

    const contentDiv = document.getElementById('content');
    contentDiv.replaceChildren();

        //left part of the screen
        const leftPane = document.createElement("div");
        leftPane.classList.add("leftPane");
        contentDiv.appendChild(leftPane);

         // text overlay on image
         const headLine = document.createElement("h1");
         headLine.classList.add("headLine");
         leftPane.appendChild(headLine);

     const subLine = document.createElement("p");
         subLine.classList.add("subLine");
         headLine.appendChild(subLine);
    
            // image
            const barImage = document.createElement("img");
                barImage.classList.add("image");
                barImage.id = "id";
                barImage.src = "bar.jpeg";
                barImage.alt = "Image of Delicious Bowl!";
                leftPane.appendChild(barImage);
    
         //right pane of the screen         
    const rightPane = document.createElement("div");
    rightPane.classList.add("rightPane");
    contentDiv.appendChild(rightPane);

    const title = document.createElement("div");
        title.classList.add("title");
        rightPane.appendChild(title);

        const titleContent = document.createElement("h1")
            titleContent.textContent = "Our. Menu."
            title.appendChild(titleContent);

            const footer = document.createElement("div");
            footer.classList.add("footer");
            rightPane.appendChild(footer);
    
            const menuButton = document.createElement("button")
                menuButton.classList.add("menuButton");
                menuButton.textContent = "Discover Our Menu";
                footer.appendChild(menuButton);
    
}