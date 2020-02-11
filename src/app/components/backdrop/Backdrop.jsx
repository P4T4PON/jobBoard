import React, { Component } from 'react';
import './Backdrop.css';

//TODO: zamień ten komponent klasowy na funkcyjne, dekonstrukcja propsów, skoro to jest jeden pusty tag, to niech będzie samozamykający się
//wyjaśnij mi proszę, dlaczego tutaj zwracasz po prostu pustego diva? I zastanów się jakbyś mógł to zrobić inaczej

class Backdrop extends Component {
  render() {
    return <div className="backdrop" onClick={this.props.toggleMenu}></div>;
  }
}

export default Backdrop;
