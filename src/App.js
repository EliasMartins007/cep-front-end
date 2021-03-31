import React, { useState } from 'react';
import './App.css';
import TrackCep from './TrackCep';

function App() {
  const [events, setEvents] = useState([]);

  //para função array do cep necessaria
  const convertToArray = (obj) => {
    const arr = [obj];
    return arr;
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData); //data = dados
    // console.log(data);

    // fetch(`http://localhost:3003/?tracking=${data.tracking}`)
    //   .then((response) => response.json())
    //   .then(console.log) //se der certo !
    //   .catch(console.error); //caso ocorra erro

    fetch(`http://localhost:3003/?tracking=${data.tracking}`)
      .then((response) => response.json())
      .then((data) => {
        //console.log(data);
        const array = convertToArray(data);
        console.log(array);
        setEvents(array);
      }) //se der certo !
      .catch((error) => console.error); //caso ocorra erro

    /*original funcionando  31/03/2021
       fetch(`http://localhost:3003/?tracking=${data.tracking}`)
      .then((response) => response.json())
      .then(console.log) //se der certo !
      .catch((error) => console.error); //caso ocorra erro   */
  };

  return (
    <div className="Container">
      <h1>BUSCAR CEP:</h1>
      <form onSubmit={submitHandler}>
        <div className="form-group">
          <input type="text" name="tracking" className="form-control" />
        </div>
        <button type="submit" name="TrackCEP" className="btn btn-primary">
          Buscar
        </button>
      </form>
      <TrackCep events={events} />
    </div>
  );
}

export default App;
