import React, { Component, Fragment } from 'react';
import BackDrop from '../backdrop/Backdrop';
import './SideDrawer.css';

class sideDrawer extends Component {
  state = {
    contact: false
  };

  renderBackdrop = () => {
    if (this.props.menu_active) {
      return <BackDrop toggleMenu={this.props.toggleMenu} />;
    }
  };

  showContact = () => {
    this.setState({ contact: !this.state.contact });
  };
  render() {
    return (
      <Fragment>
        {' '}
        {this.renderBackdrop()}
        <nav
          className={`side-drawer ${this.props.menu_active ? 'open' : null}`}
        >
          <h1>justjoin.it</h1>
          <ul>
            <a href="/users/sign_in">
              <li>
                <i className="fas fa-suitcase"></i>
                Employer Panel
              </li>
            </a>

            <a href="https://www.facebook.com/JustJoinIT/" target="blanc">
              <li>
                <i className="fab fa-facebook-f"></i>
                JustJoinIT
              </li>
            </a>

            <a href="https://event.justjoin.it/" target="blanc">
              <li>
                <i className="fas fa-microphone"></i>
                Event
              </li>
            </a>

            <a href="/brands/story/just-join-it" target="blanc">
              <li>
                <i className="fas fa-user-friends mar"></i>
                About us
              </li>
            </a>

            <a href="https://justjoin.it/feed.atom" target="blanc">
              <li>
                <i className="fas fa-rss"></i>
                RSS
              </li>
            </a>

            <a href="/terms-and-privacy-policies" target="blanc">
              <li>
                <i className="far fa-file-pdf"></i>
                Terms
              </li>
            </a>

            <a href="/terms-and-privacy-policies" target="blanc">
              <li>
                <i className="far fa-file-pdf"></i>
                Policy
              </li>
            </a>

            <li onClick={this.showContact}>
              <i className="fas fa-envelope"></i>
              <p>Contact Info</p>
            </li>
          </ul>
          <div
            className={
              this.state.contact ? 'contact-info' : 'contact-info display-none'
            }
          >
            <p>JUST JOIN IT SP. Z O.O</p>
            <p>ul. Lęborska 3B / 1.44</p>
            <p>80-386 Gdańsk</p>
            <p>NIP 584-278-19-57</p>
            <p>KRS 0000774695</p>
            <p>team@justjoin.it</p>
            <p>+48 737 175 805 </p>
          </div>
        </nav>
      </Fragment>
    );
  }
}

export default sideDrawer;
