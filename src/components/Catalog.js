import React from 'react';
import '../styles/Catalog.css';
import Card from './Card';
import { products } from '../datas/sofaList';

const Catalog = () => {
    return (
        <main className="limitedWidthBlockContainer">
        <div className="limitedWidthBlock">
          <div className="titles">
            <h1>Nos produits</h1>
            <h2>Une gamme d'articles exclusifs</h2>
          </div>
          <section className="items" id="items"> 
            {products.map(({_id, imageUrl, altTxt, name, description}) => 
                <Card key={_id}
                    imageUrl={imageUrl}
                    altTxt={altTxt}
                    name={name}
                    description={description}
                />
            )}
          </section>
        </div>
      </main>
    );
};

export default Catalog;