// questions = [
//     {
//         question: "assets/images/quizImages/acropolis-athens.webp",
//         option1: "Acapolis Athens",
//         option2: "Athens Lavent",
//         option3: "Acapolis Lavent",
//         option4: "Lavent Acapolis",
//         answer: "Acapolis Athens"
//     },
//     {
//         question: "assets/images/quizImages/ankor-wat-temple.webp",
//         option1: "Angkor Siem",
//         option2: "Athens Greece",
//         option3: "Ankor Wat Cmbodia",
//         option4: "Bayon Temple",
//         answer: "Ankor Wat Cmbodia"
//     },
//     {
//         question: "assets/images/quizImages/easter-island.webp",
//         option1: "Puna Pau Island",
//         option2: "Easter Island Chile",
//         option3: "Museum Santiago",
//         option4: "Hanga Roa",
//         answer: "Easter Island Chile"
//     },
//     {
//         question: "assets/images/quizImages/borobudur-indonesia.webp",
//         option1: "Boudur Indonesia",
//         option2: "Badrawati China",
//         option3: "Borobudur Indonesia",
//         option4: "Borobudur Malaysia",
//         answer: "Borobudur Indonesia"
//     },
//     {
//         question: "assets/images/quizImages/efes-turkey.webp",
//         option1: "Arzawan Home",
//         option2: "Efes Turkey",
//         option3: "Artemis Turkey",
//         option4: "Ephesos Celsus",
//         answer: "Efes Turkey"
//     },
//     {
//         question: "assets/images/quizImages/colosseum-rome.webp",
//         option1: "Colosseum Rome Italy",
//         option2: "Greater Hall India",
//         option3: "Colosseum Hall China",
//         option4: "Doloseum Italy",
//         answer: "Colosseum Rome Italy"
//     },
//     {
//         question: "assets/images/quizImages/effiel-tower.webp",
//         option1: "Leaning Tower of Pisa",
//         option2: "Kjiv TV Tower Ukraine",
//         option3: "Effiel Tower France",
//         option4: "Avala Tower Serbia",
//         answer: "Effiel Tower France"
//     },
//     {
//         question: "assets/images/quizImages/forbidden-city-beijing.webp",
//         option1: "Forbidden City Beijing",
//         option2: "Tranducheng Shangai",
//         option3: "Nanjing Road China",
//         option4: "Lingerin Garden Budha",
//         answer: "Forbidden City Beijing"
//     },
//     {
//         question: "assets/images/quizImages/greatsphinx-giza.webp",
//         option1: "Great Sphere of Giza Isreal",
//         option2: "Pyramid of Khafre",
//         option3: "Pyramid of Djoser",
//         option4: "Great Sphinx of Giza Egypt",
//         answer: "Great Sphinx of Giza Egypt"
//     },
//     {
//         question: "assets/images/quizImages/great-wallof-china.webp",
//         option1: "Great Wall of China",
//         option2: "Hadrian's Wall",
//         option3: "Berlin Wall",
//         option4: "Western wall",
//         answer: "Great Wall of China"
//     },
//     {
//         question: "assets/images/quizImages/hagia-sophia.webp",
//         option1: "Hagia Irene Istanbul",
//         option2: "Sultan Wall Istanbul",
//         option3: "Hagia Sophia Istanbul",
//         option4: "None of the Above",
//         answer: "Hagia Sophia Istanbul"
//     },
//     {
//         question: "assets/images/quizImages/london-tower.webp",
//         option1: "Shangai Tower",
//         option2: "London Tower",
//         option3: "Royal Clock Tower Mecca",
//         option4: "Trade Center New York",
//         answer: "London Tower"
//     },
//     {
//         question: "assets/images/quizImages/machu-picchu.webp",
//         option1: "Machu Picchu Peru",
//         option2: "Ankor Wat Cambodia",
//         option3: "Bayon Temple-Paris",
//         option4: "Cerro Machu Picchu",
//         answer: "Machu Picchu Peru"
//     },
//     {
//         question: "assets/images/quizImages/machu-picchu.webp",
//         option1: "Machu Picchu Peru",
//         option2: "Ankor Wat Cambodia",
//         option3: "Bayon Temple-Paris",
//         option4: "Cerro Machu Picchu",
//         answer: "Machu Picchu Peru"
//     },


    
//]

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
    //console.log(name)
    welcome(name)
    //return name
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
}







