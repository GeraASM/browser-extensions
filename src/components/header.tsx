import { useEffect, useState } from 'react';
import { IconLogo, IconMoon, IconSun } from './icons';
export default function Header() {
    const [mode, setMode] = useState<'light'|'dark'>('light');
    const toggleLightDark = () => {
        document.documentElement.classList.toggle('dark');
       document.documentElement.classList.contains('dark') ? setMode('dark') : setMode('light');
    }
    useEffect(() => {
        document.documentElement.classList.contains('dark') ? setMode('dark') : setMode('light');
    }, []);
    return (
          <header className="rounded-lg bg-neutral-0 p-2 flex justify-between items-center text-[#091540] dark:text-white">
            <IconLogo />
            <button
                onClick={toggleLightDark} 
                className='rounded-lg p-2 bg-neutral-100 cursor-pointer hover:bg-neutral-300 focus:outline-0 focus:ring-2 focus:ring-red-400'>
                    {
                        mode === 'dark' ? <IconSun /> : <IconMoon />
                    }
                </button>
          </header>
    )
}