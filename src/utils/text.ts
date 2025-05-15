import { STOPWORDS } from "./stopwords";
import type { comparisonResult } from "../interfaces/comparisonResult.interface";

export function compareKeyWords(resume: string, jobDesc: string): comparisonResult {
    //TODO: finish this.
    let result: comparisonResult = {};
    return result; 
}

function removeSpecialChars(text: string): string {
    let copy: string[] = text.split('');
    const puncAndSpecChar = `!"#$%&'()*+,-./:;<=>?@[]^_\`{|}~`;

    for (let i = 0; i < text.length; i++) {
        if (puncAndSpecChar.includes(text[i])) {
            copy[i] = '';
        }
    }
    console.log(copy.join(''));
    return copy.join('');
}

// Converts text that only contains key words
function cleanText(text: string): string {
    let temp = text;
    temp = temp.toLowerCase();
    temp = removeSpecialChars(temp);
    
    // To remove stop words
    let tempSplit: string[] = temp.split(' ');
    tempSplit = tempSplit.filter(word => !STOPWORDS.includes(word));

    return tempSplit.join(' ');
}