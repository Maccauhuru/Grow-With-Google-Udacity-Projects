//Application Model
        const data = [{
                id : 0,
                catName: "JJ Doom",
                link: "img/cat1.jpg",
                clickCount : 0,
                currentCat : true   
            },
            {
                id : 1,
                catName: "MF Doom",
                link: "img/cat2.jpg",
                clickCount : 0,
                currentCat : false
            },
            {
                id : 2,
                catName: "Stark Doom",
                link: "img/cat3.jpg",
                clickCount : 0,
                currentCat: false
            },
        ];

//Query Selectors
let navigation = $('ul.catNavItems');
let catView = $('#catView');
let catItems = $('.catItems');

//Display the first view : Cat Navigation List
displayCatList=()=>{
data.forEach(cat => navigation.append("<li>"+"<a href='#' onclick=setCurrentCat("+cat.id+")>"
                    +cat.catName+"</a></li>"));
}

//Make currentCats be false for all cats
disableCurrentCats=()=>{
    data.forEach(cat => cat.currentCat = false);
}

//change currentCat in model
setCurrentCat=(id)=>{
    disableCurrentCats();
    data[id].currentCat = true;
    displayCats(id);
}

//Display the second view : Current Active Cat
displayCats=(catID)=>{
catView.empty();
let displayCatView = 
             "<div class='catItems'>"+"<h3 class='catName'>"+data[catID].catName+"</h3>"
            +"<div class='cat-images'>"+"<img src='./"+data[catID].link+"'onclick='countCatClicks("
            +data[catID].id+")'"+">"+"<p>Click Count :"+ data[catID].clickCount+"</p>"+"</div></div>"
catView.append(displayCatView);
}

//increase cat clicks in view
 countCatClicks=(id)=>{
    data[id].clickCount++;
    displayCats(id);
}

//Initial Load
displayCatList();
displayCats(0);