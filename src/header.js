import React, {useState, useEffect} from 'react'

const Header = () => {
    const [hover, setHover] = useState(null)
    return (
        <div className="header">
            <h1 className="title">DISCO <br/> BOOTH</h1>
            <div className="links">
                <div className="link" onMouseEnter={()=>setHover('home')} onMouseLeave={()=>setHover(null)}>Home <div className={hover==='home'?"line":'hide-line'}></div></div>
                <div className="link" onMouseEnter={()=>setHover('book')} onMouseLeave={()=>setHover(null)}>Book <div className={hover==='book'?"line":'hide-line'}></div></div>
                <div className="link" onMouseEnter={()=>setHover('info')} onMouseLeave={()=>setHover(null)}>Info <div className={hover==='info'?"line":'hide-line'}></div></div>
            </div>
            <h1 className="title"></h1>
            


        </div>
    )
}

export default Header
