import { connect } from 'react-redux';
import { joinServer, createServer, fetchServers, fetchServer} from '../../actions/server_actions';
import { withRouter } from 'react-router-dom';
import AddServerModal from './add_server_modal';

const mapStateToProps = (state, ownProps) => ({
  errors: state.errors.server
});

const mapDispatchToProps = dispatch => ({
  createServer: (formServer) => dispatch(createServer(formServer)),
  fetchServers: () => dispatch(fetchServers()),
  fetchServer: (serverId) => dispatch(fetchServer(serverId)),
  joinServer: (serverName) => dispatch(joinServer(serverName)),
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(AddServerModal));
