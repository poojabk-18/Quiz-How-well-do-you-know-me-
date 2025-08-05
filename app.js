const question = [
    {
        ques : "What do I prefer?" ,
        ans : [
            {text : "Cold Coffee" , correction : true },
            {text : "Tea" , correction : false },
            {text : "Hot Coffee" , correction : false },
            {text : "Cold Drink" , correction : false }
        ]
    } , 
    {
        ques : "What do I like the most?" ,
        ans : [
            {text : "Cats" , correction : false },
            {text : "Birds" , correction : false },
            {text : "Dogs" , correction : true },
            {text : "Birds" , correction : false }
        ]
    } , 
    {
        ques : "Which is my favourite food?" ,
        ans : [
            {text : "Vada Pav" , correction : false },
            {text : "Golgappa" , correction : true },
            {text : "Thin crust pizza" , correction : false },
            {text : "Dhokla" , correction : false },
        ]
    } , 
    {
        ques : "What is my hobby?" ,
        ans : [
            {text : "Sleeping" , correction : false},
            {text : "Stitching" , correction : true },
            {text : "K-drama" , correction : false },
            {text : "Stamp Collecting" , correction : false }
        ]
    } , 
    {
        ques : "Which is my favourite movie genre?" ,
        ans : [
            {text : "Action" , correction : false },
            {text : "Horror" , correction : false },
            {text : "Murder-mystery" , correction : true },
            {text : "Romantic" , correction : false }
        ]
    } , 
    {
        ques : "Which is my favorite ice-cream?" ,
        ans : [
            {text : "Gudbad" , correction : false },
            {text : "Chocolate-Dad" , correction : false },
            {text : "Perfait" , correction : false },
            {text : "Tiramisu" , correction : true }
        ]
    } 
];

const dispques = document.getElementById("ques")
const answer = document.querySelector(".answers")
const next = document.getElementById("next")

let quesIndex = 0;
let score = 0;

function startQuiz(){
 quesIndex = 0;
 score = 0;
 next.innerHTML = "Next";
 showques();
}
function reset(){
    next.style.display = "none";
    while(answer.firstChild){
        answer.removeChild(answer.firstChild)
    }
}
function showques(){
     reset();
    let currentques =  question[quesIndex]
    let quesno = quesIndex + 1;
    dispques.innerHTML = quesno + " . " + currentques.ques 

currentques.ans.forEach(a => {
    const button = document.createElement("button")
    button.innerHTML = a.text;
    button.classList.add("option")
    answer.appendChild(button)
    if(a.correction){
        button.dataset.correction = a.correction
    }
    button.addEventListener("click" , selectans)
});
}

function selectans(e){
    const selectedbtn = e.target;
    let isCorrect = selectedbtn.dataset.correction === "true";
    if(isCorrect){
        selectedbtn.classList.add("correct")
        score++
        answer.style.backgroundcolor = "transparent"
    }else{
        selectedbtn.classList.add("incorrect")
    }
    Array.from(answer.children).forEach(button => {
        if(button.dataset.correction === "true"){
            button.classList.add("correct");
        }
        button.disabled=true;
    });
    next.style.display = "block"
}

next.addEventListener("click" , ()=>{
    if(quesIndex < question.length){
        handleNextButton()
    }else{
        startQuiz()
    }
}) 

function handleNextButton(){
    quesIndex++
    if(quesIndex<question.length){
        showques()
    }
    else{
        showscore()
    }
}
function showscore(){
    reset();
    ques.innerHTML = "Your score is " + score+ "/" + question.length ;
    next.innerHTML = "Play Again"
    next.style.display = "block"
}

startQuiz()