function factorial(x) {
    if (x < 0) throw new Error("x must not be negative");
    for (var f = 1; x > 1; f *= x, x--) /* empty */;
    return f;
}

try {
    var n = Number(prompt("Please enter a positive integer", ""));
    var f = factorial(n);
    alert(n + "! = " + f);
}
catch (ex) {
    alert(ex);
}