import Logo from './Logo';
import LecteurAudio from './LecteurAudio';
import ListeTaches from './ListeTaches';
import Notifications from './Notifications';
import ListeCourses from './ListeCourses';
import Galerie from './Galerie';



function Accueil() {
    const mesCourses = ["Milk", "Tomato", "Egg", "Apple"];

  return (
    <div>
      <h2>Page d’accueil</h2>
      <Logo />
      <LecteurAudio />
      <ListeTaches />
      <Notifications />
      <h4>Ma liste de courses</h4>
      <ListeCourses articles={mesCourses} />
      <Galerie />
    </div>

  )
}

export default Accueil;


