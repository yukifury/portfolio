import FloatingBlock from '../../shared/components/floating-block/floating-block.tsx';

const SkillsBlockFeature = () => {
  return (
    <FloatingBlock
      name={'skills'}
      className={'shadow-float-green bg-black p-10'}
      containerClassName={'2xl:w-[52%] w-[59%] 2xl:h-9/10 h-full'}
      backgroundImg={'/imgs/skills-bg.webp'}
    >
      <ul className={'text-white text-xl xl:space-y-5 space-y-2 font-normal'}>
        {[
          { name: 'Languages', text: 'JavaScript, TypeScript' },
          { name: 'Frameworks', text: 'React, Next.js, Preact' },
          { name: 'UI-kits', text: 'Shadcn/ui, Radix UI' },
          { name: 'CSS', text: 'Tailwind, Bootstrap, PostCSS, SASS' },
          { name: 'Testing', text: 'Vitest, Jest, React Testing Library' },
          { name: 'Documentation', text: 'Storybook, Docusaurus' },
          { name: 'Tools', text: 'Webstorm, Postman' },
          { name: 'Core', text: 'CSS3, HTML5, GitHub, Figma, Photoshop' },
          { name: 'Other libraries', text: 'Redux, ESLint, Prettier' },
        ].map((item, index) => (
          <li className={'flex'}>
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
