import MainCard from './components/main-card';

function App() {
  return (
    <div className="font-primary bg-primary from-primary h-screen w-screen overflow-auto bg-linear-to-t to-white">
      <div className="m-auto flex h-full max-w-6xl items-center justify-center p-0 md:p-8">
        <MainCard />
      </div>
    </div>
  );
}

export default App;
