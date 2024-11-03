import React, { useEffect, useState } from 'react';

const generateHeavyData = (count: number) => {
  return Array.from({ length: count }, (_, index) => ({
    id: index + 1,
    title: `Item ${index + 1}`,
    description: `This is the description for item ${index + 1}.`
  }));
};

const HeavyComponent: React.FC = () => {
  const [data, setData] = useState<{ id: number; title: string; description: string }[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadHeavyData = () => {
      setTimeout(() => {
        setData(generateHeavyData(1000)); 
        setLoading(false);
      }, 2000); 
    };

    loadHeavyData();
  }, []);

  return (
    <div>
      <h2>This is a heavy component</h2>
      {loading ? (
        <p>Loading heavy content...</p>
      ) : (
        <ul style={{ maxHeight: '400px', overflowY: 'scroll' }}>
          {data.map((item) => (
            <li key={item.id}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default HeavyComponent;
