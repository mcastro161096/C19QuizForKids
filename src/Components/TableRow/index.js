import react from "react";



function TableRow({rank, posicao}) {
    return (
        <tr>
            <th scope="row">{posicao}</th>
            <td>{rank.nickName}</td>
            <td>{rank.pontuacao}</td>
        </tr>
    )
}


export default TableRow;