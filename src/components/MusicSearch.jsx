// Cher David,
// Nous nous questionnons sur la manière de peut-être hypothétiquement envisager un jour être dans la mesure de récolter des informations d'une fucking API de merde!
// On faisait notre appel sur le onclick d'un input type submit, mais on avait tjs un clic de retard
// Sur les merveilleux conseils de Maximilien de la Vega, nous avons mis le setState sur le onChange et puis la récupération des data sur le onClick du bouton, et là ça a marché

//Moreover, nous ne ne comprenons pas vraiment la différence entre button et input type submit
//AND, nous sommes surpris qu'en appuyant sur enter cela fasse comme si on cliquait sur le bouton avec la souris.

import React, { Component } from "react";
import axios from "axios";

export default class MusicSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      artist: "",
      title: "",
      lyricsReceived: ""
    };
  }

  // getLyrics = async () => {
  //   const url = `https://api.lyrics.ovh/v1/${this.state.artist}/${
  //     this.state.title
  //   }`;
  //   const res = await axios.get(url);

  //   console.log(res);
  // };

  // getLyrics() {
  //   fetch(`https://api.lyrics.ovh/v1/${this.state.artist}/${this.state.title}`)
  //     .then(response => response.json())
  //     .then(data => {
  //       this.setState(() => {
  //         return console.log(data);
  //       });
  //     });
  // }

  request = () => {
    fetch(`https://api.lyrics.ovh/v1/${this.state.artist}/${this.state.title}`)
      .then(response => response.json())
      .then(data => {
        this.setState({
          lyricsReceived: data.lyrics
        });
      })
      .catch(error => {
        alert("L'artiste et le titre ne sont pas valides. lol");
        console.log(error);
      });
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    // this.getLyrics();
    this.request();
  };

  render() {
    console.log(this.state.artist);
    console.log(this.state.title);
    console.log(this.state.lyricsReceived);
    return (
      <div>
        <form>
          <label htmlFor="artist"> Enter a singer </label>
          <input
            type="text"
            name="artist"
            id="artist"
            onChange={this.handleChange}
          />
          <label htmlFor="title"> Enter a song </label>
          <input
            type="text"
            name="title"
            id="title"
            onChange={this.handleChange}
          />
          {/* <input type="submit" onClick={this.handleSubmit} /> */}
          <button onClick={this.handleSubmit}>Search</button>
        </form>
        <h1>Wonderful lyrics:</h1>
        <p>{this.state.lyricsReceived}</p>
      </div>
    );
  }
}
