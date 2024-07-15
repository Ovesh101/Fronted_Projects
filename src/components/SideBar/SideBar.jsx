import Menu_List from "./Menu-List";

const Sidebar = ({ menu = [] }) => {
  return (
    <div className="w-[200px] bg-gray-100 h-screen p-4 shadow-lg">
      <h2 className="text-xl font-semibold mb-4">Sidebar</h2>
      <Menu_List list={menu} />
    </div>
  );
};

export default Sidebar;
