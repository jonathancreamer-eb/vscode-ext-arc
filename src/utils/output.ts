import { OutputChannel, window as Window } from 'vscode';

const outputChannel: OutputChannel = Window.createOutputChannel('arc');

export { outputChannel };