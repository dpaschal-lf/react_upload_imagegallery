import React from 'react';
import ImageGallery from './galleryimage.jsx';
import './gallery.css';
import Modal from '../modal/modal';

class Gallery extends React.Component{
    constructor(props){
        super(props);
        this.showImageInModal = this.showImageInModal.bind( this );
        this.closeModal = this.closeModal.bind(this);
        this.state = {
            modalContents : null
        }
    }
    showImageInModal(url){
        this.setState({
            modalContents: <ImageGallery url={url}  />
        })
    }
    closeModal(){
        this.setState({
            modalContents: null
        })
    }
    render(){
        return (
            <React.Fragment>
                <div className="imageGallery">
                    {this.props.images.map((imageURL, index)=>{
                        return (<ImageGallery url={`${this.props.baseURL}/${imageURL}`} handleImageClick={this.showImageInModal} key={imageURL+index} />);
                    })}
                </div>
                <Modal closeModal={this.closeModal}>
                    {this.state.modalContents}
                </Modal>
            </React.Fragment>
        );
    }

}

export default Gallery

