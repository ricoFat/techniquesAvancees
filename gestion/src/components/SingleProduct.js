import React, { useState } from 'react';
import { FaRegTrashAlt, FaRegSun } from 'react-icons/fa';

const UpdateProduct = ({ produit, onUpdate }) => {
  const [updatedNom, setUpdatedNom] = useState(produit.nom);
  const [updatedDescription, setUpdatedDescription] = useState(produit.description);
  const [updatedPrix, setUpdatedPrix] = useState(produit.prix);
  const [updatedCategorie, setUpdatedCategorie] = useState(produit.categorie);

  const handleUpdate = () => {
    const updatedProduct = {
      ...produit,
      nom: updatedNom,
      description: updatedDescription,
      prix: updatedPrix,
      categorie: updatedCategorie
    };
    onUpdate(updatedProduct);
  };

  return (
    <div className='text-center mt-3 border p-3'>
      <div className='form-group'>
        <label>Nom</label>
        <input
          type='text'
          className='form-control'
          value={updatedNom}
          onChange={(e) => setUpdatedNom(e.target.value)}
        />
      </div>
      <div className='form-group mt-3'>
        <label>Description</label>
        <input
          type='text'
          className='form-control'
          value={updatedDescription}
          onChange={(e) => setUpdatedDescription(e.target.value)}
        />
      </div>
      <div className='form-group mt-3'>
        <label>Prix</label>
        <input
          type='text'
          className='form-control mt-3'
          value={updatedPrix}
          onChange={(e) => setUpdatedPrix(e.target.value)}
        />
      </div>
      <div className='form-group'>
        <label>Catégorie</label>
        <input
          type='text'
          className='form-control mt-3 '
          value={updatedCategorie}
          onChange={(e) => setUpdatedCategorie(e.target.value)}
        />
      </div>
      <button className='btn btn-outline-success mt-3' onClick={handleUpdate}>Sauvegarder</button>
    </div>
  );
};

const SingleProduct = ({ produit, onDelete, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleUpdate = (updatedProduct) => {
    onUpdate(updatedProduct);
    setIsEditing(false);
  };

  return (
    
        <tr>
        <td>{produit.nom}</td>
        <td>{produit.description}</td>
        <td>{produit.prix}$</td>
        <td>{produit.categorie}</td>
        <td>
        
        
          {isEditing ? (
            <UpdateProduct produit={produit} onUpdate={handleUpdate} />
          ) : (
            <>
              <FaRegSun
                style={{ color: 'gray', cursor: 'pointer' }}
                onClick={handleEdit}
              />
              <FaRegTrashAlt
                style={{ color: 'red', cursor: 'pointer' }}
                onClick={() => onDelete(produit.id)}
                className='ms-4'
              />
            </>
          )}
          </td>
        
      </tr>
    
  );
};

export default SingleProduct;
