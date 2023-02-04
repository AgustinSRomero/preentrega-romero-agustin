import { React, useState} from 'react'
import Button from '../Button/Button';
import InputForm from './InputForm';

function CheckoutForm(props) {
  const [userData, setUserData] = useState({
    Nombre: "",
    Apellido: "",
    email: "",
    Telefono: "",
    Direccion: "",
  })

  let fieldsForm = Object.keys(userData);

  function onInputChange(event){
    let value = event.target.value;
    let inputName = event.target.name;

    let newState = {...userData};
    newState[inputName] = value;
    setUserData(newState);
  }

  function handleSubmit(evt){
    evt.preventDefault();
  }


  return (
    <form>
      <h3>Complete los siguientes datos para finalizar su compra:</h3>
      {
        fieldsForm.map((field) => (
          <InputForm value={userData[field]} name={field} key={field} onChange={onInputChange} label={field}></InputForm>
        ))
      }
      {/* <Button type="submit" class="default-button" onClick={handleSubmit}>Finalizar Compra</Button> */}
      <button
        onClick={(evt) => props.onCheckout(evt, userData)}
        type="submit"
      >
        Crear orden
      </button>
    </form>
  )
}

export default CheckoutForm