import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

function Contact() {
    return (
        <div className=" contactForm py-5">
            <div className="container text-center">
                <h2 className="mb-4 text-white">Contact</h2>

                <Form>
                    <Row>
                        <Col className="mb-3">
                            <Form.Control type="text" placeholder="Your Name" required />
                        </Col>
                        <Col className="mb-3">
                            <Form.Control type="email" placeholder="Your Email" required />
                        </Col>
                    </Row>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Control as="textarea" rows={5} placeholder="Your Message" />
                    </Form.Group>
                    <Button variant="primary" type="submit">Send Message</Button>
                </Form>
                
            </div>
        </div>
    )
}
export default Contact;