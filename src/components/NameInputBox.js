import '../App.css';
import {Input, Col, Button} from 'reactstrap';

function NameInputBox() {
    return (
        <div className={"container"}>
            <div className={"inputBox"}>
                <Col sm={7}>
                    <div style={{borderStyle: 'solid'}}>
                        <Input style={{borderStyle: 'solid', fontFamily: 'Montserrat', fontSize: '30px'}}
                               placeholder="Pet name"/>
                    </div>
                </Col>,
                <Button style={{borderStyle: 'solid'}} className={"adoptBtn"}>Adopt</Button>
            </div>

        </div>
    );
}

export default NameInputBox;
