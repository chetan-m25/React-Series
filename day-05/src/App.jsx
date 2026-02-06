import { useState } from "react";
import NotificationList from "./components/NotificationList";
import EmptyState from "./components/EmptyState";

const App = () => {
  const [notifications, setNotifications] = useState([
    { id: 1, text: "Missed Call", read: false },
    { id: 2, text: "Profile Updated", read: false },
  ]);

  function markRead(id) {
    const updated = notifications.map((n) => {
      return n.id === id ? { ...n, read: !n.read } : n;
    });
    setNotifications(updated);
  }

  return (
    <div className="min-h-screen bg-[#233D4C] text-[#FEFACD] flex flex-col items-center justify-center gap-6">
      {notifications.length > 0 ? (
        <NotificationList notifications={notifications} markRead={markRead} />
      ) : (
        <EmptyState />
      )}

      <button
        onClick={() => {
          setNotifications([]);
        }}
        className="bg-red-600 active:scale-105 px-4 py-2 rounded-lg font-semibold"
      >
        Clear All
      </button>
    </div>
  );
};

export default App;
