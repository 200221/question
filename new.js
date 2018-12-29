// var id=document.getElementById('id')
// id.onclick=function(){
// }

var xhttp = new XMLHttpRequest();
xhttp.open("GET"," https://api.hebron-academy.com/itacademyhebron/api/academy/get_questions/");
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        let data = JSON.parse(this.responseText)
        let questions1 = document.getElementById('questions1');
       console.log(data);
        for(var i=0;i<data.questions.length;i++){
            console.log(data.questions[i])
            let objectData = `
            <div class="question">
            <div class="hr"><hr></div>
                <div class="question_ua"><p>`+data.questions[i].question+`</p></div>   
                <div class="answer_ua"><p>`+data.questions[i].answer+`</p></div>
            </div>` 

                   
            questions1.innerHTML += objectData;
        }
    }
}
xhttp.send(); 