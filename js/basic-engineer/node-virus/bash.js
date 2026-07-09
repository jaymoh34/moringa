const fs = require("fs"); //nodejs file system


function testAppendFile() {
    const fileData = "\nHello world testing file\n";
    const cb = (error) => {
        if (error) {
            console.log("creating file failed");
            console.log(error);
            //setimeout
        }
    };
    fs.appendFile("testfile.txt", fileData, cb);
}
testAppendFile();



/*
fs.appendFile(@param1,@param2,@param3)
@param1=>file name :<path>
@param2=>data to write to the file
@param3=>callback function (@errorParam) if there is an error
-> successful

for Loops, while Loops

->we are going to create an application

->function <give it any name>
void function-> function that does not take any parameters
-> create a file -> name of file is currentdate.txt
and 10k lines of code.

go you 1>
<got you 2>
<got 3>
-> use a for Loop
file system api-> nodejs

//throw { message: "not working", data: "" };
*/

const fs = require("fs"); // nodejs file system

function createFile() {
  let fileData = "";
  const filename
}
  fs.appendFile("testfile.txt", fileData, cb);


testAppendFile();