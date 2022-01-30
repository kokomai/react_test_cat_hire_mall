import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function Detail(props) {
    let navigate = useNavigate();
    let { id } = useParams();
    console.log(props);
    const searchItem = function(id) {
        let list = props.item;
        let result = {};
        console.log(list);
        
        for(let item of list) {
           if(item.id === Math.round(id)) {
               result = item;
               break;
           } 
        }
        return result;
    }

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img src={ `/cat${searchItem(id).id}.jpeg` } width="100%"></img>
          </div>
          <div className="col-md-6">
            <h4 className="col-md-6 mt-4">{searchItem(id).title}</h4>
            <p>{searchItem(id).content}</p>
            <p>{searchItem(id).price}</p>
            <button className="btn btn-danger">고용하기</button>
            <button className="btn btn-primary" onClick={ ()=>{ navigate(-1) } }>뒤로가기</button>
          </div>
        </div>
      </div>
    )
}

export {Detail}