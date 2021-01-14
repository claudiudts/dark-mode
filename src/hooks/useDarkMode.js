import { useLocalStorage } from './useLocalStorage';

export const useDarkMode = (param) => {
    const [someValue, setSomeValue] = useLocalStorage('dark-mode', param);
    return [someValue, setSomeValue]; 
}