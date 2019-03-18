import React from 'react';
import { connect } from 'react-redux';
import TypeImproveContainer from '../containters/TypeImproveContainer';
import ShowTextContainter from '../containters/ShowTextContainter'


class TypeImproveScreen extends React.Component {
  render() {
    return (
      <div>
        <TypeImproveContainer />
        <ShowTextContainter />
      </div>
    );
  }
}

export default TypeImproveScreen;
