import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const TableCard = ({a, index, setHoveredRow, hoveredRow, handleAddSong, iconStates}) => {



    return (
        <tr key={index} onMouseEnter={() => setHoveredRow(index)}
            onMouseLeave={() => setHoveredRow(null)}>
            <th scope="row">{index + 1}</th>
            <td>{a?.title}</td>
            <td><FontAwesomeIcon icon={iconStates[index]} className={`plus-icon ${hoveredRow === index ? 'visible' : 'hidden'}`}
                onClick={() => handleAddSong(index)} /></td>
            <td>{a?.duration}</td>
        </tr>
    )
}

export default TableCard