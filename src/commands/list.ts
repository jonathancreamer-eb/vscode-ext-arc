import { exec } from 'child_process';
import { outputChannel } from '../utils/output';
import { window as Window } from 'vscode';

const rDiff = /([\w]*):/;

const append = (data: string) => { 
    outputChannel.append(data);

    const lines = data.split('\n').filter(l => l);

    Window.showQuickPick(lines).then((value) => {
        if (value) {
            const match = value.match(rDiff);
            
            if (match) {
                const [, diffId] = match;
                console.log(diffId);
                exec(`open https://phabricator.evbhome.com/${diffId}`);
            }
        }
    });
};

const error = (data: string) => {
    outputChannel.append(data);
};

export const list = () => {
    const proc = exec('arc list');
    
    proc.stdout.on('data', append);
    proc.stderr.on('data', error);
};