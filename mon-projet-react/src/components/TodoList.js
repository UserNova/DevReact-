import TodoItem from './TodoItem';

function TodoList({ taches, changerEtat, supprimerTache, definirTacheEnEdition }) {
  return (
    <ul className="list-group">
      {taches.map((tache) => (
        <TodoItem
          key={tache.id}
          tache={tache}
          changerEtat={changerEtat}
          supprimerTache={supprimerTache}
          definirTacheEnEdition={definirTacheEnEdition}
        />
      ))}
    </ul>
  );
}

export default TodoList;
