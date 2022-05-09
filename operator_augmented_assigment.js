// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    document.writeln("Operator Arimatika Assigment untuk menyimpan hasil sementara didalam let dengan output file secara terpisah <br>");

    //Operator aritmatika Power of numbers
    let result = 15**3;
    document.writeln("<li> 15 **3 = "+ result + "</li>");
    let temporaryresult = result; //create a new variable to temporarily store 1728 results.

    // Operator aritmatika Modulus
    result %= 25;
    document.writeln("<li>"+ temporaryresult +"% 25 = "+ result + "</li>");
    temporaryresult = result;

    // Operator aritmatika Multiplied
    result *= 6;
    document.writeln("<li>"+ temporaryresult +"* 6 = "+ result + "</li>");
    temporaryresult = result;

    // Operator arimatika Divided
    result /= 4;
    document.writeln("<li>"+ temporaryresult +"/ 4 = "+ result + "</li>");
    temporaryresult = result;

    // Operator Aritmatika Plus
    result += 56;
    document.writeln("<li>" + temporaryresult + "+ 56 = "+ result +"</li>");
    temporaryresult = result;

    result -= 12;
    document.writeln("<li>" + temporaryresult + "- 12 = "+ result +"</li>");
    document.writeln("<br>");

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~