import Paciente from "./Paciente"



const ListadoPacientes = ({pacientes, setPaciente, eliminarPaciente}) => {

    
    
    
    return (
        <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
               
               {pacientes && pacientes.length ? (
                       <> 
                        <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
                        <p className="text-xl mt-5 mb-10 text-center">
                            Administra tus {''}
                            <span className="text-indigo-700 font-bold"> Pacientes y citas</span>
                        </p>
            
                    { pacientes.map( paciente => (
            // usamos .map() para iterar en el arreglo y que nos retorne uno nuevo
            // le pasamos de instancia paciente al map y le pasamos el componente 
            //y este va a llamar al componente tantas veces como haya elementos en el areglo de pacientes
            // simpre que mostremos un listado utilizando y generamos muchas veces el mismo componente un .map debemos tener un key unico
            //es mala practica pasar como key el indice de un arreglo , cuesta mucho en performance           
                        <Paciente
                            key={paciente.id}
                            paciente={paciente}
                            setPaciente={setPaciente}
                            eliminarPaciente={eliminarPaciente}
                        />
                    ))}
                    </>
                    
                ) :(
                    <>
                     <h2 className="font-black text-3xl text-center">No Hay Pacientes</h2>
                        <p className="text-xl mt-5 mb-10 text-center">
                            Agrega Pacientes {''}
                            <span className="text-indigo-700 font-bold"> Y apareceran en este apartado</span>
                        </p>
                    </>
                )} 

           

        </div>
    )
}

export default ListadoPacientes
