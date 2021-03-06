import React from 'react';
import { connect } from 'react-redux';

import {RaisedButton} from "material-ui";
import {SplashScreen} from "b:components/widgets";
import palette from "b:palette";
import {navigateHome, newRandomAccount} from "b:actions/index";


class Unlock extends React.Component {

  render() {
    const { dispatch } = this.props

    return <SplashScreen color={palette.main}>
			<RaisedButton
				label="Unlock"
				primary={true}
				onMouseUp={() => dispatch(navigateHome())}
				onTouchEnd={() => dispatch(navigateHome())}
				/>
			<RaisedButton
				label="Create Account"
				primary={true}
				onMouseUp={() => dispatch(newRandomAccount())}
				onTouchEnd={() => dispatch(newRandomAccount())}
				/>
		</SplashScreen>;
  }
}

function select(state) {
  return {}; //TODO: return list of accounts known to this client
}

export default connect(select)(Unlock)
