import { useEffect } from 'react';
import Notiflix from 'notiflix';

const initNotify = (isMobile: boolean) => {
    Notiflix.Notify.init({
        position: isMobile ? 'center-top' : 'right-top',
        distance: '16px',
        timeout: 3000,
        fontSize: '14px',
        cssAnimationStyle: 'zoom',
        clickToClose: true,
    });
};

export const useInitNotify = () => {
useEffect(() => {
    const isMobile = window.innerWidth <= 768;
    initNotify(isMobile);

    const handleResize = () => {
        const isMobile = window.innerWidth <= 768;
        initNotify(isMobile);
    };

    window.addEventListener('resize', handleResize);

    return () => {
    window.removeEventListener('resize', handleResize);
    };
}, []);
};
