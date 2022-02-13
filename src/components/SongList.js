import React from 'react';
import SongItem from './SongItem';

function SongList({ songs, removeList, removeSong, sortSong, sortSongReversed }) {

    const ListSongs = songs ? songs.map(song => (
        <SongItem
            key={song.id}
            id={song.id}
            title={song.title}
            artist={song.artist}
            genre={song.genre}
            rating={song.rating}
            removeSong={removeSong}
        />
    )) : " "

    return (
        <div className="songList">

            <table className="table">

                <th> Title
                    <br></br>
                    <button
                        type="submit"
                        className="button"
                        onClick={() => { sortSong("title") }}> A-Z
                    </button>
                    <button
                        type="submit"
                        className="button"
                        onClick={() => { sortSongReversed("title") }}> Z-A
                    </button>
                </th>

                <th> Artist
                    <br></br>
                    <button
                        type="submit"
                        className="button"
                        onClick={() => { sortSong("artist") }}> A-Z
                    </button>
                    <button
                        type="submit"
                        className="button"
                        onClick={() => { sortSongReversed("artist") }}> Z-A
                    </button>
                </th>

                <th> Genre
                    <br></br>
                    <button
                        type="submit"
                        className="button"
                        onClick={() => { sortSong("genre") }}> A-Z
                    </button>
                    <button
                        type="submit"
                        className="button"
                        onClick={() => { sortSongReversed("genre") }}> Z-A
                    </button>
                </th>

                <th> Rating
                    <br></br>
                    <button
                        type="submit"
                        className="button"
                        onClick={() => { sortSong("rating") }}> 1-5
                    </button>
                    <button
                        type="submit"
                        className="button"
                        onClick={() => { sortSongReversed("rating") }}> 5-1
                    </button>

                </th>

                <th><button onClick={removeList} className="delete-button"> Clear List </button></th>

                <tbody className="table-body">
                    {ListSongs}
                </tbody>
            </table>

        </div>
    )
}

export default SongList;