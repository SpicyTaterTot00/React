import React from "react";
import{ Button, Card, CardBody, CardText, CardTitle, Fade} from 'reactstrap';
import TextForCards from "./TextForCards";

const Cards = (props) =>{
    return(
        <>
        <Card key= "firstCard" classname = "display-3">
          <CardBody>
            <CardTitle>My Card</CardTitle>
            <Button onClick= {()=> props.cardOneState()}> Button</Button>
            <Fade in = {props.fade1} classname= "my-2">
              {props.fade1 ? <CardText>
                <TextForCards cardNum={1} />
              </CardText> : null}
            </Fade>
          </CardBody>
        </Card>
        
         <Card classname = "display-3">
          <CardBody>
            <CardTitle>My Second Card</CardTitle>
            <Button onClick= {()=> props.cardTwoState()}> Button</Button>
            <Fade in = {props.fade2} classname= "my-2">
              {props.fade2 ? <CardText>
              <TextForCards cardNum={2} />
              </CardText> : null}
            </Fade>
          </CardBody>
        </Card>
        </>
    )
}
export default Cards;