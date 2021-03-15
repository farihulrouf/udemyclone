import React, { useState } from 'react'
import Logo from '../ui/logo-coral.svg'
function Sidebar(){

    const [nav, setNav] = useState([
        { label: "Home", slug: "/", icon: "icon-home" },
        { label: "Discover", slug: "discover", icon: "icon-list2" },
        { label: "Categories", slug: "categories", icon: "icon-price-tag" },
        { label: "My Courses", slug: "my courses", icon: "icon-briefcase" },      
    ])

    const [currentPage, setCurrentPage] = useState("/")

    const navigation = [];

    for(let i=0; i< nav.length; i++) {
        navigation.push(
            <li key={"nav" + i + " " + nav[i].slug}>
                    <a href={nav[i].slug} className={"aic link noul flex c333" + (currentPage == nav[i].slug ? " on" : "")}>
                        <div className={"ico s24" + " " +nav[i].icon } />
                        <h2 className="bl s24">{nav[i].label}</h2>
                    </a>
            </li>
        )
    }

    return (
        <div className="sidebar fixed">
            <a href="/#" className="logo bl">
              <img src={Logo} alt="" className="bl" />
            </a>

            <ul className="nav">
                {navigation}
            </ul>

            <div className="updated-course flex aic">
                <div className="icon-lightbulb ico cfff s24" />

                <div className="lbl fontb c333">
                    Updated Courses
                    <h2 className="author s13 c777">By Farihul Rouf</h2>
                </div>
            </div>

            <div className="stats aic flex">
                <div className="stats-box flex">
                    
                        <div className="ico ico-points s24 icon-shield" />
                        <h2 className="val s15 c333 fontb">1800</h2>
                        <h2 className="lbl s13 c777">points well</h2>
                    
                </div>

                <div className="stats-box flex">
                    <div className="ico ico-battery s24 icon-battery-empty" />
                    <h2 className="val s15 fontb">45.3 %</h2>
                    <h2 className="lbl s13 c777">compelete</h2>
                </div>
            </div>

            <div className="me flex">
                <div className="photo cfff s24">
                    <img src="https://placeimg.com/100/100/people" className="bl" />
                </div>
                <div className="lbl s15 fontb c333">
                   Farihul Rouf
                   <h2 className="uname s13 c777">@farihulrouf</h2>
                </div>
            </div>

        </div>
    )

}

export default Sidebar;