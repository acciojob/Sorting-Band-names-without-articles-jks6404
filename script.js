let touristSpots = ['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];

function stripArticle(name) {
    const articles = ["a ", "an ", "the "];
    let lowerCaseName = name.toLowerCase();
    
    for (let article of articles) {
        if (lowerCaseName.startsWith(article)) {
            return name.slice(article.length).trim();
        }
    }
    
    return name.trim();
}

let touristSort = touristSpots.sort((a, b) => {
    let nameA = stripArticle(a).toLowerCase();
    let nameB = stripArticle(b).toLowerCase();
    return nameA.localeCompare(nameB);
});

// Generate the list items
const ul = document.getElementById('bands');
touristSort.forEach((bandName) => {
    const li = document.createElement('li');
    li.textContent = bandName;
    ul.appendChild(li);
});
