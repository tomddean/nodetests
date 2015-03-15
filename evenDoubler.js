var maxTime = 1000;

var evenDoubler = function (v, callback) {
    var waitTime = Math.floor(Math.random()*maxTime+1);
    
    if (v % 2)
    {
        setTimeout(function() {
            callback(new Error("Odd input"));
        }, waitTime);
    } else {
        setTimeout(function() {
            callback(null, v*2, waitTime);
        }, waitTime);
    }
};

for (var i=0; i<5; i++)
{
    console.log("calling doubler for value: " + i);
    evenDoubler(i, function(err, results, time) {
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