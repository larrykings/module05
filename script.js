const quizData = [
    {
        question:"1.How often are work-planning meetings held?",
        a:"Everyday.",
        b:"Regularly.",
        c:"At the start of every shift",
        d:"At the end of every shift",
        correc:"b",
    },
    {
        question:"2. if isolations are required for a particular work activity Preparation Re-instatement Certificate wil be required",
        a:"Yes",
        b:"No",
        c:"sometimes",
        d:"None of the above",
        correct:"a",
    },
    {
        question:"3. If portable gas monitors are required at the worksite during the work activity, where this indicated on the work permit?",
        a:"Box 6",
        b:"Box 7",
        c:"Box 8",
        d:"Box 9",
        correct:"8",
    },
    {
        question:"4. How long is a work permit endorsement valid for?",
        a:"14 consecutive days",
        b:"For as long as required",
        c:"1 shift",
        d:"For as long as the Permit Authority decides",
        correct:"c",
    },
    {
        question:"5. Who must the worksite supervisor obtain 1st shift endorsement from before the work can begin?",
        a:"Permit Authority",
        b:"Permit Controller",
        c:"Permit Applicant",
        d:"Authorised Electrical Personnel",
        correct:"b",
    },
    {
        question:"6. Who is responsible for signing the work permit under the following declarations?'i will remain on site as defined by the permit authority and obtain necessary shift change endorsement'",
        a:"Permit Authority",
        b:"Permit User",
        c:"Work site Supervisor",
        d:"Permit Applicant",
        correct:"c",
    },
    {
        question:"7. Where are the suspended work permits displayed?",
        a:"At the worksite ",
        b:"In the permit authority's office",
        c:"In the pending Permit section of the Permit display board",
        d:"Anywhere suitable in the control room",
        correct:"c",
    },
    {
        question:"8. In which box will the permit applicant enter a full description of the work site, the equipments to be worked on and the nature of work?",
        a:"Box 1",
        b:"Box 2",
        c:"Box 3",
        d:"Box 4",
        correct:"a",
    },
    {
        question:"9. Who would typically Lead a toolbox talk and who would normally attend?",
        a:"Permit Controller",
        b:"Permit Authority",
        c:"Permit Applicant",
        d:"Work site supervisor and Permit User",
        correct:"d",
    },
    {
        question:"10. Who is responsible for ensuring that all the preparation of the work are completed prior to the work permit authorisation(issue)?",
        a:"Permit Authority",
        b:"Permit User",
        c:"Work site supervisor",
        d:"Permit Controller",
        correct:"d",
    },
    {
        question:"11. Following the Toolbox Talk, what is done with the original of the work permit and associated Certificate?",
        a:"Returned to the control Room",
        b:"Displayed at the Worksite",
        c:"Sent to the Safety Department",
        D:"Given to the Permit Authority",
        correct:"b",
    },
    {
        question:"12. No Amendments prior to issue may be made to a Work Permit unless it is the addition of further safety precautions approved by the Permit Authority",
        a:"True",
        b:"False",
        C:"Sometimes",
        d:"Maybe",
        correct:"a",
    },
    {
      question:"13. Who is NOT responsible for ensuring that isolations are implemented correctly as specified",
      a:"Permit Controller",
      b:"Radiation Protection supervisor",
      c:"Permit User",
      d:"Permit Applicant",
      correct:"b",
    },
    {
        question:"14. On which document are the lockout box numbers recorded?",
        a:"Work Permit",
        b:"Preparation Re-instatement Certificate",
        c:"De-isolation for Test Certificate",
        d:"Confined space Entry Certificate",
        correct:"b",
    },
    {
        question:"15. When lockout boxes are used to store Padlock Keys, who retains Key C (Control Key)",
        a:"Permit Controller",
        b:"Permit Authority",
        c:"Worksite Supervisor",
        d:"Permit Applicant",
        correct:"a",
    },
    {
        question:"16. Isolation tags may be removed whilst the work is being carried out",
        a:"True",
        b:"False",
        c:"Sometimes",
        d:"Maybe",
        correct:"b",
    },

]
const quiz= document.getElementById("quiz")
const answerEls = document.querySelectorAll(".answer")
const questionEl= document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz ()
function loadQuiz(){
    deselectAnswers()
    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d

}
function deselectAnswers(){
    answerEls.forEach(answerEl => answerEl.checked = false)
}
function getSelected (){
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked){
            answer= answerEl.id}
        })
        return answer
}
submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer){
        if(answer ===  quizData[currentQuiz].correct) {
            score++
        }
        currentQuiz++
        if(currentQuiz < quizData.length) {
            loadQuiz()
        }else{
            quiz.innerHTML =`
            <h2>You answered ${Math.round(score/quizData.length*100)}% questions correctly 
            </h2>
            <button onclick="location.reload()">Reload</button>
            <button onclick="location.href ='https://quiz-mainpage.vercel.app/';">Back</button>
            `
        }
        
    }
})