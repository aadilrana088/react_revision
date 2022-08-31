import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import Button from './Button';
const Header = ({ title, onAdd, showAdd }) => {
    const location = useLocation();
    return (
        <header className="header">
            <h1>{title}</h1>
            {location.pathname === '/' && (
                <Button
                    onClick={onAdd}
                    color={showAdd ? 'red' : 'green'}
                    text={showAdd ? 'Close' : 'Add'}
                />
            )}
        </header>
    );
};

Header.defaultProps = {
    title: 'Task Tracker',
};

Header.prototype = {
    title: PropTypes.string.isRequired,
};

// const headingStyle = {
//     color: 'red',
//     backgroundColor: 'black',
// };
export default Header;
