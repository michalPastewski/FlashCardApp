import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AddWordForm } from '../../components/AddWorldForm';
import { Button } from '../../components/Button';
import { useAuth } from '../../contexts/AuthProvider';
import { TopBarSearch } from './TopBarSearch';

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
      <section className="top__bar__navigation__buttons">
        <Button
          label="add"
          appearance="primary"
          onClick={() => {
            setAddForm(true);
          }}
        />
        <Link to={'/learn'} className="button primary-button">
          <span>learn</span>
        </Link>
        <Button label="sign out" onClick={onSignOut} appearance="primary" />
        {addForm && <AddWordForm onCancel={setAddForm} />}
      </section>
      <TopBarSearch />
    </nav>
  );
};
