function refresh(){
    let msg = window.document.getElementById('msg')
    let img = window.document.getElementById('image')
    let greet = window.document.getElementById('greet')
    let day = new Date()
    let time = day.getHours()
    

   
    msg.innerHTML = `It is ${time} hours.`
    if (time >=0 && time <12){
        //GOOD MORNING!!
        img.src ="morning.png"
        document.body.style.background = "#6699CC"
        greet.innerHTML ="Good morning!"
    } else if (time >= 12 && time <17){
        //GOOD AFTERNOON!!
        img.src ="afternoon.png"
        document.body.style.background = "#D1D100"
        greet.innerHTML ="Good afternoon!"
    } else if (time >=17 && time <20){
        //GOOD EVENING!!
        img.src ="evening.png"
        document.body.style.background = "#ff8c35"
        greet.innerHTML ="Good evening!"
    } else {
        //GOOD NIGHT
        img.src ="night2.png"
        document.body.style.background = "#181A18"
        greet.innerHTML ="Good Night!"
    }
}