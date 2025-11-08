// App.js
import HelloWorld from './HelloWorld';
import Greeting from './Greeting';
import Profil from './Profil';
import Voiture from './Voiture';
import ListeCourses from './ListeCourses';

function App() {
  const utilisateur = { nom: 'Emma', photo: '/user.png' };
  const matiere= ['Math' , 'Physique' , 'Informatique'] ;
  const groupe =['Groupe 1' , 'Grupe 2'];
  

  return (
    <div>
      <HelloWorld />
      <Greeting prenom="Alice" />
      <Profil utilisateur={utilisateur} taille={150} />
      <Voiture marque={"Dacia"} modele={"Logan"} couleur={'Gris'}/>
      <Voiture marque={"Hyundai"} modele={"ix30"} couleur={'Noir'}/>
      <Voiture marque={"Seat"} modele={"Ibiza"} couleur={'Rouge'}/>
      <br></br>
      <ListeCourses elements={groupe} />
      <ListeCourses elements={matiere} />

    </div>
  );
}

export default App;