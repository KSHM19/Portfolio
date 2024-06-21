"use client";

import { useState } from "react";
import Icon from "./Icon";
import Link from "next/link";

const NavBar = () => {
    const [selected, setSelected] = useState(null);

    const icons = [
        {
            src: '/icons/home.svg',
            alt: 'Inicio',
            title: 'Inicio',
            href: '/'
        },

        {
            src: '/icons/about.svg',
            alt: 'Sobre mi',
            title: 'Sobre mi',
            href: '/about'
        },

        {
            src: '/icons/contact.svg',
            alt: 'Contactos',
            title: 'Contactos',
            href: '/contact'
        },

        {
            src: '/icons/folder.svg',
            alt: 'Proyectos',
            title: 'Proyectos',
            href: '/project'
        },

        {
            src: '/icons/Study.svg',
            alt: 'Estudios',
            title: 'Estudios',
            href: '/studies'
        },

        {
            src: '/icons/sun.svg',
            alt: 'Cambiar tema',
            title: 'Cambiar tema'
        },

        {
            src: '/icons/language.svg',
            alt: 'Cambiar idioma',
            title: 'Cambiar idioma'
        },
    ];

    return (
       <div className="flex mt-[800px] justify-center">
         <div className="w-[500px] flex items-center justify-between p-2 border border-gray-300 rounded-2xl bg-gray-200 opacity-75 ring-2 ring-white">
            {icons.slice(0, 5).map((icon, index) => (
                <Link href={icon.href} key={icon.alt}>
                <Icon
                    src={icon.src}
                    alt={icon.alt}
                    title={icon.title}
                    isSelected={selected === index}
                    onClick={() => setSelected(index)}
                />
                </Link>
            ))}
            <div className="border-l border-gray-400 h-6 mx-2"></div>
            {icons.slice(5).map((icon, index) => (
                <Icon
                    key={icon.alt}
                    src={icon.src}
                    alt={icon.alt}
                    title={icon.title}
                    isSelected={selected === index + 5}
                    onClick={() => setSelected(index + 5)}
                />
            ))}
        </div>
       </div>
    );
};

export default NavBar;