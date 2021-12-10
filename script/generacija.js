function generuoti() {
    debugger;
    let text = ""

    let v;

    do {
        v = Math.floor(Math.random() * 6) + 1
        text += v + "; ";

    } while (v != 5);
    document.getElementById("skaicius").innerHTML = text ;

};