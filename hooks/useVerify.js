import { useState } from 'react';

const useVerify = () => {
  const [verify, setVerify] = useState(true);
  return { verify, setVerify };
};

export default useVerify;
