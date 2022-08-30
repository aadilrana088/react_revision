import PropTypes from 'prop-types';
import Button from './Button';
const Header = ({ title }) => {
    const onClick = (e) => {
        console.log('Click');
    };
    return (
        <header>
            <h1>{title}</h1>
            <Button onClick={onClick} color="green" text="Add" />
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
