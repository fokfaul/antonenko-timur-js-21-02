import React, {useState} from 'react';
import './UserPage.css';
import {Container} from '../../wrappers/container/Container';
import {getUserById} from '../../api/dumMyApi';
import {Loader} from '../../components/loader/Loader';
import { useParams } from 'react-router-dom';
import useScrollToTop from "../../hooks/useScrollToTop";
import useOnceOnMount from '../../hooks/useOnceOnMount';
import {dateMDY} from '../../hooks/date';

export const UserPage = ({darkTheme, userId, imgUrl, name}) => {
    useScrollToTop();
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);
    const params = useParams();
    useOnceOnMount(() => {
        setLoading(true);
        getUserById(params.id, setUser, console.error, () => setLoading(false));
    });
    return(
        <section className="user-page"><Container>
            {loading? <Loader/> :
                <div className="user-info">
                    <img className="user-info__img" src={user.picture} alt={user.id}/>
                    <div className="user-info__basic">
                        <h3 className="user-info__name">{user.title+". "+user.firstName+" "+user.lastName}</h3>
                        <div className="user-info__gender">Gender: {user.gender}</div>
                        <div className="user-info__birth">Date of birth: {dateMDY(user.dateOfBirth)}</div>
                        <div className="user-info__register">Register: {dateMDY(user.registerDate)}</div>
                        <br/>
                        <div className="user-info__phone">Phone: {user.phone}</div>
                        <div className="user-info__email">Email: {user.email}</div>
                    </div>
                    <div className="user-info__location">
                        <h3>Address</h3>
                        <div className="user-info__state">State: {user.location.state}</div>
                        <div className="user-info__street">Street: {user.location.street}</div>
                        <div className="user-info__city">City: {user.location.city}</div>
                        <div className="user-info__country">Country: {user.location.country}</div>
                    </div>
                </div>
            }
        </Container></section>
    );
};