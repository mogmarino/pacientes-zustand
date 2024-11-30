import { Patient } from '../types/index';
import { toast } from 'react-toastify'
import PatientDetailItem from './PatientDetailItem';
import { usePacientStore } from '../store/store';

type PatientDetailsProps = {
    patient: Patient
}

const PatientDetails = ({patient}: PatientDetailsProps) => {

    const deletePatient = usePacientStore(state => state.deletePatient)
    const getPatientById = usePacientStore(state => state.getPatientById)

    const handleClickEliminar = () => {
        deletePatient(patient.id)
        toast('Paciente eliminado correctamente',{
            type: 'error'
        })
    }

  return (
    <div className='mx-5 my-10 px-5 py-10 shadow-md rounded-xl bg-white'>
        <PatientDetailItem  label='ID' data={patient.id}/>
        <PatientDetailItem  label='Nombre' data={patient.name}/>
        <PatientDetailItem  label='Propietario' data={patient.caretaker}/>
        <PatientDetailItem  label='Email' data={patient.email}/>
        <PatientDetailItem  label='Fecha Alta' data={patient.date.toString()}/>
        <PatientDetailItem  label='Sintomas' data={patient.symptoms}/>
        <div className='flex flex-col lg:flex-row gap-3 justify-between  mt-10'>
            <button
                type='button' 
                className='py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg'
                onClick={() => getPatientById(patient.id)}
            >
                Editar
            </button>
            <button
                type='button' 
                className='py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg'
                onClick={handleClickEliminar}
            >
                Eliminar
            </button>
        </div>
    </div>
  )
}

export default PatientDetails