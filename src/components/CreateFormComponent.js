import React, { Component } from 'react'; 
import { Button, Label,  Col, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import { LocalForm, Errors, Control } from 'react-redux-form';

class CreateForm extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
       console.log(props)
    }

    handleSubmit(values) {
        if (values.src != undefined) {
            console.log(values.src)
            this.props.setBannerSrc(values.src);
        }
        if(values.text != undefined) {
            this.props.setBannerText(values.text);
        }
        if(values.color != undefined) {
            this.props.setBannerColor(values.color);
        } 
        if (values.link != undefined) {
            this.props.setBannerLink(values.link);
        }
        
        
    }

    render () {
        return (
            <div className="flex">
                <div className="col-10 col-md-8">
                    <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                        <Row className="form-group" >
                            {/* <Label htmlFor="src" md={2}>Last Name</Label> */}
                            <Col md={10}>
                                <Control.text model=".src" id="src" name="src"
                                    placeholder="Ссылка на изображение товара" 
                                    className="form-control"
                                        />
                                
                            </Col>
                        </Row>
                        <Row className="form-group" >
                            {/* <Label htmlFor="src" md={2}>Last Name</Label> */}
                            <Col md={10}>
                                <Control.text model=".text" id="text" name="text"
                                    placeholder="Подпись под товаром" 
                                    className="form-control"
                                        />
                                
                            </Col>
                        </Row>
                        <Row className="form-group" >
                            {/* <Label htmlFor="src" md={2}>Last Name</Label> */}
                            <Col md={10}>
                                <Control.text model=".color" id="color" name="color"
                                    placeholder="Цвет фона на карточке" 
                                    className="form-control"
                                        />
                                
                            </Col>
                        </Row>
                        <Row className="form-group" >
                            {/* <Label htmlFor="src" md={2}>Last Name</Label> */}
                            <Col md={10}>
                                <Control.text model=".link" id="link" name="link"
                                    placeholder="Ссылка при клике на карточку" 
                                    className="form-control"
                                        />
                                
                            </Col>
                        </Row>
                        <Row className="form-group">
                                <Col md={{size:10, offset:0}}>
                                    <Button type="submit" color="primary">
                                        Сгенерировать карточку
                                    </Button>
                                </Col>
                            </Row>
                    </LocalForm>
                </div>
            </div>
        );
    }

}

export default CreateForm;