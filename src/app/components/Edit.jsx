import { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import dataList from '../dataList';

export default function Edit() {
    const history = useNavigate();
    const [name, setName] = useState('');
    const [id, setId] = useState('');
    const [age, setAge] = useState('');
    const index = dataList.list.find((d) => d.id);
    
    const handleFormSubmit = (e) => {
        e.preventDefault();
        index.Name = name;
        index.Age = age;
        history('/home');
    }
    useEffect(()=>{       
        setId(localStorage.getItem('id'));
        setName(localStorage.getItem('name'));
        setAge(localStorage.getItem('age'));
    }, []);
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
                                <Form.Control type="text" placeholder="Name" value={name} required onChange={(e)=>setName(e.target.value)} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="age">
                                <Form.Label>Age</Form.Label>
                                <Form.Control type="number" placeholder="Age" value={age} required onChange={(e)=>setAge(e.target.value)} />
                            </Form.Group>
                            <Button
                                variant="primary"
                                type="submit"
                                size='sm'
                                onClick={(e)=>handleFormSubmit(e)}
                            >
                                Update
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
