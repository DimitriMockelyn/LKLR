import React from 'react';
import Box from '../../components/box';
import {green, orange} from '../../components/colors';

export default class Footer extends React.Component {
  displayName= 'Generic Box';
  getInitialState() {
    return {}
  }
  render() {
    const orangee = orange;
    const vert = green;
    return (<Box
      couleurFond="rgb(46, 62, 78)"
      enLigne={1}
      padding={20}
    >
      <Box gauche={1} complementStyle={{'margin-bottom' : 'auto'}} >
          <Box texte='LOKALÉRO' couleur='white' type='bouton-maj' complementStyle={{
            'font-size':'20px'
          }}/>
          <Box texte='Qui sommes-nous ?' margeGauche={20} couleur='white' type='bouton' padding='0' />
          <Box texte='La borne LOKALÉRO' margeGauche={20} couleur='white' type='bouton' padding='0' />
          <Box texte="Rejoindre l'équipe" margeGauche={20} couleur='white' type='bouton' padding='0' />
          <Box texte='Nos partenaires' margeGauche={20} couleur='white' type='bouton' padding='0' />
          <Box texte='Kit de presse' margeGauche={20} couleur='white' type='bouton' padding='0' />
      </Box>
      <Box margeHaut={20} complementStyle={{'margin-bottom' : 'auto'}}>
          <Box image='Portrait_Ophélie.png' imageEntiere={1} padding={50}/>
          <Box texte='Pour nous contacter,' couleur='white' padding='0' />
          <Box texte='envoyez un e-mail à Ophélie :' couleur='white'  padding='0' />
          <Box couleur='orange'><a style={{'color':'orange'}} href='mailto:ophelie@lokalero.fr'>ophelie@lokalero.fr</a></Box>
      </Box>
      <Box droite={1} complementStyle={{'margin-bottom' : 'auto'}} >
          <Box texte='SUIVEZ-NOUS !' margeBas={15} couleur='white'complementStyle={{
            'font-size':'20px'
          }}/>
          <Box texte="S'abonner à la newsletter" margeDroite={20} couleur='white' padding='0' />
          <Box enLigne={1} droite={1} >
              <Box type='bouton' image='Icone_Mail.png' imageEntiere={1} padding={25} />
              <Box type='bouton' image='Icone_Facebook.png' imageEntiere={1} padding={40} />
          </Box>
          <Box margeHaut={40} complementStyle={{'font-size':'10px'}}>
              <Box enLigne={1} droite={1} largeurMax={0}>
                <Box texte='Mentions légales' type='bouton' couleur='white' padding='2' />
                <Box texte='-' couleur='white'  padding='2' />
                <Box texte='Politique de confidentialité' type='bouton' couleur='white' padding='2'  />
                <Box texte='-' couleur='white' padding='2'  />
                <Box texte='CGU' type='bouton' couleur='white' padding='2' />
              </Box>
              <Box enLigne={1} droite={1} largeurMax={0}>
                <Box texte='2018 LOKALÉRO - Tous droits réservés' couleur='white' padding='2' margeDroite={5} />
                <Box image='france.png' imageEntiere={1} couleur='white' padding='10'/>
                <Box texte='Françe' couleur='white' padding='2'/>
              </Box>
          </Box>
      </Box>  
    </Box>);
  }
};
