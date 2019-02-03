var fs=require("fs");

var options = {encoding: "utf-8"};

fs.readFile("file.txt", options, function(err,data){
    if (err){
        console.error("error running file!");
        return;
    }
    console.log(data);
});

console.log("I am executing ....");

