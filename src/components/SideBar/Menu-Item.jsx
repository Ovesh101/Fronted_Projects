import { useState } from "react";
import Menu_List from "./Menu-List";

const Menu_Item = ({ item }) => {
  const [toggle, setToggle] = useState({});

  const handleToggle = (getCurrentLabel) => {
    // initially it will be false even though we have explicitly false in state variable !undefined = true
    setToggle({ [getCurrentLabel]: !toggle[getCurrentLabel] });
  };

  return (
    <li className="pl-4">
      <div  onClick={() => handleToggle(item.label)} className="flex items-center justify-between cursor-pointer py-2 px-4 hover:bg-gray-200 rounded-md">
        <div className="font-medium text-gray-800">{item.label}</div>
        {item && item.children && item.children.length > 0 && (
          <span
           
            className="ml-2 text-gray-600"
          >
            {toggle[item.label] ? "-" : "+"}
          </span>
        )}
      </div>
      {item && item.children && item.children.length > 0 && toggle[item.label] && (
        <Menu_List list={item.children} />
      )}
    </li>
  );
};

export default Menu_Item;
