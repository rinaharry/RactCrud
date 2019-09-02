
import React from 'react';

   
const Ninja =({ninjas, deleteNinja})=>{
        const res =  ninjas.map((item, i)=>{
            // if(item.age < 1){
            //     return (  
            //         <div key={i}>
            //          <ul>
            //             <li>{item.name}</li>
            //             <li>{item.age}</li>
            //          </ul>
            //         </div>
            //       )
            // }else{
            //     return null
            // }
            return  item.age?
                  (  
                    <table key={i}>
                      <tbody>
                        <tr>
                            <td>{item.name} </td>
                            <td> {item.age}  </td>
                            <td onClick= {()=>deleteNinja(item)}>delete</td>
                        </tr>
                      </tbody>
                    </table>
                  )
              :
             null
            })
          return (
              <div>
                  {res}
              </div>
            )
    }
    

    export default Ninja;