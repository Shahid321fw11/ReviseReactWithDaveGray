const List = ({ items }) => {
  return (
    <>
      <ul>
        {items.map((item) => {
          return <li key={item.id}>{JSON.stringify(item)}</li>;
        })}
      </ul>
    </>
  );
};

export default List;
