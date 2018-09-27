(function () {
    const form = document.querySelector('#search-form');
    const searchField = document.querySelector('#search-keyword');
    const responseContainer = document.querySelector('#response-container');
    const unsplashRequest = new XMLHttpRequest();
    const articleRequest = new XMLHttpRequest();
    let searchedForText;

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        responseContainer.innerHTML = '';
        searchedForText = searchField.value;

        //Images
        unsplashRequest.open('GET', `https://api.unsplash.com/search/photos?page=1&query=${searchedForText}`);
        unsplashRequest.onload = addImage;
        unsplashRequest.setRequestHeader('Authorization', 'Client-ID 125e70fa9e54a2277252d6c033ee8bb5943cd542d8aa6c6d55fa10d15b4fb4ef');
        unsplashRequest.send();

        //Articles
        articleRequest.onload = addArticles;
        articleRequest.open('GET', `http://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchedForText}&api-key=6bc9273230d74a9f99e8b34ccdfa0cb3`);
        articleRequest.send();
    });

    const addImage = () =>{
        let htmlContent = '';
        const data = JSON.parse(unsplashRequest.responseText);
        if (data && data.results && data.results[0]) {
            const firstImage = data.results[0];
            htmlContent = `<figure>
            <img src="${firstImage.urls.regular}" alt="${searchedForText}">
            <figcaption>${searchedForText} by ${firstImage.user.name}</figcaption>
            </figure>`;
        } else {
            console.log('did not receive data');
            htmlContent = '<div class="error-no-articles">No Images To Display</div>';
        }
        responseContainer.insertAdjacentHTML('afterbegin', htmlContent);
    };

    const addArticles = ()=> {
        let htmlContent = '';
        const data = JSON.parse(articleRequest.responseText);
        const allArticles = data.response.docs;
        if (data.response && allArticles && allArticles.length > 1) {
            htmlContent = '<ul>' + allArticles.map(article => `<li class="article">
        <h2><a href="${article.web_url}" target="_blank">${article.headline.main}</a></h2>
        <p>${article.snippet}</p>
        </li>`).join('') + '</ul>';
        } else {
            htmlContent = '<div class="error-no-image">No Images To Display</div>';
        }
        responseContainer.insertAdjacentHTML('beforeend', htmlContent);
    };
})();
