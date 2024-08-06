import { useReducer } from "react";
import { myState, myReducer } from "./ListaReducer";


export default function Lista() {
  const [state, dispatch] = useReducer(myReducer, myState);

  function add() {
    dispatch({type: 'add'});
  }

  function remove(id) {
    dispatch({type: 'remove', value: id});
  }

  function update(newItem) {
    dispatch({type: 'update', value: newItem});
  }

  return (
    <>
      <button onClick={add}>Adicionar item</button>
      {state.map(item => (
        <li key={item.id} onClick={() => remove(item.id)}>{item.id}</li>
      ))}
    </>
  )
}