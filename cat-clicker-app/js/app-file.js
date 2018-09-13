/*================MODEL==================== */
let model = {
    currentCat: null,
    cats: [{
        id: 0,
        catName: "JJ Doom",
        link: "img/cat1.jpg",
        clickCount: 0,
    }, {
        id: 1,
        catName: "MF Doom",
        link: "img/cat2.jpg",
        clickCount: 0,
    }, {
        id: 2,
        catName: "Stark Doom",
        link: "img/cat3.jpg",
        clickCount: 0,
    }, ]
}


/*================OCTOPUS==================== */

let octopus = {
    //set initial cat on load
    init: function () {
        model.currentCat = model.cats[0];
        catView.init();
        catListView.init();

    },
    getCurrentCat: function () {
        return model.currentCat;
    },
    setCurrentCat: function (cat) {
        return model.currentCat = cat;
    },
    getCats: function () {
        return model.cats;
    },
    incrementCounter: function () {
        model.currentCat.clickCount++;
        catView.render();
    }
};


/*================VIEW==================== */


let catView = {
    init: function () {
        this.catName = document.getElementById("cat-name");
        this.catImage = document.getElementById("cat-image");
        this.catClickCount = document.getElementById("cat-click-count");
        this.catImage.addEventListener('click', function () {
            octopus.incrementCounter();
        });
        this.render()
    },
    render: function () {
        let currentCat = octopus.getCurrentCat();
        this.catName.textContent = currentCat.catName;
        this.catImage.src = currentCat.link;
        this.catClickCount.textContent = currentCat.clickCount;
    }
};


let catListView = {
    init: function () {
        this.catList = document.getElementById("cat-list");
        this.render();
    },
    render: function () {
        let cat, listItem, i;
        let cats = octopus.getCats();
        //empty list 
        this.catList.innerHTML = '';
        //load cat names
        for (i = 0; i < cats.length; i++) {
            cat = cats[i];
            listItem = document.createElement('li');
            listItem.setAttribute('class', 'list-group-item');
            listItem.textContent = cat.catName;
            //add eventListener for click
            // on click, setCurrentCat and render the catView
            // (this uses our closure-in-a-loop trick to connect the value
            //  of the cat variable to the click event function)
            listItem.addEventListener('click', (function (catCopy) {
                return function () {
                    octopus.setCurrentCat(catCopy);
                    catView.render();
                };
            })(cat));
            this.catList.append(listItem);
        }
    }
};

//initialize app
octopus.init()