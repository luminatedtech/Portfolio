import { BsPlus, BsGearFill } from 'react-icons/bs'
import {FaFire, FaPoo} from 'react-icons/fa'
function SideBar () {
    return (
        <div className="fixed top-0 left-0 h-screen w-16 m-0 flex flex-col bg-gray-900 text-white shadow-sm">
            <SideBarIcon icon={<FaFire size="28"/>} text={"About"}/>
            <SideBarIcon icon={<FaPoo size="28"/>} text="Skills"/>
            <SideBarIcon icon={<BsPlus size="28"/>} text="Project"/>
            <SideBarIcon icon={<BsGearFill size="28"/>} text="Contact"/>
        </div>
    )

}
const SideBarIcon = ({ icon,text }) => (
    <div className="sidebar-icon group">
      {icon}
      <span className="sidebar-tooltip group-hover:scale-100">
        {text}
      </span>
    </div>
  );

export default SideBar