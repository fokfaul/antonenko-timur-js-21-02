import {useState} from 'react';
import './Users.css';
import {Container} from '../../wrappers/container/Container';
import {getUsersList} from '../../api/dumMyApi';
import {User} from '../../components/user/User';
import { Pagination } from 'antd';

import useOnceOnMount from '../../hooks/useOnceOnMount';
import useScrollToTop from '../../hooks/useScrollToTop';

export const Users = () => {
    useScrollToTop();
    const [api, setApi] = useState([]);
    const [page, setPage] = useState(0);
    const [limit, setLimit] = useState(6);
    const [total, setTotal] = useState(6)
//    const [nav_pages, setNav] = useState(init_nav);

    const loadUsers = (p, l) => {
        getUsersList(p,l,(resp, t) => {
            setTotal(t);
            setPage(p);
            setLimit(l);
            setApi(resp);
        }, console.error)
    };

/*    const moveToPage = (p) => loadUsers(p, limit);

    const changeLimit = (l) => loadUsers(page, l);*/

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
                  key={index}
                />
              ))}
            </div>
            <Pagination size="small" defaultCurrent={1} pageSize={6} total={total} showSizeChanger={false}
                showLessItems={true}/>
          </Container>
      </section>
    );
}