import React from 'react'
import Services from './Services.json';
import {useRef,useState} from 'react';



class SelectService extends React.Component {



  
  
  //let [selectedOption, setSelectedOption] = useState()
  render(){
  return (
    <div className='dropdown'>
          <select id='serviços' >
            <option disabled = {true}>--seleccione serviço--</option>
            {
              Services.ServicesItems.map((result) => ( <option key={result.id}>{result.name}</option> ))
              
            }
            
          </select>

         

          
        </div>
  )
  
  

}
}


export default SelectService








