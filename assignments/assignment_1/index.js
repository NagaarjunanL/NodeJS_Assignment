function getNameFromCommandLine(name) {
    // Write you code here, name should be taken as args in process.
    console.log(name)
}

function getNameFromEnv() {
    // Write your code here
    process.env.name = "arjun"
    console.log(process.env.name)
}

function getNameFromReadLine(name) {
    // Write your code 
    console.log(name);
}

module.exports = {
    getNameFromCommandLine,
    getNameFromEnv,
    getNameFromReadLine
}
getNameFromCommandLine(process.argv[2]);
getNameFromEnv()

const readline = require("readline");
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
})
rl.question("please enter name", (ans) => {
    getNameFromReadLine(ans);
    rl.close();
})