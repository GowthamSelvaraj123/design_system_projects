import './App.css';
import Button from './components/button/Button';
import Checkbox from './components/checkbox/Checkbox';
import Radio from './components/radio/Radio';
import Calendar from './components/calendar/Calendar';

function App() {
  function test()
  {
    alert('hi');
  }
  return (
    <div className="App">
      <Button appearance="primary" data="test" event = {test}></Button>
      <Checkbox currentState="false" inputText="Male" />
      <Checkbox currentState="false" inputText="Female" />
      <Radio currentState="false" inputText="Yes" />
      <Radio currentState="false" inputText="No" />
      <Calendar></Calendar>
    </div>
  );
}

export default App;
