(function () {
    const form = document.querySelector('#search-form');
    const searchField = document.querySelector('#search-keyword');
    let searchedForText;
    const responseContainer = document.querySelector('#response-container');

    form.addEventListener('submit', (e)=> {
        e.preventDefault();
        responseContainer.innerHTML = '';
        searchedForText = searchField.value;
        const addImage = (data) => {
            let htmlContent = '';
            const firstImage = data.results[0];

            if (firstImage) {
                htmlContent = `<figure>
            <img src="${firstImage.urls.small}" alt="${searchedForText}">
            <figcaption>${searchedForText} by ${firstImage.user.name}</figcaption>
        </figure>`;
            } else {
                htmlContent = 'Unfortunately, no image was returned for your search.';
            }

            responseContainer.insertAdjacentHTML('afterbegin', htmlContent);
        };
        //ARTICLES
        const addArticles = (articles) => {
            articles = articles.response.docs;
            const htmlContent = '<ul>' + articles.map(article => `<li class="article">
        <h2><a href="${article.web_url}" target="_blank">${article.headline.main}</a></h2>
        <p>${article.snippet}</p>
        </li>`).join('') + '</ul>';
            responseContainer.insertAdjacentHTML('beforeend', htmlContent);
        };

        fetch(`https://api.unsplash.com/search/photos?page=1&query=${searchedForText}`, {
            headers: {
                Authorization: 'Client-ID 125e70fa9e54a2277252d6c033ee8bb5943cd542d8aa6c6d55fa10d15b4fb4ef'
            }
        }).then(response => response.json())
            .then(addImage)
            .catch(err => requestError(err, 'image'));

        fetch(`http://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchedForText}&api-key=6bc9273230d74a9f99e8b34ccdfa0cb3`)
            .then(response => response.json())
            .then(addArticles)
            .catch(err => requestError(err, 'image'));

        const requestError = (err, part) => {
            console.log(err);
            responseContainer.insertAdjacentHTML('afterbegin', `<p class="network-warning">Oh no! There was an error making a request for the ${part}.</p>`);
        };
    }

    );
})();
