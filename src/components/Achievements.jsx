import Card from 'react-bootstrap/Card';
import { FaTrophy } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import { FaCrown } from "react-icons/fa6";

function Achievements() {
    return (
        <div className="container py-5">
            <h2 className="text-center mb-4">Achievements</h2>
            <div className="row">

                <div className="col-md-4">
                    <Card className="p-4 shadow-sm rounded border-0">
                        <Card.Body className="text-center">
                            <Card.Title><FaTrophy className="achievementIcons text-warning" /></Card.Title>
                            <Card.Title><h4 className="mt-3">5 Ballon d'Or</h4></Card.Title>
                            <Card.Text><p>Awarded for his outstanding football career.</p></Card.Text>
                        </Card.Body>
                    </Card>
                </div>

                <div className="col-md-4">
                    <Card className="p-4 shadow-sm rounded border border-0">
                        <Card.Body className="text-center">
                            <Card.Title><FaStar className="achievementIcons text-primary" /></Card.Title>
                            <Card.Title><h4 className="mt-3">UEFA Champions League</h4></Card.Title>
                            <Card.Text><p>Won 5 UEFA Champions League titles.</p></Card.Text>
                        </Card.Body>
                    </Card>
                </div>

                <div className="col-md-4">
                    <Card className="p-4 shadow-sm rounded border border-0">
                        <Card.Body className="text-center">
                            <Card.Title><FaCrown className="achievementIcons text-success" /></Card.Title>
                            <Card.Title><h4 className="mt-3">European Champion</h4></Card.Title>
                            <Card.Text><p>Led Portugal to victory in Euro 2016.</p></Card.Text>
                        </Card.Body>
                    </Card>
                </div>

            </div>
        </div>
    )
}
export default Achievements;