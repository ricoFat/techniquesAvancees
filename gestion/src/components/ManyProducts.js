import SingleProduct from './SingleProduct';

const ManyProducts = ({ produits, onDelete, onUpdate }) => {
  return (
    <table className='table table-dark table-striped'>
      <thead>
        <tr>
          <th scope='col'>Nom</th>
          <th scope='col'>Description</th>
          <th scope='col'>Prix</th>
          <th scope='col'>Catégorie</th>
          <th scope='col'>Actions</th>
        </tr>
      </thead>
      <tbody>
        {produits.map((produit) => (
          <SingleProduct
            key={produit.id}
            produit={produit}
            onDelete={onDelete}
            onUpdate={onUpdate}
          />
        ))}
      </tbody>
    </table>
  );
};

export default ManyProducts;
