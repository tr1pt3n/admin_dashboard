import "./list.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Datatable from "../../components/datatable/Datatable"
import { userColumns, DATA } from "../../datatablesource";

const List = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <Datatable propsData={DATA} propsLink={"/products/items"} colunm={userColumns} newForm={'/products/new'}/>
      </div>
    </div>
  )
}

export default List