import React from "react";
import "./styles.css";
import BreakInterval from "./BreakInterval";
import SessionLength from "./SessionLength";
import Timer from "./Timer";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      breakLength: 5,
      sessionLength: 25,
      timerMinute: 25,
      isPlay: false
    };

    this.onIncreaseBreakLength = this.onIncreaseBreakLength.bind(this);
    this.onDecreaseBreakLength = this.onDecreaseBreakLength.bind(this);
    this.onIncreaseSessionLength = this.onIncreaseSessionLength.bind(this);
    this.onDecreaseSessionLength = this.onDecreaseSessionLength.bind(this);
    this.onToggleInterval = this.onToggleInterval.bind(this);
    this.onUpdateTimerMinute = this.onUpdateTimerMinute.bind(this);
    this.onResetTimer = this.onResetTimer.bind(this);
    this.onPlayStopTimer = this.onPlayStopTimer.bind(this);
  }
  onIncreaseBreakLength() {
    this.setState((prevState) => {
      if (prevState.breakLength < 60) {
        return {
          breakLength: prevState.breakLength + 1
        };
      }
    });
  }
  onDecreaseBreakLength() {
    this.setState((prevState) => {
      if (prevState.breakLength > 0) {
        return {
          breakLength: prevState.breakLength - 1
        };
      }
    });
  }
  onIncreaseSessionLength() {
    this.setState((prevState) => {
      if (prevState.sessionLength < 60) {
        return {
          sessionLength: prevState.sessionLength + 1,
          timerMinute: prevState.sessionLength + 1
        };
      }
    });
  }

  onDecreaseSessionLength() {
    this.setState((prevState) => {
      if (prevState.sessionLength > 1) {
        return {
          sessionLength: prevState.sessionLength - 1,
          timerMinute: prevState.sessionLength - 1
        };
      }
    });
  }

  onUpdateTimerMinute() {
    this.setState((prevState) => {
      if (prevState.timerMinute > 0) {
        return {
          timerMinute: prevState.timerMinute - 1
        };
      }
    });
  }

  onToggleInterval(isSession) {
    if (isSession) {
      this.setState({
        timerMinute: this.state.SessionLength
      });
    } else {
      this.setState({
        timerMinute: this.state.breakLength
      });
    }
  }

  onResetTimer() {
    this.setState({
      timerMinute: this.state.sessionLength
    });
  }
  onPlayStopTimer(isPlay) {
    this.setState({
      isPlay: isPlay
    });
  }
  render() {
    return (
      <main>
        <h2>Pomodoro Clock</h2>
        <section className="interval-length-container">
          <BreakInterval
            isPlay={this.state.isPlay}
            breakInterval={this.state.breakLength}
            increaseBreak={this.onIncreaseBreakLength}
            decreaseBreak={this.onDecreaseBreakLength}
          />

          <SessionLength
            isPlay={this.state.isPlay}
            sessionLength={this.state.sessionLength}
            decreaseSession={this.onDecreaseSessionLength}
            increaseSession={this.onIncreaseSessionLength}
          />
        </section>
        <Timer
          timerMinute={this.state.timerMinute}
          breakLength={this.state.breakLength}
          updateTimerMinute={this.onUpdateTimerMinute}
          toggleInterval={this.onToggleInterval}
          resetTimer={this.onResetTimer}
          onPlayStopTimer={this.onPlayStopTimer}
        />
      </main>
    );
  }
}

export default App;
