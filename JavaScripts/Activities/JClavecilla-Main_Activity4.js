function areaOfCircle(r){
    pi = 3.14;
    area = pi * (r)**2
    return area;
}

circleArea = areaOfCircle(100)
console.log(`The Area of the Circle is: ${circleArea}`);


function gradeCheck(score, totalScore){
    percentage = (score/totalScore)*100;
    isPassed = percentage > 75;
    return isPassed;
}

isPassingScore = gradeCheck(40, 50);
console.log(isPassingScore);