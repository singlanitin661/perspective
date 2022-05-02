import React from 'react'
import './CallForPapers.css'

function CallForPapersHomePage() {
    let arr = [
        {
            "id": "One",
            "Heading": "Computing",
            "Data": [
                {
                    "el" : "High Performance Computing",
                    "idd" : "Seven" 
                },
                {
                    "el" : "Districbuted and parallel System",
                    "idd" : "Eight"
                },
                { "el" : "Cloud Computing",
                  "idd" : "Nine"
                },   
                {
                    "el" : "Edge Computing",
                    "idd" : "Ten"
                },
                {
                    "el":"Fog Computing",
                    "idd" : "Eleven"
                },
                {
                    "el" : "Human Centered Computing",
                    "idd" : "Tweleve"
                }
            ]
        },
        {
            "id": "Two",
            "Heading": "Artificial Intelligence",
            "Data": [
                {"el":"Fuzzy Logic"                  ,"idd":"Thirteen"},
                {"el":"Expert System"                , "idd":"Fourteen"},
                {"el":"Agents and Multi Agent System", "idd":"Fifteen"},
                {"el":"Computational Optimisation"   , "idd":"Sixteen"},
                {"el":"Bio inspired Optimisation"    , "idd":"Seventeen"}
            ]
        },
        {
            "id": "Three",
            "Heading": "Machine Learning",
            "Data": [
                {"el":"Deep Learning",                   "idd":"Eighteen"},
                {"el":"Neural Networks","idd":"Nineteen"},
                {"el":"Natural Language Processing","idd":"Twenty"},
                {"el":"Data Mining","idd":"Twentyone"},
                {"el":"Data Science","idd":"Twentytwo"},
                {"el":"GANs","idd":"Twentythree"},
                {"el":"Software Engineering","idd":"Twentyfour"},
                {"el":"Recommender Systems","idd":"Twentyfive"},
                {"el":"Semantic web Analysis","idd":"Twentysix"},
            ]
        },
        {
            "id": "Four",
            "Heading": "Machine Vision",
            "Data": [
                {"el":"Human Computer Interaction", "idd":"Twentyseven"},
                {"el":"Computer Vision","idd":"Twentyeight"},
                {"el":"Image and video processing","idd":"Twentynine"},
                {"el":"Medical Diagnosis","idd":"Thirty"},
                {"el":"Augmented Reality","idd":"Thirtyone"},
                {"el":"Virtual Reality","idd":"Thirtytwo"},
            ]
        },
        {
            "id": "Five",
            "Heading": "Communication",
            "Data": [
                {"el":"Networking",                          "idd":"Thirtythree"},
                {"el":"Wireless and Mobile Communication","idd":"Thirtyfour"},
                {"el":"Signal Processing","idd":"Thirtyfive"},
                {"el":"Internet of Things","idd":"Thirtysix"},
                {"el":"Cyber Physical Systems","idd":"Thirtyseven"},
                {"el":"Wireless Sensor Networks","idd":"Thirtyeight"},
                {"el":"Software defined networks","idd":"Thirtynine"},
                {"el":"Industry 4.0","idd":"Forty"},
                {"el":"Security and Privacy","idd":"Fortyone"},
                {"el":"Biometric Security","idd":"Fortytwo"},
                {"el":"Cyber Security","idd":"Fortythree"},
            ]
        },
        {
            "id": "Six",
            "Heading": "Futuristic Applications",
            "Data": [
                {"el":"Sustainable cities and Societies","idd":"Fortyfour"},
                {"el":"Smart Grids and Energy Networks","idd":"Fortyfive"},
                {"el":"Ambidient Assisted Living","idd":"Fortysix"},
                {"el":"Smart Healthcare","idd":"Fortyseven"},
            ]
        }
    ];



    return (

        <div className="accordion" id="accordionPanelsStayOpenExample">
            {arr.map((data) => {
                return (
                    <div className="accordion-item">
                        <h2 className="accordion-header" id={`panelsStayOpen-heading${data.id}`}>
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#panelsStayOpen-collapse${data.id}`} aria-expanded="false" aria-controls={`panelsStayOpen-collapse${data.id}`}>
                                {data.Heading}
                            </button>
                        </h2>
                        <div id={`panelsStayOpen-collapse${data.id}`} className="accordion-collapse collapse" aria-labelledby={`panelsStayOpen-heading${data.id}`}>
                            <div className="accordion-body">
                                {data.Data.map((element) => {
                                    return (
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#panelsStayOpen-collapse${element.idd}`} aria-expanded="false" aria-controls={`panelsStayOpen-collapse${element.idd}`}>
                                            {element.el}
                                        </button>
                                    )
                                })}
                               
                            </div>
                        </div>
                    </div>
                )
            })}

            
        </div>

    )
}

export default CallForPapersHomePage
