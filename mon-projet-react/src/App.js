import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
  const [taches, setTaches] = useState([]);
  const [tacheEnEdition, setTacheEnEdition] = useState(null);

  const ajouterTache = (texte) => {
    const nouvelleTache = {
      id: Date.now(),
      texte,
      terminee: false,
    };
    setTaches([...taches, nouvelleTache]);
  };

  const modifierTache = (nouveauTexte) => {
    setTaches(
      taches.map((t) =>
        t.id === tacheEnEdition.id ? { ...t, texte: nouveauTexte } : t
      )
    );
    setTacheEnEdition(null);
  };

  const changerEtat = (id) => {
    setTaches(
      taches.map((t) =>
        t.id === id ? { ...t, terminee: !t.terminee } : t
      )
    );
  };

  const supprimerTache = (id) => {
    setTaches(taches.filter((t) => t.id !== id));
  };

  const definirTacheEnEdition = (tache) => {
    setTacheEnEdition(tache);
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4"> To-Do List App</h1>
      <TodoForm
        ajouterTache={ajouterTache}
        modifierTache={modifierTache}
        tacheEnEdition={tacheEnEdition}
      />
      <TodoList
        taches={taches}
        changerEtat={changerEtat}
        supprimerTache={supprimerTache}
        definirTacheEnEdition={definirTacheEnEdition}
      />
    </div>
  );
}

export default App;
