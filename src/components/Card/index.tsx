import { Todo } from "../../types/Todo"

import "./style.css"

export type CardProps = {
  todoprops: Todo,
  completeTodo: (id: number) => void,
  removeTodo: (id: number) => void

}

const index = ({ todoprops, completeTodo, removeTodo }: CardProps) => {
  return (
    <div className={`card ${todoprops.completed ? 'done' : ''}`}>
      <h2>{todoprops.title}</h2>
      <div className="card-buttons">
        <button onClick={() => completeTodo(todoprops.id)}>
          {todoprops.completed ? 'Retomar' : 'Completar'}
        </button>
        <button onClick={() => removeTodo(todoprops.id)}>Deletar</button>
      </div>
    </div>
  );
};
export default index