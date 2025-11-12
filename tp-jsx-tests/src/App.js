import DataLoader from './DataLoader';

function App() {
  return (
    <div>
      <h1>TP JSX et Composition</h1>
      <DataLoader
        render={(data) => (
          <ul>
            {data.map((name) => (
              <li key={name}>{name}</li>
            ))}
          </ul>
        )}
      />
    </div>
  );
}

export default App;