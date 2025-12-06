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
            Hi! I`m Amir —{' '}
            <span className={'text-pinky-light'}>frontend developer</span> based
            in Ireland, originally from Ukraine.
          </>,
          <>
            1.5 years of{' '}
            <span className={'text-pinky-light'}>commercial experience</span> in
            UI development.
          </>,
          <>
            Worked on <span className={'text-pinky-light'}>e-commerce</span>,{' '}
            <span className={'text-pinky-light'}>CMS</span>,{' '}
            <span className={'text-pinky-light'}>landing-pages</span>,{' '}
            <span className={'text-pinky-light'}>Telegram Webapps & Bots</span>,{' '}
            <span className={'text-pinky-light'}>
              third-party services integrations
            </span>{' '}
            and many more
          </>,
          <>
            Focused on <span className={'text-pinky-light'}>responsive</span>{' '}
            layouts, <span className={'text-pinky-light'}>clean code</span> and{' '}
            <span className={'text-pinky-light'}>usability</span>.
          </>,
          <>
            I care about <span className={'text-pinky-light'}>speed</span>,{' '}
            <span className={'text-pinky-light'}>architecture</span> and{' '}
            <span className={'text-pinky-light'}>bringing</span> design to life.
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
