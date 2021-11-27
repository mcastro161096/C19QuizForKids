import react from "react";



function TableRow({rank}) {
    return (
        <tr>
            <th scope="row">{rank.id}</th>
            <td>{rank.nickName}</td>
            <td>{rank.pontuacao}</td>
        </tr>
    )
}


export default TableRow;