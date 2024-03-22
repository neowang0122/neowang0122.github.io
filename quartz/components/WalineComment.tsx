import { useEffect } from 'react';
import { init } from '@waline/client';
import './waline.css';

const WalineComment = () => {
  useEffect(() => {
    init({
      el: '#waline',
      serverURL: 'https://waline-neowang0122-github-io.vercel.app',
      // 此处可以配置更多配置，参考Waline官方文档...
    });
  }, []);

  return <div id="waline" />;
};

export default WalineComment;