var p=prompt("adinizi girin?");
var isim=document.getElementById("myName");
var c=document.getElementById("myClock");
window.onload=tarih;
isim.innerHTML=p;
var d=new Date();
window.onload=tarih;

c.innerHTML=d.toDateString();
function tarih(){
    var d=new Date();
    var yil=d.getFullYear();
    var ay=d.getMonth()+1;
    var gun=d.getDate();
    var saat=d.getHours();
    if(saat<10){
        saat="0"+saat;
    }
    var dakika=d.getMinutes();
    if(dakika<10){
        dakika="0"+dakika;
    }
    var saniyo=d.getSeconds();
    if(saniyo<10){
        saniyo="0"+saniyo;
    }
    var g=d.getDay();
    switch (g) { 
        case 0: 
          g = "Pazar"; 
          break; 
        case 1: 
          g = "Pazartesi"; 
          break; 
        case 2: 
           g = "Salı"; 
          break; 
        case 3: 
          g = "Çarşamba"; 
          break; 
        case 4: 
          g = " Perşembe"; 
          break; 
        case 5: 
          g = "Cuma"; 
          break; 
        case 6: 
          g = "Cumartesi"; 
      }
    
    c.innerHTML=gun+":"+ay+":"+yil+" Saat:"+saat+":"+dakika+":"+saniyo+" "+g;

    setTimeout(tarih,1000);
}
