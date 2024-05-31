import { Button, Table } from 'react-bootstrap';
import { useNavigate, Link } from 'react-router-dom';
import dataList from '../dataList';

export default function Home() {
    const history = useNavigate();
    const handleEdit = (id, name, age) => {
        localStorage.setItem('id', id);
        localStorage.setItem('name', name);
        localStorage.setItem('age', age);
    }
    const handleView = (id, name, age) => {
        localStorage.setItem('id', id);
        localStorage.setItem('name', name);
        localStorage.setItem('age', age);
    }
    const handleDelete = (id) => {
        // const index = dataList.list.map((e) => {
        //     return e.id;
        // }).indexOf(id);
        const index = dataList.list.find(d => d.id);
        // const index = dataList.list.findIndex(d => d.id);
        dataList.list.splice(index, 1);
        history('/home');
    }
  return (
    <div className='row my-3'>
        <div className='col-md-12'>
            <Table striped bordered hover width={100}>
                  <thead>
                      <tr>
                          <th>ID</th>
                          <th>Name</th>
                          <th>Age</th>
                          <th>Action</th>
                      </tr>
                  </thead>
                  <tbody>
                      {dataList.list.map((lists) => {
                        return(
                            <tr key={lists.id}>
                                <td>{lists.id}</td>
                                <td>{lists.Name}</td>
                                <td>{lists.Age}</td>
                                <td>
                                    <Link to="/edit">
                                        <Button
                                            variant="primary"
                                            size='sm'
                                            onClick={()=>handleEdit(lists.id, lists.Name, lists.Age)}
                                        >
                                            EDIT
                                        </Button>
                                    </Link>
                                    &nbsp;
                                    <Button
                                        variant='danger'
                                        size='sm'
                                        onClick={()=>handleDelete(lists.id)}
                                    >
                                        DELETE
                                    </Button>
                                    &nbsp;
                                    <Link to='/view'>
                                    <Button
                                        variant='success'
                                        size='sm'
                                        onClick={()=>handleView(lists.id, lists.Name, lists.Age)}
                                    >
                                        VIEW
                                        </Button>
                                    </Link>
                                </td>
                            </tr>
                        )
                        })}
                  </tbody>
              </Table>
              <Link to="/create">
                  <Button variant='primary'>Create</Button>
              </Link>
        </div>
    </div>
  )
}
