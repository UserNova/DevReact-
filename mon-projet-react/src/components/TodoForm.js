import { useState, useEffect } from 'react';

function TodoForm({ ajouterTache, modifierTache, tacheEnEdition }) {
  const [texte, setTexte] = useState('');
  const [message, setMessage] = useState('');

  // Quand on veut modifier une tâche, on pré-remplit le champ
  useEffect(() => {
    if (tacheEnEdition) {
      setTexte(tacheEnEdition.texte);
    } else {
      setTexte('');
    }
  }, [tacheEnEdition]);

  const soumettreFormulaire = (e) => {
    e.preventDefault();
    if (texte.trim() === '') {
      setMessage('Attention : Le champ ne peut pas être vide!');
      return;
    }

    setMessage('');

    if (tacheEnEdition) {
      modifierTache(texte);
    } else {
      ajouterTache(texte);
    }
    setTexte('');
  };

  return (
    <form onSubmit={soumettreFormulaire} className="d-flex gap-2 mb-3">
      <input
        className="form-control"
        value={texte}
        onChange={(e) => setTexte(e.target.value)}
        placeholder="Nouvelle tâche"
      />
      <button className="btn btn-primary" type="submit">
        {tacheEnEdition ? 'Modifier' : 'Ajouter'}
      </button>
      {message && <p className="text-danger mt-2">{message}</p>}
    </form>
  );
}

export default TodoForm;
