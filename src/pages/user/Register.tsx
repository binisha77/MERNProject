import {useAppDispatch, useAppSelector } from "../../store/hooks"
import { setAge, setName } from "../../store/userSlice"




function Register(){
  
 const data= useAppSelector((store) => store.hehe)
 console.log(data)
 const dispatch = useAppDispatch()
 dispatch(setName("binisha"))
 dispatch(setAge(100))
  return(
    <h1>Register Page</h1>

  )
}
export default Register