import React from "react";
import { push } from "react-router-redux";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {
  increment,
  incrementAsync,
  decrement,
  decrementAsync
} from "../../../modules/counter";

import Box from "../../../components/box";
import { green, orange } from "../../../components/colors";
const margeIcones = "30";  

const Principe = props => (
    <div>
    <Box
    largeurMax={1}
    texte="UNE EXPÉRIENCE DE DON INNOVANTE"
    couleur="#37515b"
    complementStyle={{
      "font-size": "30px"
    }}
  />
  <Box
    largeurMax={1}
    image="Borne+boutonplay.png"
    hauteur={600}
    largeur={800}
    margeAuto={1}
    couleurFond="#37515b55"
  />
  <Box largeurMax={1} enLigne={1} margeHaut={20} margeBas={20}>
    <Box
      type="bouton-maj"
      couleur={orange}
      bordure={"2px solid " + orange}
      bordureArrondi="5"
      largeur="200"
      padding="5"
      margeDroite="30"
      texte="Où retrouver les bornes ?"
    />
    <Box
      type="bouton-maj"
      couleur={orange}
      bordure={"2px solid " + orange}
      bordureArrondi="5"
      largeur="200"
      padding="5"
      margeDroite="30"
      texte="Les bornes plus en détail"
    />
  </Box> 
    </div>
);

const mapStateToProps = state => ({
  count: state.counter.count,
  isIncrementing: state.counter.isIncrementing,
  isDecrementing: state.counter.isDecrementing
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      increment,
      incrementAsync,
      decrement,
      decrementAsync,
      changePage: () => push("/about-us")
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Principe);
