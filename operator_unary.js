// ---------------------------------------------------------------------------------------------------
document.writeln("<br> Operator Unary yang diisi secara langsung dengan output file secara terpisah");

let result = +4; //4
document.writeln("<li>" + result + "</li>");

result ++; // result = result + 1; = 5
document.writeln("<li>" + result + "</li>");

result --; // result = result - 1; = 4
document.writeln("<li>" + result + "</li>");

result = -result; // result = -(result); = -(4)
document.writeln("<li>" + result + "</li>");

result = +result;// result = +(result); = +(-4); -4
document.writeln("<li>" + result + "</li>");

// ---------------------------------------------------------------------------------------------------