import React,{Component} from 'react';
import leftarrow from './images/left-arrow.png';
import rightarrow from './images/right-arrow.png';
import f1 from './images/fantasy_book1.jpeg';
import f2 from './images/fantasy_book2.jpeg';
import f3 from './images/fantasy_book3.jpeg';
import styled from 'styled-components';

const Styles=styled.div`
img{
    width:180px;
    height:200px;
}
`;

class ImageCarousel extends Component{
    constructor(props){
        super(props)

        this.state={
            currentIndex:0,

            images:[
                f1,
                f2,
                f3,
                f1,
                f2,
                f3,
                f1
            ],
        arrowNext:rightarrow,
        arrowPrev:leftarrow
        };
        this.nextImage = this.nextImage.bind(this);
        this.prevImage = this.prevImage.bind(this);
    }

    prevImage(){
        // find the index of the last image in the array
        const lastIndex = this.state.images.length - 1;
        // check if we need to start over from the last index again
        const resetIndex = this.state.currentIndex === 0;
        const index = resetIndex ? lastIndex : this.state.currentIndex - 1;
        // assign the logical index to currentImageIndex that will use in render method
        this.setState({
            currentIndex: index
        })
    }  
    nextImage() {
    // find the index of the last image in the array
    const lastIndex = this.state.images.length - 1;
    // check if we need to start over from the first index
    const resetIndex = this.state.currentIndex === lastIndex;
    const index = resetIndex ? 0 : this.state.currentIndex + 1;
    // assign the logical index to currentImageIndex that will use in render method
    this.setState({
        currentIndex: index
        });
    }

    render() {
        // get current image index
        const index = this.state.currentIndex;
        // create a new array with 3 videos from the source images
        let firstFivePics = this.state.images.slice(index, index + 5);
        // check the length of the new array (it’s less than 5 when index is near the end of the array)
        if (firstFivePics.length < 5) {
        // if the firstFiveVideo's length is lower than 5 images than append missing images from the beginning of the original array 
            firstFivePics = firstFivePics.concat(this.state.images.slice(0, 5 - firstFivePics.length))
        }
        return (
            <Styles>
                <h3>Recent Releases</h3>
                {/* render the left arrow */}
                <img src={this.state.arrowPrev} onClick={this.prevImage}  />
                {/* render images*/}
                {firstFivePics.map((image, index) =>
                <img key={index} src={image} alt=""  />
                )}
                {/* render the right arrow*/}
                <img src={this.state.arrowNext} onClick={this.nextImage}/>
            </Styles>      
            );
        }
}

export default ImageCarousel