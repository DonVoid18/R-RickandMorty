import { useEffect, useState } from "react";
import Character from "./Character";
function CharacterList() {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fecthData() {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character?page=${page}`
      );
      const data = await response.json();
      setCharacters(data.results);
      setLoading(true);
    }
    fecthData();
  }, [page]);

  return (
    <div className="grow max-w-screen-xl">
      <NavPage page={page} setPage={setPage}></NavPage>
      <div className="grid grid-cols-4 gap-4 px-5">
        {loading ? (
          characters.length != 0 ? (
            characters.map((character) => {
              return (
                <Character key={character.id} character={character}></Character>
              );
            })
          ) : (
            "No hay resultados"
          )
        ) : (
          <div>Cargando...</div>
        )}
      </div>
    </div>
  );
}
function NavPage({ page, setPage }) {
  return (
    <header className="p-5 flex justify-between">
      {page > 1 ? (
        <button
          className="bg-[#3a86ff] p-[5px] rounded  hover:bg-[#8ac926] ease-in duration-200"
          onClick={() => {
            setPage(page - 1);
          }}
        >
          Page: {page}
        </button>
      ) : (
        <p className="bg-[#8d99ae] p-[5px] rounded">Page: 1</p>
      )}
      <button
        className="bg-[#3a86ff] p-[5px] rounded hover:bg-[#8ac926] ease-in duration-200"
        onClick={() => {
          setPage(page + 1);
        }}
      >
        Page {page + 1}
      </button>
    </header>
  );
}

export default CharacterList;
