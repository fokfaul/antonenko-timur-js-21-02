import './Profile.css';
import {Window} from '../../wrappers/window/Window';

export const ProfileWindow = ({user, closeWindow}) => {
    return(
        <Window>
            <div className="profile-window">
                <div className="profile-window-close" onClick={closeWindow}/>
            </div>
        </Window>
    );
};
