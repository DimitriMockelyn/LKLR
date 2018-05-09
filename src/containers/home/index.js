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

import Principe from './principe';
import Experience from './experience';
import BorneEtMoi from './borne-et-moi';
import InfoSoutien from './info-soutien';
import Box from "../../components/box";
import { green, orange } from "../../components/colors";
const margeIcones = "30";  

const Home = props => (
  <div>
    <Principe />
    <Experience />
    <BorneEtMoi />
    <InfoSoutien />
    
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
