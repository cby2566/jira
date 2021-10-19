import {useState} from "react"


const List3 = () =>{

    const [userList, setUserList] = useState([])
      
    // // 查询列表
      if(!userList.length){
        fetch('http://localhost:3000/users')
        .then(async (response) => {
          if (response.ok) {
            // console.log(await response.json())
            let list = await response.json()
            setUserList(list)
          } else {
            console.log(response)
          }
        })
      }
    
        return (<div>
            {
                userList.map((item) => <button key={item.id}>{item.name}</button>)
            }
        </div>)
}
export default List3