document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".proCard"); // Select the project container

    fetch('card.json')
        .then(response => response.json())
        .then(projects => {
            let cardsHTML = ""; // Store all cards as a string

            projects.forEach(project => {
                cardsHTML += `
                    <div class="card">
                        <a href="${project.link}" target="_blank" class="protxt">
                            <img class="proImg" src="${project.image}" alt="${project.title}">
                            <h5 class="proTit">${project.title}</h5>
                            <p class="proDis">${project.description}</p>
                        </a>
                    </div>
                `;
            });

            container.innerHTML = cardsHTML; // Insert all cards at once
        })
        .catch(error => console.error('Error loading JSON:', error));
});
