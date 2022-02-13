import React from 'react';
import Image from '../images/trash.svg'


function SongItem({ id, title, artist, genre, rating, removeSong }) {

    return (

        <tr key={id}>

            <td> {title || ""} </td>
            <td> {artist || ""} </td>
            <td> {genre || ""}  </td>
            <td> {rating || ""}  </td>

            <td>
                <button
                    className="logo"
                    onClick={() => { removeSong(id) }}>
                    <img src={Image} alt="delete" height="20" width="15" />
                </button>
            </td>

        </tr>

    )
}

export default SongItem;