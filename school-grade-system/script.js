// This exercise will work on transforming school grades, where we must create an algorithm to transform numerical grades into character grades.

function getGrades(grades) {
    let grades = 0;
    
    if (grades >= 90) {
        return "A";
    } else if (grades >= 80 && grades <= 89) {
        return "B";
    } else if (grades >= 70 && grades <= 79) {
        return "C";
    } else if (grades >= 60 && grades <= 69) {
        return "D";
    } else if (grades < 60) {
        return "F";
    } else {
        return "Nota inválida.";
    }
}

console.log(getGrades(-1));
