import React, { useEffect, useState } from 'react';

const TimeAgo = ({ timestamp }) => {
  const [timeAgo, setTimeAgo] = useState('');

  useEffect(() => {
    const calculateTimeAgo = () => {
      const now = new Date();
      const previousTime = new Date(timestamp);
      const timeDifference = now - previousTime;

      const seconds = Math.floor(timeDifference / 1000);
      const minutes = Math.floor(seconds / 60);
      const hours = Math.floor(minutes / 60);
      const days = Math.floor(hours / 24);

      let result;

      if (days > 0) {
        result = `${days} day${days > 1 ? 's' : ''} ago`;
      } else if (hours > 0) {
        result = `${hours} hour${hours > 1 ? 's' : ''} ago`;
      } else if (minutes > 0) {
        result = `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
      } else {
        result = `${seconds} second${seconds !== 1 ? 's' : ''} ago`;
      }

      setTimeAgo(result);
    };

    calculateTimeAgo();

    // Update time every minute
    const intervalId = setInterval(calculateTimeAgo, 60000);

    return () => clearInterval(intervalId);
  }, [timestamp]);

  return <span>{timeAgo}</span>;
};

export default TimeAgo;
