import { Command } from 'commander';
import * as readline from 'readline';

import initiateTerminal from './commandhandler/initiateTerminal';
import clearScreenDown from './commandhandler/clearScreenHandler';

// Set up readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'braindump> '
});

// Define the start command
const program = new Command();

// initiate terminal
program
  .command('start')
  .description('Start the terminal')
  .action(() => {
    initiateTerminal(()=>{
      rl.prompt()
    })
  });

// command desc
program
  .command('exit')
  .description('Exit the custom shell')

program
  .command('clear')
  .description('Exit the custom shell')

// Parse the command line arguments
program.parse(process.argv);

// If no command is specified, show help
if (!process.argv.slice(2).length) {
  console.log('No command specified')
  program.outputHelp();
}

// handle commands
rl.on('line', (input: string) => {
 
  switch (input.trim()) {
    case 'clear':
      clearScreenDown(readline,rl);
      break;
    case 'help':
      program.outputHelp();
      console.log();
      break;
    case 'exit':
      rl.close();
      break;
    default:
      console.log('Unknown command. Type "exit" to quit.');
      break;
  }
  rl.prompt();
});

// Close the readline interface on exit
rl.on('close', () => {
  console.log('Exiting custom shell.');
  process.exit(0);
});
