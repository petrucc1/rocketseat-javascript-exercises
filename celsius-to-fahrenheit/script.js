// In this challenge we will make a function that will receive a string in Celsius or Fahrenheit, and do the transformation from one unit to the other.

function temperature(degree) {
    const celsiusExists = degree.toUpperCase().includes('C');
    const fahrenheitExists = degree.toUpperCase().includes('F');
    
    // Error
    if (!celsiusExists && !fahrenheitExists) {
        throw new Error('Not identified.');
    }

    // F -> C
    let updateDegree = Number(degree.toUpperCase().replace("F", ""));
    let formula = (fahrenheit) => (fahrenheit - 32) * 5/9;
    let degreeSign = 'C';
    
    // C -> F
    if (celsiusExists) {
        updateDegree = Number(degree.toUpperCase().replace("C", ""));
        formula = (celsius) => celsius * 9/5 + 32;
        degreeSign = 'F';
    }
    return formula(updateDegree) + degreeSign;
}

// try {
//     temperature('33C');
//     temperature('33E');
// } catch (error) {
//     console.error(error);
// }
