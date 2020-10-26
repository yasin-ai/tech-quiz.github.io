
let questions = [
    {
    numb: 1,
    question: "The Internet was originally a project of which agency?",
    answer: "ARPA",
    options: [
      "ARPA",
      "NSF",
      "NSA",
      "None of these"
    ]
  },
    {
    numb: 2,
    question: "Most modern TV's draw power even if turned off. The circuit the power is used in does what function?",
    answer: "Remote control",
    options: [
      "Sound",
      "Remote control",
      "Color balance",
      "High voltage"
    ]
  },
    {
    numb: 3,
    question: "Which of the following Company buy eBay’s Indian operation?",
    answer: "Flipkart",
    options: [
      "Amazon",
      "Flipkart",
      "Snapdeal",
      "PayTM"
    ]
  },
    {
    numb: 4,
    question: "Internet is governed by",
    answer: "None of these",
    options: [
      "I & B",
      "IETF",
      "Inter NIC",
      "None of these"
    ]
  },
    {
    numb: 5,
    question: "What is the name of India's first social media app named launched by Vice President Venkiah Naidu?",
    answer: "Elyments",
    options: [
      "Milap",
      "Chatmat",
      "Connect",
      "Elyments"
    ]
  },
  {
    numb: 6,
    question: "Which of the following Indian Mobile app clinched the bronze medal at the Technovation Challenge?",
    answer: "Maitri",
    options: [
      "Maitri",
      "VithU",
      "Nirbhaya",
      "YatraMiTR"
    ]
  },
  {
    numb: 7,
    question: "Which company has signed a deal with TikTok to be a trusted technology provider in USA?",
    answer: "Oracle",
    options: [
      "Microsoft",
      "Google",
      "Amazon",
      "Oracle"
    ]
  },
  {
    numb: 8,
    question: "Which item has been banned by the Directorate General of Civil Aviation while travelling in planes?",
    answer: "Apple Mac Book",
    options: [
      "MI Phone",
      "Apple Mac Book",
      "Samsung Charger",
      "Lenovo Laptop"
    ]
  },
  {
    numb: 9,
    question: "Popshot, the world's first ever interactive browser built for smartphones was launched in which country?",
    answer: "India",
    options: [
      "China",
      "India",
      "Singapore",
      "France"
    ]
  },
  {
    numb: 10,
    question: "Facebook launches cryptocurrency which allows users to make financial transactions across the globe. It's named as;",
    answer: "Libra",
    options: [
      "Dobil",
      "Cryco",
      "Digicy",
      "Libra"
    ]
  },
  {
    numb: 11,
    question: "Facebook has confirmed, that the WhatsApp Status will start display ads from __________.",
    answer: "2020",
    options: [
      "2023",
      "2020",
      "2021",
      "2022"
    ]
  },
  {
    numb: 12,
    question: "Which social network app launched a fact-checking feature to combat fake news to the Lok Sabha elections?",
    answer: "Whatsapp",
    options: [
      "WhatsApp",
      "Facebook",
      "Twitter",
      "Instagram"
    ]
  },
  {
    numb: 13,
    question: "DotBook: India's first Braille laptop created by the students from __________.",
    answer: "Techno India University",
    options: [
      "IIT-Kharagpur",
      "IIT-Madras",
      "Techno India University",
      "IIT-Mumbai"
    ]
  },
  {
    numb: 14,
    question: "Which company revealed the World's fastest 1TB microSD card at Mobile World Congress (MWC) 2019?",
    answer: "SanDisk",
    options: [
      "Kingston Technology",
      "SanDisk",
      "Lexar",
      "Silicon Power"
    ]
  },
  {
    numb: 15,
    question: "AntBot is the first walking robot to have navigational capabilities without GPS or mapping. Who designed it?",
    answer: "CNRS & AMU",
    options: [
      "HArvard University",
      "NREC",
      "CNRS & AMU",
      "Tokyo University"
    ]
  },
  {
    numb: 16,
    question: "Which major Technology Company is to launch ‘Project Kuiper’, for building satellite infrastructure?",
    answer: "Amazon",
    options: [
      "Google",
      "Amazon",
      "Apple",
      "Samsung"
    ]
  },
  {
    numb: 17,
    question: "Which technology company has dropped facial recognition software amid racial profiling concerns?",
    answer: "IBM",
    options: [
      "Google",
      "IBM",
      "Oracle",
      "Intel"
    ]
  },
  {
    numb: 18,
    question: "Which technology company has dropped facial recognition software amid racial profiling concerns?",
    answer: "IBM",
    options: [
      "Google",
      "IBM",
      "Oracle",
      "Intel"
    ]
  },
  {
    numb: 19,
    question: "Which company has launched its new video conferencing app named ‘BlueJeans’?",
    answer: "Bharti Airtel",
    options: [
      "Jio Platforms",
      "Bharti Airtel",
      "Amazon",
      "Facebook"
    ]
  },
  {
    numb: 20,
    question: "Which is the most expensive streamiing service in India?",
    answer: "Techno India University",
    options: [
      "Netflix",
      "Amazon Prime",
      "Techno India University",
      "Hotstar"
    ]
  },
];


//Prevent Tab change

alert("Please Note: DO NOT TRY TO CHANGE TAB MORE THAN 2 TIME OR YOU WILL BE ELIMINATED")
var i=0;
window.addEventListener('blur',function(increase)
{
	i++;
alert("This is your"    + ' '+   (i) +' '+ "warning. NOTE: Only 2 warning will be given then your tab will be closed automatically");  
 //check if we should kick them out
if(i===2){
    alert("This is your last warning. Next time the window will close")
}
if (i>= 3) {
    //two plus signs will increment our variable by one
alert("Please Go Away ! You have been warned");
self.close();
		} 
}
)


//selecting all required elements
const start_btn = document.querySelector(".start_btn button");
const info_box = document.querySelector(".info_box");
const exit_btn = info_box.querySelector(".buttons .quit");
const continue_btn = info_box.querySelector(".buttons .restart");
const quiz_box = document.querySelector(".quiz_box");
const result_box = document.querySelector(".result_box");
const option_list = document.querySelector(".option_list");
const time_line = document.querySelector("header .time_line");
const timeText = document.querySelector(".timer .time_left_txt");
const timeCount = document.querySelector(".timer .timer_sec");

// if startQuiz button clicked
start_btn.onclick = ()=>{
    info_box.classList.add("activeInfo"); //show info box
}

// if exitQuiz button clicked
exit_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo"); //hide info box
}

// if continueQuiz button clicked
continue_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo"); //hide info box
    quiz_box.classList.add("activeQuiz"); //show quiz box
    showQuetions(0); //calling showQestions function
    queCounter(1); //passing 1 parameter to queCounter
    startTimer(30); //calling startTimer function
    startTimerLine(0); //calling startTimerLine function
}

let timeValue =  30;
let que_count = 0;
let que_numb = 1;
let userScore = 0;
let counter;
let counterLine;
let widthValue = 0;

const restart_quiz = result_box.querySelector(".buttons .restart");
const quit_quiz = result_box.querySelector(".buttons .quit");

// if restartQuiz button clicked
restart_quiz.onclick = ()=>{
    quiz_box.classList.add("activeQuiz"); //show quiz box
    result_box.classList.remove("activeResult"); //hide result box
    timeValue = 30; 
    que_count = 0;
    que_numb = 1;
    userScore = 0;
    widthValue = 0;
    showQuetions(que_count); //calling showQestions function
    queCounter(que_numb); //passing que_numb value to queCounter
    clearInterval(counter); //clear counter
    clearInterval(counterLine); //clear counterLine
    startTimer(timeValue); //calling startTimer function
    startTimerLine(widthValue); //calling startTimerLine function
    timeText.textContent = "Time Left"; //change the text of timeText to Time Left
    next_btn.classList.remove("show"); //hide the next button
}

// if quitQuiz button clicked
quit_quiz.onclick = ()=>{
    window.location.reload(); //reload the current window
}

const next_btn = document.querySelector("footer .next_btn");
const bottom_ques_counter = document.querySelector("footer .total_que");

// if Next Que button clicked
next_btn.onclick = ()=>{
    if(que_count < questions.length - 1){ //if question count is less than total question length
        que_count++; //increment the que_count value
        que_numb++; //increment the que_numb value
        showQuetions(que_count); //calling showQestions function
        queCounter(que_numb); //passing que_numb value to queCounter
        clearInterval(counter); //clear counter
        clearInterval(counterLine); //clear counterLine
        startTimer(timeValue); //calling startTimer function
        startTimerLine(widthValue); //calling startTimerLine function
        timeText.textContent = "Time Left"; //change the timeText to Time Left
        next_btn.classList.remove("show"); //hide the next button
    }else{
        clearInterval(counter); //clear counter
        clearInterval(counterLine); //clear counterLine
        showResult(); //calling showResult function
    }
}

// getting questions and options from array
function showQuetions(index){
    const que_text = document.querySelector(".que_text");

    //creating a new span and div tag for question and option and passing the value using array index
    let que_tag = '<span>'+ questions[index].numb + ". " + questions[index].question +'</span>';
    let option_tag = '<div class="option"><span>'+ questions[index].options[0] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[1] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[2] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[3] +'</span></div>';
    que_text.innerHTML = que_tag; //adding new span tag inside que_tag
    option_list.innerHTML = option_tag; //adding new div tag inside option_tag
    
    const option = option_list.querySelectorAll(".option");

    // set onclick attribute to all available options
    for(i=0; i < option.length; i++){
        option[i].setAttribute("onclick", "optionSelected(this)");
    }
}
// creating the new div tags which for icons
let tickIconTag = '<div class="icon tick"><i class="fas fa-check"></i></div>';
let crossIconTag = '<div class="icon cross"><i class="fas fa-times"></i></div>';

//if user clicked on option
function optionSelected(answer){
    clearInterval(counter); //clear counter
    clearInterval(counterLine); //clear counterLine
    let userAns = answer.textContent; //getting user selected option
    let correcAns = questions[que_count].answer; //getting correct answer from array
    const allOptions = option_list.children.length; //getting all option items
    
    if(userAns == correcAns){ //if user selected option is equal to array's correct answer
        userScore += 1; //upgrading score value with 1
        answer.classList.add("correct"); //adding green color to correct selected option
        answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
        console.log("Correct Answer");
        console.log("Your correct answers = " + userScore);
    }else{
        answer.classList.add("incorrect"); //adding red color to correct selected option
        answer.insertAdjacentHTML("beforeend", crossIconTag); //adding cross icon to correct selected option
        console.log("Wrong Answer");

        for(i=0; i < allOptions; i++){
            if(option_list.children[i].textContent == correcAns){ //if there is an option which is matched to an array answer 
                option_list.children[i].setAttribute("class", "option correct"); //adding green color to matched option
                option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to matched option
                console.log("Auto selected correct answer.");
            }
        }
    }
    for(i=0; i < allOptions; i++){
        option_list.children[i].classList.add("disabled"); //once user select an option then disabled all options
    }
    next_btn.classList.add("show"); //show the next button if user selected any option
}

function showResult(){
    info_box.classList.remove("activeInfo"); //hide info box
    quiz_box.classList.remove("activeQuiz"); //hide quiz box
    result_box.classList.add("activeResult"); //show result box
    const scoreText = result_box.querySelector(".score_text");
    if (userScore > 15){ // if user scored more than 15
        //creating a new span tag and passing the user score number and total question number
        let scoreTag = '<span>and congrats! 🎉, You got <p>'+ userScore +'</p> out of <p>'+ questions.length +'</p></span>';
        scoreText.innerHTML = scoreTag;  //adding new span tag inside score_Text
    }
    else if(userScore > 10){ // if user scored more than 10
        let scoreTag = '<span>and nice 😎, You got <p>'+ userScore +'</p> out of <p>'+ questions.length +'</p></span>';
        scoreText.innerHTML = scoreTag;
    }
    else{ // if user scored less than 1
        let scoreTag = '<span>and sorry 😐, You got only <p>'+ userScore +'</p> out of <p>'+ questions.length +'</p></span>';
        scoreText.innerHTML = scoreTag;
    }
}

function startTimer(time){
    counter = setInterval(timer, 1000);
    function timer(){
        timeCount.textContent = time; //changing the value of timeCount with time value
        time--; //decrement the time value
        if(time < 9){ //if timer is less than 9
            let addZero = timeCount.textContent; 
            timeCount.textContent = "0" + addZero; //add a 0 before time value
        }
        if(time < 0){ //if timer is less than 0
            clearInterval(counter); //clear counter
            timeText.textContent = "Time Off"; //change the time text to time off
            const allOptions = option_list.children.length; //getting all option items
            let correcAns = questions[que_count].answer; //getting correct answer from array
            for(i=0; i < allOptions; i++){
                if(option_list.children[i].textContent == correcAns){ //if there is an option which is matched to an array answer
                    option_list.children[i].setAttribute("class", "option correct"); //adding green color to matched option
                    option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to matched option
                    console.log("Time Off: Auto selected correct answer.");
                }
            }
            for(i=0; i < allOptions; i++){
                option_list.children[i].classList.add("disabled"); //once user select an option then disabled all options
            }
            next_btn.classList.add("show"); //show the next button if user selected any option
        }
    }
}

function startTimerLine(time){
    counterLine = setInterval(timer, 59);
    function timer(){
        time += 1; //upgrading time value with 1
        time_line.style.width = time + "px"; //increasing width of time_line with px by time value
        if(time > 549){ //if time value is greater than 549
            clearInterval(counterLine); //clear counterLine
        }
    }
}

function queCounter(index){
    //creating a new span tag and passing the question number and total question
    let totalQueCounTag = '<span><p>'+ index +'</p> of <p>'+ questions.length +'</p> Questions</span>';
    bottom_ques_counter.innerHTML = totalQueCounTag;  //adding new span tag inside bottom_ques_counter
}
