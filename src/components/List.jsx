/* eslint-disable react/prop-types */
import ListOrder from "./ListOrder";

const List = ({ brands }) => {
  return (
    <ul>
      {brands.map((brand) => (
        <ListOrder brandObj={brand} key={brand.id} />
      ))}
    </ul>
  );
};

export default List;
