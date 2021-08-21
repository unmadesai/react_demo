import React from 'react';

import ReactDOM from 'react-dom';
import WorryCertainty from './WorryCertainty.js';

import App from "./App";
//import registerServiceWorker from "./registerServiceWorker";

import ApexCharts from 'apexcharts';

import ApexChart from './App.js';
import SymptomIntensity from './SymptomIntensity.js';
import WorryIntensity from './WorryIntensity.js';
import EmotionFrustated from './EmotionFrustated.js';
import SymptomOccurence from './SymptomOccurence.js';
import Emotion from './Emotions.js';

ReactDOM.render(
  //<App />,
  //<SymptomIntensity />,
  <SymptomOccurence />,
  //<Emotion />,
  //<WorryIntensity />,
  //<WorryCertainty />,
  //<EmotionFrustated />,
  document.getElementById('root')
  //<ApexChart />
);
//registerServiceWorker();


// import React from 'react'
// //^ES6 module
// //just name react here means import from node_modules

// //additional code since index.js is the entry point, use 'root' div to show function
// import ReactDOM from 'react-dom';

// //importing CSS, need to give full path
// import './index.css';


// //capital G for greeting shows it is a component
// function Greeting() {
//   //^^ stateless functional component or dumb component; always need to RETURN something
//   // this is html syntax, easy to organize
//   return (
//     <div>
//       <h4>first component yay</h4>
//     </div>);
//   //specifies html being returned
// }

// // // this is JS verrsion of div containing h1 (BTS), gets messy very fast, hence above HTML-based method is preffered
// // const Greeting = () => {
// //   return React.createElement('div', {}, React.createElement('h1', {}, 'hello world'));
// // };

// //jsx rules
// //ALWAYS return ONE single element ie ONE div or ONE section
// //for ^^ you can use JSX fragments ie <React.Fragment></React.Fragment> or <></>
// //^^ avoids multiple div within divs
// //html attributes have to be in camelCase since this is JS, and the same applies to classes
// //ie instead of class, use className
// //for closing tag, just <img/> nope, have to use <img />
 
// //to see nested components:
// //using nested components, can split up program into smaller chunks, easier to build
// // function Greeting1() {
// //   return (
// //     <div>
// //       <Person />
// //       <Message />
// //       <p>message outside component</p>
// //      </div> 
// //   );
// // }

// // //second component person below
// // const Person = () => <h2>component 1</h2>;
// // //can also have long components
// // const Message = () => {
// //   return (
// //     <div>
// //       <p>text second component</p>
// //       <p>more text for para</p>
// //     </div>
// //   );
// // }



// // //booklist 
// // function BookList() {
// //   return (
// //     <section className='booklist'>
// //       <Book prop1='this is sample property 1'/>
// //       <Book prop2='this is sample property 2'/>
// //       <Book />
// //       <Book />
// //       <Book />
// //       <Book />
// //       <Book />
// //       <Book />
// //       <Book />
// //     </section>
// //   );
// // }

// // //below, props shows that properties may be passed to the component
// // const Book = (props) => {
// //   return (
// //     <article className='book'>
// //       <Image />
// //       <Title />
// //       <Author />
// //       {/* will print prop below if book object has that property */}
// //       <p>{props.prop1}</p>
// //       <p>{props.prop2}</p>
// //     </article>
// //   );
// // }

// // const Image = () => <img src="https://m.media-amazon.com/images/I/917qAhKXkAS._AC_UY327_FMwebp_QL65_.jpg" alt="" />

// // //inline style overrides css from .css file
// // const Title = () => <h1 style={{color: '#b5e45e', fontSize: '2rem'}}>A Gentleman in Moscow</h1>

// // const Author = () => <h4>Amor Towles</h4>

// //to combine
// // const Book = () => {
// //   const title = "A Gentleman in Moscow";
// //   const author = "Amor Towles";
// //   return (
// //     <article className='book'>
// //       <img src="https://m.media-amazon.com/images/I/917qAhKXkAS._AC_UY327_FMwebp_QL65_.jpg" alt="" />
// //       <h1>{title}</h1>
// //       <h4>{author}</h4>
// //     </article>
// //   );
// // }

// //dynamic version
// const firstBook = {
//   img: 'https://m.media-amazon.com/images/I/714F9OGqpvL._AC_UL480_FMwebp_QL65_.jpg',
//   title: 'Some title',
//   author: 'Some author',
// };

// const secondBook = {
//   img: 'https://m.media-amazon.com/images/I/917qAhKXkAS._AC_UY327_FMwebp_QL65_.jpg',
//   title: 'Another title',
//   author: 'Another author',
// };

// const thirdBook = {
//   img: 'https://m.media-amazon.com/images/I/61aaZlSZd+L._AC_UL480_FMwebp_QL65_.jpg',
//   title: 'Yet another title',
//   author: 'Yet another author',
// };

// const fourthBook = {
//   img: 'https://m.media-amazon.com/images/I/81aqrWmm44L._AC_UL480_FMwebp_QL65_.jpg',
//   title: 'One more title',
//   author: 'One more author',
// };

// //array version
// // const books = [
// //   {
// //   img: 'https://m.media-amazon.com/images/I/714F9OGqpvL._AC_UL480_FMwebp_QL65_.jpg',
// //   title: 'Some title',
// //   author: 'Some author',
// // },

// // {
// //   img: 'https://m.media-amazon.com/images/I/917qAhKXkAS._AC_UY327_FMwebp_QL65_.jpg',
// //   title: 'Another title',
// //   author: 'Another author',
// // },

// // {
// //   img: 'https://m.media-amazon.com/images/I/61aaZlSZd+L._AC_UL480_FMwebp_QL65_.jpg',
// //   title: 'Yet another title',
// //   author: 'Yet another author',
// // },

// // {
// //   img: 'https://m.media-amazon.com/images/I/81aqrWmm44L._AC_UL480_FMwebp_QL65_.jpg',
// //   title: 'One more title',
// //   author: 'One more author',
// // },
// // ];


// //on calling, calls Book for each book. Book returns title, image, author
// function BookList() {

//   const clickHandler=alert(message?: any): void
//     alert('hello world');
// };
//   return (
//     <section className='booklist'> 
//       <Book
//         img={firstBook.img}
//         title={firstBook.title}
//         author={firstBook.author}
//       >
//         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde accusamus beatae sequi nulla quae. Quia dolorem cum maxime est molestiae.
//           </p>
//           <button  type='button' onClick={clickHandler}></button>
//       </Book>
//       <Book
//         img={secondBook.img}
//         title={secondBook.title}
//         author={secondBook.author}
//         />
//       <Book
//         img={thirdBook.img}
//         title={thirdBook.title}
//         author={thirdBook.author}
//         />
//       <Book
//         img={fourthBook.img}
//         title={fourthBook.title}
//         author={fourthBook.author}
//         />
//     </section>
//   );
// }

// //below, props shows that properties may be passed to the component
// const Book = (props) => {
//   return (
//     <article className='book'>
//       <img src={props.img} alt=''/>
//       <h1>{props.title}</h1>
//       <h4>{props.author}</h4>
//       {props.children}
//     </article>
//   );
// }

// //OR
// // const Book = ({img, title, author}) => {
// //   return (
// //     <article className='book'>
// //       <img src={img} alt=''/>
// //       <h1>{title}</h1>
// //       <h4>{author}</h4>
// //     </article>
// //   );
// // }

// //to render greeting, specify component and location
// // <Greeting></Greeting> == <Greeting />
// //calls the function booklist
// ReactDOM.render(<BookList />, document.getElementById('root'));