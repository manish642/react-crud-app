import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import dataList from '../dataList';
import { v4 as uuidv4 } from 'uuid';

export default function Create() {
    const history = useNavigate();
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const handleFormSubmit = (e) => {
        e.preventDefault();
        const uid = uuidv4();
        const id = uid.slice(0, 8);
        dataList.list.push({ id: id, name: name, age: age });
        history('/home');
    }
    const handleCanlcel = () => {
        history('/home');
    }
    return (
      <div className='row justify-content-center my-4'>
            <div className='col-md-6'>
                <div className="card">
                    <div className="cardBody p-4">
                        <Form>
                            <Form.Group className="mb-3" controlId="name">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" placeholder="Name" required onChange={(e)=>setName(e.target.value)} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="age">
                                <Form.Label>Age</Form.Label>
                                <Form.Control type="number" placeholder="Age" required onChange={(e)=>setAge(e.target.value)} />
                            </Form.Group>
                            <Button
                                variant="primary"
                                type="submit"
                                size='sm'
                                onClick={(e)=>handleFormSubmit(e)}
                            >
                                Submit
                            </Button>&nbsp;
                            <Button
                                variant="success"
                                type="button"
                                size='sm'
                                onClick={handleCanlcel}
                            >
                                Cancel
                            </Button>
                        </Form>
                    </div>
                </div>
            </div>
      </div>
  );
}
