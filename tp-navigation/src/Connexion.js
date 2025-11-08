import { useState } from 'react';

function Connexion() {
  const [connecte, setConnecte] = useState(false);

  return (
    <div>
      {connecte ? (
        <h3>Connecté</h3>
      ) : (
        <h3>Déconnecté</h3>
      )}
      <button onClick={() => setConnecte(!connecte)}>
        Changer l’état
      </button>
    </div>
  );
}

export default Connexion;