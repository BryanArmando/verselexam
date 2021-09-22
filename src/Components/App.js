import logo from '../logo.svg';
import '../Styles/App.css';
import ConsejoRand from './ConsejoRand'
import buscador from './buscador'
import {Row, Col} from 'antd';
import { Form, Input, Button, Checkbox } from 'antd';
function App() {
  return (

    <div className="App">
        <Row>
            <Row>
            <Col span={12}>
            <ConsejoRand />
                <buscador />
            </Col>
            </Row>
            <Row className="buscador">
                <h1>Buscador de consejos</h1>
                {/* eslint-disable-next-line react/jsx-no-undef */}
                <Form.Item
                    label="Ingrese la palabra clave"
                    name="search"
                    rules={[
                        {
                            required: true,
                            message: "Ingresa la palabra clave ",
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                        Buscar
                    </Button>
                </Form.Item>
            </Row>

        </Row>

    </div>
  );
}

export default App;
