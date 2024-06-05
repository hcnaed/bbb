

let pers=[
{
    id:'pers1',
    title:'крокодил',
    price:250,
    img:'img/space.png',
    isStore:true,
    isEquip:false,
},
{
    id:'pers2',
    title:'пингвін',
    price:500,
    img:'img/penguin.png',
    isStore:true,
    isEquip:false,
},
{
    id:'pers3',
    title:'ведмедик',
    price:1000,
    img:'img/bear.png',
    isStore:true,
    isEquip:false,
},
{
    id:'pers4',
    title:'морський коник',
    price:1500,
    img:'img/seahorse.png',
    isStore:true,
    isEquip:false,
},
{
    id:'pers5',
    title:'шиншила',
    price:2000,
    img:'img/chinchilla.png',
    isStore:true,
    isEquip:false,
},
{
    id:'pers6',
    title:'змія',
    price:2500,
    img:'img/snake.png',
    isStore:true,
    isEquip:false,
},
{
    id:'pers7',
    title:'котик',
    price:3000,
    img:'img/kitty.png',
    isStore:true,
    isEquip:false,
},
{
    id:'pers8',
    title:'песик',
    price:3500,
    img:'img/dog.png',
    isStore:true,
    isEquip:false,
},
{
    id:'pers9',
    title:'дельфін',
    price:5000,
    img:'img/dolphin.png',
    isStore:true,
    isEquip:false,
},

]

pers=JSON.parse(localStorage.getItem('pers')) || pers

pers.map(item=>{

    if (item.isStore){
        $('.characters_buy').append(
            `
            <div class="character_merch" id="${item.id}">
                            <img class="character_img" src="${item.img}" alt="">
                            <p class="character_title">${item.title} </p>
                            <div class="character_price_box">
                                <img class="character_price_img" src="img/coin.png" alt="">
                                <p class="character_price">${item.price}</p>
                            </div>
                            <button class="character_buy">buy</button>
                        </div>
            `
        )
    }
    else if(!item.isEquip){
        $('.characters').append(
            `
            <div class="character_item" id="${item.id}">
            <img class="character_img" src="${item.img}"id="" alt="">
            <p class="character_title">${item.title}</p>
            <button class="character_select">select</button>
            `
        )
    }
    else{
        $('.characters').append(
            `
            <div class="character_item  active_character" id="${item.id}">
            <img class="character_img" src="${item.img}"id="" alt="">
            <p class="character_title">${item.title}</p>
            <button class="character_select character_select-active">selected</button>
            `
        )
    }
})






$('#money_count').text(money)





pers.map(item=>{
    $(`#${item.id} .character_buy`). click(function(){
        if(money>item.price){
            money = money-item.price
            localStorage.setItem('money',money)
            item.isStore=false
            localStorage.setItem('pers',JSON.stringify(pers))
            location.reload()
        }
        else{
            alert('Вам не вистачає шрошей!')
        }    
    })
})





pers.map(item=>{
    $(`#${item.id} .character_select`).click(function(){
        //всем убрать
        pers.map(i=>{
            i.isEquip = false
        })
    //    задать нужному
       item.isEquip = true 
       localStorage.setItem('pers',JSON.stringify(pers))
       localStorage.setItem('selectedPers',item.id)
       location.reload()

    })
})






let fons=[{
        id:'fon1',
        title:'градієнт',
        price:50,
        img:'https://img.freepik.com/free-vector/winter-blue-and-pink-gradient-background-vector_53876-117276.jpg?size=626&ext=jpg&ga=GA1.1.1788068356.1707177600&semt=ais',
        isStore:true,
        isEquip:false,
    },
    {
        id:'fon2',
        title:'білі хвилі',
        price:100,
        img:'https://img.freepik.com/premium-photo/abstract-white-wave-background-minimal-white-graphic-wallpaper-2d-illustration_67092-1294.jpg',
        isStore:true,
        isEquip:false,
    },
    {
        id:'fon3',
        title:'синій',
        price:50,
        img:'https://propowerpoint.ru/fony/delovoj%20fon%20dlya%20prezentacii/13.jpg',
        isStore:true,
        isEquip:false,
    },
    {
        id:'fon4',
        title:'барвистий',
        price:100,
        img:'https://png.pngtree.com/thumb_back/fh260/background/20201103/pngtree-ink-paint-abstract-closeup-of-the-painting-colorful-background-highly-textured-image_449868.jpg',
        isStore:true,
        isEquip:false,
    },
    {
        id:'fon5',
        title:'білий',
        price:100,
        img:'https://www.shutterstock.com/shutterstock/videos/24223858/thumb/1.jpg?ip=x480',
        isStore:true,
        isEquip:false,
    },
    {
        id:'fon6',
        title:'кульки',
        price:100,
        img:'https://img.freepik.com/free-vector/modern-three-dimensional-spheres-background_79603-1448.jpg',
        isStore:true,
        isEquip:false,
    },


]

fons=JSON.parse(localStorage.getItem('fons')) || fons

fons.map(item=>{

    if (item.isStore){
        $('.backgrounds_buy').append(
            `
            <div class="bg_merch" id="${item.id}">
                            <img class="bg_img" src="${item.img}" alt="">
                            <p class="bg_title">${item.title} </p>
                            <div class="bg_price_box">
                                <img class="bg_price_img" src="img/coin.png" alt="">
                                <p class="bg_price">${item.price}</p>
                            </div>
                            <button class="bg_buy">buy</button>
                        </div>
            `
        )
    }
    else if(!item.isEquip){
        $('.backgrounds').append(
            `
            <div class="bg_item" id="${item.id}">
            <img class="bg_img" src="${item.img}"id="" alt="">
            <p class="bg_title">${item.title}</p>
            <button class="bg_select">select</button>
            `
        )
    }
    else{
        $('.backgrounds').append(
            `
            <div class="bg_item  active_bg" id="${item.id}">
            <img class="bg_img" src="${item.img}"id="" alt="">
            <p class="bg_title">${item.title}</p>
            <button class="bg_select bg_select-active">selected</button>
            `
        )
    }
})
 
$('#money_count').text(money)


fons.map(item=>{
    $(`#${item.id} .bg_buy`). click(function(){
        if(money>item.price){
            money = money-item.price
            localStorage.setItem('money',money)
            item.isStore=false
            localStorage.setItem('fons',JSON.stringify(fons))
            location.reload()
        }
        else{
            alert('Вам не вистачає грошей!')
        }    
    })
})


// переделать под выбор фона и в script сделать подключение на wrapper как мы делали персонажа
pers.map(item=>{
    $(`#${item.id} .character_select`).click(function(){
        //всем убрать
        pers.map(i=>{
            i.isEquip = false
        })
    //    задать нужному
       item.isEquip = true 
       localStorage.setItem('pers',JSON.stringify(pers))
       localStorage.setItem('selectedPers',item.id)
       location.reload()

    })
})


fons.map(item=>{
    $(`#${item.id} .bg_select`).click(function(){
        //всем убрать
        fons.map(i=>{
            i.isEquip = false
        })
    //    задать нужному
       item.isEquip = true 
       localStorage.setItem('fons',JSON.stringify(fons))
       localStorage.setItem('selectedBg',item.id)
       location.reload()

    })
})