import SidebarItem from "./SidebarItem"
import items from "./Data/sidebar.json"


export default function Sidebar(){
    return (
        <div className="sidebar">
          <div>
          { items.map((item, index) => <SidebarItem key={index} item={item} />) }
          </div>
        </div>
    )
}