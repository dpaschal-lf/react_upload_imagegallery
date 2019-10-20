import React from 'react';

class FileUploadInput extends React.Component{
    constructor(props){
        super(props);
        this.handleFileSelect = this.handleFileSelect.bind( this );
        this.state = {
            message:''
        }
    }
    handleFileSelect(e){
        console.log(e.target.files);
        const data = new FormData();
        const files = e.target.files;
        for( var fileIndex = 0; fileIndex <= files.length-1; fileIndex++){
            data.append( files[ fileIndex ].name, files[ fileIndex ]);
        }
        fetch( this.props.baseURL + 'uploadendpoint.php',{
            'method': 'POST',
            'body': data
        })
            .then( response => response.json())
            .then( (response)=>{
                this.props.fileUploadResponseCallback( response.currentFiles );
            })
    }
    render(){
        return (
        <input type="file" onChange={this.handleFileSelect} multiple/>
        )
    }
}

export default FileUploadInput;