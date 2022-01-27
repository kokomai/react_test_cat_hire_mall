/* eslint-disable */

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav} from 'react-bootstrap';
import { Component, useEffect, useState } from 'react';
// import { itemData } from './data';
import { Link, Routes, Route } from 'react-router-dom';
import { Detail } from './Detail';
import axios from 'axios';

function App() {
  let [items, itemsCh] = useState({});
  
  // axios 호출시 useEffect 사용
  useEffect(() => {
    axios
      .get("/hello", {})
      .then(({ data }) => {
        itemsCh(data.test);
      });
  }, []);

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="/">떼껄룩 고용 사이트</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/detail">Detail</Nav.Link>
          <Nav.Link href="/others">Others</Nav.Link>
        </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" 
          element=
          { 
            <div className="container">
              <div className="bg-dark p-5 rounded-lg m-3 bg-photo">
                <h1 className="display-4 text-light">놀라운 떼껄룩 고용 사이트 </h1>
                <p className="lead text-light">정말 데단해~!</p>
                <hr className="my-4"/>
                <p className='text-warning'>문의사항 : 문의못함 ㅋ</p>
                <a className="btn btn-info btn-lg" href="#" role="button">이벤트 같은거 보기</a>
              </div>
              <div className="row">
                {
                  items.map
                  ? items.map((obj, idx) => {
                      return <Item key={ idx } item={ obj }/>
                    })
                  : <div>닝겐, 아쉽지만 지금 노는 껄룩이가 없다네..</div>  
                }
              </div>
            </div>
          }>
        </Route>
        
        <Route path="/detail/:id" 
          element=
          { 
             <Detail item={items}></Detail>
          }>
        </Route>
      </Routes>
    </div>
  );
}

function Item(props) {
  return (
    <div className="col-md-4">
      <img alt="상품이미지" src={`/cat${props.item.id}.jpeg`} width={"100%"}></img>
      <h4>상품명: {props.item.title} (고용번호: {props.item['id']})</h4>
      <p>상품설명: {props.item['content']}</p>
      <p>가격: {props.item['price']}</p>
    </div>
  );
}

export default App;