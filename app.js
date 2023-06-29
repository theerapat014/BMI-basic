function calculateBMI(weight , hight){
    let Answer=(weight/(hight**2))
    return Answer.toFixed(2)
}
function compare (bmi)
{
    if (bmi >= 30 ){
        document.getElementById("result").innerHTML =  "คุณอยู่ในเกรณ"+"อ้วนระดับ 2"
    }
    if (bmi >= 25 && bmi <=29.90){
        document.getElementById("result").innerHTML = "คุณอยู่ในเกรณ"+"อ้วนระดับ 1"
    }
    if (bmi >= 23 && bmi <=24.90){
        document.getElementById("result").innerHTML = "คุณอยู่ในเกรณ"+"น้ำหนักเกิน"
    }
    if (bmi >= 18.5 && bmi <=22.90){
        document.getElementById("result").innerHTML = "คุณอยู่ในเกรณ"+"ปกติ"
    }
    if (bmi <= 18.5){
        document.getElementById("result").innerHTML = "คุณอยู่ในเกรณ"+"ผอม"
    }
}
function run (value, result) {
   alert = compare(calculateBMI(value , result))
}
    //alert(Tocelsius(value))
//}
//alert(calculateBMI(75,1.75))
//compare(calculateBMI(65,1.75))