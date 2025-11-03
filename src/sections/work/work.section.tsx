import Header from '../../shared/components/header/header.tsx';
import { SectionsButtons } from '../../shared/components/section-buttons/section-buttons.tsx';

const WorkSection = () => {
  return (
    <div>
      <div className={' flex h-full flex-col space-y-10 justify-between'}>
        <Header
          className={'!justify-items-start !items-start !h-auto'}
          animate={false}
          showFooter={false}
        />

        <SectionsButtons className={'!self-start'} />
      </div>
    </div>
  );
};

export default WorkSection;
