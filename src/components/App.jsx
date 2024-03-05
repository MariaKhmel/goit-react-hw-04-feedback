import { GlobalStyle } from './GlobalStyle';
import { Section } from './Section/Section';
import Statistics from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import {Notification} from './Notification/Notification'
import { useState } from 'react';

export function App() {

  const [good, setGood] = useState(0);
  const [bad, setBad] = useState(0);
  const [neutral, setNeutral] = useState(0);

  
   const onLeaveFeedback = option => {
      switch (option) {
        case 'good':
          setGood(prevValue => prevValue + 1)
          break;
         case 'bad':
          setBad(prevValue => prevValue + 1)
          break;
         case 'neutral':
          setNeutral(prevValue => prevValue + 1)
          break;
        default:
          console.log('no such type')
      }
  
  }
 

 const  countTotalFeedback = () => {
    return good + neutral + bad;
  }
    
  
  const countPositiveFeedbackPercentage = () => {
  
    return (good /countTotalFeedback()) * 100;
  }

  


  const total = countTotalFeedback();
  const positivePercentage = countPositiveFeedbackPercentage();
  return  ( <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={onLeaveFeedback} />
          </Section>
        <Section title="Statistics">

           {total> 0 ?  <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage} /> :
            <Notification message="No feedback given" />} 
        </Section>
     
        <GlobalStyle />
      </>)
            
  }
