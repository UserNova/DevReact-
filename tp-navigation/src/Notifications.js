function Notifications() {
  const notifications = 3; 

  return (
    <div>
      {notifications > 0 && <p>Vous avez des notifications</p>}
    </div>
  );
}

export default Notifications;
