//export
const targetNum = Math.floor(Math.random() * 10);
export function numCheck(submission) {
    if (submission < targetNum) {
        return 'Too Low';
    } else if (submission > targetNum) {
        return 'Too High';
    } else  
        return 'Congratulations, You Are A Wizard!';
}