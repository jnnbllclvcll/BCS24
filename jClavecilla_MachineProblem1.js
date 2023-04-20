/* ITCS227LA Source Code Template Midterm Examination 2022-2023

    Program: Computation of Grades using Function
    Programmer: Jonnabelle T. Clavecilla
    Section: BCS24
    Start Date: April 17, 2023
    End Date: April 20, 2023
*/

function gradeStudent(){
    const Table = require('cli-table');
    const prompt = require('prompt-sync')();
    let tableOutput= new Table ({

        head: [
           'Name of Student',
           'Class Participation',
           'Summative Assessment',
           'Exam Grade',
           'Grade Score',
           'Letter Grade',
        ]
    });

    const studentName = [];
    const e1 = [];
    const e2 = [];
    const e3 = [];
    const e4 = [];
    const e5 = [];
    const s1 = [];
    const s2 = [];
    const s3 = [];
    const letterGrade = [];
    const mExam= [];
    const classParGrade= [];
    const sumGrade= [];
    const grade= [];

    let numStudents = prompt("How many students to input? ");
    let inputStudents = parseInt(numStudents);

        for(i=0; i<inputStudents;i++) {
            studentName[i] = prompt("Enter the name of the student: ");
            e1[i] = parseInt(prompt("Enter Enabling Assessment 1: "));
            e2[i] = parseInt(prompt("Enter Enabling Assessment 2: "));
            e3[i] = parseInt(prompt("Enter Enabling Assessment 3: "));
            e4[i] = parseInt(prompt("Enter Enabling Assessment 4: "));
            e5[i] = parseInt(prompt("Enter Enabling Assessment 5: "));
            s1[i] = parseInt(prompt("Enter Summative Assessment 1: "));
            s2[i] = parseInt(prompt("Enter Summative Assessment 2: "));
            s3[i] = parseInt(prompt("Enter Summative Assessment 3: "));
            mExam[i]= parseInt(prompt("Enter Major Exam grade: "));

            classParGrade[i]= Math.round(parseFloat((e1[i]+e2[i]+e3[i]+e4[i]+e5[i])/5));
            sumGrade[i]= Math.round(parseFloat((s1[i]+s2[i]+s3[i])/3));
            grade[i]= Math.round(parseFloat((classParGrade[i]*.30)+(sumGrade[i]*.30)+(mExam[i]*.40)));

                if (grade[i]>=90 && grade[i]<=100) {
                    letterGrade[i]='A';

                }
                else if (grade[i]>=80 && grade[i]<=89) {
                    letterGrade[i]='B';
                    
                }
                else if (grade[i]>=70 && grade[i]<=79) {
                    letterGrade[i]='C';
                    
                }
                else if (grade[i]>=60 && grade[i]<=69){
                    letterGrade[i]='D';
                    
                }
                else if (grade[i]<=60){
                    letterGrade[i]='F';
                    
                }
                else {
                    letterGrade[i]='-'
                }
        }

        for (j=0;j<inputStudents;j++){
            let gradeTable =[
                studentName[j],
                classParGrade[j],
                sumGrade[j],
                mExam[j],
                grade[j],
                letterGrade[j],
            ]
            tableOutput.push(gradeTable);
    }

    console.log(tableOutput.toString());
    return;
}

gradeStudent();