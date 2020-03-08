import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Creators as TodoActions } from '../../../common/store/reducers/todos';

import './styles.css';

export default function Dashboard() {
  const [user, setUser] = useState();
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos);
  function handleSubmit() {
    // dispatch(TodoActions.addTodo(user));
    dispatch(TodoActions.addRepo(user));
  }

  return (
    <section>
      <form>
        <input onChange={e => setUser(e.target.value)} />
        <button onClick={() => handleSubmit()} type="button">
          Novo
        </button>
      </form>

      <ul>
        {todos.map(repos => (
          <li key={repos.id}>
            {repos.complete ? <s>{repos.name}</s> : repos.name}
            <div>
              <button
                onClick={() => dispatch(TodoActions.removeRepo(repos.id))}
              >
                Remove
              </button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
