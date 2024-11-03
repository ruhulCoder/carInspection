import React from 'react'
import { Button, Modal, Form, Input, message, Steps, DatePicker, Checkbox, Col, Row } from 'antd'
import { useState } from 'react'


const steps = [
    {
      title: 'Contact Information',
    },
    {
      title: 'Inspection Date & Service',
    },
    {
      title: 'Vehicle Details',
    },
  ];

  const { TextArea } = Input;
  
  const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY'];


const ReqInd = () => {

    const [modalOpen, setModalOpen] = useState(false);
    const handleCancel = () => {setModalOpen(false)};

    const [current, setCurrent] = useState(0);
    const next = () => {
      setCurrent(current + 1);
    };
    const prev = () => {
      setCurrent(current - 1);
    };
    const items = steps.map((item) => ({
      key: item.title,
      title: item.title,
    }));

    const onChange = (checkedValues) => {
        console.log('checked = ', checkedValues);
      };

    const ReactFunctional = () =>{
        return(
            <>
                <Form>
                    <Form.Item>
                        <Form.Item
                            style={{
                            display: 'inline-block',
                            width: 'calc(50% - 8px)',
                            }}
                        >
                            <Input placeholder="Full Name" />
                        </Form.Item>
                        <Form.Item
                            style={{
                            display: 'inline-block',
                            width: 'calc(50% - 8px)',
                            margin: '0 8px',
                            }}
                        >
                            <Input placeholder="Phone Number" />
                        </Form.Item>
                        <Form.Item
                            style={{
                            display: 'inline-block',
                            width: 'calc(50% - 8px)',
                            }}
                        >
                            <Input placeholder="Email"/>
                        </Form.Item>
                        <Form.Item
                            style={{
                            display: 'inline-block',
                            width: 'calc(50% - 8px)',
                            margin: '0 8px',
                            }}
                        >
                            <Input placeholder="Postal Code"/>
                        </Form.Item>
                    </Form.Item>
                </Form>
            </>
        )
    }

    const ReactForm1 = () => {
        return (
            <>
                <Form>
                    <Form.Item>
                        <Checkbox.Group
                        onChange={onChange}
                        >
                            <Col>
                                <Row>
                                    <Col>
                                        <h4>On what day(s) are you available?</h4>
                                        <Col style={{ marginTop: 10 }}>
                                        <DatePicker format={dateFormatList} style={{width: '290%'}} />
                                        </Col>
                                        <label>*Services is available from Monday-Friday</label>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col style={{marginLeft: 50, marginTop: 10}}>
                                        <h4>Preferred Time</h4>
                                        <Col >
                                        <Checkbox value="a1">Early Morning | 7:30am-10am</Checkbox>
                                        </Col>
                                        <Col >
                                        <Checkbox value="b1">Late Morning | 10am-noon</Checkbox>
                                        </Col>
                                        <Col >
                                        <Checkbox value="c1">Afternoon | noon-4pm</Checkbox>
                                        </Col>
                                    </Col>
                                    <Col style={{marginLeft: 200, marginTop: 10}}>
                                        <h4>2nd Preferred Time (if needed)</h4>
                                        <Col >
                                        <Checkbox value="a2">Early Morning | 7:30am-10am</Checkbox>
                                        </Col>
                                        <Col >
                                        <Checkbox value="b2">Late Morning | 10am-noon</Checkbox>
                                        </Col>
                                        <Col >
                                        <Checkbox value="c2">Afternoon | noon-4pm</Checkbox>
                                        </Col>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col style={{marginTop: 10}}>
                                        <h4>What kind of inspection do you need? </h4>
                                        <Col style={{marginLeft: 50}}>
                                        <Checkbox value="d1">Safety Inspection - $150</Checkbox>
                                        <Checkbox value="d2" style={{marginLeft: 233}}>Pre-Purchase Inspection - $250</Checkbox>
                                        </Col>
                                    </Col>
                                </Row>
                                    <h4 style={{marginTop: 10}}>Do you need any additional service?</h4>
                                <Row>
                                    <Col style={{marginLeft: 50, marginTop: 10}}>
                                        <h4>Seasonal Tire Change:</h4>
                                        <Col >
                                            <Checkbox value="e1">Standard Vehicles | On Rims - $50</Checkbox>
                                        </Col>
                                        <Col >
                                            <Checkbox value="f1">Standard Vehicles | Off Rims (Install & Balance) - $100</Checkbox>
                                        </Col>
                                        <Col >
                                            <Checkbox value="g1">Truck & HD Tires | On Rims - $60</Checkbox>
                                        </Col>
                                        <Col >
                                            <Checkbox value="h1">Truck & HD Tires | Off Rims (Install & Balance) - $120</Checkbox>
                                        </Col>
                                    </Col>
                                    <Col style={{marginLeft: 50, marginTop: 10}}>
                                        <h4>Oil Filter Change:</h4>
                                        <Col >
                                            <Checkbox value="i2">Conventional - $60</Checkbox>
                                        </Col>
                                        <Col >
                                            <Checkbox value="j2">Semi Synthetic - $80</Checkbox>
                                        </Col>
                                        <Col >
                                            <Checkbox value="k2">Full Synthetic - $100</Checkbox>
                                        </Col>
                                        <label>*(Maximum of 5.5 litres): Additional oil extra<br/>(Conventional $7.50/litre, Semi Synthetic<br/>$12.00/litre, Full Synthetic $15.00/litre)</label>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <h4>Don't have time? Request our Concierge Service</h4>
                                        <Col style={{marginBottom: 10}}>
                                            <Checkbox value="l1">Concierge Service - $100</Checkbox>
                                        </Col>
                                        <label>We will pick up & drop off your car. This service can be requested for any of the above services (e.g., safety inspection, oil change).</label>
                                    </Col>
                                </Row>
                            </Col>
                        </Checkbox.Group>
                    </Form.Item>
                </Form>
            </>
        )
    }

    const ReactForm2 = () => {
        return (
            <>
                <Form>
                    <Form.Item>
                        <Form.Item
                            style={{
                            display: 'inline-block',
                            width: 'calc(50% - 8px)',
                            }}
                        >
                            <Input placeholder="VIN" />
                        </Form.Item>
                        <Form.Item
                            style={{
                            display: 'inline-block',
                            width: 'calc(50% - 8px)',
                            margin: '0 8px',
                            }}
                        >
                            <Input placeholder="Year" />
                        </Form.Item>
                        <Form.Item
                            style={{
                            display: 'inline-block',
                            width: 'calc(50% - 8px)',
                            }}
                        >
                            <Input placeholder="Make e.g. Honda"/>
                        </Form.Item>
                        <Form.Item
                            style={{
                            display: 'inline-block',
                            width: 'calc(50% - 8px)',
                            margin: '0 8px',
                            }}
                        >
                            <Input placeholder="Model e.g. Civic" />
                        </Form.Item>
                        <Form.Item
                            style={{
                            width: 'calc(100% - 8px)',
                            margin: '0',
                            }}
                        >
                            <TextArea rows={4} placeholder="Comments"/>
                        </Form.Item>
                    </Form.Item>
                </Form>
            </>
        )
    }

  return (
    <>
        <Button type="button" onClick={() => setModalOpen(true)} className='reqind'>Request Inspection - Individuals</Button>
        <Modal 
            centered
            open={modalOpen}
            onCancel={handleCancel}
            width={800}
            >
                <label className='formtitle'>Inspection Request Form</label>
                <br/>
                <label>Complete the form below to send a booking request to our team. We will get back to you shortly.</label>
                <br/>
                <br/>
            
            <Steps current={current} items={items} />
            <div
                style={{
                marginTop: 20,
                }}
            >
                {current === 0 ? <ReactFunctional/> : (current === 1 ? <ReactForm1/> : <ReactForm2/>)}

                {current < steps.length - 1 && (
                <Button type="primary" onClick={() => next()}
                style={{marginTop: 10}}
                >
                    Next
                </Button>
                )}
                {current === steps.length - 1 && (
                <Button type="primary" onClick={() => message.success('Processing complete!')} htmlType="submit">
                    Submit
                </Button>
                )}
                {current > 0 && (
                <Button
                    style={{
                    margin: '0 8px',
                    }}
                    onClick={() => prev()}
                >
                    Previous
                </Button>
                )}
            </div>
        </Modal>
    </>
  )
}

export default ReqInd