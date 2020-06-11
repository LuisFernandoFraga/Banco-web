import React, { Component } from "react";
import axios from "axios";

const url = "https://medicos-progweb.herokuapp.com/medicos";

export default class Combo extends Component {
  state = { medicos: [] };

  componentWillMount() {
    axios(url).then((response) => {
      this.setState({ medicos: response.data });
    });
  }

  renderOption() {
    return this.state.medicos.map((medico) => {
      return <option value={medico}>{medico}</option>;
    });
  }

  render() {
    return (
      <div>
        <select className="combo">{this.renderOption()}</select>
      </div>
    );
  }
}
