import React from 'react'

class Boleto extends React.Component{

    render(){
        return(
            <div className='Boleto'>
                <div className="container">
                <div className='servicio_tag'>servicio</div>
                <div className='precio_tag'>$30</div>
                <div className='name_tag'>name</div>
                <div className='data_tag'>data</div>
                </div>
            </div>
        )
    }
}

export default Boleto;