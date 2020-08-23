import React from "react";
import Container from "../components/Container";
import Heading from "../components/Heading";
import SearchForm from "../components/SearchForm";

export default class Landing extends React.Component {
  render() {
    return (
      <div className="landing">
        <Container>
          <header>
            <Heading />
            <button className="header--button-add">+ Add movie</button>
          </header>
          <main>
            <h2 className="font_thin landing--search-title">Find your movie</h2>
            <SearchForm />
          </main>
        </Container>
      </div>
    );
  }
}
