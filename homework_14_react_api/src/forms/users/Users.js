import React from 'react';
import './Users.css';
import {Container} from '../../wrappers/container/Container';
import {getUsersList} from '../../api/dumMyApi';
import {User} from '../../components/user/User';
import {Navigation} from '../../components/navigation/Navigation';
import {init_nav, getNav} from '../../constants/navigation/common';
import {LimitSelect} from '../../components/limitselect/LimitSelect';
import {ThemeCheckbox} from '../../components/themecheckbox/ThemeCheckbox';

import {ThemeContextConsumer} from '../../contexts/ThemeContext';

export class Users extends React.Component {
  constructor(props) {
    super(props);
    this.state = {api: []};
    this.page = 0;
    this.limit = 10;
    this.nav_pages = init_nav;
    this.loadUsers = this.loadUsers.bind(this);
    this.moveToPage = this.moveToPage.bind(this);
    this.changeLimit = this.changeLimit.bind(this);
  }

  componentDidMount() {
    this.loadUsers(this.page, this.limit);
  }
  loadUsers(page, limit){
    getUsersList(page,limit,(resp, total) => {
        const max_pages = (total - total % limit) / limit + (total % limit > 0 ? 1:0)
        if(page>max_pages)
        {
            this.loadUsers(max_pages-1, limit);
            return false;
        }
        this.nav_pages = getNav(max_pages);
        this.page = page;
        this.limit = limit;
        return this.setState({api: resp})
    },console.error)
  }

  moveToPage(page){
    this.loadUsers(page, this.limit);
  }

  changeLimit(limit){
    this.loadUsers(this.page, limit);
  }

  render() {
    return (
        <ThemeContextConsumer>{ (context) => (
          <section className="users">
              <Container>
                <div className="users__list">
                  {this.state.api.map((elem, index) => (
                    <User
                      imgUrl={elem.picture}
                      name={elem.title+". "+elem.firstName+" "+elem.lastName}
                      userId={elem.id}
                      darkTheme={context.darkTheme? "dark": ""}
                      key={index}
                    />
                  ))}
                </div>
                <Navigation pages={this.nav_pages} moveToPage={this.moveToPage}/>
                <LimitSelect changeLimit={this.changeLimit}/>
                <ThemeCheckbox/>
              </Container>
          </section>
        )}</ThemeContextConsumer>
    );
  }
}