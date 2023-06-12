import PropTypes from 'prop-types'
import 'bootstrap/dist/css/bootstrap.css';
import Button from './Button'

const Header =({title, showAdd, onAdd})=>{

    return(
        <header className='header bg-dark text-white text-center p-3'>
            <h1> {title} </h1>
            <Button 
            text={showAdd ? 'Fermer': 'Ajouter'}
            color={showAdd ? 'red': 'green'}
            onClick={onAdd} />
        </header>
    ) 
}

Header.defaultProps = {
    title: 'Gestion des produits'
}

 Header.propTypes = {
    title: PropTypes.string.isRequired
} 

export default Header;