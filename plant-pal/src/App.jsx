import Plant from './plant.jsx';
import WeatherInfo from './WeatherInfo.jsx';
import ResponseBox from './ResponseBox.jsx';
import Talkbox from './TalkBox.jsx';
import Buttons from './Buttons.jsx';
import Background from './Background.jsx';
import './App.css';

function App() {
  return (
    <div className="App">
      <Background />
      <WeatherInfo />
      <ResponseBox />
      <Plant />
      <Talkbox />
      <Buttons />
    </div>
  )
}

export default App
