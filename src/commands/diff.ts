import * as vscode from 'vscode';
import { ensureTerminalExists, selectTerminal } from '../utils';

let NEXT_TERM_ID = 1;

export const diff = () => {
    // Display a message box to the user
    // vscode.window.showInformationMessage('Hello World!');
    let terminal: vscode.Terminal | undefined;

    if (!ensureTerminalExists()) {
        terminal = vscode.window.createTerminal(`arc terminal #${NEXT_TERM_ID++}`);
    } else {
        terminal = selectTerminal();
    }

    if (typeof terminal !== 'undefined') {
        // terminal.show();
        terminal.sendText('arc diff');
    }
};
