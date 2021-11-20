import React, {useState, useContext} from 'react';
import './Users.css';
import {Container} from '../../wrappers/container/Container';
import {getUsersList} from '../../api/dumMyApi';
import {User} from '../../components/user/User';
import {Navigation} from '../../components/navigation/Navigation';
import {init_nav, getNav, limitUsers} from '../../constants/navigation/common';
import {LimitSelect} from '../../components/limitselect/LimitSelect';

import {ThemeContext} from '../../contexts/ThemeContext';
import useOnceOnMount from '../../hooks/useOnceOnMount';

export const Users = () => {
    const themeContext = useContext(ThemeContext);
    const [api, setApi] = useState([]);
    const [page, setPage] = useState(0);
    const [limit, setLimit] = useState(limitUsers[0]);
    const [nav_pages, setNav] = useState(init_nav);

    const loadUsers = (p, l) => {
        getUsersList(p,l,(resp, total) => {
            const max_pages = (total - total % l) / l + (total % l > 0 ? 1:0)
            if(p>max_pages)
            {
                loadUsers(max_pages-1, l);
                return false;
            }
            setNav(getNav(max_pages, p+1));
            setPage(p);
            setLimit(l);
            setApi(resp);
        },console.error)
    };

    const moveToPage = (p) => loadUsers(p, limit);

    const changeLimit = (l) => loadUsers(page, l);

    useOnceOnMount(() => loadUsers(page, limit));

    return (
      <section className="users">
          <Container>
            <div className="users__list">
              {api.map((elem, index) => (
                <User
                  imgUrl={elem.picture}
                  name={elem.title+". "+elem.firstName+" "+elem.lastName}
                  userId={elem.id}
                  darkTheme={themeContext.darkTheme? "dark": ""}
                  key={index}
                />
              ))}
            </div>
            <Navigation current={page+1} pages={nav_pages} moveToPage={moveToPage}/>
            <LimitSelect changeLimit={changeLimit}/>
          </Container>
      </section>
    );
}