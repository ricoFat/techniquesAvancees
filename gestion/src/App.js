import { useState } from 'react';
import Header from './components/Header';
import ManyProducts from './components/ManyProducts';
import AddProduct from './components/AddProduct';

function App() {
  const [produits, setProduits] = useState([
    {
      id: 1,
      nom: 'Poivrons',
      description: 'Légumes de production canadienne',
      prix: 9.49,
      categorie: 'Fruits et légumes'
    },
    {
      id: 2,
      nom: 'Coca-cola',
      description: 'Boisson gazeuse',
      prix: 3.29,
      categorie: 'Boissons'
    },
    {
      id: 3,
      nom: 'Cera-vé',
      description: 'Lotion hydratante avec céramides',
      prix: 29.59,
      categorie: 'produits de beauté'
    }
  ]);

  const deleteProduit = (id) => {
    setProduits(produits.filter((produit) => produit.id !== id));
  };

  const updateProduit = (updatedProduct) => {
    setProduits(
      produits.map((produit) =>
        produit.id === updatedProduct.id ? updatedProduct : produit
      )
    );
  };

  const addProduit = (produit) => {
    const id = Math.floor(Math.random() * 1000);
    const newProduit = { id, ...produit };
    setProduits([...produits, newProduit]);
  };

  const [showAddProduit, setShowAddProduit] = useState(false);

  return (
    <div className='container'>
      <Header showAdd={showAddProduit} onAdd={() => setShowAddProduit(!showAddProduit)} />
      {showAddProduit && <AddProduct onAdd={addProduit} />}
      {produits.length > 0 ? (
        <ManyProducts produits={produits} onDelete={deleteProduit} onUpdate={updateProduit} />
      ) : (
        'Pas de produits à afficher.'
      )}
    </div>
  );
}

export default App;
