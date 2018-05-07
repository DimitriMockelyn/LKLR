import React from 'react';
import { Alert } from 'react-alert';

import { withAlert } from 'react-alert';

class Box extends React.Component {
  displayName= 'Generic Box';
  getInitialState() {
    return {}
  }
  computeStyle() {
    let style = {};
    if (this.props.children || this.props.largeurMax) {
      style['width'] = '100%';
    }
    if (this.props.largeur) {
      style['width'] = this.props.largeur + 'px'; 
    }
    style['display'] = 'flex'; 
    style['flex-direction'] = 'column';
    if (this.props.enLigne) {
      style['flex-direction'] = 'row';
    }
    if (this.props.aLaLigne) {
      style['flex-wrap'] = 'wrap';
    }
    if (this.props.image) {
      style['background-image'] = 'url(\'images/'+this.props.image+'\')'
      //style['background-size'] = 'auto';
      if (this.props.imageEntiere) { 
        style['background-size'] = 'contain';
      }
      let imagePosition = ['center', 'center'];
      if (this.props.imageGauche) {
        imagePosition[0] = 'left';
      }
      if (this.props.imageDroite) {
        imagePosition[0] = 'right';
      }
      if (this.props.imageHaut) {
        imagePosition[1] = 'top';
      }
      if (this.props.imageBas) {
        imagePosition[1] = 'bottom';
      }
      style['background-position'] = imagePosition[0] + ' ' + imagePosition[1];
      style['background-repeat']  = 'no-repeat';

    }
    if (this.props.couleurFond) {
      style['background-color'] = this.props.couleurFond;
    }
    if (!this.props.children) {
       style['padding'] = '20px';
    }
    if (this.props.padding) {
      style['padding'] = this.props.padding+'px';
    }
    const attrVer = this.props.enLigne ? 'align-items' : 'justify-content';
    const attrHor = this.props.enLigne ? 'justify-content' : 'align-items';
    style[attrHor] = 'center';
    style[attrVer] = 'center';
    style['text-align'] = 'center';
    if (this.props.gauche) {
      style[attrHor] = 'flex-start';
    }
    if (this.props.droite) {
      style[attrHor] = 'flex-end';
    }
    if (this.props.haut) {
      style[attrVer] = 'flex-start';
    }
    if (this.props.bas) {
      style[attrVer] = 'flex-end';
    }
    if (this.props.hauteur) {
      style['height'] = this.props.hauteur + 'px';
    } else if (this.props.hauteurMax) {
      style['height'] = '100%';
    } else {
      style['height'] = 'auto';
    }
    if (this.props.margeAuto) {
      style['margin'] = 'auto';
    }
    if (this.props.marge) {
      style['margin'] = this.props.marge + 'px';
    }
    if (this.props.margeGauche) {
      style['margin-left'] = this.props.margeGauche + 'px';
    }
    if (this.props.margeDroite) {
      style['margin-right'] = this.props.margeDroite + 'px';
    }
    if (this.props.margeHaut) {
      style['margin-top'] = this.props.margeHaut + 'px';
    }
    if (this.props.margeBas) {
      style['margin-bottom'] = this.props.margeBas + 'px';
    }
    if (this.props.type) {
      if (this.props.type ==='bouton-maj'){
        style['cursor'] = 'pointer';
        style['text-transform'] = 'uppercase';
      }
      if (this.props.type ==='bouton'){
        style['cursor'] = 'pointer';
      }
    }

    if (this.props.couleur) {
      style['color'] = this.props.couleur;
    }
    if (this.props.bordure) {
      style['border'] = this.props.bordure;
    }
    if (this.props.bordureArrondi) {
      style['border-radius'] = this.props.bordureArrondi + 'px'
    }
    if (this.props.complementStyle) {
      style = {...style, ...this.props.complementStyle};
    }
    return style;
  }
  computeOnClick() {
    let handler = undefined;
    if (this.props.type) {
      if (this.props.type ==='bouton-maj' || this.props.type ==='bouton'){
          handler = this.props.action;
          if (!handler) {
              handler = () => {
                this.props.alert.show(<div style={{ 'text-transform': 'initial', 'width': '100%' }}>Le site est en cours de développement, et cette fonctionnalité n'est pas encore disponible :( Vous pouvez nous laissez vos coordonnées pour etre tenu au courant des évolutions, dans la rubrique "Nous contacter"</div>)
              }
          }
      }
    }
    return handler;
  }
  render() {
    const style = this.computeStyle();
    const onClick = this.computeOnClick();
    return <div style={style} onClick={onClick} >
      {this.props.texte}
      {this.props.children}
    </div>
  }
};

export default withAlert(Box)