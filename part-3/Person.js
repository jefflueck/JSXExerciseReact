const Person = ({ name, age, hobbies }) => {
  let message;
  if (age > 18) {
    message = 'Please go vote';
    if (name.length > 8) {
      newName = name.slice(0, 6);
    }
  } else {
    message = 'you must be 18 to vote';
    name = name;
  }
  return (
    <div>
      <p>Learn some information about this person</p>
      <p>Name: {name}</p>
      <h3>{message}</h3>
      <ul>
        {hobbies.map((t) => (
          <li>{t}</li>
        ))}
      </ul>
    </div>
  );
};
