import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AddWordForm } from '../../components/AddWorldForm';
import { Button } from '../../components/Button';
import { TopBarSearch } from './TopBarSearch';
import { useAuth } from '../../contexts/AuthProvider';

export const TopNav = () => {
  const { signOutUser } = useAuth();
  const navigate = useNavigate();
  const [addForm, setAddForm] = useState(false);

  const onSignOut = async () => {
    await signOutUser();
    navigate('/');
  };

  return (
    <nav className="top__bar__navigation">
      <section className='top__bar__navigation__buttons'>
        <Button
          className="button"
          label="add"
          size="large"
          onClick={() => {
            setAddForm(true);
          }}
        />
        <Link to={'/learn'} className="button">
          <span>learn</span>
        </Link>
        <Button label="sign out" onClick={onSignOut} appearance="" />
        {addForm && <AddWordForm onCancel={setAddForm} />}
      </section>
      <TopBarSearch />
    </nav>
  );
};
