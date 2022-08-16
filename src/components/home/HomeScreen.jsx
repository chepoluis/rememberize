import { Card, Col, Container, Image, Row } from "react-bootstrap";
import { gameImages } from "../../helpers/gameImages";

export const HomeScreen = () => {
    return (
        <div>
            <main>
                <Container>
                    <Row className="px-4 my-5">
                        <Col sm={7}>
                            <Image
                                style={{ width: '350px' }}
                                src={gameImages('./words2.png')}
                                fluid
                                rounded
                            />
                        </Col>
                        <Col sm={5}>
                            <h1 className="font-weight-light">Rememberize</h1>

                            <p className='mt-4'>
                                Memorizing English words may seem like a difficult challenge for English language learners. However, it doesn't necessarily have to be.
                            </p>
                            
                        </Col>
                    </Row>
                    
                    <Row>
                        <Card className="text-center bg-secondary text-white my-5 py-4">
                            <Card.Body>
                                Tips to learn vocabulary
                            </Card.Body>
                        </Card>
                    </Row>

                    <Row>
                        <Col>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={gameImages('./words.png')} />
                                <Card.Body>
                                    <Card.Text>
                                        Our brains do well with repetition. Make cards with the names of objects in your home and stick them on them. Each time you see them, pronounce them out loud; this will also promote auditory memory. 
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={gameImages('./remember.png')} />
                                <Card.Body>
                                    <Card.Text>
                                        Search the Internet for English song lyrics that you like and learn them. It doesn't matter if you don't understand all the words at first, this is a good trick for memorizing English words; plus, you'll be able to learn the song too!
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={gameImages('./good.png')} />
                                <Card.Body>
                                    <Card.Text>
                                        Read about topics that interest you and watch videos, series or movies. You will discover that in a short time you have not only been able to fix new terms, but also to improve your listening and learn uses you did not know. 
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </main>

            <footer className='py-5 mt-5 color-navbar'>
                <Container className="px-4">
                    <p className='text-center text-black'>
                        Copyright &copy; Rememberize 2022
                    </p>
                </Container>
            </footer>
        </div>
    )
}
