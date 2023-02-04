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

  function clearForm(){
    const newState = {...userData}
    let fieldsData = Object.keys(newState)

    fieldsData.map((field) => (
      newState[field] = ""
    ))

    setUserData(newState)
  }

  function handleSubmit(evt){
    evt.preventDefault();
    props.onCheckout(userData)
  }

  return (
    <form onSubmit={handleSubmit} className={props.class}>
      <h3>Complete los siguientes datos para finalizar su compra:</h3>
      {
        fieldsForm.map((field) => (
          <InputForm value={userData[field]} name={field} key={field} onChange={onInputChange} label={field}></InputForm>
        ))
      }
      <div className='button-form-container'>
        <Button type="clear" class="default-button" onClick={clearForm}>Limpiar Formulario</Button>
        <Button type="submit" class="finish-button">Finalizar Compra</Button>
      </div>
    </form>
  )
}

export default CheckoutForm