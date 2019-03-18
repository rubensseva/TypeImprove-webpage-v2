import React, { Component } from 'react'; import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import { Grid, Paper } from '@material-ui/core/';

import { changeTextActionCreator } from '../actionCreators/actionCreators';

class ShowTextContainter extends Component {
  constructor(props) {
    super(props);
    this.state = { text : '' };
  }

  componentDidMount() {
    fetch('api/text/getRandomText')
      .then(response => response.json())
      .then((response) => {
        if(response.status !== 200) {
          console.log('Status code failure: ' + response.status);
        }
        console.log('res: ' + JSON.stringify(response));
        this.setState({ text: response.text });
        changeTextActionCreator(response.text);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <Grid container sm>
        <Grid item sm>
          <Typography style={{ marginTop: 40 }}>
            Here is what you are typing
          </Typography>
          <Paper style={{
            padding: 50, marginTop: 20, marginBottom: 20, marginLeft: 20, marginRight: 20,
          }}
          >
            <Typography>
              {this.props.componentText}
            </Typography>
          </Paper>
        </Grid>
        <Grid item sm>
          <Typography style={{ marginTop: 40 }}>
            Here is what you should type
          </Typography>
          <Paper style={{
            padding: 50, marginTop: 20, marginBottom: 20, marginLeft: 20, marginRight: 20,
          }}
          >
            <Typography>
              {this.state.text}
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    );
  }
}


function mapStateToProps(state) {
  const { text } = state;
  return { componentText: text };
}

export default connect(mapStateToProps)(ShowTextContainter);
