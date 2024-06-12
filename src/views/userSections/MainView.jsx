import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { InfoBox } from '../../components/InfoBox';
import { SectionWrapper } from '../../components/MainSectionWrapper';
import { useAuth } from '../../contexts/AuthProvider';
import { Intro } from './IntroSection';

import '../../App.scss';
import './mainViews.style.scss';

export const MainView = () => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (currentUser) navigate('/user');
  }, [currentUser]);

  return (
    <SectionWrapper className="content">
      <div className="main__view--loading">
        {!currentUser && <Intro />}
        <InfoBox style="warning" />
      </div>
    </SectionWrapper>
  );
};
