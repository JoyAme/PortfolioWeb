import React from 'react'
import{ useState, useEffect } from 'react';
import Spinner from './Aboutstyle';




const About = () => {
  
   // App.js


  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate data loading or any asynchronous operation
    const fetchData = async () => {
      // Replace this with your actual data fetching logic
      await new Promise(resolve => setTimeout(resolve, 2000));
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <div>
      {loading ? (
        <Spinner/>
      ) : (
        // Render your main content once loading is complete
        <div>
          <h1>Your Main Content</h1>
          {/* ... */}
        </div>
      )}
    </div>
  );
};




export default About
