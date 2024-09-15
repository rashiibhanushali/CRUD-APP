import React, { Component } from 'react';
import { rowData } from './appData';

const ProductContext = React.createContext();

class ProductProvider extends Component {
  state = {
    AllData: rowData,
    id : '',
    title : '',
    author : '',
    rating : '',
    updateEdit : []
  };

  getRecord = (id) => {
    const product = this.state.AllData.find(item => item.id === id);
    return product;
  }
  onEdit = (id) => {
    const tempProduct = this.state.AllData;
    const index = tempProduct.indexOf(this.getRecord(id));
    const selectedRecord = tempProduct[index];
    this.setState({
      id : selectedRecord['id'],
      title : selectedRecord['title'],
      author : selectedRecord['author'],
      price : selectedRecord['price'],
      rating : selectedRecord['rating']
    })
  }
  updateValue = (e, test) => {
    if(test === "title") {
      this.state.title = e.target.value;
    }
    if(test === "author") {
      this.state.author = e.target.value;
    }
    if(test === "price") {
      this.state.price = e.target.value;
    }
    if(test === "rating") {
      this.state.rating = e.target.value;
    }
    const tempArr = [this.state.id, this.state.title, this.state.author, this.state.price, this.state.rating];
    this.setState({
      updateEdit : tempArr
    })
  }
  onSave = (id) => {
    if(id!== '') {
      const savedRecord = this.state.AllData;
      const index = savedRecord.indexOf(this.getRecord(id));
      const Record = savedRecord[index];
      Record['title'] = this.state.updateEdit[1];
      Record['author'] = this.state.updateEdit[2];
      Record['price'] = this.state.updateEdit[3];
      Record['rating'] = this.state.updateEdit[4];
      this.setState({
        AllData : [...this.state.AllData],
        id : "", title : "", author : "", price : "", rating : ""
      })
    } else {
      const MaxId = Math.max(...this.state.AllData.map(item => item.id));
      const id = MaxId + 1;
      const newArr = [];
      newArr['title'] = this.state.updateEdit[1];
      newArr['author'] = this.state.updateEdit[2];
      newArr['price'] = this.state.updateEdit[3];
      newArr['rating'] = this.state.updateEdit[4];
      this.setState({
        AllData : [...this.state.AllData, newArr],
        id : "", title : "", author : "", price : "", rating : ""
      })
    }
  }
  onDelete = (id) => {
    const tempProduct = this.state.AllData.filter(item => item.id != id);
    this.setState({
      AllData : tempProduct
    })
  }
  render() {
    return (
      <ProductContext.Provider value={{ ...this.state, onEdit : this.onEdit, updateValue : this.updateValue, onSave : this.onSave, onDelete : this.onDelete}}>
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };

