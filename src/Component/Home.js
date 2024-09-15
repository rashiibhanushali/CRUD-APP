import React, { Component } from 'react';
import { ProductConsumer } from '../Context';
import { Button, Table, Form } from 'react-bootstrap';
import './Home.css'; // Import custom CSS

export default class Home extends Component {
  render() {
    return (
      <div className="container mt-5">
        <h3 className="text-center mb-4">CRUD OPERATIONS</h3>
        <ProductConsumer>
          {(value) => {
            if (!value.AllData || !Array.isArray(value.AllData)) {
              return <p className="text-center">No data available</p>;
            }

            return (
              <div>
                <Table size="sm" variant="light" striped bordered hover responsive>
                  <thead>
                    <tr className="table-primary">
                      <th>Title</th>
                      <th>Author</th>
                      <th>Price</th>
                      <th>Rating</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <Form.Control 
                          type="text" 
                          value={value.title} 
                          onChange={(e) => value.updateValue(e, "title")} 
                          placeholder="Title"
                        />
                      </td>
                      <td>
                        <Form.Control 
                          type="text" 
                          value={value.author} 
                          onChange={(e) => value.updateValue(e, "author")} 
                          placeholder="Author"
                        />
                      </td>
                      <td>
                        <Form.Control 
                          type="number" 
                          value={value.price} 
                          onChange={(e) => value.updateValue(e, "price")} 
                          placeholder="Price"
                        />
                      </td>
                      <td>
                        <Form.Control 
                          type="number" 
                          value={value.rating} 
                          onChange={(e) => value.updateValue(e, "rating")} 
                          placeholder="Rating"
                        />
                      </td>
                      <td>
                        <Button 
                          size="sm" 
                          variant={value.id ? "success" : "primary"} 
                          onClick={() => value.onSave(value.id)}
                        >
                          {value.id ? "Save" : "Add"}
                        </Button>
                      </td>
                    </tr>
                    {value.AllData.map((product) => (
                      <tr key={product.id}>
                        <td>{product.title}</td>
                        <td>{product.author}</td>
                        <td>{product.price}</td>
                        <td>{product.rating}</td>
                        <td>
                          <Button 
                            size="sm" 
                            variant="warning" 
                            className="me-2" 
                            onClick={() => value.onEdit(product.id)}
                          >
                            Edit
                          </Button>
                          <Button 
                            size="sm" 
                            variant="danger" 
                            onClick={() => value.onDelete(product.id)}
                          >
                            Delete
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </div>
            );
          }}
        </ProductConsumer>
      </div>
    );
  }
}


