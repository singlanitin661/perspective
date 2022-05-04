import React from "react";
import gl from "./Guidelines.json";
import "./Guidelines.scss";

function Guidelines (){
    return (
        <div className="guidelines-main">
            <h1>Guidelines</h1>
            <section className="dl-blurbs">
                <dl>
                    {gl.map( guideline =>{
                        return(
                            <>
                            <dt> {guideline.title} </dt>
                            <dd> {guideline.content}</dd>
                            </>
                        )
                    })}
                </dl>
            </section>
        </div>
    )
}

export default Guidelines;