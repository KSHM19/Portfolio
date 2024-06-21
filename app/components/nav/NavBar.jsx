"use client";

import { useState } from "react";
import Icon from "./Icon";

const NavBar = () => {
    const [selected, setSelected] = useState(null);

    const icons = [
        {
            src: '/icons/home.svg',
            alt: 'Inicio',
            title: 'Inicio'
        },

        {
            src: '/icons/about.svg',
            alt: 'Sobre mi',
            title: 'Sobre mi'
        },

        {
            src: '/icons/contact.svg',
            alt: 'Contactos',
            title: 'Contactos'
        },

        {
            src: '/icons/folder.svg',
            alt: 'Proyectos',
            title: 'Proyectos'
        },

        {
            src: '/icons/Study.svg',
            alt: 'Estudios',
            title: 'Estudios'
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


    ]

    return (
        <div className=" w-[500px] flex items-center justify-between p-2 border border-gray-300 rounded-lg bg-white">
            {icons.map((icon, index) => (  
            <Icon
                key={icon.alt}
                src={icon.src}
                alt={icon.alt}
                title={icon.title}
                isSelected={selected === index}
                onClick={() => setSelected(index)}
            />
        ))}
        </div>
    )
}

export default NavBar;