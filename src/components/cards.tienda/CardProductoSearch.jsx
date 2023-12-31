import React from 'react'
import { Link } from 'react-router-dom'

const CardProductoSearch = ({ producto, getCategoriaNombre, onClose }) => {
    return (
        <Link to={`/tienda/producto/${producto.nombre}`} className='flex bg-white rounded-xl w-full h-[200px] duration-300 ease-in-out cursor-pointer'>
            <div className='flex rounded-xl p-2'>
                <Link onClick={onClose} to={`/tienda/producto/${producto.nombre}`} className="h-full w-[150px] object-center rounded-xl">
                    <img src={producto.imagen} alt={producto.nombre} className="h-full w-full object-contain" />
                </Link>
            </div>
            <div className="flex flex-col text-start p-2">
                <Link onClick={onClose} to={`/tienda/producto/${producto.nombre}`} className="text-black font-bold">{producto.nombre}</Link>
                <p className='text-gray-600'>{getCategoriaNombre(producto.categoria_id)}</p>
                <p className="text-gray-700">${producto.precio} CLP</p>
            </div>
        </Link>
    )
}

export default CardProductoSearch