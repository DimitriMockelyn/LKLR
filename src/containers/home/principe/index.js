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
      enLigne={0} /* 1 ou 0*/
      couleurFond="rgb(255,124,8)" /* code RGB */
      image="bandeau_header_accueil.png"
      imageEntiere={0}
      imageGauche={1}
      imageHaut={1}
      hauteur={500}
    >
      <Box enLigne={1} hauteur={400}> 
        <Box
          largeurMax={1}
          image="Guillemets_ouvertes.png"
          imageHaut={1}
          imageDroite={1}
          hauteur={250}
        />
        <Box
          largeurMax={1}
          texte="Découvrez et soutenez les projets proches de chez vous grâce aux bornes tactiles LOKALÉRO"
          hauteur="250"
          couleur="white"
          complementStyle={{
            "font-size": "40px",
            "text-align": "center"
          }}
        />
        <Box
          largeurMax={1}
          image="Guillemets_fermees.png"
          imageBas={1}
          imageGauche={1}
          hauteur="250"
        />
      </Box>
      <Box enLigne={1}>
        <Box
          type="bouton-maj"
          texte="Le principe"
          couleur="black"
          bordureArrondi="5"
          padding="10px 20"
          couleurFond={green}
        />
      </Box>
    </Box>
    <Box
      largeurMax={1}
      texte="Je suis un(e)..."
      couleur={green}
      complementStyle={{
        "font-size": "30px",
        "text-align": "center"
      }}
    />
    <Box enLigne={1} couleurFond={green}>
      <Box
        couleurFond="rgba(255,255,255,0.5)"
        largeur={160}
        hauteur={160}
        margeGauche={margeIcones}
        margeDroite={margeIcones}
        type="bouton"
      >
        <Box image="Citoyen.png" hauteur={100} largeur={100} imageEntiere={1} />
        <Box texte="Lokal citoyen(ne)" padding="5" />
      </Box>
      <Box
        couleurFond="rgba(255,255,255,0.5)"
        largeur={160}
        hauteur={160}
        margeGauche={margeIcones}
        margeDroite={margeIcones}
        type="bouton"
      >
        <Box
          image="Association.png"
          hauteur={100}
          largeur={100}
          imageEntiere={1}
        />
        <Box texte="Lokal association" padding="5" />
      </Box>
      <Box
        couleurFond="rgba(255,255,255,0.5)"
        largeur={160}
        hauteur={160}
        margeGauche={margeIcones}
        margeDroite={margeIcones}
        type="bouton"
      >
        <Box
          image="Professionnel.png"
          hauteur={100}
          largeur={100}
          imageEntiere={1}
        />
        <Box texte="Lokal professionel(le)" padding="5" />
      </Box> 
      <Box
        couleurFond="rgba(255,255,255,0.5)"
        largeur={160}
        hauteur={160}
        margeGauche={margeIcones}
        margeDroite={margeIcones}
        type="bouton" 
      >
        <Box
          image="Collectivité.png"
          hauteur={100}
          largeur={100}
          imageEntiere={1}
        />
        <Box texte="Lokal collectivité" padding="5" />
      </Box>
      <Box
        couleurFond="rgba(255,255,255,0.5)"
        largeur={160}
        hauteur={160}
        margeGauche={margeIcones}
        margeDroite={margeIcones}
        type="bouton"
      >
        <Box
          image="Plateforme_crowdfunding.png"
          hauteur={100}
          largeur={100}
          imageEntiere={1}
        />
        <Box texte="Plateforme de crowdfunding" padding="5" largeurMax={1} />
      </Box>
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
