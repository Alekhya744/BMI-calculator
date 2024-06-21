
document.getElementById("btn").addEventListener("click",function(){

    const ht = document.getElementById("height").value;
    const wt = document.getElementById("weight").value;
    const sta = document.getElementById("wtstatus")

    var bmi = (wt/Math.pow(ht,2)).toFixed(2);
    if(bmi<19){
        sta.innerText = "Underweight";
        sta.style.color="orange";
     }
     else if(bmi>19 && bmi<25){
        sta.innerText= "Normal weight";
        sta.style.color="green";

     }
     else {
        sta.innerText = "Obese";
        sta.style.color="red";

     }
        
    
     document.getElementById("result").value=bmi;
     
})
