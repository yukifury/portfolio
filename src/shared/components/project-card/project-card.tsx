import React from 'react';
import type { BasicProject } from '../../../sections/work/projects.data.ts';
import { cn } from '../../lib/classnames.utils.ts';

export interface ProjectCardProps {
  data?: BasicProject;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ data }) => {
  const sharedClassNames =
    'rounded-[16px] object-cover w-full h-full z-10 relative hover:scale-99 transition cursor-pointer px-[140px]';

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

  return (
    <div className={cn(sharedClassNames, !data.titleImg && 'bg-blueish')}>
      {data.titleImg && (
        <img
          src={data.titleImg}
          alt={data.name}
          className={'w-full h-full absolute'}
        />
      )}

      <div
        className={
          'h-full flex-col gap-1 w-full flex justify-center items-center'
        }
      >
        <span className={'text-white 2xl:text-xl uppercase'}>{data.name}</span>
        <span className={'text-white 2xl:text-lg'}>
          {data.smallDescription}
          {data.smallDescription}
          {data.smallDescription}
          {data.smallDescription}
        </span>
      </div>
    </div>
  );
};

export default ProjectCard;
