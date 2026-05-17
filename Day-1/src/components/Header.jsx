function Header() {
  const hour = new Date().getHours();
  let greeting = "";

  if (hour >= 5 && hour < 12) {
    greeting = "Good Morning";
  } else if (hour >= 12 && hour < 18) {
    greeting = "Good Afternoon";
  } else {
    greeting = "Good Evening";
  }

  return (
    <div className="hr-header">
      <h1>
        {greeting}, {import.meta.env.VITE_INTERN_NAME}
      </h1>
      <p>Current Time: {hour}:00</p>
    </div>
  );
}

export default Header;
