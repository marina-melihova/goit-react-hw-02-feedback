import React, { Component } from 'react';
import style from './App.module.css';
import Statistics from './statistics/Statistics';
import Section from './section/Section';
import FeedbackOptions from './feedbackOptions/FeedbackOptions';
import Notification from './notification/Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  changeState = name =>
    this.setState(prevState => ({ [name]: prevState[name] + 1 }));

  countTotalFeedback = () =>
    Object.values(this.state).reduce((acc, item) => {
      acc += item;
      return acc;
    }, 0);

  countPercentage = (item, total) => {
    const percent = total ? Math.round((item * 100) / total) : 0;
    return percent;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    return (
      <div className={style.container}>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={[...Object.keys(this.state)]}
            onLeaveFeedback={this.changeState}
          />
        </Section>
        <Section title="Statistics">
          {total ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={this.countPercentage(good, total)}
            />
          ) : (
            <Notification message="No feedback given" />
          )}
        </Section>
      </div>
    );
  }
}

export default App;
