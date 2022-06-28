import CharacterList from "./components/CharacterList";
function App() {
  return (
    <div className="bg-[#111827] text-white flex flex-col min-h-screen items-center">
      <h1 className="py-10 text-center font-bold text-3xl text-[#8ac926] ">REST API DE RICK AND MORTY</h1>
      <CharacterList></CharacterList>
    </div>
  );
}

export default App;
