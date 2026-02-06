const NotificationList = ({ notifications, markRead }) => {
  return (
    <div className="bg-[#5F4A8B] p-6 rounded-xl shadow-lg w-[320px]">
      <h2 className="text-xl text-[#FEFACD] font-bold mb-4">Notifications</h2>
      <div className="flex flex-col gap-4">
        {notifications.map((note) => {
          return (
            <div
              key={note.id}
              className={`p-3 rounded-lg flex justify-between font-bold text-[#5F4A8B] items-center ${note.read ? "bg-[#f7f4cd8d]" : "bg-[#FEFACD]"}`}
            >
              <span>{note.text}</span>

              <button
                onClick={() => {
                  markRead(note.id);
                }}
                className="text-xs text-[#FEFACD] bg-[#5F4A8B] px-2 py-1 rounded"
              >
                {note.read ? "Unread ↩️" : "Mark as Read ✅"}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default NotificationList;
