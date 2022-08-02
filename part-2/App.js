const App = () => {
  return (
    <div>
      <Tweet
        username="jj"
        name="Joe"
        date="10/10/2018"
        message="Hello World!"
      />
      <Tweet
        username="Sam"
        name="Samuel"
        date="8/1/2020"
        message="Just Arrived"
      />
      <Tweet
        username="thebob"
        name="Bob"
        date="10/30/2022"
        message="Love this site!"
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
