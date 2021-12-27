import { useState ,useEffect } from "react"
import Error from './Error'


//aplicamos clases con tailwind 
//extraemos via props
const Formulario = ({pacientes, setPacientes, paciente, setPaciente}) => {
   //definimos el estado del componente 
   //nombre es la variable , setNombre , es la funcion  que modifica a la variable y useState() es el valor inicial 
   const [nombre , setNombre] =  useState('')
   const [propietario , setPropietario] =  useState('')
   const [email , setEmail] =  useState('')
   const [fecha , setFecha] =  useState('')
   const [sintomas , setSintomas] =  useState('')

   const [error, setError] = useState(false)
   
   // se ejecuta cierto codigo cuando el objeto tenga algo y lo comprobamos con object.keys
   useEffect( () => { 
     //ejecutate cuando paciente cambie
        if( Object.keys(paciente).length > 0){
            setNombre(paciente.nombre)
            setPropietario(paciente.propietario)
            setEmail(paciente.email)
            setFecha(paciente.fecha)
            setSintomas(paciente.sintomas)
        }     
   }, [paciente])
   

   //funcion para generar un Id UNICO por paciente
   const generarId = () =>{
       const random = Math.random().toString(36).substring(2)
       const fecha = Date.now().toString(36)
       return random + fecha
   }

   const handleSubmit = (e) =>{
       e.preventDefault()
       

    //VALIDACION DEL FORMULARIO
   
    //includes va a determinar si hay almenos un string vacio en los campos 
   if([nombre, propietario,email, fecha, sintomas].includes('')){
    console.log('Hay al menos un campo vacio')

    setError(true)
    return
   }
   setError(false)


   //Objeto de Paciente
   const objetoPaciente = {
    nombre,
    propietario,
    email, 
    fecha, 
    sintomas
   }

   if(paciente.id){
    //Editando el registro
    objetoPaciente.id = paciente.id

    const pacientesActualizados = pacientes.map( pacienteState => paciente.id ===
         paciente.id ? objetoPaciente : pacienteState)

         setPacientes(pacientesActualizados)
         setPaciente=({ })


   }else{
    //Nuevo registro
    objetoPaciente.id= generarId()
    setPacientes([...pacientes, objetoPaciente])

   }
  // console.log(objetoPacientes)
   //en react debemos utilizar metodos inmutables como el spread operator y tomamos una copia del arreglo que se 
   //asigna a setPacientes
   //toma una copia del arreglo y le saigna el nuevo objeto
   

//REINICIAR EL FORMULARIO
   setNombre('')
   setPropietario('')
   setEmail('')
   setFecha('')
   setSintomas('')
  
}
    
    return (
        <div className="md:w-1/2 lg:w-2/5 mx-5">
            <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>

            <p className=" text-lg mt-5 text text-center mb-10">
                Añade Pacientes y {''}
                <span className="text-indigo-700 font-bold text-lg">Administralos</span>
            </p>

            <form 
            onSubmit={handleSubmit}
            className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">
                
                {error && <Error><p>"Todos los campos son obligatorios"</p></Error>}

                <div  className="mb-5">
                    <label  htmlFor="mascota" className="block  text-gray-700 uppercase font-bold">
                        Nombre Mascota
                        </label>
                        
                        <input 
                        id="mascota"
                        type="text"
                        placeholder="Nombre de la Mascota"
                        className="border-2 w-full mt-2 rounded-2xl"
                         value = {nombre}
                         onChange={ (e) => setNombre(e.target.value) }

                         />
                        
                </div>

                <div className="mb-5">
                    <label  htmlFor="propietario" className="block  text-gray-700 uppercase font-bold">
                        Nombre Propietario
                        </label>
                        
                        <input 
                        id="propietario"
                        className="border-2 w-full mt-2 rounded-2xl" 
                        type="text" placeholder="Nombre del Propietario" 
                        value = {propietario}
                        onChange={ (e) => setPropietario(e.target.value) }
                        />
                </div>

                <div className="mb-5">
                    <label  htmlFor="email" className="block  text-gray-700 uppercase font-bold">
                        Email
                        </label>
                        
                        <input 
                        id="email"
                        className="border-2 w-full mt-2 rounded-2xl" 
                        type="email" placeholder="Email Contanco Propietario" 
                        value = {email}
                        onChange={ (e) => setEmail(e.target.value) }
                        
                        />
                </div>

                <div className="mb-5">
                    <label  htmlFor="alta" className="block  text-gray-700 uppercase font-bold">
                        Alta
                        </label>
                        
                        <input 
                        id="alta"
                        className="border-2 w-full mt-2 rounded-2xl" 
                        type="date" 
                         value = {fecha}
                         onChange={ (e) => setFecha(e.target.value) }
                        />
                </div>

                <div className="mb-5">
                    <label  htmlFor="sintomas" className="block  text-gray-700 uppercase font-bold">
                        Sintomas
                        </label>
                        
                        <textarea className= "border-2 w-full p-2 mt-2 rounded-2xl placeholder-gray-400"
                        placeholder="Describe los Sintomas"
                            id="sintomas"
                            value = {sintomas}
                            onChange={ (e) => setSintomas(e.target.value) }

                        />
                </div>
                    <input type="submit"
                            className="bg-indigo-700 w-full p-3 text-white uppercase font-bold hover:bg-indigo-900 cursor-pointer transition-all"
                            value={ paciente.id ? ' Editar Paciente' : 'Agregar Paciente'}
                    
                    />

            </form>
        </div>
    )
}

export default Formulario
