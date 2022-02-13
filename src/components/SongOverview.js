import React, { Component } from 'react';
import SongForm from './SongForm';
import SongList from './SongList';

class SongOverview extends Component {
    constructor() {
        super()
        this.state = {
            songs: [
                {
                    id: 1,
                    title: "In da club",
                    artist: "50 Cent",
                    genre: "HipHop",
                    rating: "5"
                },
                {
                    id: 2,
                    title: "Smells like teen spirit",
                    artist: "Nirvana",
                    genre: "Rock",
                    rating: "4"
                },
                {
                    id: 3,
                    title: "Waterfalls",
                    artist: "TLC",
                    genre: "RnB",
                    rating: "3"
                },
            ]
        }

        this.addSong = this.addSong.bind(this)
        this.removeSong = this.removeSong.bind(this)
        this.removeList = this.removeList.bind(this)
        this.sortSong = this.sortSong.bind(this)
        this.sortSongReversed = this.sortSongReversed.bind(this)
    }

    //Add Song
    addSong = (song) => {
        const addedSong = {
            id: this.state.songs.length + 1,
            title: song.title,
            artist: song.artist,
            genre: song.genre,
            rating: song.rating
        }
        this.setState({ songs: this.state.songs.concat(addedSong) })
    }

    //Remove Song
    removeSong(id) {
        const newList = this.state.songs.filter(song => {
            return id !== Number(song.id)
        })
        this.setState({ songs: newList })
    }

    //Remove All Songs
    removeList() {
        this.setState({
            songs: []
        })
    }

    //Sort Songs(title), Artist, Genre, Rating 
    sortSong = (key) => {
        const songList = [...this.state.songs]
        songList.sort((a, b) => (a[key].toLowerCase() < b[key].toLowerCase()) ? -1 : 1)
        this.setState({ songs: songList })
    }

    sortSongReversed = (key) => {
        const songList = [...this.state.songs]
        songList.sort((a, b) => (a[key].toLowerCase() < b[key].toLowerCase()) ? 1 : -1)
        this.setState({ songs: songList })
    }


    render() {
        return (
            <div className="song-container">

                <SongForm
                    addSong={this.addSong}
                />

                <SongList
                    songs={this.state.songs}
                    addSong={this.addSong}
                    removeList={this.removeList}
                    removeSong={this.removeSong}
                    sortSong={this.sortSong}
                    sortSongReversed={this.sortSongReversed}
                />

            </div>
        )
    }
}

export default SongOverview;