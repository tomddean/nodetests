var Resource = require('./resource');

var r = new Resource(7);

r.on('start', function() {
    console.log("I've started!");
});

r.on('data', function(d) {
    console.log("  I've recieved data: " + d);
});

r.on('end', function(t) {
    console.log("Done with " + t + " data events.");
});