import {useContext} from 'react';
import {PageHeadingContext} from './PageHeadingContext';

export function usePageHeading() {
  const context = useContext(PageHeadingContext);

  if (!context) {
    throw new Error(
      'PageHeadingContext was used outside of PageHeadingProvider'
    );
  }

  return context;
}
