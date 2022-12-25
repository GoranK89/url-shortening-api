import FeatureCard from './FeatureCard';
import IconBrandRecognition from '../images/icon-brand-recognition.svg';
import IconDetailedRecords from '../images/icon-detailed-records.svg';
import IconFullyCustomizable from '../images/icon-fully-customizable.svg';

const FeatureCards = () => {
  return (
    <div className="feature-card-wrapper">
      <FeatureCard
        icon={IconBrandRecognition}
        alt={'graph icon'}
        title={'Brand Recognition'}
        paragraph={
          "Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content."
        }
      />
      <FeatureCard
        icon={IconDetailedRecords}
        alt={'graph icon'}
        title={'Detailed Records'}
        paragraph={
          'Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decissions.'
        }
      />
      <FeatureCard
        icon={IconFullyCustomizable}
        alt={'graph icon'}
        title={'Fully Customizable'}
        paragraph={
          'Improve brand awareness and content discoverability through customizable links. supercharging audience engagement.'
        }
      />
    </div>
  );
};

export default FeatureCards;
