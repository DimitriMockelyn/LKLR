import React from "react";
import { push } from "react-router-redux";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {
  increment,
  incrementAsync,
  decrement,
  decrementAsync
} from "../../modules/counter";

import Box from "../../components/box";

const Home = props => (
  <div>
    <Box
      texte="Coucou "
      gauche={1}
      imageEntiere={1}
      couleurFond="orange"
      enLigne={1}
    />
    <Box
      enLigne={1} /* 1 ou 0*/
      couleurFond="rgb(255,124,8)" /* code RGB */
      imageEntiere={0}
      imageGauche={1}
      imageHaut={1}
      hauteur={500}
    >
      <Box gauche={1} droite={1} haut={1} bas={1} texte="Coucou coucou :)" />
      <Box>coucou</Box>
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);
