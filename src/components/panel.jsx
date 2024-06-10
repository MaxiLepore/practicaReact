import React from 'react'
import imagen from '../images/imagen.jpg'
import DemoCarousel from './carrousel';

const panel = () => {
  return (
    <>
    <div className='w-full h-screen font-Chocolate'>
      <div className='grid gap-4 mx-4 xs:grid-cols-3 lg:grid-cols-2'>
        <div className='bg-blue-800'>
                <DemoCarousel></DemoCarousel>
        </div>
        <div className='bg-red-800 grid grid-rows-3'>
          <div className='text-center mt-2 text-6xl underline'><h1>Técnica Kumiko</h1></div>
          <div className='row-span-2 '>
            <p className='text-wrap m-3 font-Chocolate'>Somos BYM Factory, donde fusionamos la tradición y la elegancia con nuestra colección de muebles elaborados 
          con la técnica japonesa Kumiko. Sin tornillos ni clavos, cada pieza es ensamblada meticulosamente mediante 
          encastres precisos, creando patrones geométricos únicos. Nuestros artesanos utilizan maderas de alta calidad, 
          asegurando durabilidad y belleza en cada mueble. Descubre cómo la técnica Kumiko puede transformar tu hogar 
          con diseño y funcionalidad excepcionales.
            </p>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default panel
