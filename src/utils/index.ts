import * as vscode from 'vscode';

export function selectTerminal(): vscode.Terminal | undefined {
	const terminals = <vscode.Terminal[]>(<any>vscode.window).terminals;
	const terminal: vscode.Terminal | undefined = terminals.find((t) => t.name.includes('arc'));

	return terminal;
}

export function ensureTerminalExists(): boolean {
	if (!((<any>vscode.window).terminals.find((t: vscode.Terminal) => t.name.includes('arc')))) {
		vscode.window.showErrorMessage('No active terminals');
		return false;
    }

	return true;
}