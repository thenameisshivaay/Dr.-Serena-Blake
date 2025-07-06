import React, { useEffect } from 'react';
import PrivacyPolicyPage from '../components/Privacypolicy';

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return <PrivacyPolicyPage />;
};

export default PrivacyPolicy;
