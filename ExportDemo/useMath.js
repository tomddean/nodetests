var mathfun = require("./mathfun");


for (var i=0; i<5; i++)
{
    console.log("calling doubler for value: " + i);
    mathfun.evenDoubler(i, function(err, results, time) {
        if (err) {
            console.log("ERROR: " + err.message);
        }
        else
        {
            console.log("The results are: " + results + " (" + time + "ms)");
        }
    });
}

console.log("-----");