//variable//
let heures = document.getElementById('hour');
let minutes = document.getElementById('minutes');
let secondes = document.getElementById('secondes');
let date = document.getElementById('day');

function Clock(){
    let hourDate = new Date().getHours();
    let minuteDate = new Date().getMinutes();
    let secondDate = new Date().getSeconds();
// Date //
    const option = {weekday: 'long', year: 'numeric', month: 'long', day:'numeric'}
    let fullDate = new Date().toLocaleDateString('fr-FR', option)
    
    heures.innerText = hourDate;
    minutes.innerText = minuteDate;
    secondes.innerText = secondDate;
// Date //
    date.innerText = fullDate;
    

    setTimeout(()=>{
        Clock()
    },1000);


}    

Clock()