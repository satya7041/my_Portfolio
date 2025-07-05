import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
    const { theme, setTheme, systemTheme} = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(()=> setMounted(true),[]);

    if (!mounted)
        return null;

    const currentTheme = theme === 'system'? systemTheme : theme;

    return(
        <button
        className="mt-4 px-4 py-2 border rounded"
        onClick={()=> setTheme(currentTheme === 'dark' ? 'light' : 'dark')}
        >
            {currentTheme === 'dark'? '☀️ Light Mode' : '🌙 Dark Mode'}
        </button>
    );
}