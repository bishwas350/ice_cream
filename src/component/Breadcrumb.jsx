import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import Container from './Container';

const Breadcrumb = () => {
    const { pathname } = useLocation()
    const pathnames = pathname.split("/").filter((x) => x);
    console.log(pathnames);
    let breadcrumbPath = "";

    return (
        <>
            <div className="mb-5 text-[16px] capitalize text-[#0F0200] dark:text-white font-apa">
               <Container>
               {pathnames.length > 0 && <Link to={"/"}>
                    Home
                </Link>}
                {pathnames.map((name, index) => {
                        breadcrumbPath +=`/${name}`;
                        const isLast = index === pathnames.length -1;
                        return isLast ? (
                            <span key={breadcrumbPath} className='text-[#999] pl-1.5'> /{name}</span>
                        ) :(
                            <span key={breadcrumbPath} className='text-[#999] pl-1.5'> /
                                <Link to={breadcrumbPath}>{name}</Link>
                            </span>
                        )
                })}
               </Container>
            </div>
        </>
    )
}

export default Breadcrumb