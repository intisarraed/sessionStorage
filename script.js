let num = Math.random();
let hold = document.getElementById("sesion");

let rand=sessionStorage.getItem("sessionid");
hold.innerHTML=rand;

if(sessionStorage.getItem('sessionid')){
    hold.innerHTML = sessionStorage.getItem('sessionid');
}
else {
    sessionStorage.setItem('sessionid',num);
    hold.innerHTML = sessionStorage.getItem('sessionid');
}

