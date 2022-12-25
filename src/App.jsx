import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/hero/Hero';
import Form from './components/form/Form';
import ShortenedLink from './components/form/ShortenedLink';
import StatisticsTextBox from './components/statistics/StatisticsTextBox';
import FeatureCards from './components/statistics/FeatureCards';
import CtaBanner from './components/CtaBanner';
import Footer from './components/footer/Footer';

function App() {
  const [apiData, setApiData] = useState([]);
  const [burgerState, setBurgerState] = useState(false);

  async function getDataResult(url) {
    try {
      let response = await fetch(`https://api.shrtco.de/v2/shorten?url=${url}`);
      let data = await response.json();
      setApiData([...apiData, data.result]);
    } catch (error) {
      console.error(`Could not get API data, ${error}`);
    }
  }

  const checkClickedState = state => {
    setBurgerState(state);
  };

  return (
    <main>
      <Navbar hamburgerClicked={checkClickedState} />
      <section className="section-hero">
        <Hero getState={burgerState} />
        <Form fetch={getDataResult} />
      </section>
      <section className="section-statistics">
        {apiData?.map(item => {
          return <ShortenedLink key={item?.code} apiData={item} />;
        })}
        <StatisticsTextBox />
        <FeatureCards />
      </section>
      <CtaBanner title={'Boost your links today'} />
      <Footer />
    </main>
  );
}

export default App;
