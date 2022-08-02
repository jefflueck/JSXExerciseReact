const App = () => {
  return (
    <div>
      <Person name="John" age={20} hobbies={['sports', 'music', 'movies']} />
      <Person
        name="Jane"
        age={17}
        hobbies={['reading', 'kayaking', 'crosswords']}
      />
      <Person
        name="Bob"
        age={30}
        hobbies={['guitar', 'fishing', 'video gaming']}
      />
      <Person
        name="Mary"
        age={14}
        hobbies={['playing with friends', 'cooking', 'playing with the dog']}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
