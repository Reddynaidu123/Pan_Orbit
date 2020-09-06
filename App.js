import React,{Component} from 'react'; 
import axios from 'axios'; 
class App extends Component { 
   constructor(props) {
       super(props);
      this.state = { 
  
        selectedFile: null,file:"",base64:""
      }; 
      this.onFileChange=this.onFileChange.bind(this)
      this.onFileChange=this.onFileChange.bind(this)
      this.fileData=this.fileData.bind(this)
   }
   
  
     
    onFileChange  (event) { 
     
      this.setState({ selectedFile: event.target.files[0] },()=>{
        console.log("state",this.state)
      }); 
    }; 
     
    onFileUpload (e)  { 
      e.preventDefault();
      let file = e.target.files;
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        this.setState({
          file: file,
          base64: reader.result
        },()=>{
          console.log("hiii",this.state)
        });
//       const formData = new FormData(); 
//       formData.append( 
//         "myFile", 
//    x,
//  y 
      }
     
//       console.log("kalyan",this.state.selectedFile); 
     
//       axios.post("api/uploadfile", formData); 
    }; 
     
    fileData  () { 
     
      if (this.state.selectedFile) { 
          
        return ( 
          <div> 
            <h2>File Details:</h2> 
            <p>File Name: {this.state.selectedFile.name}</p> 
            <p>File Type: {this.state.selectedFile.type}</p> 
            <p> 
              Last Modified:{" "} 
              {this.state.selectedFile.lastModifiedDate.toDateString()} 
            </p> 
          </div> 
        ); 
      } else { 
        return ( 
          <div> 
            <br /> 
            <h4>Choose before Pressing the Upload button</h4> 
          </div> 
        ); 
      } 
    }; 
     
    render() { 
     
      return ( 
        <div> 
            <h1> 
              GeeksforGeeks 
            </h1> 
            <h3> 
              File Upload using React! 
            </h3> 
            <div> 
                <input type="file" onChange={this.onFileChange} /> 
                <button onClick={this.onFileUpload}> 
                  Upload! 
                </button> 
            </div> 
          {this.fileData()} 
        </div> 
      ); 
    } 
  } 
  
  export default App;