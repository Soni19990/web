function goStepTwo() {
  stepInfo.style.display = "none";
    stepPlan.style.display = "flex";
    circle1.style.color = "white";
    circle1.style.backgroundColor = "rgba(255, 255, 255, 0)";
    circle2.style.backgroundColor = "rgb(255, 255, 255)";
    circle2.style.color = "black";
}

function backStepOne() {
  stepInfo.style.display = "flex";
  stepPlan.style.display = "none";
  circle1.style.color = "black";
  circle1.style.backgroundColor = "rgba(255, 255, 255)";
  circle2.style.backgroundColor = "rgb(255, 255, 255, 0)";
  circle2.style.color = "white";
}
function goStepThree() {
  stepPlan.style.display = "none";
  stepAddOn.style.display = "flex";
  circle2.style.color = "white";
  circle2.style.backgroundColor = "rgba(255, 255, 255, 0)";
  circle3.style.backgroundColor = "rgb(255, 255, 255)";
  circle3.style.color = "black";
}
function backSteptTwo() {
  stepPlan.style.display = "flex";
  stepAddOn.style.display = "none";
  circle2.style.color = "black";
  circle2.style.backgroundColor = "rgba(255, 255, 255)";
  circle3.style.backgroundColor = "rgb(255, 255, 255, 0)";
  circle3.style.color = "white";
}

function goStepFour() {
  stepSummary.style.display = "flex";
  stepAddOn.style.display = "none";
  circle3.style.color = "white";
  circle3.style.backgroundColor = "rgba(255, 255, 255, 0)";
  circle4.style.backgroundColor = "rgb(255, 255, 255)";
  circle4.style.color = "black";

}

function backStepThree() {
  stepSummary.style.display = "none";
  stepAddOn.style.display = "flex";
  circle3.style.color = "black";
  circle3.style.backgroundColor = "rgba(255, 255, 255)";
  circle4.style.backgroundColor = "rgb(255, 255, 255, 0)";
  circle4.style.color = "white";
}

function goFromFourToTwo() {
  stepSummary.style.display = "none";
  stepPlan.style.display = "flex";
  circle2.style.color = "black";
  circle2.style.backgroundColor = "rgba(255, 255, 255)";
  circle4.style.backgroundColor = "rgb(255, 255, 255, 0)";
  circle4.style.color = "white";
}

function goToStepThankYou() {
    stepSummary.style.display = "none";
    stepThankYou.style.display = "flex";
}



