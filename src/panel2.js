import React from 'react'
import { InView } from 'react-intersection-observer'

const Panel2 = (props) => {
    if(props.flip){
        return (
            <InView threshold='.8'>
                {({ inView, ref, entry }) => (
                    <div className={`panel2 ${inView?'slide-in':'slide-out'}`} ref={ref}>
                        <div className="panel2-pics-box">
                            <div className="panel2-pic1" style={{backgroundImage:`url(${props.pic1})`}}></div>
                            <div className="panel2-pic2" style={{backgroundImage:`url(${props.pic2})`}}></div>
                        </div>
                        
                        <div className="panel2-text-box">
                            <div className="panel2-title">{props.title}</div>
                            <div className="panel2-body">{props.body}</div>
                        </div>
        
                    
                    </div>
                )}
            </InView>
            
        )
    }else{
        return (
            <InView threshold='.2'>
                {({ inView, ref, entry }) => (
                    <div className={`panel2 ${inView?'slide-in':'slide-out'}`} ref={ref}>
                        <div className="panel2-text-box">
                            <div className="panel2-title">{props.title}</div>
                            <div className="panel2-body">{props.body}</div>
                        </div>
                        
                        <div className="panel2-pics-box">
                            <div className="panel2-pic1" style={{backgroundImage:`url(${props.pic1})`}}></div>
                            <div className="panel2-pic2" style={{backgroundImage:`url(${props.pic2})`}}></div>
                        </div>
                        
                        
        
                    
                    </div>
                )}
            </InView>
        )
    }
    
}

export default Panel2
