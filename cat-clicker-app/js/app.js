        const catdata = [{
                catName: "JJ Doom",
                link: "img/cat.jpg",
            },
            {
                catName: "MF Doom",
                link: "img/cat2.jpg"
            }
        ];

        //Set Cat Names
        const cat1 = document.getElementById('catname1');
        const cat2 = document.getElementById('catname2');
        cat1.innerHTML = catdata[0].catName;
        cat2.innerHTML = catdata[1].catName;

        //Set Cat Pics
        const catPic1 = document.getElementById('catpic1');
        const catPic2 = document.getElementById('catpic2');

        //Add Click Events
        const counter1 = document.getElementById('counter1');
        const counter2 = document.getElementById('counter2');
        let cat1counter = 0;
        let cat2counter = 0;

        catPic1.addEventListener('click',()=>{
        cat1counter +=1
        counter1.innerHTML=cat1counter;
        },false);

        catPic2.addEventListener('click',()=>{
        cat2counter +=1
        counter2.innerHTML=cat2counter;
        },false);
     