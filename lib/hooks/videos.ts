import { useState, useEffect } from "react";

export const useVideoStats = () => {
  const [stats, setStats] = useState([]);

  useEffect(() => {
    async function getStats() {
      const result = await fetch("/api/stats");
      const items = await result.json();
      setStats(items);
    }
    if (stats.length === 0) {
      getStats();
    }
  }, null);

  return stats;
};
