const fs = require("fs");

let myVirus = (num) => {
    const fileData = `Got you ${num}\n`;
    fs.appendFile("testfile.txt", fileData, (error) => {
        if(error){
            console.log("creating file failed");
            console.log(error);
        }
    });
}

for(let i = 0; i!=10000; i++){
    myVirus(i);
}