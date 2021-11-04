# Greet

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Day Time</title>
    <link rel="stylesheet" href="style.css">
</head>
<body onload="refresh()">
    <header>
        <h1>What time is it ?</h1>
    </header>
    <section>
        <div id="msg">
           message will display here...

        </div>
        <div id="greet">
            message here

        </div>
        <div id="picture">
           <img id="image"src="morning.png" alt="dayPhoto">
        </div>
    </section>
    <footer>
        <p>&copy; JoaoHaubert</p>
    </footer>
    <script src="script.js"></script>
</body>
</html>


/*----- STYLE.CSS-----*/

body {
    background: rgb(8, 102, 90);
    font: normal 16pt arial;
   
   
}

header {
    color:white;
    text-align: center;
}

section {
    background: white;
    border-radius: 350px;
    padding:20px;
    width: 500px;
    margin:auto;
    box-shadow: 10px 10px 15px rgba(10, 10, 10, 0.61);
    



}
div{
    text-align: center;
    padding: 10px;
}

footer {
    color:white;
    text-align: center;
    font-style: italic;

}


/*-----SCRIPT.JS-----*/

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
