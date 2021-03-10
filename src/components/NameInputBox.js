import '../App.css';
import {Input, Col, Button} from 'reactstrap';
import React from "react";

function NameInputBox() {
    return ([
            <div className={"inputBox"}>
                <Col sm={20}>
                    <Input style={{fontFamily: 'Montserrat', fontSize: '30px'}}
                           placeholder="Pet name"/>
                </Col>
            </div>
            , <div className={"adoptBtn"}>
                <Button style={{borderStyle: 'solid', fontFamily: 'Montserrat', fontSize: '28px'}}>Adopt</Button>
            </div>
        ]

    );
}

export default NameInputBox;
