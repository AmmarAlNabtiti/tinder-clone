// LOGO
import Logo from "../../assets/vecteezy_tinder-logo-transparent-png_21460424_440.png";
// ICONS
import PersonIcon from '@mui/icons-material/Person';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
// STYLES
import "./Header.css";
// REACT ROUTER DOM
import { Link, } from 'react-router-dom';
import { useLocation, useNavigate } from 'react-router-dom';


const Header = ({ backIcon }) => {
    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1);
    };

    return (
        <div className='header'>

            {(backIcon) ? <IconButton onClick={goBack} ><ArrowBackIcon fontSize="large" /> </IconButton> : <IconButton ><PersonIcon fontSize="large" /> </IconButton>}

            <Link to="/">
                <img className='header__logo' src={Logo} alt="Logo" />
            </Link>

            <Link to="/chats">
                <IconButton >
                    <QuestionAnswerIcon fontSize="large" />
                </IconButton>
            </Link>
        </div>

    );
};

export default Header;