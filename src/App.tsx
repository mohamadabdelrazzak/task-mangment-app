import './App.css';
import AddToDo from './components/AddToDo';
import ToDos from './components/ToDo';
import Tabs from './components/Tabs';

function App() {
  return (
    <main className="container mx-auto p-4 max-w-lg flex flex-col items-center justify-center shadow-lg rounded bg-white">
      <h1 className="text-3xl font-bold mb-4 text-center text-gray-700 border-b-2 text-color-blue border-color-blue">Task Mangment App</h1>
      <Tabs />
      <AddToDo />
      <ToDos />
    </main>
  );
}

export default App;