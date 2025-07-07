import { useEffect, useState } from "react";
import { Users, Globe, TrendingUp } from "lucide-react";

export default function LiveCounter() {
  const [visitorCount, setVisitorCount] = useState(0);
  const [onlineCount, setOnlineCount] = useState(0);
  const [location, setLocation] = useState("Pakistan");

  useEffect(() => {
    // Simulate real-time counter updates
    const baseVisitors = 12;
    const baseOnline = 3;

    const updateCounters = () => {
      setVisitorCount(baseVisitors + Math.floor(Math.random() * 8));
      setOnlineCount(baseOnline + Math.floor(Math.random() * 4));
    };

    updateCounters();
    const interval = setInterval(updateCounters, 15000); // Update every 15 seconds

    // Get user location (mock for demo)
    const locations = ["Pakistan", "China", "India", "Bangladesh", "Turkey"];
    setLocation(locations[Math.floor(Math.random() * locations.length)]);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed bottom-4 left-4 z-40">
      <div className="bg-black/80 backdrop-blur-sm rounded-lg px-4 py-2 text-white text-sm space-y-1">
        <div className="flex items-center gap-2">
          <Users className="w-4 h-4 text-green-400" />
          <span className="live-counter">{visitorCount} clients browsing now</span>
        </div>
        <div className="flex items-center gap-2">
          <Globe className="w-4 h-4 text-blue-400" />
          <span>Viewing from {location}</span>
        </div>
        <div className="flex items-center gap-2">
          <TrendingUp className="w-4 h-4 text-yellow-400" />
          <span>{onlineCount} online consultations</span>
        </div>
      </div>
    </div>
  );
}