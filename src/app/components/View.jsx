import { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
export default function View() {
    const history = useNavigate();
    const [name, setName] = useState('');
    const [id, setId] = useState('');
    const [age, setAge] = useState('');
    
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
                        <Table striped bordered hover width={100}>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Age</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{id}</td>
                                    <td>{name}</td>
                                    <td>{age}</td>
                                </tr>
                            </tbody>
                        </Table>
                            <Button
                                variant="success"
                                type="button"
                                size='sm'
                                onClick={handleCanlcel}
                            >
                                Home
                            </Button>
                    </div>
                </div>
            </div>
      </div>
  );
}
