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
import { green, orange } from "../../components/colors";
const margeIcones = "30";  

const Home = props => (
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
    <Box couleurFond={orange} largeurMax={1} padding={40}>
      <Box enLigne={1}>
        <Box
          largeurMax={1}
          image="Guillemets_ouvertes.png"
          imageHaut={1}
          imageDroite={1}
          padding={25}
          complementStyle={{
            "background-size": "37px",
            "margin-right": "-20px",
            "z-index": "1"
          }}
        />
        <Box
          largeurMax={1}
          texte="Informez"
          couleur="white"
          couleurFond="#0f5d7b"
          complementStyle={{
            "text-align": "center",
            "box-shadow": green + " 5px 5px 0px 0px"
          }}
          type="bouton"
          hauteur={50}
          padding="10px 50"
        />
        <Box
          largeurMax={1}
          image="Guillemets_fermees.png"
          imageBas={1}
          imageGauche={1}
          imageEntiere={1}
          padding={25}
          complementStyle={{
            "background-size": "37px",
            "margin-left": "-20px",
            "z-index": "1"
          }}
        />
        <Box
          largeurMax={1}
          image="Guillemets_ouvertes.png"
          imageHaut={1}
          imageDroite={1}
          padding={25}
          complementStyle={{
            "background-size": "37px",
            "margin-right": "-20px",
            "z-index": "1"
          }}
        />
        <Box
          largeurMax={1}
          texte="Soutenir"
          couleur="white"
          couleurFond="#0f5d7b"
          complementStyle={{
            "text-align": "center",
            "box-shadow": green + " 5px 5px 0px 0px"
          }}
          type="bouton"
          hauteur={50}
          padding="10px 50"
        />
        <Box
          largeurMax={1}
          image="Guillemets_fermees.png"
          imageBas={1}
          imageGauche={1}
          imageEntiere={1}
          padding={25}
          complementStyle={{
            "background-size": "37px",
            "margin-left": "-20px",
            "z-index": "1"
          }}
        />
      </Box>
      <Box enLigne={1}>
        <Box largeurMax={1} />
        <Box
          largeurMax={1}
          texte="Sur les projets menés dans sa commune et portés par"
          couleur="#0f5d7b"
          complementStyle={{}}
        />
        <Box largeurMax={1} />
        <Box largeurMax={1} />
        <Box
          largeurMax={1}
          texte="Facilement les initiatives de son choix à fort impact local en tant que"
          couleur="#0f5d7b"
          complementStyle={{}}
        />
        <Box largeurMax={1} />
      </Box>
      <Box enLigne={1} margeHaut={20}>
        <Box
          enLigne={1}
          aLaLigne={1}
          complementStyle={{
            "margin-bottom": "auto"
          }}
        >
          <Box
            largeur={200}
            margeGauche={margeIcones}
            margeDroite={margeIcones}
            complementStyle={{
              "margin-bottom": "auto"
            }}
          >
            <Box
              image="collectivites_territoriales.png"
              hauteur={100}
              largeur={100}
              imageEntiere={1}
            />
            <Box
              texte="Les collectivités territoriales"
              couleur="#0f5d7b"
              padding="5"
              largeurMax={1}
              complementStyle={{
                "text-transform": "uppercase"
              }}
            />
            <Box
              image="Flèche_collectivité.png"
              imageEntiere={1}
              complementStyle={{
                position: "relative",
                left: "-80px",
                top: "-31px"
              }}
            />
            <Box margeHaut="-30" padding="5" gauche={1}>
              <Box
                couleur="white"
                texte="Soutien aux initiatives locales"
                padding="0"
                complementStyle={{
                  "white-space": "pre"
                }}
              />
              <Box
                couleur="white"
                texte="Consultation citoyenne"
                padding="0"
                complementStyle={{
                  "white-space": "pre"
                }}
              />
              <Box
                couleur="white"
                texte="Effet de levier dans le financement des projets"
                padding="0"
                complementStyle={{
                  "text-align": "left"
                }}
              />
            </Box>
          </Box>

          <Box
            largeur={200}
            margeGauche={margeIcones}
            margeDroite={margeIcones}
            complementStyle={{
              "margin-bottom": "auto"
            }}
          >
            <Box
              image="les_assos_de_quartier.png"
              hauteur={100}
              largeur={100}
              imageEntiere={1}
            />
            <Box
              texte="Les associations du quartier"
              largeurMax={1}
              couleur="#0f5d7b"
              padding="5"
              complementStyle={{
                "text-transform": "uppercase"
              }}
            />
            <Box
              image="Flèche_asso_citoyen.png"
              imageEntiere={1}
              padding={80}
              complementStyle={{
                position: "relative",
                right: "-60px"
              }}
            />
            <Box margeDroite="60" padding="5" droite={1}>
              <Box
                couleur="white"
                texte="Communication renforcée"
                padding="0"
                complementStyle={{
                  "white-space": "pre"
                }}
              />
              <Box
                couleur="white"
                texte="Visibilité démultipliée"
                padding="0"
                complementStyle={{
                  "white-space": "pre"
                }}
              />
              <Box
                couleur="white"
                texte="Cercle de donateur élargi"
                padding="0"
                complementStyle={{
                  "text-align": "right",
                  "white-space": "pre"
                }}
              />
            </Box>
          </Box>

          <Box
            largeur={200}
            margeGauche={margeIcones}
            margeDroite={margeIcones}
            complementStyle={{
              "margin-bottom": "auto"
            }}
          >
            <Box
              image="plateformes_de_crowdfunding.png"
              hauteur={100}
              largeur={100}
              imageEntiere={1}
            />
            <Box
              texte="Les plateformes de crowdfunding"
              largeurMax={1}
              couleur="#0f5d7b"
              padding="5"
              complementStyle={{
                "text-transform": "uppercase"
              }}
            />
            <Box
              image="Flèche_plateforme _pro.png"
              imageEntiere={1}
              padding={20}
              complementStyle={{
                position: "relative",
                left: "-60px"
              }}
            />
            <Box margeGauche="140" margeHaut={-30} padding="5" gauche={1}>
              <Box
                couleur="white"
                texte="Démocratisation du financement participatif"
                padding="0"
                complementStyle={{
                  "text-align": "left"
                }}
              />
              <Box
                couleur="white"
                texte="Amélioration du taux de succès"
                padding="0"
                complementStyle={{
                  "white-space": "pre"
                }}
              />
              <Box
                couleur="white"
                texte="Renforcement de la marque"
                padding="0"
                complementStyle={{
                  "text-align": "left",
                  "white-space": "pre"
                }}
              />
            </Box>
          </Box>
        </Box>
        <Box
          enLigne={1}
          aLaLigne={1}
          complementStyle={{
            "margin-bottom": "auto"
          }}
        >
          <Box
            largeur={200}
            margeGauche={margeIcones}
            margeDroite={margeIcones}
            complementStyle={{
              "margin-bottom": "auto"
            }}
          >
            <Box
              image="professionnel(1).png"
              hauteur={100}
              largeur={100}
              imageEntiere={1}
            />
            <Box
              texte="Professionel ou commerçant"
              largeurMax={1}
              couleur="#0f5d7b"
              padding="5"
              complementStyle={{
                "text-transform": "uppercase"
              }}
            />
            <Box
              image="Flèche_plateforme _pro.png"
              imageEntiere={1}
              padding={20}
              complementStyle={{
                position: "relative",
                left: "-60px"
              }}
            />
            <Box margeGauche="140" margeHaut={-30} padding="5" gauche={1}>
              <Box
                couleur="white"
                texte="Ancrage local"
                padding="0"
                complementStyle={{
                  "text-align": "left"
                }}
              />
              <Box
                couleur="white"
                texte="Engagement visible"
                padding="0"
                complementStyle={{
                  "white-space": "pre"
                }}
              />
              <Box
                couleur="white"
                texte="Renforcement des liens avec ses clients, patients et salariés"
                padding="0"
                complementStyle={{
                  "text-align": "left"
                }}
              />
            </Box>
          </Box>

          <Box
            largeur={200}
            margeGauche={margeIcones}
            margeDroite={margeIcones}
            complementStyle={{
              "margin-bottom": "auto"
            }}
          >
            <Box
              image="citoyens.png"
              hauteur={100}
              largeur={100}
              imageEntiere={1}
            />
            <Box
              texte="citoyen et citoyenne"
              largeurMax={1}
              couleur="#0f5d7b"
              padding="5"
              largeur={160}
              complementStyle={{
                "text-transform": "uppercase"
              }}
            />
            <Box
              image="Flèche_asso_citoyen.png"
              imageEntiere={1}
              padding={80}
              complementStyle={{
                position: "relative",
                right: "-60px"
              }}
            />
            <Box margeDroite="60" padding="5" droite={1}>
              <Box
                couleur="white"
                texte="Simple"
                padding="0"
                complementStyle={{
                  "white-space": "pre"
                }}
              />
              <Box
                couleur="white"
                texte="Ludique"
                padding="0"
                complementStyle={{
                  "white-space": "pre"
                }}
              />
              <Box
                couleur="white"
                texte="Sans engagement"
                padding="0"
                complementStyle={{
                  "text-align": "right",
                  "white-space": "pre"
                }}
              />
            </Box>
          </Box>
        </Box>
      </Box>
      <Box margeHaut={10} texte='La borne et moi' couleur='#0f5d7b' couleurFond={green} type='bouton-maj' bordureArrondi={5} padding='15px 20'/>
    </Box>
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);
