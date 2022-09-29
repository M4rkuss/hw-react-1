import React from 'react';
import './App.css';

function HelloReact () {
  return (
    React.createElement('h1', null, 'Hello React!')
  );
}

function SecondTask () {
  let userInfo = {
    name: "Mark",
    surname: "Buchatskiy",
    phone: "+38 (095) 623 03 28",
    email: "markbu07@gmail.com",
    compareAllInfo: function () {
      return (
        `Имя Фамилия: ${this.name} ${this.surname} | Телефон: ${this.phone} | Имейл: ${this.email}`
      )
    }
  }
  return (
    <>
      <h1>Second Task:</h1>
      <p>{userInfo.compareAllInfo()}</p>
    </>
  )
}

function ThirdTask () {
  let info = {
    city: 'Kyiv',
    country: 'Ukraine',
    foundation: 930
  }
  return (
    <>
      <h1>Third Task:</h1>
      <ul style={{padding: 0}}>
        <li>{info.city}</li>
        <li>{info.country}</li>
        <li>{info.foundation}</li>
      </ul>
      <img src="https://eimg.pravda.com/images/doc/1/e/1e4151f-----.jpg" alt="" width={400}/>
    </>
  )
}

function App() {
  return (
    <div className="App">
      <h1>First task:</h1>
      <HelloReact/>
      <br/>
      <SecondTask/>
      <ThirdTask/>
    </div>
  );
}

export default App;
