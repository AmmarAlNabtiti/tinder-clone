import "./SwipeBtn.css";
// ICONS
import ReplyIcon from '@mui/icons-material/Reply';
import CloseIcon from '@mui/icons-material/Close';
import StarRateIcon from '@mui/icons-material/StarRate';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FlashOnIcon from '@mui/icons-material/FlashOn';
// MUI
import { IconButton } from "@mui/material";
const SwipeBtn = () => {
    return (
        <div className="SwipeBtn">
            <IconButton size="large">
                <ReplyIcon fontSize='large' className="ReplyIcon btn" />
            </IconButton>
            <IconButton>
                <CloseIcon fontSize='large' className="CloseIcon btn" />
            </IconButton>
            <IconButton>
                <StarRateIcon fontSize='large' className="StarRateIcon btn" />
            </IconButton>
            <IconButton>
                <FavoriteIcon fontSize='large' className="FavoriteIcon btn" />
            </IconButton>
            <IconButton>
                <FlashOnIcon fontSize='large' className="FlashOnIcon btn" />
            </IconButton>
        </div>
    );
};
export default SwipeBtn;