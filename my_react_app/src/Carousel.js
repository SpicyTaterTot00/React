import React from "react";
import{Carousel} from 'reactstrap';
import TextForCarousel from "./TextForCarousel";

const Cards = (props) =>{
    return(
        <>
        <Carousel key= "firstSlide" classname = "display-3">
          <CardBody>
            <CardTitle>My Card</CardTitle>
            <Button onClick= {()=> props.cardOneState()}> Button</Button>
            <Fade in = {props.fade1} classname= "my-2">
              <CardText>
                <TextForCards cardNum={1} />
              </CardText>
            </Fade>
          </CardBody>
        </Carousel>
        
         
        </>
    )
}
export default Carousel;