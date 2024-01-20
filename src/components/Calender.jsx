

function Calender() {
  const today = new Date();

  return (
    <div className="calender">
      <h3>Calender</h3>
      <p>{today.toLocaleDateString()}</p>
    </div>
  );
}

export default Calender;