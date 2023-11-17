"use client"
import { useState } from "react"
import { table } from "console"

export default function Banner() {
   const[player, setPlayer] = useState ("X")
   const [list, setlist] = useState (["","","","","","","","",""])
    
    function marcar(index:any){
        if(list[index] != "")return
        list[index] = player
        setlist([...list])
        setPlayer(player == "X" ? "0" : "X")
    }

    return (
      
            
                <table className="flex text-center justify-center">  
                <a href="">clic</a>
                    <tbody className="flex flex-col p-10"> 
                        <tr>
                            <td onClick={() => marcar(0)} className="h-20 w-20 bg-blue-900 hover:scale-110 cursor-pointer text-black border text-2xl border-black">{list[0]}</td>
                            <td onClick={() => marcar(1)} className="h-20 w-20 bg-blue-900 hover:scale-110 cursor-pointer text-black border text-2xl border-black">{list[1]}</td>
                            <td onClick={() => marcar(2)} className="h-20 w-20 bg-blue-900 hover:scale-110 cursor-pointer text-black border text-2xl border-black">{list[2]}</td>
                        </tr>
                        <tr >
                            <td onClick={() => marcar(3)} className="h-20 w-20 bg-blue-900 hover:scale-110 cursor-pointer text-black border text-2xl border-black">{list[3]}</td>
                            <td onClick={() => marcar(4)} className="h-20 w-20 bg-blue-900 hover:scale-110 cursor-pointer text-black border text-2xl border-black">{list[4]}</td>
                            <td onClick={() => marcar(5)} className="h-20 w-20 bg-blue-900 hover:scale-110 cursor-pointer text-black border text-2xl border-black">{list[5]}</td>
                        </tr> 
                        <tr >
                            <td onClick={() => marcar(6)} className="h-20 w-20 bg-blue-900 hover:scale-110 cursor-pointer text-black border text-2xl border-black">{list[6]}</td>
                            <td onClick={() => marcar(7)} className="h-20 w-20 bg-blue-900 hover:scale-110 cursor-pointer text-black border text-2xl border-black">{list[7]}</td>
                            <td onClick={() => marcar(8)} className="h-20 w-20 bg-blue-900 hover:scale-110 cursor-pointer text-black border text-2xl border-black">{list[8]}</td>
                        </tr>
                    </tbody>
                </table>
            
       
    )
}