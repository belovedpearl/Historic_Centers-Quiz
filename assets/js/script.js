
let questions = [
    {
        question: "assets/images/quizImages/acropolis-athens.webp",
        options: ["Acapolis Athens","Athens Lavent","Acapolis Lavent", "Lavent Acapolis"],
        answer: "Acapolis Athens"
    },
    {
        question: "assets/images/quizImages/ankor-wat-temple.webp",
        options: ["Angkor Siem","Athens Greece","Ankor Wat Cmbodia","Bayon Temple"],
        answer: "Ankor Wat Cmbodia"
    },
    {
        question: "assets/images/quizImages/easter-island.webp",
        options: ["Puna Pau Island","Easter Island Chile","Museum Santiago","Hanga Roa"],
        answer: "Easter Island Chile"
    },
    {
        question: "assets/images/quizImages/borobudur-indonesia.webp",
        options: ["Boudur Indonesia","Badrawati China","Borobudur Indonesia","Borobudur Malaysia"],
        answer: "Borobudur Indonesia"
    },
    {
        question: "assets/images/quizImages/efes-turkey.webp",
        options: ["Arzawan Home","Efes Turkey","Artemis Turkey","Ephesos Celsus"],
        answer: "Efes Turkey"
    },
    {
        question: "assets/images/quizImages/colosseum-rome.webp",
        options: ["Colosseum Rome Italy","Greater Hall India","Colosseum Hall China","Doloseum Italy"],
        answer: "Colosseum Rome Italy"
    },
    {
        question: "assets/images/quizImages/effiel-tower.webp",
        options: ["Leaning Tower of Pisa","Kjiv TV Tower Ukraine","Effiel Tower France","Avala Tower Serbia"],
        answer: "Effiel Tower France"
    },
    {
        question: "assets/images/quizImages/forbidden-city-beijing.webp",
        options: ["Forbidden City Beijing","Tranducheng Shangai","Nanjing Road China","Lingerin Garden Budha"],
        answer: "Forbidden City Beijing"
    },
    {
        question: "assets/images/quizImages/greatsphinx-giza.webp",
        options: ["Great Sphere of Giza Isreal","Pyramid of Khafre","Pyramid of Djoser","Great Sphinx of Giza Egypt"],
        answer: "Great Sphinx of Giza Egypt"
    },
    {
        question: "assets/images/quizImages/great-wallof-china.webp",
        options: ["Great Wall of China","Hadrian's Wall","Berlin Wall","Western wall"],
        answer: "Great Wall of China"
    },
    {
        question: "assets/images/quizImages/hagia-sophia.webp",
        options: ["Hagia Irene Istanbul","Sultan Wall Istanbul","Hagia Sophia Istanbul","None of the Above"],
        answer: "Hagia Sophia Istanbul"
    },
    {
        question: "assets/images/quizImages/london-tower.webp",
        options: ["Shangai Tower","London Tower","Royal Clock Tower Mecca","Trade Center New York"],
        answer:  "London Tower"
    },
    {
        question: "assets/images/quizImages/machu-picchu.webp",
        options: ["Machu Picchu Peru","Ankor Wat Cambodia","Bayon Temple-Paris","Cerro Machu Picchu"],
        answer: "Machu Picchu Peru"
    },
    {
        question: "assets/images/quizImages/machu-picchu.webp",
        options: ["Machu Picchu Peru","Ankor Wat Cambodia","Bayon Temple-Paris","Cerro Machu Picchu"],
        answer: "Machu Picchu Peru"
    },

    {
        question: "assets/images/quizImage/mount-rushmore.webp",
        options: ["Mount Argus Dublin","Mount Ararat Turkey","Mount Rushmore United States","Mount Arbet Isreal"],
        answer: "Mount Rushmore United States"
    },
    {
        question: "assets/images/quizImage/petra.webp",
        options: ["Ankor ","Acropolis Athens","Petra Jordan","Taj Mahal"],
        answer: "Petra Jordan"
    },
    {
        question: "assets/images/quizImage/pyramid-of-kukulkan",
        options: ["Pyramid of Tiza Mexico","Pyramid of Kukulkan","Pyramid of Giza","Pyramid of Cholula Mexico"],
        answer: "Pyramid of Kukulkan"
    },
    {
        question: "assets/images/quizImage/stonehenge-england.webp",
        options: ["Stone Henge England","Avebury England","Woodhenge England","Stone Henge Nebraska"],
        answer: "Stone Henge England"
    },
    {
        question: "assets/images/quizImage/taj-mahal.webp",
        options: ["Petra Jordan","Shah Jahan Paris","Taj Mahal India","Ankor Wat"],
        answer: "Taj Mahal India"
    },
    {
        question: "assets/images/quizImage/westminster-palace.webp",
        options: ["Kensington Palace London","Central White Hall Palace","Westminster Palace London","Buckingham Palace"],
        answer: "Westminster Palace London"
    },
    
];

let currentQuestion = null;

let questioncounter = 0;


function instruct(){
    document.getElementById("firstPage").classList.add("hide"); 
    document.getElementById("howTo").classList.remove("hide");   
}

function enterName(){
    document.getElementById("firstPage").classList.add("hide"); 
    document.getElementById("nameArea").classList.remove("hide");
}

function backHome(){
    document.getElementById("firstPage").classList.remove("hide"); 
    document.getElementById("howTo").classList.add("hide");
}

function submit(){
    let name = document.getElementById("nameValue").value;
    document.getElementById("nameArea").classList.add("hide");
    let welcomePage = document.getElementById("welcome");
    welcomePage.classList.remove("hide");
    welcome(name)
}

function welcome(name){
    console.log(name)
    let playerName = document.getElementById("playerName");
    playerName.innerText = name
}

function startGame(){
    let gameStartArea = document.getElementById("game");
    gameStartArea.classList.remove("hide");
    let welcomePage = document.getElementById("welcome");
    welcomePage.classList.add("hide");

    runGame()
    countdown()
}



function runGame(){
    resetOptions()
    let questionNumber = document.getElementById("questionNum");
    questionNumber.innerText = questioncounter++;
   //console.log(questioncounter)
    if (questioncounter > 10){
        stopGame()
        }else if(questioncounter <= 10){
        const questionIndex = Math.floor(Math.random() * 5);
        currentQuestion = questions[questionIndex];

        let image = document.getElementById("questionImage");
        image.src = currentQuestion.question;
        
        let choice1 = document.getElementById("option1");
        choice1.innerText = currentQuestion.options[0];
        let choice2 = document.getElementById("option2");
        choice2.innerText = currentQuestion.options[1];
        let choice3 = document.getElementById("option3");
        choice3.innerText = currentQuestion.options[2];
        let choice4 = document.getElementById("option4");
        choice4.innerText = currentQuestion.options[3];
        // Splice is used to remove the current question from the available questions to avoid repitition of questions
        questions.splice(questionIndex, 1) 
    }
    
}

function countdown(){
   let counter = 60;
    setInterval(()=>{
    let time = document.getElementById("time");
    time.innerText = counter--;
     if(counter === 0){
         time.innerText = "Time Up!!!"
         stopGame()
     }
    }, 1000)
    
 }


function disableClick(){
    let options = document.getElementsByClassName("choice");
    console.log(options)
    for (let option of options){
        option.disabled = true;
    }
}



function increaseScore(){
    let score = document.getElementById("points").innerText;
    document.getElementById('points').innerText = ++score;
}

function increaseWrong(){
    let wrong = document.getElementById("wrong").innerText;
    document.getElementById('wrong').innerText = ++wrong;
}


let choices = document.getElementsByClassName("choice")
for (let choice of choices){
    choice.addEventListener("click", e => {
        let selectAns = e.target;
        console.log(selectAns);
        if (selectAns.innerText === currentQuestion.answer){
            choice.classList.add("correct"); 
        increaseScore()
        progressBar()
        
        }else{
            choice.classList.add("wrong")
            increaseWrong()
            // let questionImage = document.getElementById("questionImage");
            // questionImage.classList.add("wrong-ans");
            // setTimeout(function(){ questionImage.classList.remove("wrong-ans")}, 350)
    } 
     disableClick();
        setTimeout(runGame, 1000);
})}


function resetOptions(){
    let choices = document.getElementsByClassName("choice");
    for (let choice of choices){
        choice.disabled = false;
        choice.classList.remove("correct");
        choice.classList.remove("wrong");
    }
}

 function stopGame(){
    setTimeout(function (){
        let restart = document.getElementById("restart");
        restart.focus()
    }, 360)

document.body.classList.add("overlay")
let score = document.getElementById("points").innerText;
let wrong = document.getElementById("wrong").innerText;
let rightAns = document.getElementById("rightAns");
    rightAns.innerText = score;
let totalScore = document.getElementById("totalScore");
    totalScore.innerText = score * 10;

}

 function progressBar(){
    let score = document.getElementById("points").innerText;
    
    let progressBar = document.querySelector(".progress-inner");
    progressBar.style.transform = `scaleX(${score/10})`
 }
 function startOver(){
    document.body.classList.remove("overlay");
    questioncounter = 0;
    let score = document.getElementById("points").innerText;
    score.innerText = 0;
    let wrong = document.getElementById("wrong").innerText;
    wrong.innerText = 0;
    window.location.reload()
 }