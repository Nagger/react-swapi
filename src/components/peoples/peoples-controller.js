import * as React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { Peoples } from "./peoples";
import {
  peoplesFetchRequest,
  peoplesFetchSuccess,
  peoplesFetchFailure,
  fetchPeoples
} from "./peoples-actions";
import { getPeoplesList } from "./peoples-selectors";

class PeoplesComponent extends React.Component {
  componentDidMount() {
    fetchPeoples(this.props);
  }
  render() {
    const {
      peoples: { loading },
      peoples
    } = this.props;

    return loading ? <p>loading</p> : <Peoples peoples={peoples} />;
  }
}
const mapStateToProps = createStructuredSelector({ peoples: getPeoplesList });

const mapDispatchToProps = {
  peoplesFetchRequest,
  peoplesFetchSuccess,
  peoplesFetchFailure
};

export const PeoplesController = connect(
  mapStateToProps,
  mapDispatchToProps
)(PeoplesComponent);
