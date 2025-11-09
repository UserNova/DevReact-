function TodoItem({ tache, changerEtat, supprimerTache, definirTacheEnEdition }) {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <div>
        <input
          type="checkbox"
          checked={tache.terminee}
          onChange={() => changerEtat(tache.id)}
          className="form-check-input me-2"
        />
        <span style={{ textDecoration: tache.terminee ? 'line-through' : 'none' }}>
          {tache.texte}
        </span>
      </div>
      <div>
        <button
          onClick={() => definirTacheEnEdition(tache)}
          className="btn btn-warning btn-sm me-2"
        >
          ✏️
        </button>
        <button
          onClick={() => supprimerTache(tache.id)}
          className="btn btn-danger btn-sm"
        >
          🗑️
        </button>
      </div>
    </li>
  );
}

export default TodoItem;
