
function factorial(x) {
    if (x < 0) throw new Error("x must not be negative");
    for (var f = 1; x > 1; f *= x, x--);
    return f;
}

factorial(-1)
factorial(4)