import React, { createContext, useState } from 'react';

const PrimaryContext = createContext();

const PrimaryContextProvider = ({ children }) => {
 

   const [products, setProducts] = useState([ { name: 'Laptop', price: 1000, inCart: false }, { name: 'Smartphone', price: 500, inCart: false }, { name: 'Headphones', price: 100, inCart: false }, { name: 'Keyboard', price: 50, inCart: false }, { name: 'Mouse', price: 30, inCart: false } ]);



  return (
    <PrimaryContext.Provider value={{ products, setProducts }}>
      {children}
    </PrimaryContext.Provider>
  );
};

export { PrimaryContext, PrimaryContextProvider };
