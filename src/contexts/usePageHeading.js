import {useContext} from 'react';
import {PageHeadingContext} from './PageHeadingContext';

/**
 * Custom React hook that provides access to the PageHeadingContext.
 * 
 * @returns {Object} - The page heading context containing functions and state related to page headings.
 * @throws {Error} - Throws an error if the hook is used outside of a PageHeadingProvider.
 */
export function usePageHeading() {
  const context = useContext(PageHeadingContext);

  if (!context) {
    throw new Error(
      'PageHeadingContext was used outside of PageHeadingProvider'
    );
  }

  return context;
}
