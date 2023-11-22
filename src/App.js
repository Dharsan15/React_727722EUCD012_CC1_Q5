import React from 'react';
import './index.css'
import FontSizeAdjuster from './FontSizeAdjuster';

const App = () => {
  return (
    <div>
      <h1>Font Size Adjuster Example</h1>
      <FontSizeAdjuster defaultSize={16} />
    </div>
  );
};

export default App;
