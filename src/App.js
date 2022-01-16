import React, {Component} from 'react';
import axios from 'axios'
import /*{*/Loading /*}*/ from './Loading';

class App extends Component{

  constructor(props){
    super(props)
    //state
    this.state = {
      users:[],
      loading: false
    }
    //bind
    this.handleSubmit = this.handleSubmit.bind(this);
  } 

getUsers(){
    
      this.setState({
        loading: true
      })
      axios('https://api.randomuser.me/?nat=US&results=5')
      .then(resp => this.setState({
              users: [...this.state.users, ...resp.data.results],
              loading: false
            })
        //console.log(resp) 
        )
}

handleSubmit(e){
  
    e.preventDefault();
    this.getUsers();
    // alert('ola') ;//return
    console.log('more users loaded');
}

componentWillMount(){

  this.getUsers()
  
}

  render(){
    
const {loading, users} = this.state

    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
                          <input type="submit" value="load users"></input>
                        </form>
                        <hr></hr>
        { !loading  ? (
            users.map(user => (
                  <div key={user.id.value}>
                        <h3 style={{color:'red'}}> {user.name.first}</h3>
                        <p>{user.email}</p>
                        <hr></hr>
                </div>
              ))
            ) :(
              <Loading message="Hey Hey Hey" />
            )}
      </div>
        
     );
  }

}

export default App;
