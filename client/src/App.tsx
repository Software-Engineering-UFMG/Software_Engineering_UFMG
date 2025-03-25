function App() {
  return (
    <div>
      <p>teste</p>
      <p>{import.meta.env.VITE_API_URL}</p>
      <p>{import.meta.env.VITE_ENVIRONMENT}</p>
    </div>
  );
}

export default App;
