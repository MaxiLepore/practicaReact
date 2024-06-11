import React from 'react';
import Carrousel from './carrousel';

const Panel = () => {
  return (
    <div className="flex flex-col justify-start h-screen bg-gray-100">
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-red-500 rounded-lg overflow-hidden shadow-md">
            <Carrousel />
          </div>
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <div className="p-6">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Técnica Kumiko</h1>
              <p className="text-gray-700 leading-relaxed">
                Somos BYM Factory, donde fusionamos la tradición y la elegancia con nuestra colección de muebles elaborados con la técnica japonesa Kumiko. Sin tornillos ni clavos, cada pieza es ensamblada meticulosamente mediante encastres precisos, creando patrones geométricos únicos. Nuestros artesanos utilizan maderas de alta calidad, asegurando durabilidad y belleza en cada mueble. Descubre cómo la técnica Kumiko puede transformar tu hogar con diseño y funcionalidad excepcionales.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Panel;
