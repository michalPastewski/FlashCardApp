import { Button } from '../../components/Button';

export const ActionsNavigation = ({
  addFormState,
  onAddWorld,
  openLearnSectionState,
  openLearnSectionHandler,
}) => {
  return (
    <section className="actions__buttons">
      {console.log(addFormState)}

      {addFormState && !openLearnSectionState ? (
        <>
          <Button
            label="add new world"
            size="large"
            onClick={() => {
              onAddWorld(true);
            }}
          />
          <Button label="learn" size="large" disabled />
        </>
      ) : !addFormState && openLearnSectionState ? (
        <>
          <Button
            label="add new world"
            size="large"
            onClick={() => {
              openLearnSectionHandler(false);
              onAddWorld(true);
            }}
          />
          <Button
            label="learn"
            size="large"
            onClick={() => openLearnSectionHandler(true)}
          />
        </>
      ) : (
        <>
          <Button
            label="add new world"
            size="large"
            onClick={() => {
              onAddWorld(true);
            }}
          />
          <Button
            label="learn"
            size="large"
            onClick={() => openLearnSectionHandler(true)}
          />
        </>
      )}
    </section>
  );
};
