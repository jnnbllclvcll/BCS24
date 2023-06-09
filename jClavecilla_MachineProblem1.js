function calculateGrades() {
      let students = [];
      let output = "<table><tr><th>Name</th><th>Class Participation</th><th>Summative Assessment</th><th>Grade</th><th>Letter Grade</th></tr>";
      let letters = ['F', 'D', 'C', 'B', 'A'];
      
      // loop through each student
      for (let i = 0; i < 5; i++) {
        let student = {};
        
        // get student's name
        student.name = prompt("Enter student's name:");
        
        // get student's class participation
        let classParticipation = 0;
        for (let j = 0; j < 5; j++) {
          classParticipation += parseInt(prompt("Enter student's Enabling Assessment " + (j+1) + ":"));
        }
        student.classParticipation = classParticipation / 5;
        
        // get student's summative grade
        let summativeGrade = 0;
        for (let j = 0; j < 3; j++) {
          summativeGrade += parseInt(prompt("Enter student's Summative Assessment " + (j+1) + ":"));
        }
        student.summativeGrade = summativeGrade / 3;
        
        // calculate student's grade
        student.grade = (student.classParticipation * 0.3) + (student.summativeGrade * 0.3) + (parseInt(prompt("Enter student's Major Exam grade:")) * 0.4);
        
        // calculate student's letter grade
        if (student.grade < 60) {
          student.letterGrade = letters[0];
        } else if (student.grade < 70) {
          student.letterGrade = letters[1];
        } else if (student.grade < 80) {
          student.letterGrade = letters[2];
        } else if (student.grade < 90) {
          student.letterGrade = letters[3];
        } else {
          student.letterGrade = letters[4];
        }
        
        // add student to array
        students.push(student);
      }
      
      // display results in table format
      for (let i = 0; i < students.length; i++) {
        output += "<tr><td>" + students[i].name + "</td><td>" + students[i].classParticipation.toFixed(2) + "</td><td>" + students[i].summativeGrade.toFixed(2) + "</td><td>" + students[i].grade.toFixed(2) + "</td><td>" + students[i].letterGrade + "</td></tr>";
      }
      output += "</table>";
      document.getElementById("output").innerHTML = output;
    }