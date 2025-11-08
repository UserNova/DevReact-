function ListeCourses(props) {
  return (
    <ul>
      {props.articles.map((article, index) => (
        <li key={index}>{article}</li>
      ))}
    </ul>
  );
}

export default ListeCourses;
