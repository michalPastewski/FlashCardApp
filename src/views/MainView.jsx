import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { InfoBox } from '../components/InfoBox';
import { SectionWrapper } from '../components/MainSectionWrapper';
import { useAuth } from '../contexts/AuthProvider';
import { Intro } from './IntroSection';

import '../App.scss';
import './mainViews.style.scss';

export const MainView = () => {
  const { session } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (session) navigate('/user');
  }, [session]);

  return (
    <SectionWrapper className="content">
      <div className="main__view--loading">
        {!session && <Intro />}
        <InfoBox style="warning" />
      </div>
    </SectionWrapper>
  );
};
