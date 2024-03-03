var figlet = require("figlet");

function initiateTerminal(initialPrompt: Function){
    
    figlet("Braindump", function (err: Error, data: string) {
        if (err) {
          console.log("Something went wrong...");
          console.dir(err);
          return;
        }
        console.log(data);
    });

    setTimeout(()=>{
        initialPrompt()
    },2000)   

}


export default initiateTerminal