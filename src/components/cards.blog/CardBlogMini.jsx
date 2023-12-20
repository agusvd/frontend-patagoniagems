import React from 'react';
import { Link } from 'react-router-dom';
import DOMPurify from 'dompurify';


const CardBlogMini = ({ post }) => {

    const descripcionSanitizada = DOMPurify.sanitize(post.descripcion)

    return (
        <Link to={`/blog/post/${post.id}`} className='w-[400px] h-[400px] font-primary bg-white hover:shadow-md hover:scale-95 duration-300 ease-in-out rounded-xl flex flex-col'>
            <div className='flex justify-center items-center'>
                <div className='w-[200px] h-[200px] flex justify-center items-center'>
                    <img src={post.img} className='w-full h-full object-cover' />
                </div>
            </div>
            <div className='w-[400px] text-clip truncate'>
                <div className='text-center p-4'>
                    <p className='text-xl text-gray-800'>{post.titulo}</p>
                </div>
                <div className='text-clip text-gray-500 p-4  overflow-hidden truncate'>
                    <div className='' dangerouslySetInnerHTML={{ __html: descripcionSanitizada }}></div>
                </div>
            </div>
            <div className='text-left py-2 px-4'>
                <p className='text-gray-500 font-sans text-xs'>{post.fechaPublicacion}</p>
            </div>

        </Link>

    );
};

export default CardBlogMini;
