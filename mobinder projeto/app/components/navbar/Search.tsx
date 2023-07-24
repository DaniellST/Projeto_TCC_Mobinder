"use client";

import { BiSearch } from "react-icons/bi";

const Search = () => {
  return (
    <div
      className="w-full md:w-auto py-2 rounded-full shadow-sm hover:shadow-md transition cursor-pointer"
      style={{
        backgroundColor: "white",
        border: "1px solid white", // Definindo as bordas como sólidas e brancas
      }}
    >
      <div className="flex flex-row items-center justify-between">
        <div className="text-sm font-semibold px-6">Teste 1</div>

        <div
          className="hidden
        sm:block
        text-sm
        font-semibold
        px-6
        border-x-[1px]
        flex-1
        text-center"
        >
          Teste 2
        </div>
        <div className="text-sm pl-6 pr-2 flex items-center gap-3">
          <div className="hidden sm:block">Teste 3</div>
          <div
            className="p-3 bg-azul rounded-full"
            style={{
              width: "40px",
              height: "40px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "white", // Define a cor do ícone como branco
            }}
          >
            <BiSearch size={32} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
