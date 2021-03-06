import React from 'react';
import Box from '../../components/box';
import {green, orange} from '../../components/colors';
import {  withRouter} from 'react-router-dom';


class Header extends React.Component {
  displayName= 'Generic Box';
  getInitialState() {
    return {}
  }
  render() {
    const orangee = orange;
    const vert = green;
    return (<Box
      couleurFond="white"
      enLigne={1}
      hauteur={75}
      complementStyle={{
        'box-shadow': 'rgba(0, 0, 0, 0.33) 1px 1px 6px 1px, rgba(0, 0, 0, 0.25) 0px 1px 5px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px -1px',
        'position': 'fixed',
        'top' : '0',
        'z-index': '5'
      }}
    >
      <Box enLigne={1} gauche={1}>
        <Box
          type='bouton-maj'
          image='buger_accueil.png' 
          imageEntiere={1}
          imageGauche={1}
          largeur={'100'}
          margeGauche={'20'}
          padding='10'
          action={() => {this.props.history.push('/')}}
        />
        <Box 
          type='bouton-maj'
          image='logo.png'
          marge='0'
          padding='37'
          imageEntiere={1}
          imageGauche={1}
          action={() => {this.props.history.push('/')}}
        />
      </Box>

      <Box enLigne={1} droite={1}>
        <Box 
          type='bouton-maj'
          couleur={orangee}
          texte='La borne Lokaléro'
        />
        <Box 
          type='bouton-maj'
          couleur={orangee}
          texte='Les projets'
        />
        <Box
          type='bouton-maj'
          couleur={orangee} 
          texte="L'équipe"
        />
        <Box 
          type='bouton-maj'
          couleur={vert}
          bordure={'2px solid '+vert}
          bordureArrondi='5'
          largeur='200'
          padding='5'
          margeDroite='30'
          texte='Nous contacter'
          action={() => {this.props.history.push('/about')}}
        />
      </Box>
    </Box>);
  }
};

export default withRouter(Header);