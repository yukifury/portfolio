import FloatingBlock from '../../shared/components/floating-block/floating-block.tsx';

const SkillsBlockFeature = () => {
  return (
    <FloatingBlock
      name={'skills'}
      className={'shadow-float-green bg-black p-10'}
      containerClassName={'w-[52%] h-9/10'}
      backgroundImg={'/imgs/skills-bg.webp'}
    >
      <ul className={'text-white text-xl space-y-5 font-normal'}>
        <li className={'flex'}>
          <span className={'text-[16px] text-white opacity-50 mr-2'}>1</span>
          <p>
            <span className={'text-greenish-light'}>Languages: </span>{' '}
            JavaScript, TypeScript
          </p>
        </li>
        <li className={'flex'}>
          <span className={'text-[16px] text-white opacity-50 mr-2'}>2</span>
          <p>
            <span className={'text-greenish-light'}>Frameworks: </span> React,
            Next.js, Preact
          </p>
        </li>
        <li className={'flex'}>
          <span className={'text-[16px] text-white opacity-50 mr-2'}>3</span>
          <p>
            <span className={'text-greenish-light'}>UI-kits: </span>
            Shadcn/ui, Radix UI
          </p>
        </li>
        <li className={'flex'}>
          <span className={'text-[16px] text-white opacity-50 mr-2'}>4</span>
          <p>
            <span className={'text-greenish-light'}>CSS: </span> Tailwind,
            Bootstrap, PostCSS, SASS
          </p>
        </li>
        <li className={'flex'}>
          <span className={'text-[16px] text-white opacity-50 mr-2'}>5</span>
          <p>
            <span className={'text-greenish-light'}>Testing: </span> Vitest,
            Jest, React Testing Library
          </p>
        </li>
        <li className={'flex'}>
          <span className={'text-[16px] text-white opacity-50 mr-2'}>6</span>
          <p>
            <span className={'text-greenish-light'}>Documentation: </span>{' '}
            Storybook, Docusaurus
          </p>
        </li>
        <li className={'flex'}>
          <span className={'text-[16px] text-white opacity-50 mr-2'}>7</span>
          <p>
            <span className={'text-greenish-light'}>Tools: </span> Vite,
            Webstorm, Postman
          </p>
        </li>
        <li className={'flex'}>
          <span className={'text-[16px] text-white opacity-50 mr-2'}>8</span>
          <p>
            <span className={'text-greenish-light'}>Core: </span> CSS3, HTML5,
            GitHub, Figma, Photoshop
          </p>
        </li>
        <li className={'flex'}>
          <span className={'text-[16px] text-white opacity-50 mr-2'}>9</span>
          <p>
            <span className={'text-greenish-light'}>Other libraries: </span>{' '}
            Redux, ESLint, Prettier, Tanstack Queries/Tables etc.
          </p>
        </li>
      </ul>
    </FloatingBlock>
  );
};

export default SkillsBlockFeature;
