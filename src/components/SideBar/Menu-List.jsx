import Menu_Item from "./Menu-Item";

const Menu_List = ({ list = [] }) => {
  return (
    <ul className="list-none   p-0 m-0">
      {list && list.length > 0 && (
        list.map((listItem, index) => (
          <Menu_Item key={index} item={listItem} />
        ))
      )}
    </ul>
  );
};

export default Menu_List;
