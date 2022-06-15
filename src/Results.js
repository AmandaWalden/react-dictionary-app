import React from "react";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";
import "./Results.css";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <section>
          <div className="row">
            <div className="col-1">
          <h2>{props.results.word}</h2>
          </div>
          <div className="col-1 fluid">
          <h5>{props.results.phonetics[0].text}</h5>
          </div>
          </div>
          <Phonetic phonetic={props.results.phonetics[0]} />
        </section>
        {props.results.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <section>
                <Meaning meaning={meaning} />
              </section>
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
