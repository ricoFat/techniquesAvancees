import { useState } from "react";

const AddProduct = ({ onAdd }) => {

    const [nom, setNom] = useState('')
    const [description, setDescription] = useState('')
    const [prix, setPrix] = useState('')
    const [categorie, setCategorie] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()
        if (!nom || !description || !prix || !categorie) {
            alert('Veuillez remplir tous les champsvue du formulaire')
            return
        }

        onAdd({ nom, description, prix, categorie })
        setNom('')
        setDescription('')
        setPrix('')
        setCategorie('')
    }
    return (

        <form className="add-form" onSubmit={onSubmit}>
            <div className="form-group">
                <label>Nom</label>
                <input
                    type="text"
                    placeholder="nom"
                    className="form-control"
                    value={nom}
                    onChange={(e) => setNom(e.target.value)}
                />
            </div>

            <div className="form-group">
                <label>Description</label>
                <input
                    type="text"
                    placeholder="description"
                    className="form-control"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)} />
            </div>

            <div className="form-group">
                <label>Prix</label>
                <input
                    type="text"
                    placeholder="prix"
                    className="form-control"
                    value={prix}
                    onChange={(e) => setPrix(e.target.value)} />
            </div>

            <div className="form-group">
                <label>Catégorie</label>
                <input
                    type="text"
                    placeholder="categorie"
                    className="form-control"
                    value={categorie}
                    onChange={(e) => setCategorie(e.target.value)} />
            </div>
            <div className='text-center'>
                <input type="submit" className="btn btn-outline-success align-item-center" value="Sauvergarder" />
            </div>
          
        </form>
    )
}

export default AddProduct