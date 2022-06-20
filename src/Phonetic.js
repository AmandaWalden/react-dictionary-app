import React from "react";
import "./Phonetic.css";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

export default function Phonetic(props) {
  console.log(props.phonetic);
  return (
    <div className="Phonetic">
      <div className="container">
        <AudioPlayer src={props.phonetic.audio} />
        <p>
          <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
            {" "}
          </a>
          {props.phonetic.text}
        </p>
      </div>
    </div>
  );
}
