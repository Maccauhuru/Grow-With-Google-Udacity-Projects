/* eslint-env jquery */

(function () {
    const form = document.querySelector('#search-form');
    const searchField = document.querySelector('#search-keyword');
    let searchedForText;
    const responseContainer = document.querySelector('#response-container');


    form.addEventListener('submit', (e)=>{
        e.preventDefault();
        responseContainer.innerHTML = '';
        searchedForText = searchField.value;

        //IMAGES
        const addImage = (images)=>{
            const firstImage = images.results[0];
            const htmlContent = `<figure>
            <img src="${firstImage.urls.regular}" alt="${searchedForText}">
            <figcaption>${searchedForText} by ${firstImage.user.name}</figcaption>
            </figure>`;
            responseContainer.insertAdjacentHTML('afterbegin', htmlContent);
        };
        //ARTICLES
        const addArticles = (articles)=>{
            articles = articles.response.docs;
            const htmlContent = '<ul>' + articles.map(article => `<li class="article">
        <h2><a href="${article.web_url}" target="_blank">${article.headline.main}</a></h2>
        <p>${article.snippet}</p>
        </li>`).join('') + '</ul>';
            responseContainer.insertAdjacentHTML('beforeend', htmlContent);
        };

        $.ajax({
            url: `https://api.unsplash.com/search/photos?page=1&query=${searchedForText}`,
            headers: {
                Authorization: 'Client-ID 125e70fa9e54a2277252d6c033ee8bb5943cd542d8aa6c6d55fa10d15b4fb4ef'
            }
        }).done(addImage);
        $.ajax({
            url: `http://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchedForText}&api-key=6bc9273230d74a9f99e8b34ccdfa0cb3`
        }).done(addArticles);
    });
})()
;
