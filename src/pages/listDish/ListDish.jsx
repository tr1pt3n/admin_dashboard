import "./listDish.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Datatable from "../../components/datatable/Datatable"
import { DATA, dishesColumns } from "../../datatablesource";

const ListDish = () => {
    const data = DATA.filter((item) => item.id === 1);
    const newData = data[0].items[0].dishes;   
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <Datatable propsData={newData} propsLink={"/products/items/dishes/dish"}  colunm={dishesColumns} newForm={'/products/newDish'}/>
      </div>
    </div>
  )
}

export default ListDish