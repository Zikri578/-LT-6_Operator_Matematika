// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    document.writeln("Operator Arimatika untuk menyimpan hasil sementara didalam let dengan output file secara terpisah <br>");

    //Operator aritmatika Power of numbers
    let result = 12**3;
    document.writeln("<li> 12 **3 = "+ result + "</li>");
    let temporaryresult = result; //create a new variable to temporarily store 1728 results.

    // Operator aritmatika Modulus
    result = result % 25;
    document.writeln("<li>"+ temporaryresult +"% 25 = "+ result + "</li>");
    temporaryresult = result;

    // Operator aritmatika Multiplied
    result = result * 6;
    document.writeln("<li>"+ temporaryresult +"* 6 = "+ result + "</li>");
    temporaryresult = result;

    // Operator arimatika Divided
    result = result / 4;
    document.writeln("<li>"+ temporaryresult +"/ 4 = "+ result + "</li>");
    temporaryresult = result;

    // Operator Aritmatika Plus
    result = result + 56;
    document.writeln("<li>" + temporaryresult + "+ 56 = "+ result +"</li>");
    temporaryresult = result;

    result = result - 12;
    document.writeln("<li>" + temporaryresult + "- 12 = "+ result +"</li>");
    document.writeln("<br>");

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~