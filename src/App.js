import './App.css';
import SelectService from './components/SelectService';
import Boleto from './components/Boleto';

function App() {
  return (
    <div className="App">

        
      
        <Boleto></Boleto>
        <h1>Elevate</h1>  
        <p>- faça seu agendamento -</p>

        <div className="interaction">

        <SelectService></SelectService>


        </div>
        
    </div>
  );
}

export default App;
