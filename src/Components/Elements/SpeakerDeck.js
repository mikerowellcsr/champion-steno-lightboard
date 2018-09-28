import React from 'react';
import {
    Card,
    Button,
    CardImg,
    CardTitle,
    CardText,
    CardDeck,
    CardBody
} from 'reactstrap';

const Example = (props) => {
    return (
        <CardDeck>
            <Card>
                <CardImg top width="100%"
                         src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180"
                         alt="Card image cap"/>
                <CardBody>
                    <CardTitle>Anderson Cooper</CardTitle>
                    <CardText>Anderson Hays Cooper (born June 3, 1967) is an American journalist, television personality, and author. He is the primary anchor of the CNN news show.</CardText>
                    <Button color="danger">Delete</Button>
                </CardBody>
            </Card>
            <Card>
                <CardImg top width="100%"
                         src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180"
                         alt="Card image cap"/>
                <CardBody>
                    <CardTitle>Maya Angelou</CardTitle>
                    <CardText>Maya Angelou was an American poet, singer, memoirist, and civil rights activist. She published seven autobiographies, three books of essays, several books...</CardText>
                    <Button color="danger">Delete</Button>
                </CardBody>
            </Card>
            <Card>
                <CardImg top width="100%"
                         src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180"
                         alt="Card image cap"/>
                <CardBody>
                    <CardTitle>Colin Kaepernick</CardTitle>
                    <CardText>Colin Rand Kaepernick is an American football quarterback who is currently a free agent. Kaepernick played college football for the University of Nevada.</CardText>
                    <Button color="danger">Delete</Button>
                </CardBody>
            </Card>
        </CardDeck>
    );
};

export default Example;