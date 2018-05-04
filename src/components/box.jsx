import React from 'react';

export default class Box extends React.Component {
  displayName= 'Generic Box';
  getInitialState() {
    return {}
  }
  computeStyle() {
    let style = {};
    style['width'] = '100%';
    style['display'] = 'flex';
    style['flex-direction'] = 'column';
    if (this.props.enLigne) {
      style['flex-direction'] = 'row';
    }
    if (this.props.image) {
      style['background-image'] = 'url(\''+this.props.image+'\')'
      //style['background-size'] = 'auto';
      if (this.props.imageEntiere) {
        style['background-size'] = 'contains';
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
      style['background-repeat'] = 'no-repeat';

    }
    if (this.props.couleurFond) {
      style['background-color'] = this.props.couleurFond;
    }
    style['padding'] = '20px';
    const attrVer = this.props.enLigne ? 'align-items' : 'justify-content';
    const attrHor = this.props.enLigne ? 'justify-content' : 'align-items';
    style[attrHor] = 'center';
    style[attrVer] = 'center';
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
    } else {
      style['height'] = '100%';
    }
    return style;
  }
  render() {
    console.log('pouet');
    const style = this.computeStyle();
    return <div style={style}>
      {this.props.texte}
      {this.props.children}
    </div>
  }
};
