import React from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

import MainInputField from '../generic/MainInputField';
import { changeTextActionCreator } from '../actionCreators/actionCreators';

class TypeImproveContainer extends React.Component {
  constructor(props) {
    super(props);
    this.onInputFieldChange = this.onInputFieldChange.bind(this);
  }

  onInputFieldChange = (e) => {
    const { value } = e.target;
    const { dispatch } = this.props;
    console.log(`Dispatching action: ${value}`);
    dispatch(changeTextActionCreator(value));
  };


  render() {
    return (
      <Grid container>
        <Grid container sm>
          <Grid item sm>
            <Typography style={{ padding: 20 }}>
            This is the typeImprove game site
            </Typography>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item sm>
            <Paper>
              <MainInputField
                handleChange={this.onInputFieldChange}
              />
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default connect()(TypeImproveContainer);
