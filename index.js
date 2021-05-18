var faqAnswers = document.querySelectorAll(".arrow-icon");
console.log(faqAnswers);

// for (i = 0; i < len(faqAnswers); i++){
//   faqAnswers[i].addEventListener("click", function(){
//     // item.classList.replace("faq-answer-visible", "faq-answer-invisible");
//     faqAnswers[i].classList.toggle("faq-answer");
//     faqAnswers[i].classList.toggle("rotate-arrow");
//   });
// }

faqAnswers.forEach(function(item){
  item.addEventListener("click", function(){
    console.log(item.id);
    var faqNumber = "#faq" + item.id;
    var faqQuestion = "#question" + item.id;
    console.log(faqNumber);
    var faqAnswer = document.querySelector(faqNumber);
    var faqQ = document.querySelector(faqQuestion);
    faqQ.classList.toggle("faq-question-toggle");
    faqAnswer.classList.toggle("faq-answer");
    item.classList.toggle("rotate-arrow");
  });

});
