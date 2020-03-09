import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Creators as ReposActions } from '../../common/store/reducers/repos';

import './styles.css';

export default function Dashboard() {
  const [user, setUser] = useState();
  const dispatch = useDispatch();
  const repos = useSelector(state => state.repos);
  function handleSubmit() {
    dispatch(ReposActions.addRepo(user));
  }

  return (
    <section>
      <form>
        <input onChange={el => setUser(el.target.value)} />
        <button onClick={() => handleSubmit()} type="button">
          Novo
        </button>
      </form>

      <ul>
        {repos.map(repo => (
          <li key={repo.id}>
            {repo.name}
            <div>
              <button
                onClick={() => dispatch(ReposActions.removeRepo(repos.id))}
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
