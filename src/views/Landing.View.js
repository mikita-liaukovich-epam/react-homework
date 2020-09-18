import React from "react";
import Container from "../components/Container";
import Heading from "../components/Heading";
import SearchForm from "../components/SearchForm";
import AdditionModal from '../components/Modals/AdditionModal'

export default class Landing extends React.Component {
  constructor(props) {
    super(props);

    this.handleToggleModal = this.handleToggleModal.bind(this);

    this.state = {
      showModal: false
    }
  }

  handleToggleModal() {
    this.setState({
      showModal: !this.state.showModal,
    })
  }

  render() {
    return (
      <div className="landing">
        <Container>
          <header>
            <Heading />
            <button className="header--button-add" onClick={this.handleToggleModal}>+ Add movie</button>
          </header>
          <main>
            <h2 className="font_thin landing--search-title">Find your movie</h2>
            <SearchForm />
          </main>
        </Container>
        { this.state.showModal &&
                <AdditionModal onCloseRequest={() => this.handleToggleModal()}/> }
      </div>
    );
  }
}
