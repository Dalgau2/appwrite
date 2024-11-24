import { useDispatch } from "react-redux"
import authServices from "../../appwrite/servises/authservice"
import { logout } from "../../slices/authslice"
const LogOutBtn=()=>{
    const dispatch=useDispatch()
    const handlelogout=()=>{
        authServices.logoutUser().then(()=>{
            dispatch(logout())
        }).catch((error)=>{
            throw error
        })
       
    }
    return(
        <div>
            <button onClick={handlelogout} className=" bg-black rounded text-white text-[18px] font-[600]">
                logout
            </button>
        </div>
    )
}
export default LogOutBtn