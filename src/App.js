
import './App.css';
import Clock from './Clock';
import Infobox from './Infobox';
import Weather from './Weather';

function App() {
  return (
    <div className="App">
      <main>
        <h1>Welcome To Ten Peaks Lookout!</h1>
        <footer>
        <div className="WeatherAndTime">
          <Clock/>
          <Weather/>
        </div>
        <Infobox/>
      </footer>
      </main>
      
    </div>
  );
}

export default App;
