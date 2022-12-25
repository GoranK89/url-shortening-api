import HeroText from './HeroText';
import HeroImg from './HeroImg';
import ImgHero from '../images/illustration-working.svg';
import MobileMenu from './MobileMenu';

const Hero = ({ getState }) => {
  return (
    <>
      <HeroText />
      {!getState && (
        <HeroImg
          src={ImgHero}
          alt={'Illustration of a person seated in front of a computer'}
        />
      )}
      {getState && <MobileMenu />}
    </>
  );
};

export default Hero;
