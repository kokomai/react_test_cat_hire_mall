/* eslint-disable */

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Component, useContext, useEffect, useState } from 'react';
// import { itemData } from './data';
import { useNavigate, Routes, Route } from 'react-router-dom';
import { Detail } from './Detail';
import axios from 'axios';
import React from 'react';

export const amountContext = React.createContext();

function App() {
  const [items, setItems] = useState([]);
  let [amount, setAmount] = useState([10, 11, 12]);

  // axios 호출시 useEffect 사용
  useEffect(() => {
    let isFirst = true;

    async function getItems() {
      let res = await axios.get("/hello");
      setItems(res.data.test);
    }
    if(isFirst) {
      getItems();
    }
    return () => {
      isFirst = false;
    }
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
      <amountContext.Provider value={amount}>
        <Routes>
          <Route path="/"
            element=
            {
              <div className="container">
                <div className="bg-dark p-5 rounded-lg m-3 bg-photo">
                  <h1 className="display-4 text-light">놀라운 떼껄룩 고용 사이트 </h1>
                  <p className="lead text-light">정말 데단해~!</p>
                  <hr className="my-4" />
                  <p className='text-warning'>문의사항 : 문의못함 ㅋ</p>
                  <a className="btn btn-info btn-lg" href="#" role="button">이벤트 같은거 보기</a>
                </div>
                <amountContext.Provider value={amount}>
                    <div className="row">
                      {
                        items.length !== 0
                          ? items.map((obj, idx) => {
                            return <Item key={idx} item={obj}/>
                          })
                          : <div>닝겐, 아쉽지만 지금 노는 껄룩이가 없다네..</div>
                      }
                    </div>
                  </amountContext.Provider>
                
              </div>
            }>
          </Route>
            <Route path="/detail/:id"
              element=
              {
                  <Detail item={items} setAmount={setAmount}/>
              }>
            </Route>
        </Routes>
      </amountContext.Provider>
    </div>
  );
}

function Item(props) {
  const navigate = useNavigate();
  let innerAmount = useContext(amountContext);
  
  const clickItem = function(idx) {
    navigate('/detail/' + idx);
  }

  return (
    <div className="col-md-4" onClick={ (idx)=>{clickItem(props.item.id)} }>
      <img alt="상품이미지" src={`/cat${props.item.id}.jpeg`} width={"100%"}></img>
      <h4>상품명: {props.item.title} (고용번호: {props.item['id']})</h4>
      <p>상품설명: {props.item['content']}</p>
      <p>가격: {props.item['price']}</p>
      {innerAmount}
    </div>
  );
}
  
export default App;
