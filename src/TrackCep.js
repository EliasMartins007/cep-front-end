import React from 'react';

function TrackCep({ events }) {
  //(params) originalmente
  //console.log(events);
  if (!events || events.length === 0) return null;

  return (
    <>
      <h1>Cep Encontrado:</h1>
      <ul>
        {events.map((item) => (
          <li key={item.cep}>
            <span>{item.cep}</span>
            <span>{item.logradouro}</span>
            <span>{item.complemento}</span>
            <span>{}</span>
            <span>{}</span>
          </li>
        ))}
      </ul>
    </>
  );

  /*//exemplo original
 return (
    <>
      <h1>Cep Encontrado:</h1>
      <ul>
        {events.map((item) => (
          <li key={item.cep}>{item.cep}</li>
        ))}
      </ul>
    </>
  );
  */
  //fim function
}
export default TrackCep;
