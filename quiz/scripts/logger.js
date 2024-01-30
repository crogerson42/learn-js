// Define a JavaScript function called logMsg() that can be used to log an error message for any object that contains the property errMsg. 
function logMsg() {
    console.log(`Error message: ${this.errMsg}`);
}

const object1 = {
    msg: 'This will not be logged',
    errMsg: 'This will be logged'
}

logMsg.call(object1);