import React from "react";

function SessionLength(props) {
  function decreaseSession() {
    if (props.SessionLength === 1) {
      return;
    }
    props.decreaseSession();
  }
  function increaseSession() {
    if (props.SessionLength === 60) {
      return;
    }
    props.increaseSession();
  }
  return (
    <section>
      <h4 id="session-label">Session Length</h4>
      <section className="interval-container">
        <button
          id="session-decrement"
          disabled={props.isPlay === true ? "disabled" : ""}
          onClick={decreaseSession}
        >
          Down
        </button>
        <p id="session-length" className="interval-Length">
          {props.sessionLength}
        </p>
        <button
          id="session-increment"
          disabled={props.isPlay === true ? "disabled" : ""}
          onClick={increaseSession}
        >
          Up
        </button>
      </section>
    </section>
  );
}

export default SessionLength;
