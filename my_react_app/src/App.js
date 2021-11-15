import React, { Component } from 'react';
import './App.css';
import{ Button, Card, CardBody, CardTitle, Jumbotron } from 'reactstrap';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      showSecondCard: false
    }
  }
  

  render(){
    let cname = "lead";
    console.log(this.state.showSecondCard)

    return(
      <div>
        <Jumbotron>
          <h1 classname= "display 3"> My First React App</h1>
          <p classname={cname}> My first attempt at it</p>
          <br classname={"my-2"}/>
          <p>Playing with reactstrap</p>
          <p classname={cname}></p>
        </Jumbotron>
        <Card key= "firstCard">
          <CardBody>
            <CardTitle>My Card</CardTitle>
            <Button onClick= {()=> this.setState({ showSecondCard : true })}> Button</Button>
          </CardBody>
        </Card>
        
        {this.state.showSecondCard ? <Card>
          <CardBody>
            <CardTitle>My Second Card</CardTitle>
            <Button onClick= {()=> this.setState({ showSecondCard : false })}> Button</Button>
          </CardBody>
        </Card> : null}
      </div>
    )
  }
}

export default App;
