import {createContext, useState} from 'react';
import PropTypes from 'prop-types';

export const PageHeadingContext = createContext(null);

export default function PageHeadingProvider({children}) {
  const [heading, setHeading] = useState('');

  return (
    <PageHeadingContext.Provider value={{heading, setHeading}}>
      {children}
    </PageHeadingContext.Provider>
  );
}

PageHeadingProvider.propTypes = {
  children: PropTypes.node,
};
