function clearScreenDown(readline: any, rl: any) {
    readline.cursorTo(process.stdout, 0, 0);
    readline.clearScreenDown(process.stdout);
    console.log()
    rl.prompt()
}

export default clearScreenDown