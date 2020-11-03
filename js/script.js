console.log("\nTabliczka mnozenia");

var tabmno = '\n';
for (var i = 1; i < 11; i++) {

    for (var j = 1; j < 11; j++) {
        tabmno += (i*j) + ' ';

    }
    tabmno += '\n'
}

console.log(tabmno);