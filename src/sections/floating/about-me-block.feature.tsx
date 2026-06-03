import FloatingBlock from '../../shared/components/floating-block/floating-block.tsx';

const AboutMeBlockFeature = () => {
  return (
    <FloatingBlock
      name={'about-me'}
      className={'shadow-float-purple bg-black p-10'}
      containerClassName={'2xl:w-[52%] w-[59%] 2xl:h-9/10 h-full'}
      backgroundImg={'/imgs/about-me-bg.webp'}
    >
      <ul className={'text-white text-xl space-y-5 font-normal'}>
        {[
          <>
            Hi! I&apos;m Amir —{' '}
            <span className={'text-pinky-light'}>frontend developer</span> based
            in Ireland, originally from Ukraine.
          </>,
          <>
            ~2.5 years of{' '}
            <span className={'text-pinky-light'}>commercial experience</span>{' '}
            building scalable web applications with React, Next.js and
            TypeScript.
          </>,
          <>
            Worked on{' '}
            <span className={'text-pinky-light'}>SaaS admin panels</span>,{' '}
            <span className={'text-pinky-light'}>e-commerce platforms</span>,{' '}
            <span className={'text-pinky-light'}>CMS products</span>,{' '}
            <span className={'text-pinky-light'}>landing pages</span> and{' '}
            <span className={'text-pinky-light'}>API integrations</span>.
          </>,
          <>
            Experienced in{' '}
            <span className={'text-pinky-light'}>UI architecture</span>,{' '}
            <span className={'text-pinky-light'}>state management</span>,{' '}
            <span className={'text-pinky-light'}>data-heavy interfaces</span>{' '}
            and{' '}
            <span className={'text-pinky-light'}>performance optimization</span>
            .
          </>,
          <>
            Focused on{' '}
            <span className={'text-pinky-light'}>responsive layouts</span>,{' '}
            <span className={'text-pinky-light'}>maintainable code</span> and{' '}
            <span className={'text-pinky-light'}>developer productivity</span>.
          </>,
          <>
            I focus on <span className={'text-pinky-light'}>speed</span>,{' '}
            <span className={'text-pinky-light'}>architecture</span> and
            bringing product ideas to life
          </>,
          <>
            I study <span className={'text-pinky-light'}>Computer Science</span>{' '}
            at <span className={'text-pinky-light'}>KROK University</span> in
            Kyiv remotely.
          </>,
        ].map((item, index) => (
          <li className={'flex'} key={`about-me-list-item-${index}`}>
            <span className={'text-[16px] text-white opacity-50 mr-2'}>
              {index + 1}
            </span>
            <p>
              <span className={'2xl:text-[20px] text-[16px]'}>{item}</span>
            </p>
          </li>
        ))}
      </ul>
    </FloatingBlock>
  );
};

export default AboutMeBlockFeature;
