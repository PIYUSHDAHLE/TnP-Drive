var num = prompt("Enter the number");

if (num === null||num.trim()==='' || isNaN(num)===true) {   
    console.log("Please enter the number");
}else{
    let newnum = Number(num);
    if (newnum >= 0) {
        console.log("Positive");
    }else{
        console.log("Negititve");
    }
}