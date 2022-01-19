/* eslint-disable */

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav} from 'react-bootstrap';
import { Component, useState } from 'react';
import { itemData } from './data'

function App() {
  let [items, itemsCh] = useState(itemData);

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="#home">떼껄룩 고용 사이트</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
        </Container>
      </Navbar>
      <div className="bg-dark p-5 rounded-lg m-3 bg-photo">
        <h1 className="display-4 text-light">놀라운 떼껄룩 고용 사이트 </h1>
        <p className="lead text-light">정말 데단해~!</p>
        <hr className="my-4"/>
        <p className='text-warning'>문의사항 : 문의못함 ㅋ</p>
        <a className="btn btn-info btn-lg" href="#" role="button">이벤트 같은거 보기</a>
      </div>
      
      <div className="container">
        <div className="row">
          {
            items.map((obj, idx) => {
              return <Item key={ idx } item={ obj }/>
            })  
          }
        </div>
      </div>
    </div>
  );
}

function Item(props) {
  return (
    <div className="col-md-4">
      <img alt="상품이미지" src={"/cat" + props.item.id + ".jpeg"} width={"100%"}></img>
      <h4>상품명: {props.item.title} (고용번호: {props.item['id']})</h4>
      <p>상품설명: {props.item['content']}</p>
      <p>가격: {props.item['price']}</p>
    </div>
  );
}

export default App;