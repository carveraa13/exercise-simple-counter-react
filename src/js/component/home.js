import React from "react";
import PropTypes from "prop-types";
//include images into your bundle
// import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function SecondsCounter(props) {
	return (
		<div className="container">
			<div className="mainCounter">
				<div className="calendar">
					<i className="far fa-clock"></i>
				</div>
				<div className="six">{props.digitSix % 10}</div>
				<div className="five">{props.digitFive % 10}</div>
				<div className="four">{props.digitFour % 10}</div>
				<div className="three">{props.digitThree % 10}</div>
				<div className="two">{props.digitTwo % 10}</div>
				<div className="one">{props.digitOne % 10}</div>
			</div>
		</div>
	);
}

SecondsCounter.propTypes = {
	digitSix: PropTypes.number,
	digitFive: PropTypes.number,
	digitFour: PropTypes.number,
	digitThree: PropTypes.number,
	digitTwo: PropTypes.number,
	digitOne: PropTypes.number
};

// let counter = 0;
// setInterval(function() {
// 	const six = Math.floor(counter / 100000);
// 	const five = Math.floor(counter / 10000);
// 	const four = Math.floor(counter / 1000);
// 	const three = Math.floor(counter / 100);
// 	const two = Math.floor(counter / 10);
// 	const one = Math.floor(counter / 1);
// 	counter++;
// 	ReactDOM.render(
// 		<SecondsCounter
// 			digitOne={one}
// 			digitTwo={two}
// 			digitThree={three}
// 			digitFour={four}
// 			digitFive={four}
// 			digitSix={four}
// 		/>,
// 	);
// }, 1000);

// export function Home() {
// 	return (
// 		<div className="text-center mt-5">
// 			<h1>Hello Rigo!</h1>
// 			<p>
// 				<img src={rigoImage} />
// 			</p>
// 			<a href="#" className="btn btn-success">
// 				If you see this green button... bootstrap is working
// 			</a>
// 			<p>
// 				Made by{" "}
// 				<a href="http://www.4geeksacademy.com">4Geeks Academy</a>, with
// 				love!
// 			</p>
// 		</div>
// 	);
// }
