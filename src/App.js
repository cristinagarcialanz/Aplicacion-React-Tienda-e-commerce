import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar.js';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar
        item1='Home'
        item2='Audiolibros'
        item3='Cabala'
        item4='Religión'
        item5='Astrología'
        item6='Literatura Antigua'
        />
        
      </header>

      <div className='cuerpo'>
        <h1>Tienda de Libros</h1>       
        
        <ItemListContainer greeting='Bienvenidos a su Tienda de Libros OnLine...'/>

      </div>


    </div>
  );
}

export default App;
