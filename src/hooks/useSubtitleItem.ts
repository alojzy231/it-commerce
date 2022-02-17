import { useEffect, useState } from 'react';

import SUBTITLE_ITEMS from '@consts/homepageHero';

const useSubtitleItemText = (): string => {
  const [currentSubtitleItemText, setCurrentSubtitleItemText] = useState<string>('');

  useEffect(() => {
    let currentSubtitleItem: string = SUBTITLE_ITEMS[0];
    let currentLetterIndex: number = 0;
    let directionOfLetterChange: number = 1;

    const getNextIdOfSubtitleItem = (): number => {
      const currentIndexOfItem = SUBTITLE_ITEMS.indexOf(currentSubtitleItem);
      const nextIndex = currentIndexOfItem + 1 < SUBTITLE_ITEMS.length ? currentIndexOfItem + 1 : 0;

      return nextIndex;
    };

    const changeDirectionOfLetterChange = (): void => {
      if (currentLetterIndex === currentSubtitleItem.length + 1) directionOfLetterChange = -1;
      else if (currentLetterIndex === -1) {
        directionOfLetterChange = 1;

        currentSubtitleItem = SUBTITLE_ITEMS[getNextIdOfSubtitleItem()];
      }
    };

    const changeCurrentSubtitleItemText = (): void => {
      setCurrentSubtitleItemText(currentSubtitleItem.substring(0, currentLetterIndex));

      currentLetterIndex += directionOfLetterChange;

      changeDirectionOfLetterChange();
    };

    const interval = setInterval(changeCurrentSubtitleItemText, 200);

    return () => clearInterval(interval);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return currentSubtitleItemText;
};

export default useSubtitleItemText;
