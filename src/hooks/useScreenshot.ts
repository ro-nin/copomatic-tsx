import { useCallback, RefObject } from 'react';
import { toPng, toJpeg } from 'html-to-image';

export const useScreenshot = (ref: RefObject<HTMLElement>) => {
    const savePNG = useCallback(() => {
        if (ref.current === null) return;

        toPng(ref.current, { cacheBust: true })
            .then((dataUrl) => {
                const link = document.createElement('a');
                link.download = 'copo.png';
                link.href = dataUrl;
                link.click();
            })
            .catch((err) => {
                console.log(err);
            });
    }, [ref]);

    const saveJPG = useCallback(() => {
        if (ref.current === null) return;

        toJpeg(ref.current, { cacheBust: true })
            .then((dataUrl) => {
                const link = document.createElement('a');
                link.download = 'copo.jpg';
                link.href = dataUrl;
                link.click();
            })
            .catch((err) => {
                console.log(err);
            });
    }, [ref]);

    return { savePNG, saveJPG };
};
