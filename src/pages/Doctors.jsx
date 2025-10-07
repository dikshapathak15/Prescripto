import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext';

const Doctors = () => {
  const {speciality} = useParams();
  console.log(speciality)

  const {doctors} = useContext(AppContext)
  return (
    <div>
      <p>Browse through the doctors specialist.</p>
      <div>
        <div>
          <p> physician</p>
          <p>Gynecologist</p>
          <p>Dermatologist</p>
          <p>Pediatricians</p>
          <p>Neurologist</p>
          <p>Gastroenterologist</p>
        </div>
        <div>
          
        </div>
      </div>
    </div>
  )
}

export default Doctors