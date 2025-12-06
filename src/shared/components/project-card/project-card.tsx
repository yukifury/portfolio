import React from 'react';
import type { BasicProject } from '../../../sections/work/projects.data.ts';
import { cn } from '../../lib/classnames.utils.ts';
import { useModal } from '../../providers/modal/modal.context.tsx';

export interface ProjectCardProps {
  data?: BasicProject;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ data }) => {
  const { callModal } = useModal();

  const sharedClassNames =
    'rounded-[16px] object-cover w-full h-full z-10 relative hover:scale-99 transition cursor-pointer 2xl:px-[140px] px-10';

  if (!data) {
    return (
      <div
        className={cn(
          'border border-gray-800 hover:!scale-100 group',
          sharedClassNames,
        )}
      >
        <div
          className={
            'group-hover:opacity-100 opacity-0 transition duration-400 h-full w-full flex justify-center items-center'
          }
        >
          <span className={'text-gray-500'}>Nothing here yet :(</span>
        </div>
      </div>
    );
  }

  const handleClick = () => {
    callModal({
      title: data.name,
      description: data.description,
      stack: data.techStack.join(', '),
      link: data.link,
    });
  };

  return (
    <div
      onClick={handleClick}
      className={cn(sharedClassNames, 'bg-black border border-gray-800')}
    >
      <div
        className={
          'h-full flex-col gap-1 w-full flex justify-center items-center'
        }
      >
        {data.titleImg && (
          <img
            src={data.titleImg}
            alt={data.name}
            className={
              'h-10 opacity-60 user-select-none pointer-events-none absolute top-10'
            }
          />
        )}

        <div className={'flex flex-col gap-1 w-full text-center items-center'}>
          <span
            className={
              'text-white cursor-pointer user-select-none pointer-events-none 2xl:text-xl uppercase'
            }
          >
            {data.name}
          </span>

          <span
            className={
              'text-white cursor-pointer user-select-none pointer-events-none 2xl:text-lg'
            }
          >
            {data.smallDescription}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
