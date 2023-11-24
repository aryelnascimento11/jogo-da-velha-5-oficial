"use client"

import { useState } from "react";

export default function Banner() {
    const [player, setPlayer] = useState("X");
    const [list, setList] = useState(["", "", "", "", "", "", "", "", ""]);

    // Função para verificar o vencedor
    const calculateWinner = (squares: any) => {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null;
    };

    const marcar = (index: any) => {
        if (list[index] !== "") return;

        // Atualizar o tabuleiro
        setList((prevList) => {
            const newList = [...prevList];
            newList[index] = player;
            return newList;
        });

        // Verificar o vencedor
        const winner = calculateWinner(list);
        if (winner) {
            alert(`O jogador ${winner} venceu!`);
            // Você pode resetar o tabuleiro aqui se desejar
            // setList(["", "", "", "", "", "", "", "", ""]);
        } else {
            // Se não houver vencedor, alternar o jogador
            setPlayer(player === "X" ? "O" : "X");
        }
    };

    return (
        <div className=" w-screen h-screen bg-cover bg-[url('https://static.vecteezy.com/ti/vetor-gratis/t2/3303295-jogo-de-fundo-de-montanhas-vetor.jpg')]">
            <table className="flex text-center justify-center">
                <tbody className="flex flex-col p-10 border rounded">
                    <tr>
                        {list.slice(0, 3).map((cell, index) => (
                            <td key={index} onClick={() => marcar(index)} className="h-20 w-20 bg-blue-900 hover:scale-110 cursor-pointer text-black border text-2xl border-black">
                                {cell}
                            </td>
                        ))}
                    </tr>
                    <tr>
                        {list.slice(3, 6).map((cell, index) => (
                            <td key={index + 3} onClick={() => marcar(index + 3)} className="h-20 w-20 bg-blue-900 hover:scale-110 cursor-pointer text-black border text-2xl border-black">
                                {cell}
                            </td>
                        ))}
                    </tr>
                    <tr>
                        {list.slice(6, 9).map((cell, index) => (
                            <td key={index + 6} onClick={() => marcar(index + 6)} className="h-20 w-20 bg-blue-900 hover:scale-110 cursor-pointer text-black border text-2xl border-black">
                                {cell}
                            </td>
                        ))}
                    </tr>

                </tbody>
            </table>
            <div className="flex text-center justify-center p-1">
                <button className=" w-36 hover:bg-blue-900 hover:text-black cursor-pointer   hover:scale-110 justify-center  h-9 border border-white rounded "><a href="http://localhost:3000/">Reinicie o Jogo</a></button>
            </div>
        </div>
    );
}
