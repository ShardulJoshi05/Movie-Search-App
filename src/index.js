import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SearchMovie from './SearchMovie';

class Main extends React.Component{
  render(){
    return (
     <div className='container'>
        <SearchMovie/>
      </div>
    );
  }
}

ReactDOM.render(
  <Main/>,
  document.getElementById('root')
)