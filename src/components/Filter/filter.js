import React from "react";
import PropTypes from "prop-types";
import "./filter.scss";
import actions from "../../redux/actions";
import { connect } from "react-redux";

const Filter = ({ value, onChange }) => (
  <label className="filterLabel">
    Find contacts by name
    <input
      className="searchInput"
      type="text"
      value={value}
      onChange={onChange}
      // onChange={(event = onChange(event.target.value))}
    />
  </label>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    value: state.contacts.filter,
  };
};

const mapDispatchToProps = (dispatch) => ({
  onChange: (event) => dispatch(actions.changeFilter(event.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
