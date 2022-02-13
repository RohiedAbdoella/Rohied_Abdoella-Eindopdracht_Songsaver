import React, { Component } from 'react';

class SongForm extends Component {
    constructor() {
        super()
        this.state = {
            title: "",
            artist: "",
            genre: "",
            rating: "",
        }
        this.onInput = this.onInput.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onInput(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    onSubmit(event) {
        event.preventDefault()
        this.props.addSong(this.state)
        this.setState({
            title: "",
            artist: "",
            genre: "",
            rating: "",
        })
    }

    render() {
        return (
            <div className="songForm">

                <form style={{ width: "100%" }} onSubmit={this.onSubmit}>
                    <input
                        type="text"
                        value={this.state.title}
                        name="title"
                        placeholder="Type title here..."
                        onChange={this.onInput}
                        className="input"
                    />

                    <input
                        type="text"
                        value={this.state.artist}
                        name="artist"
                        placeholder="Type artist here..."
                        onChange={this.onInput}
                        className="input"
                    />

                    <select
                        value={this.state.genre}
                        name="genre"
                        onChange={this.onInput}
                        className="input"
                    >
                        <option value="Pick a Genre"> Choose genre </option>
                        <option value="Pop"> Pop </option>
                        <option value="Dance"> Reggae </option>
                        <option value="Classical"> Techno </option>
                        <option value="HipHop"> Rock </option>
                        <option value="Other"> Latin </option>
                        <option value="Other"> HipHop </option>
                        <option value="Other"> RnB </option>
                        <option value="Other"> Other </option>
                    </select>

                    <select
                        value={this.state.rating}
                        name="rating"
                        onChange={this.onInput}
                        className="input"
                    >
                        <option value="Rate your song..."> Rate your song... </option>
                        <option value="1"> 1 </option>
                        <option value="2"> 2 </option>
                        <option value="3"> 3 </option>
                        <option value="4"> 4 </option>
                        <option value="5"> 5 </option>
                    </select>

                    <button className="button-new-input" type="submit"> Add To List! </button>
                    
                </form>
            </div>
        )
    }
}

export default SongForm;