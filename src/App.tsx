import NasaImages from './components/NasaImages';
import LogoNasa from './assets/nasa-6.svg'
import LogoSatelite from './assets/satellite-svgrepo-com (1).svg'
import './App.css';


function App() {
 
  return (
    <div className="App">
      <header className="App-header">
      <div className='logo-container'>
      <img className='logo' src={LogoNasa} alt="Logo" />
      <img className='satelite orbit' src={LogoSatelite} alt="" />
      </div>
      
        </header>

        <section>
          <div>
          <h1>Astronomy Image of the Day</h1>
          </div>
 
     <div>
     <NasaImages />
     </div>
      
        </section>

    
    </div>
  );
}

export default App;

