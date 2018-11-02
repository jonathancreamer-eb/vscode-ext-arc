'use strict';
import * as vscode from 'vscode';
import { diff } from './commands/diff';
import { list } from './commands/list';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    console.log('Congratulations, your extension "arc" is now active!');

    // The command has been defined in the package.json file
    // Now provide the implementation of the command with  registerCommand
    // The commandId parameter must match the command field in package.json

    context.subscriptions.push(...[
        vscode.commands.registerCommand('arc.diff', diff),
        vscode.commands.registerCommand('arc.list', list),
    ]);
}

// this method is called when your extension is deactivated
export function deactivate() {
}