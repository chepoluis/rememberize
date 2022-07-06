import { Button, Card, Col, Container, Image, Row } from "react-bootstrap"

// picsum: get random images
// mdb-cli: maybe use to deploy the web app?
export const HomeScreen = () => {
    return (
        <div>
            <main>
                <Container>
                    <Row className="px-4 my-5">
                        <Col sm={7}>
                            <Image 
                                src={`https://dummyimage.com/600x400/000/fff`}
                                fluid
                                rounded
                            />
                        </Col>
                        <Col sm={5}>
                            <h1 className="font-weight-light">TagLine</h1>

                            <p className='mt-4'>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat ad est ab accusamus obcaecati sequi, sint dolores! Iste quas totam consequuntur, officiis vel deleniti earum porro cumque, obcaecati alias fugiat.
                            </p>
                            
                            <Button  variant="outline-primary">Call to action</Button>
                        </Col>
                    </Row>
                    
                    <Row>
                        <Card className="text-center bg-secondary text-white my-5 py-4">
                            <Card.Body>
                                This is some text within a card body.
                                This is some text within a card body.
                            </Card.Body>
                        </Card>
                    </Row>

                    <Row>
                        <Col>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={`https://dummyimage.com/600x400/000/fff`} />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={`https://dummyimage.com/600x400/000/fff`} />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={`https://dummyimage.com/600x400/000/fff`} />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </main>

            <footer className='py-5 mt-5 bg-dark'>
                <Container className="px-4">
                    <p className='text-center text-white'>
                        Copyright &copy; Your website 2022
                    </p>
                </Container>
            </footer>
        </div>
    )
}
