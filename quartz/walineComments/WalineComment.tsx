import { useEffect } from 'react';
import { init } from '@waline/client';
import './waline.css';

const WalineComment = () => {
  useEffect(() => {
    console.log('Component is mounting');

    const initializeWaline = () => {
      console.log('Initializing Waline');
      init({
        el: '#waline',
        serverURL: 'https://waline-neowang0122-github-io.vercel.app',
        // Additional configurations can be added here
      });
    };

    const walineElement = document.getElementById('waline');
    if (walineElement) {
      console.log('Waline element found');
      initializeWaline();
    }

    const observer = new MutationObserver((mutationsList) => {
      console.log('Mutation detected');
      for (let mutation of mutationsList) {
        if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
          const addedNode = mutation.addedNodes[0];
          if (addedNode instanceof Element && addedNode.id === 'waline') {
            console.log('Waline element added dynamically');
            initializeWaline();
            observer.disconnect();
          }
        }
      }
    });

    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      console.log('Component is unmounting');
      observer.disconnect();
    };
  }, []);

  return <div id="waline" />;
};

export default WalineComment;
