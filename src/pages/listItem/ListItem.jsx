import "./listItem.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Datatable from "../../components/datatable/Datatable"
import { DATA, itemsColumns } from "../../datatablesource";

const ListItem = () => {
    const data = DATA.filter((item) => item.id === 1);
    const newData = data[0].items;
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <Datatable propsData={newData} propsLink={"/products/items/dishes"}  colunm={itemsColumns} newForm={'/products/newItem'}/>
      </div>
    </div>
  )
}

export default ListItem