let guests = prompt('How many people are coming to your wedding?');

function getPrice(guests){
    let cost = 0;
    // Your code here
    if (guests <= 50)
        console.log("el costo por la boda");
    else if (guests <= 100)
        console.log("if2");
    else if (guests <= 200)
        console.log("if3");
    else (guests > 200)
        console.log("else");
    return cost;
}

let price = getPrice(guests);
console.log('Your wedding will cost '+price+' dollars');
