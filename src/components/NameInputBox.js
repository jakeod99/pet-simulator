import '../App.css';
import { Input, Col, Button } from 'reactstrap';
import React from "react";

function NameInputBox(props) {
    const { petName } = props.getState();
    return ([
        <div className={"inputBox"} key="inputBox">
            <Col sm={20}>
                <Input 
                    style={{ fontFamily: 'Montserrat', fontSize: '30px' }}
                    placeholder="Pet name" 
                    value={petName} 
                    onChange={props.handler}/>
            </Col>
        </div>
        , <div className={"adoptBtn"} key="adoptBtn">
            <Button 
                style={{ borderStyle: 'solid', fontFamily: 'Montserrat', fontSize: '28px' }}
                disabled={petName.length === 0}
                onClick={props.submitHandler}>
                    Adopt
            </Button>
        </div>
    ]

    );
}

export default NameInputBox;
