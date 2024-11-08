import { useForm } from "react-hook-form"

function App() {
  const {register, handleSubmit} = useForm()

  return (
    <>
    <div className="w-full mt-32 flex flex-col justify-center">
      <h1 className="text-center font-bold text-xl">Formulario para validar</h1>
      <form className="p-4 flex flex-col gap-y-2 mx-auto my-10 bg-blue-100 rounded" onSubmit={handleSubmit(data=>{console.log(data)})}>

        <label htmlFor="name">nombre: </label>
        <input className="rounded p-2" placeholder="nombre" id="name" type="text" 
        {...register("name")}
        />
        
        <label htmlFor="email">email: </label>
        <input className="rounded p-2" placeholder="email" id="email" type="email" 
        {...register("email")}/>

        <label htmlFor="password">contraseña: </label>
        <input className="rounded p-2" placeholder="contraseña" id="password" type="password" 
        {...register("password")}/>

        <button className="rounded p-2 bg-red-200 mt-4 hover:cursor-pointer font-bold text-gray-500" type="submit" >Enviar</button>
      </form>
    </div>
    </>
  )
}

export default App
