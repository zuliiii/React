import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../src/sass/style.scss'
import '../node_modules/bootstrap/scss/bootstrap.scss'
import { BrowserRouter, Route, Link } from 'react-router-dom'
// import salad from './imgs/salad.png'


const Nav = () => (
    <>
  
 < header>
 
            <div className="container-fluid">
                <div className="row">
                <div className="col-md-3">
                    <img src="https://hn.arrowpress.net/lusion/wp-content/uploads/2020/10/Logo1-1.png.webp" alt="" />
                </div>
                <div className="col-md-6">
                <ul >
                    <li >
                        <Link exact to="/" activeClassName="active" className="alink">Home </Link>
                    </li>
                    <li>
                        <Link to="/vegetable" activeClassName="active" className="alink">Vegetable </Link>
                    </li>
                    <li >
                        <Link to="/Fruits" activeClassName="active" className="alink">Fruits </Link>
                    </li>
                    <li >
                        <Link exact to="/OrganicBox" activeClassName="active" className="alink">Organic Box </Link>
                    </li>
                    <li>
                        <Link to="/DailyProduct" activeClassName="active" className="alink">Daily Product </Link>
                    </li>
                    <li >
                        <Link to="/Blog" activeClassName="active" className="alink">Blog </Link>
                    </li>
                    <li >
                        <Link to="/ContactUs" activeClassName="active" className="alink">Contact Us </Link>
                    </li>
                </ul>
                </div>
                <div className="col-md-3 ikon">
                    <i class="fas fa-search"></i>
                    <i class="far fa-user"></i>
                    <i class="far fa-heart"></i>
                    <i class="fas fa-shopping-basket"></i>
                    </div>
            </div></div>
        </header>

    </>
)




const HomePage = () => (
    <>
       <section className="page1">
           <div className="row">
               <div className="col-md-6 org">
                   <h1>ORGANIC</h1>
                   <h5>food</h5><br></br>
                   <p>Bring health to your home in a couple of clicks.<br></br> Buy organic food right from farmers.</p>
                   <button type="button" className="btn btn-outline-success">View all products</button>
               </div>
               <div className="col-md-6">
                   <div className="circle"></div>
                   <div className="dash_circle"></div>
               <img src="https://hn.arrowpress.net/lusion/wp-content/uploads/revslider/home-organic/salad-fresh-vegetable-salad-8LXZJEU.png.webp" alt="" />
               <img src="https://hn.arrowpress.net/lusion/wp-content/uploads/revslider/home-organic/leaf.png.webp" alt=""  className="ot1"/>
               <img src="https://hn.arrowpress.net/lusion/wp-content/uploads/revslider/home-organic/leaf2.png.webp" alt="" className="ot2" />
               </div>
           </div>

       </section>

    </>
)

const VegetablePage = () => (
    <>
        <div>VegetablePage</div>
    </>
)

const AboutPage = () => (
    <>
      <div>AboutPage</div>
    </>
)


const App = () => (
    <BrowserRouter>
        <Nav />
        <Route exact path="/" component={HomePage}></Route>
        <Route path="/vegetable" component={VegetablePage}></Route>
        <Route path="/about" component={AboutPage}></Route>


    </BrowserRouter>
)






ReactDOM.render(<App />, document.getElementById('root'));