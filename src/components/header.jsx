import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { LoginButton } from "./LoginButtonAuth0";
import logo from '../images/LogoBYM.jpg'

export const Header = () => {
  
  const handleSearch = (event) => {
    event.preventDefault();
    const query = event.target.elements.search.value;
    alert(`Buscando: ${query}`);
    // Aquí puedes agregar la lógica para manejar la búsqueda
  };
  
  return (
    <div className="bg-red-500 text-gray-800 flex justify-between items-center w-full px-4 py-2 fixed top-0 left-0 z-10">
  <div className="font-bold text-xl">
    <a href="principal">
      <img src={logo} className="mr-5 h-12 w-12 lg:h-16 lg:w-16" alt="logo" />
    </a>
  </div>
  <form className="flex items-center flex-grow" onSubmit={handleSearch}>
    <input
      type="text"
      name="search"
      placeholder="Buscar..."
      className="px-4 py-2 border border-gray-300 rounded-full mr-2 text-base flex-grow"
    />
    <button
      type="submit"
      className="px-4 py-2 bg-white text-black border border-black rounded-full transition-colors duration-300 text-base hover:bg-gray-400 hover:text-black"
    >
      Buscar
    </button>
  </form>
  <nav>
    <ul className="list-none flex gap-5 items-center m-0 p-0">
      <li>
        <a href="/" className="text-gray-400 px-3 py-2 rounded transition-colors duration-300 hover:bg-red-400">Inicio</a>
      </li>
      <li className="relative">
        <a href="/product" className="text-gray-400 px-3 py-2 rounded transition-colors duration-300 hover:bg-red-400 flex items-center">
          Productos <span>&#9662;</span>
        </a>
        <div className="absolute hidden bg-white shadow-md rounded mt-1 w-40">
          <a href="/" className="block px-3 py-2 text-gray-800 hover:bg-gray-200">Categoría 1</a>
          <a href="/" className="block px-3 py-2 text-gray-800 hover:bg-gray-200">Categoría 2</a>
          <a href="/" className="block px-3 py-2 text-gray-800 hover:bg-gray-200">Categoría 3</a>
        </div>
      </li>
      <li>
        <a href="/contacto" className="text-gray-400 px-3 py-2 rounded transition-colors duration-300 hover:bg-red-400">Contactanos</a>
      </li>
      <li>
        <a href="/cart" className="text-gray-400 px-3 py-2 rounded transition-colors duration-300 hover:bg-red-400">
          <i className="fas fa-shopping-cart"></i>
        </a>
      </li>
      <li>
        <LoginButton></LoginButton>
      </li>
    </ul>
  </nav>
</div>

);
  
  
};

export default Header

