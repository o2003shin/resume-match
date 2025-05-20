import { STOPWORDS } from "./stopwords";
import type { analysisResult } from "../interfaces/comparisonResult.interface";

export function compareKeywords(resume: string, jobDesc: string): analysisResult {
    //TODO: finish this.
    let result: analysisResult = {};
    let cleanResume = cleanText(resume).split(' ');
    let cleanJobDesc = cleanText(jobDesc).split(' ');
    
    const resumeSet = new Set(cleanResume);
    const jobSet = new Set(cleanJobDesc);

    result.missingKeywords = [...jobSet].filter(word => !resumeSet.has(word));
    result.matchingKeywords = [...resumeSet].filter(word => jobSet.has(word));


    const matchPercent: number = jobSet.size > 0 ? (result.matchingKeywords.length / jobSet.size) * 100 : 0;
    result.matchPercent = Math.round(matchPercent * 10) / 10;

    return result; 
}

export function removeSpecialChars(text: string): string {
    return text.replace(/[^\w\s\+\-]/g, '');
}

// Returns text that only contains key words
export function cleanText(text: string): string {
    let temp = text;
    temp = temp.toLowerCase();
    temp = removeSpecialChars(temp);
    
    // To remove stop words
    let tempSplit: string[] = temp.split(/\s+/g);
    tempSplit = tempSplit.filter(word => !STOPWORDS.includes(word));

    return tempSplit.join(' ');
}