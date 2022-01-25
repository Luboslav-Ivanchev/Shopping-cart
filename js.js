function solve() {


 let button1=document.getElementsByClassName('add-product')[0];

    let button2=document.getElementsByClassName('add-product')[1];
    let button3=document.getElementsByClassName('add-product')[2];

 let textArea=document.querySelector('textarea');


    textArea.removeAttribute('disabled');


    let bread=document.getElementsByClassName('product-title')[0];
    let milk=document.getElementsByClassName('product-title')[1];
    let tomatoes=document.getElementsByClassName('product-title')[2];

    let priceBread=document.getElementsByClassName('product-line-price')[0];

    let priceMilk=document.getElementsByClassName('product-line-price')[1];
    let priceTomatoes=document.getElementsByClassName('product-line-price')[2];


    let totalPrice=0;

    let list='';

    let checkOut=document.getElementsByClassName('checkout')[0];

    button1.addEventListener('click',function () {

        textArea.append(`Added ${bread.textContent} for $${priceBread.textContent} to the cart.\n`)

totalPrice+=Number(priceBread.textContent);

        list+=`${bread.textContent},`

    });

    button2.addEventListener('click',function () {
        textArea.append(`Added ${milk.textContent} for $${priceMilk.textContent} to the cart.\n`)

        totalPrice+=Number(priceMilk.textContent);
        list+=`${milk.textContent},`
    })

    button3.addEventListener('click',function () {
        textArea.append(`Added ${tomatoes.textContent} for $${priceTomatoes.textContent} to the cart.\n`)

        totalPrice+=Number(priceTomatoes.textContent);
        list+=`${tomatoes.textContent},`
    })


    checkOut.addEventListener('click',function () {






        textArea.append(`You bought ${list} for ${totalPrice.toFixed(2)}.`)

    })


}

