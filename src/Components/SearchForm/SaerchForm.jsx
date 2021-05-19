import { Component } from 'react';

import './SaerchForm.scss';

class SaerchForm extends Component {
  state = {
    query: '',
  };

  handleChange = event => {
    this.setState({ query: event.currentTarget.value.trim() });
  };

  handleSubmit = event => {
    event.preventDefault();
  };

  render() {
    const { query } = this.state;
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <input
          className="form-input"
          type="text"
          value={query}
          onChange={this.handleChange}
          autoComplete="off"
          autoFocus
          placeholder="Search movies..."
        />
        <button className="from-btn" type="submit">
          Search
        </button>
      </form>
    );
  }
}

export default SaerchForm;
