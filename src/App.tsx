import { SubmitHandler, useForm } from "react-hook-form"

type FormData = {
  name: string,
  email: string,
  password: string
}

function App() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>()
  const onSubmit: SubmitHandler<FormData> = data => {
    console.log(errors.name)
    console.log(data)
  }

  return (
    <>
      <div className="w-full mt-32 flex flex-col justify-center">
        <h1 className="text-center font-bold text-xl">Formulario para validar</h1>

        <form className="p-4 flex flex-col gap-y-2 mx-auto my-10 bg-blue-100 rounded min-w-80 max-w-80" onSubmit={handleSubmit(onSubmit)}>

          <label htmlFor="name">nombre: </label>
          <div className={`${errors.name && 'bg-red-600 rounded'} flex flex-col`}>
            <input
              className={`rounded p-2 focus:outline-none focus:border-2 ${!errors.name && 'focus:border-blue-500'} ${errors.name && 'border-2 border-red-600 focus:outline-none focus:border-2 focus:border-red-600'}`}
              placeholder="nombre"
              id="name"
              type="text"

              {...register("name", { required: true, maxLength: 20, pattern: /^[A-Za-z]+$/i })}
            />
            {errors.name && <p className="bg-red-600 text-white rounded px-2 max-w-full">Ingrese un nombre, no debe contener numeros ni caracteres especiales</p>}
          </div>

          <label htmlFor="email">email: </label>
          <div className={`${errors.email && 'bg-red-600 rounded'} flex flex-col`}>
            <input
              className={`rounded p-2 focus:outline-none focus:border-2 ${!errors.email && 'focus:border-blue-500'} 
              
              ${errors.email && 'border-2 border-red-600 focus:outline-none focus:border-2 focus:border-red-600'}`}

              placeholder="email"
              id="email"
              type="email"
              {...register("email", {required: true})}
            />
            {errors.email && <p className="bg-red-600 text-white rounded px-2 max-w-full">Ingrese un email valido</p>}
          </div>

          <label htmlFor="password">contraseña: </label>
          <div className={`${errors.password && 'bg-red-600 rounded'} flex flex-col`}>
            <input 
            className={`rounded p-2 focus:outline-none focus:border-2 ${!errors.password && 'focus:border-blue-500'}  
            
            ${errors.password && 'border-2 border-red-600 focus:outline-none focus:border-2 focus:border-red-600'}`}

            placeholder="contraseña" 
            id="password" 
            type="password"
              {...register("password", {required: true, minLength: 8, pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]+$/})} 
              />
              {errors.password && <p className="bg-red-600 text-white rounded px-2 max-w-full">La contraseña debe contener almenos una mayuscula, una minuscula, un numero y debe ser de almenos 8 caracteres</p>}
          </div>

          <button className="rounded p-2 bg-red-200 mt-4 hover:cursor-pointer font-bold text-gray-500" type="submit" >Enviar</button>
        </form>
      </div>
    </>
  )
}

export default App
