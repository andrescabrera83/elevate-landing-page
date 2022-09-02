import { useEffect, useState } from "react";
import { Boleto } from "./Boleto";
import React from "react";

import { initializeApp } from "firebase/app";
import { getDocs, getFirestore, collection } from "firebase/firestore";

import DatePicker from 'react-datepicker';

import pt from 'date-fns/locale/pt-BR';


import "react-datepicker/dist/react-datepicker.css";

import "./styles.css";

const hours = ['10AM','12PM','13PM','14PM','15PM','16PM','17PM','18PM', '19PM', '20PM'];

const days = ['Domingo','Segunda-feira','Terça-feira','Quarta-feira','Quinta-feira','Sexta-feira','Sabado'];

const months = ['Janeiro','Febereiro','Março','Abril','Mayo','Juno','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'];

const firebaseConfig = {
  apiKey: "AIzaSyAZ6bmXIvyCwWZgGi2cvWtSLeuTh5hzJ0g",
  authDomain: "calendar-integration-360011.firebaseapp.com",
  projectId: "calendar-integration-360011",
  storageBucket: "calendar-integration-360011.appspot.com",
  messagingSenderId: "393953415777",
  appId: "1:393953415777:web:d60572f0ecb4fff7ba9020",
  measurementId: "G-TB3V6VL60E"
};

const app = initializeApp(firebaseConfig);

const services = {

  service1:{
    id: '1',
    value: 'Service 1',
    precio: '$40'
  },
  service2:{
    id: '2',
    value: 'Service 2',
    precio: '$55'
  },
  service3:{
    id: '3',
    value: 'Service 3',
    precio: '$20'
    
  }

}

export const App = () => {

  const [servicio, setServicio] = useState("")

  const [clienteName, setClienteName] = useState("")

  const [fecha, setFecha] = useState( new Date());

  const [day83,setDay83] = useState(0);
  const [month83, setMonth83] = useState(0);
  const [year83,setYear83] = useState(0);
  

  const [hora83, setHora83] = useState('');

  const [precio, setPrecio83] = useState('');

  const [ticket, setTicket] = useState([]);


  const db = getFirestore(app);
  const collectionRef = collection(db, "Boleto");


  useEffect(() => {

    const getUsers = async () => {
      const data = await getDocs(collectionRef);
      setTicket(data.docs.map((doc) => ({...doc.data(),id: doc.id})));
      console.log(ticket)

    }

    getUsers();
  },[])


  const changeHandler = (e) => {
      setServicio({...servicio, value: e.target.value});

      //setPrecio83(precio => ({precio, precio}));
       let theIndex = e.target.options[e.target.selectedIndex]
       let tag = theIndex.dataset.precio
       
      console.log(tag);
      
      setPrecio83(tag);
      
  }




  const dateHandler = (d) => {

   

    var newD = new Date(d),
    day83 = newD.getDate(),
    month83 = months[newD.getMonth()],
    weekday = days[newD.getDay()],
    year83 = newD.getFullYear();
    

    setDay83(day83);
    setMonth83(month83);
    setYear83(year83);

    setFecha(newD);
    console.log(weekday + ", " + day83 +" de "+ month83 + " de " + year83);
    console.log(newD.valueOf())
  }




 

  return (
    <div>
    <h1>Elevate</h1>
    <p>faça seu agendamento</p>

    <div className="forma">
      <select onChange = {changeHandler}>
      <option disabled = {true}> --Seleccione Servicio-- </option>
      {
        Object.values(services).map((result) => (
        <option 
        key={result.id} 
        value = {result.value}
        data-precio = {result.precio}
     
        > {result.value}</option>))
      }
      </select>

      <input 
        className="nameInput"
        type="text" 
        placeholder="Nome" 
        value={clienteName}
        onChange = {(e) => setClienteName(e.target.value)} />

      <DatePicker 
      className="calendario"
      selected = {fecha}
      
      onChange = {dateHandler}
      dateFormat = "dd/MM/yyyy"
      minDate={new Date()}
      locale ={pt}
      
      ></DatePicker>

      <select onChange={(e) => setHora83(e.target.value)} className = "horaPicker" >
        {
          hours.map((e) => (<option key = {e}>{e}</option>))
        }
      </select>

    </div>

      <Boleto 
      servicio = {Object.values(servicio)} 
      cliente = {Object.values(clienteName)} 
      day = {day83}
      month = {month83}
      year = {year83}
      hora = {hora83}
      precio = {precio}

      ></Boleto>

      <ul>
       {ticket.map((e) => (
        <div key = {e.id}>
       <li>{e.hora}</li>
       <li>{e.servicio}</li>
       <li>{e.clienteName}</li>
       </div>
       ))} 
      </ul>

      


    </div>
  )
}

