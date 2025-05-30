import Notiflix from 'notiflix';

type NotifyType = 'success' | 'failure' | 'info' | 'warning';

export const ResponsiveNotify = (type: NotifyType, message: string) => {
    switch (type) {
        case 'success':
            Notiflix.Notify.success(message);
            break;
        case 'failure':
            Notiflix.Notify.failure(message);
            break;
        case 'info':
            Notiflix.Notify.info(message);
            break;
        case 'warning':
            Notiflix.Notify.warning(message);
            break;
    };
};