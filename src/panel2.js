import React from 'react'

const Panel2 = (props) => {
    if(props.flip){
        return (
            <div className="panel2">
                <div className="panel2-pics-box">
                    <div className="panel2-pic1" style={{backgroundImage:`url(${props.pic1})`}}></div>
                    <div className="panel2-pic2" style={{backgroundImage:`url(${props.pic2})`}}></div>
                </div>
                <div className="panel2-text-box">
                    <div className="panel2-title">{props.title}</div>
                    <div className="panel2-body">{props.body}</div>
                </div>
    
                
            </div>
        )
    }else{
        return (
            <div className="panel2">
                <div className="panel2-text-box">
                    <div className="panel2-title">{props.title}</div>
                    <div className="panel2-body">{props.body}</div>
                </div>
    
                <div className="panel2-pics-box">
                    <div className="panel2-pic1" style={{backgroundImage:`url(${props.pic1})`}}></div>
                    <div className="panel2-pic2" style={{backgroundImage:`url(${props.pic2})`}}></div>
                </div>
            </div>
        )
    }
    
}

export default Panel2
