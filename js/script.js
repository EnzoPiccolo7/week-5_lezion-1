var data = new Date();
let day = data.getDate();
let month = data.getMonth();
let year = data.getFullYear();
let hours = data.getHours();
let minute = data.getMinutes();
let second = data.getSeconds();
document.getElementById("dataod").innerHTML = data;
document.getElementById("annood").innerHTML = data.getFullYear();
document.getElementById("meseod").innerHTML = data.getMonth() +1;
document.getElementById("giornood").innerHTML = data.getDate();
document.getElementById("date").innerHTML = 'Sono le ' +  hours + ':' + minute + '  Del ' +  day + '/' + (month +1) + '/' + year;

document.getElementById("dataprec").innerHTML = 'Sono le ' +  hours + ":" ;

setInterval(() => {
    let datina; 
    datina = new Date();
    let minu;
    minu = datina.getMinutes();
    document.getElementById("minutini").innerHTML = minu + ":";
}, 900); 

 setInterval(() => {
     let dat; 
     dat = new Date();
     let seco;
     seco = dat.getSeconds();
     document.getElementById("secondini").innerHTML = seco;
 }, 1000); 
