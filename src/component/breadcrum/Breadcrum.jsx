import React from 'react'
import { BiChevronRight } from 'react-icons/bi';
import { Link, useLocation } from 'react-router-dom';

const Breadcrum = () => {

    const location = useLocation();
    const pathname = location.pathname; // /products/bangles/gold
    const pathParts = pathname.split("/").filter(Boolean);

    const buildPath = (index) => {
        return "/" + pathParts.slice(0, index + 1).join("/");
    };

  return (
    <>
        <nav className="flex items-center text-[18px] text-gray-600">
        {/* Home */}
            <Link to="/" className="hover:text-blue-600">
                Home
            </Link>

            {pathParts.map((part, index) => {
                const fullPath = buildPath(index);

                // Capitalize
                const label = part.charAt(0).toUpperCase() + part.slice(1);

                return (
                <div key={index} className="flex items-center gap-x-1">
                    <span className="text-3xl mt-1.5 text-gray-400"><BiChevronRight /></span> 

                    {/* Last item: no link */}
                    <div>
                        {index === pathParts.length - 1 ? (
                        <span className="text-gray-900 dark:text-[#7777] font-semibold">{label}</span>
                        ) : (
                        <Link to={fullPath} className="hover:text-blue-600">
                            {label}
                        </Link>
                        )}
                    </div>
                </div>
                );
            })}
        </nav>
    </>
  )
}

export default Breadcrum
