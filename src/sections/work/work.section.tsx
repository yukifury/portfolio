import Header from '../../shared/components/header/header.tsx';
import { SectionsButtons } from '../../shared/components/section-buttons/section-buttons.tsx';
import ExperienceBlock from './experience-block.tsx';
import ProjectsBlock from './projects-block.tsx';

const WorkSection = () => {
  return (
    <div className={'h-full flex w-full justify-between'}>
      <div className={'flex h-full flex-col justify-between'}>
        <div className={'flex h-full flex-col space-y-10'}>
          <Header
            className={'!justify-items-start !items-start !h-auto'}
            animate={false}
            showFooter={false}
          />

          <SectionsButtons className={'!self-start'} />
        </div>

        <ExperienceBlock />
      </div>

      <div className={'2xl:w-4/7 w-4/7'}>
        <ProjectsBlock />
      </div>
    </div>
  );
};

export default WorkSection;
