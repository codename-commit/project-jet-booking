import React from 'react';
import { useForm } from "react-hook-form";
// const 


export const BookingForm = ({onForm}) => {
  const { handleSubmit, register, errors } = useForm();
  const onSubmit = values => {
    console.log('form Component',values);
  };





    return (
      
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Easy Booking Form</h1>
        <p>Customer Name </p>
        <input 
          name='customer-name'
          type='text'
          ref={register({
            required: 'Required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: "invalid email address"
            }
          })}
          />
        <p>Current City</p>
        <input name='current-city' type='text'/>
        <p>Allergies</p>
        <input name='allergies' type='text'/>
        <p>Net worth </p>
        <select defaultValue="default" >
          <option value='default' disabled>Please choose...</option>
          <option name='100 000+'>100 000+</option>
          <option name='500 000+'>500 000+</option>
          <option name='100 000 000+'>1 000 000+</option>
          <option name='500 000 000+'>500 000 000+</option>
          <option name='1 000 000 000+'>1 000 000 000+</option>
        </select>
        <br/><br/>
      <button onClick={onForm} type="submit">Confirm</button>
      </form>
      
    );
  };
  
  export default BookingForm;