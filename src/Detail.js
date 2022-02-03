import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import './Detail.scss'
let BOX = styled.div`
  padding :20px;
`;

let TITLE = styled.h4`
  font-size : 25px;
  color : ${ props => props.color }
`;

function Detail(props) {
    const navigate = useNavigate();
    const { id } = useParams();
    const [itemObj, setItemObj] = useState({}); 
    console.log(props);

    const searchItem = function() {
        let list = props.item;
        let result = {};
        console.log(list);
        for(let item of list) {
           if(item.id === Math.round(id)) {
               result = item;
               break;
           } 
        }
        setItemObj(result);
    }
    useEffect(()=> {
      searchItem();
    }) 

    return (
      <div className="container">
        <BOX>
          <TITLE className="gray">DETAIL PAGE</TITLE>
        </BOX>
        <div className='my-alert'>
          <p>이 고양이는 언제 도망갈지 모릅니다.. 빨리 고용하세요!</p>
        </div>
        <div className="row">
          <div className="col-md-6">
            <img src={ `/cat${itemObj.id}.jpeg` } width="100%"></img>
          </div>
          <div className="col-md-6">
            <h4 className="col-md-6 mt-4">{itemObj.title}</h4>
            <p>{itemObj.content}</p>
            <p>{itemObj.price}</p>
            <button className="btn btn-danger">고용하기</button>
            <button className="btn btn-primary" onClick={ ()=>{ navigate(-1) } }>뒤로가기</button>
          </div>
        </div>
      </div>
    )
}

export {Detail}