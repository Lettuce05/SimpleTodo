import './Nav.css';
import { store } from '../../store';
import Link from '../Link/Link';

export default function Nav() {
  const lists = store((state) => state.todo(state => state.lists));
  return (
    <nav>
      <a className="nav__btn-close">&times;</a>
      <div className="nav__linkContainer">
        {lists.map((list) => <Link key={list.id} list={list} />)}
      </div>
      
      
    </nav>
  )
}