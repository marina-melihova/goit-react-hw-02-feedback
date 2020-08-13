import React, { Component } from 'react';
import style from './App.module.css';
import Statistics from './statistics/Statistics';
import Section from './section/Section';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  changeState = name =>
    this.setState(prevState => ({ [name]: prevState[name] + 1 }));

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    return Math.round((good * 100) / this.countTotalFeedback());
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <div className="container">
        <h1>Please leave feedback</h1>
        <button
          className={style.btn}
          type="button"
          onClick={() => this.changeState('good')}
          name="good"
        >
          Good
        </button>
        <button
          className={style.btn}
          type="button"
          onClick={() => this.changeState('neutral')}
          name="neutral"
        >
          Neutral
        </button>
        <button
          className={style.btn}
          type="button"
          onClick={() => this.changeState('bad')}
          name="bad"
        >
          Bad
        </button>
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        </Section>
      </div>
    );
  }
}

export default App;
