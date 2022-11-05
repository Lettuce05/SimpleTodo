import './Nav.css';
import { store } from '../../store';
import Link from '../Link/Link';
import ListForm from '../ListForm/ListForm';

export default function Nav() {
  // import necessary state from global state
  const lists = store((state) => state.todo(state => state.lists));
  const open = store((state) => state.nav(state => state.open));
  // import state action from global state
  const closeNav = store((state) => state.nav(state => state.closeNav));

  return (
    <nav className={`${open ? 'nav-open' : ''}`}>
      <a className="nav__btn-close" onClick={() => closeNav()}>&times;</a>
      <div className="nav__linkContainer">
        {lists.map((list) => <Link key={list.id} list={list} />)}
        <ListForm />
      </div>
    </nav>
  )
}