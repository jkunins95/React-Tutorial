function ListGroup() {
  let items = [
    'New York',
    'San Francisco',
    'Tokyo',
    'London',
    'Paris',
  ];
  items = [];

  // Conditional Statement BUT with duplication - not considered good practice
  if (items.length === 0)
    return (
      <>
        <h1>List</h1>
        <p>No Item Found</p>
      </>
    )

  return (
    <>
      <h1>List</h1>
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
};

export default ListGroup;