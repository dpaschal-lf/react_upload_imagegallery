import React from 'react';
import './App.css';
import FileUploadInput from './components/fileupload/fileupload';
import Gallery from './components/gallery/gallery';

class App extends React.Component{
  constructor(props){
    super(props);
    this.updateImages = this.updateImages.bind(this);
    this.state = {
      images: [],
      baseURL: 'http://localhost/lfz/_practice/reactfileupload/public/server/'
    }
  }
  componentDidMount(){
    fetch( this.state.baseURL + 'uploadendpoint.php',{
      'method': 'POST'
    })
      .then( response => response.json())
      .then( (response)=>{
        this.setState({
          images: response.currentFiles
        })
      })
  }
  updateImages( images ){
    debugger;
    this.setState({
      images
    });
  }
  render(){
    return(
      <div className="App">
        <FileUploadInput baseURL={this.state.baseURL} fileUploadResponseCallback={this.updateImages}/>
        <Gallery baseURL={this.state.baseURL} images={this.state.images} />
      </div>
      
    );
    
  }
}

export default App;
