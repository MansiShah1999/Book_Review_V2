import React,{Component} from 'react';
import ImageCarousel from './ImageCarousel';
import styled from 'styled-components';

const Styles=styled.div`
h2{
    padding-left:400px;
    box-sizing: border-box;
}
p{
    padding-left:20px;
    padding-right:20px;
    font-size:18px;
}
`;
export const Header=()=>{
    return(
        <Styles>
            <h2>Welcome to world of books</h2>
            <p>Books are portasl to other worlds-the world of politicians , historians , magicians 
                , kings , queens , wolves , vampires - you name it.
            </p>
            <p>
            I never feel lonely if I've got a book - they're like old friends. 
            Even if you're not reading them over and over again, you know they are there. 
            And they're part of your history. They sort of tell a story about your journey through life. 
            The books that help you most are those which make you think that most. 
            The hardest way of learning is that of easy reading; 
            but a great book that comes from a great thinker is a ship of thought, 
            deep freighted with truth and beauty.
            </p>
            <ImageCarousel />
        </Styles>
    )
}
