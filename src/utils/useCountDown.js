import { useEffect, useState } from 'react';

const useCountdown = (targetDate) => {
  const countDownDate = targetDate;

	const [countDown, setCountDown] = useState(0);

  useEffect(() => {
    const interval = setInterval(async () => {
			if (countDownDate > 0) {
					setCountDown(countDownDate * 1000 - new Date().getTime());
			}
    }, 1000);

    return () => clearInterval(interval);
  }, [countDownDate]);

  return getReturnValues(countDown);
};

const getReturnValues = (countDown) => {
  // calculate time left
  const days = Math.floor(countDown / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((countDown % (1000 * 60)) / 1000);

  return [days, hours, minutes, seconds];
};

export { useCountdown };