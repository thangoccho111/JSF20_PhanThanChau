// function say(name) {
//     console.log("Hello", name);
// }
// say("Bao", "Ngoc");


function say() {
    //console.log(arguments);
    for (let value of arguments)
        console.log("Hello", value);
}
say("Bao", "Ngoc", "Phuc");