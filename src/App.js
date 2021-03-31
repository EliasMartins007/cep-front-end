import React from 'react';
import './App.css';

function App() {
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
      .then(console.log) //se der certo !
      .catch((error) => console.error); //caso ocorra erro
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
    </div>
  );
}

export default App;
