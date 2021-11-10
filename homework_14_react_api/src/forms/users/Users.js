import React from 'react';
import './Users.css';
import {Container} from '../../wrappers/container/Container';
import {getUsersList} from '../../api/dumMyApi';
import {User} from '../../components/user/User';
import {Navigation} from '../../components/navigation/Navigation';
import {init_nav, getNav} from '../../constants/navigation/common';

export class Users extends React.Component {
  constructor(props) {
    super(props);
    this.state = {api: []};
    this.page = 0;
    this.limit = 10;
    this.nav_pages = init_nav;
    this.loadUsers = this.loadUsers.bind(this);
    this.moveToPage = this.moveToPage.bind(this);
  }

  componentDidMount() {
    this.loadUsers(this.page, this.limit);
  }

  loadUsers(page, limit){
    getUsersList(page,limit,(resp) => {
        console.log(resp);
        if(page>3)
            this.nav_pages = getNav(page);
        else
            this.nav_pages = init_nav;
        this.page = page;
        this.limit = limit;
        return this.setState({api: resp})
    },console.error)
  }

  moveToPage(page){
    this.loadUsers(page, this.limit);
  }

  render() {
    return (
      <section className="users">
          <Container>
            <div className="users__list">
              {this.state.api.map((elem, index) => (
                <User
                  imgUrl={elem.picture}
                  name={elem.title+". "+elem.firstName+" "+elem.lastName}
                  key={index}
                />
              ))}
            </div>
            <Navigation pages={this.nav_pages} moveToPage={this.moveToPage}/>
          </Container>
      </section>
    );
  }
}