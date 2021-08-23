import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import {sampleText} from './sampleText'

class App extends Component {
  state = {
    value : sampleText
  }
  handleChange = e => {
    this.setState({value : e.target.value})
  }
  render(){
    return (
      <div className="container">
        <h1 style={{fontWeight:'900'}} className="text-center my-5 app-title">Markdown-Editor</h1>
        <div className="row">
          <div className="col-sm-6">
            <textarea onChange={this.handleChange} value={this.state.value} className="form-control" name="markdown-side" id="markdown-side" cols="30" rows="35"></textarea>
          </div>
          <div className="col-sm-6">{sampleText}</div>
        </div>
      </div>
    );
  }
}

export default App;
