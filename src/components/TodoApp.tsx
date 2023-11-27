import { useState } from 'react'

export const TodoApp = () => {
  const [nuevaTarea, setNuevaTarea] = useState('')
  return (
    <div>
      <h1>Lista de tareas</h1>
      <div>
        <input
          type="text"
          placeholder="Escribe una tarea"
          value={ nuevaTarea }
          onChange={ (e)=>setNuevaTarea(e.target.value) }
        />
      </div>
    </div>
  )
}