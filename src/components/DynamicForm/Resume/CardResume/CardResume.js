import { Card } from "react-bootstrap";
import "./CardResume.css";

export default function CardResume (props) {
    const {title, subtitle, text} = props

    return(
        <Card className="text-center p2 card-resume">
            <Card.Body>
                <Card.Subtitle>
                    <b>{subtitle}</b>
                </Card.Subtitle>
                <Card.Title>{title && title}</Card.Title>
                <Card.Text>{text}</Card.Text>
            </Card.Body>
        </Card>

    );   
}
