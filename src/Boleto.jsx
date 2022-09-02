
import './styles.css'

export const Boleto = (props) => {
  return (
    <div className="Boleto">
        <ul>
            <li>Servicio: {props.servicio}</li>
            <li>Cliente: {props.cliente}</li>
            <li>Calendar: {props.day + '/' + props.month + '/' + props.year}</li>
            <li>Hora: {props.hora}</li>
            <li>Precio: {props.precio}</li>

        </ul>
    </div>
  )
}
