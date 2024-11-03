import React, { useState, Suspense, lazy } from 'react';

const LazyHeavyComponent = lazy(() => import('./HeavyComponent'));

const App: React.FC = () => {
  const [showHeavyComponent, setShowHeavyComponent] = useState(false);

  const handleLoadHeavyComponent = () => {
    setShowHeavyComponent(true);
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>React App with Lazy Loading</h1>
      <p>
        This app demonstrates how to lazy load a component with simulated heavy
        content, loaded on a click event.
      </p>

      <button onClick={handleLoadHeavyComponent} style={{ padding: '10px 20px', fontSize: '16px' }}>
        Load Heavy Component
      </button>

      <Suspense fallback={<p>Loading heavy component...</p>}>
        {showHeavyComponent && <LazyHeavyComponent />}
      </Suspense>
    </div>
  );
};

export default App;

