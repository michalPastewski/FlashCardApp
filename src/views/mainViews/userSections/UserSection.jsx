import { SectionWrapper } from '../../../components/MainSectionWrapper';
import { ActionsSection } from '../../mainViews/userSections/actionsSection/ActionsSection';
import { WordSection } from './wordSection/WordSection';

export const UserSection = () => {
  return (
    <SectionWrapper>
      <ActionsSection />
      <WordSection />
    </SectionWrapper>
  );
};
