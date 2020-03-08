import React from 'react';
import { ApplyProvider } from './common/higherOrder';

import './config/ReactotronConfig';

import Routes from './routes';

const App = () => {
  return <Routes />;
};

export default ApplyProvider(App);
