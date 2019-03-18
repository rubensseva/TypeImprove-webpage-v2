import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const styles = {
  outerGrid: {
    display: 'flex',
    flexDirection: 'column',
    padding: 20,
    alignItems: 'center',
    justify: 'center',
  },
};

class MainInputField extends React.Component {
  render() {
    const { handleChange } = this.props;
    return (
      <Grid style={styles.outerGrid}>
        <Grid>
          <TextField
            id="mainInputField"
            label="Enter text here"
            margin="normal"
            multiline
            minrows="4"
            onChange={handleChange}
            variant="outlined"
            style={{ width: 500 }}
          />
        </Grid>
        <Button variant="outlined" style={{ width: '30%' }}>
          Submit
        </Button>
      </Grid>
    );
  }
}

export default MainInputField;
