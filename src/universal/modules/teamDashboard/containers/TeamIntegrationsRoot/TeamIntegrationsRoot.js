import relayEnv from 'client/relayEnv';
import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {graphql, QueryRenderer} from 'react-relay';
import {ConnectionHandler} from 'relay-runtime';
import TeamIntegrations from 'universal/modules/teamDashboard/components/TeamIntegrations/TeamIntegrations';
//import storeDebugger from 'relay-runtime/lib/RelayStoreProxyDebugger';

const teamIntegrationsQuery = graphql`
  query TeamIntegrationsRootQuery($teamMemberId: ID!) {
    viewer {
      ...ProviderList_viewer
    }
    
  }
`;



const mapStateToProps = (state) => {
  return {
    jwt: state.auth.token
  };
};

const TeamIntegrationsRoot = (props) => {
    const {jwt, teamMemberId} = props;
    return (
      <QueryRenderer
        environment={relayEnv.get()}
        query={teamIntegrationsQuery}
        render={({error, props}) => {
          if (error) {
            return <div>{error.message}</div>
          } else if (props) {
            return <TeamIntegrations viewer={props.viewer} jwt={jwt} teamMemberId={teamMemberId}/>;
          } else {
            return <div>Loading...</div>
          }
        }}
        variables={{teamMemberId}}
      />
    );
};


TeamIntegrationsRoot.propTypes = {
  teamMemberId: PropTypes.string.isRequired
};

export default connect(mapStateToProps)(TeamIntegrationsRoot);