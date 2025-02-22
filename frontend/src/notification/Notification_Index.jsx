import { AnimatePresence } from "framer-motion";
import Notification from "./Notification";
import { useSelector } from "react-redux";

const Notification_Index = () => {
  const { notifications } = useSelector((state) => state.notification);
  // console.log("notifications", notifications);
  return (
    <>
      {/* Notification Container */}
      <div className="flex flex-col gap-1 w-72 fixed top-2 right-2 z-50 pointer-events-none">
        <AnimatePresence>
          {notifications.map((notification) => (
            <Notification
              key={notification.id}
              id={notification.id}
              text={notification.text}
            />
          ))}
        </AnimatePresence>
      </div>
    </>
  );
};

export default Notification_Index;
