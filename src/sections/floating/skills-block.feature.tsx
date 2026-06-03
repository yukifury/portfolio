import FloatingBlock from '../../shared/components/floating-block/floating-block.tsx';

const SkillsBlockFeature = () => {
  const data = [
    {
      name: 'Frontend',
      text: 'React, Next.js, Preact, TypeScript, JavaScript, HTML5',
    },
    {
      name: 'Backend',
      text: 'Node.js, NestJS, MongoDB, Mongoose, JWT, bcrypt, Swagger',
    },
    {
      name: 'Styling & UI',
      text: 'CSS3, SASS, PostCSS, Tailwind CSS, Bootstrap, shadcn/ui, Radix UI, TailAdmin',
    },
    {
      name: 'State & Data',
      text: 'Zustand, Redux, TanStack React Query, TanStack Table',
    },
    {
      name: 'Testing',
      text: 'Vitest, Playwright, React Testing Library',
    },
    {
      name: 'DevOps',
      text: 'Linux, Ubuntu, Docker, Docker Compose, Sentry, Nginx, Traefik',
    },
    {
      name: 'Tools & Docs',
      text: 'Storybook, Docusaurus, Git, Figma',
    },
    {
      name: 'Code Quality',
      text: 'ESLint, Prettier',
    },
    {
      name: 'Animation',
      text: 'Framer Motion',
    },
  ];

  return (
    <FloatingBlock
      name={'skills'}
      className={'shadow-float-green bg-black p-10'}
      containerClassName={'2xl:w-[52%] w-[59%] 2xl:h-9/10 h-full'}
      backgroundImg={'/imgs/skills-bg.webp'}
    >
      <ul className={'text-white text-xl xl:space-y-5 space-y-2 font-normal'}>
        {data.map((item, index) => (
          <li className={'flex'} key={`skills-list-item-${index}`}>
            <span className={'text-[16px] text-white opacity-50 mr-2'}>
              {index + 1}
            </span>
            <p>
              <span
                className={'text-greenish-light 2xl:text-[20px] text-[16px]'}
              >
                {item.name}:{' '}
              </span>
              <span className={'2xl:text-[20px] text-[16px]'}>{item.text}</span>
            </p>
          </li>
        ))}
      </ul>
    </FloatingBlock>
  );
};

export default SkillsBlockFeature;
