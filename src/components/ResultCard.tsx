import type { analysisResult } from "../interfaces/comparisonResult.interface";
import '../App.css'

export default function ResultCard({ analysis }: { analysis: analysisResult }) {

    return (
        <>
            <div className="resultCardContainer">
                <section className="keywords">
                    <p>Match Percentage:</p>
                    <strong>{analysis.matchPercent?.toFixed(2)}%</strong>
                </section>
                <section className="keywords">
                    <p>Matching Keywords</p>
                    <ul>
                        {analysis.matchingKeywords?.map((word, index) => (
                            <li key={index} className="keyword">{word}</li>
                        ))}
                    </ul>
                </section>
                <section className="keywords">
                    <p>Missing Keywords</p>
                    <ul>
                        {analysis.missingKeywords?.map((word, index) => (
                            <li key={index} className="keyword">{word}</li>
                        ))}
                    </ul>
                </section>
            </div>
        </>
    )
}