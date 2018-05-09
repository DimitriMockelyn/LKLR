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
    <Box padding={80} largeurMax={1} couleur='#0f5d7b' texte="La borne LOKALÉRO est en cours de développement et n'est pas encore commercialisée" complementStyle={{
      'font-size': '30px'
    }}/>
    <Box couleur={orange} texte='ILS NOUS SOUTIENNENT' padding='0' margeBas={20} complementStyle={{
      'font-size': '30px'
    }}>  
    </Box>
    <Box enLigne={1} hauteur={100} largeurMax={1} margeBas={20}> 
        <Box image='FIPA.png' padding={50} imageEntiere={1} largeurMax={1}/>
        <Box image='Blue_factory.png' padding={50} imageEntiere={1} largeurMax={1}/>
        <Box image='fondation_coeurs_et_artères.png' padding={50} imageEntiere={1} largeurMax={1}/>
        <Box image='Prix_Airfrance.png' padding={50} imageEntiere={1} largeurMax={1}/> 
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
