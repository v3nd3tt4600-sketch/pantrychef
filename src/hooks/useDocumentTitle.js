import { useEffect } from 'react';

const BASE_TITLE = 'PantryChef – Recipe Finder';

export function useDocumentTitle(title) {
  useEffect(() => {
    document.title = title ? `${title} | PantryChef` : BASE_TITLE;
  }, [title]);
}