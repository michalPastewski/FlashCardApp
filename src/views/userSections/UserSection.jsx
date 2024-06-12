import { SectionWrapper } from '../../components/MainSectionWrapper';
import { ActionsSection } from './actionsSection/ActionsSection';
import { WordSection } from './wordsSection/WordsSection';

export const UserSection = () => {
  return (
    <SectionWrapper>
      <ActionsSection />
      <WordSection />
    </SectionWrapper>
  );
};
