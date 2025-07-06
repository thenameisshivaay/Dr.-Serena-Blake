import React, { useEffect } from 'react';
import GoodFaithEstimatePage from '../components/GoodFaithEstimatePage';

const Estimate = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return <GoodFaithEstimatePage />;
};

export default Estimate;
