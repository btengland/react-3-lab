import {Component} from 'react';
import './App.css';
import Header from './Component/Header'
import Content from './Component/Content'
import data from './data';

class App extends Component{
  constructor (){
    super();

    this.state = {
      data: data,
      index: 0
    }
  }

  handlePrevious = () => {
    let newIndex = this.state.index - 1
    if(newIndex < 0){
      newIndex = this.state.data.length - 1
    }
    this.setState({index: newIndex})
  }

  handleNext = () => {
    let newIndex = this.state.index + 1
    if(newIndex > this.state.data.length - 1){
      newIndex = 0
    }
    this.setState({index: newIndex})
  }

  render(){
    return(
      <div>
      <Header/>  
        <div className="App">
        <Content 
        handlePrevious = {this.handlePrevious}
        handleNext = {this.handleNext}
        data={this.state.data[this.state.index]}/>
        </div>
      </div>
    )
  }
}

export default App;