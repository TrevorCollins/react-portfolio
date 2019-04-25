import React, { Component } from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import './style.scss';

class Home extends Component {

	constructor(props) {
		super(props);
		this.state = { width: 0, height: 0 };
		this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
	}

	componentDidMount() {
		this.updateWindowDimensions();
		window.addEventListener('resize', this.updateWindowDimensions);
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.updateWindowDimensions);
	}

	updateWindowDimensions() {
		this.setState({ width: window.innerWidth, height: window.innerHeight });
	}

	handleOnClick(page) {

	}

	render() {

		return (
			<div class="Menu" id='nav-menu'>
				<ul data-offset="10">
					<ReactCSSTransitionGroup
						class="Menu-list"
						transitionName="example"
						transitionEnterTimeout={500}
						transitionLeaveTimeout={300}>

						<li class="Menu-list-item" data-offset="16" onclick="/about">
							About
                            <a href='/about'>
								<span class="Mask"><span>About</span></span>
								<span class="Mask"><span>About</span></span>
							</a>
						</li>
						<li class="Menu-list-item" data-offset="12" onclick>
							Work
                            <a href='work'>
								<span class="Mask"><span>Work</span></span>
								<span class="Mask"><span>Work</span></span>
							</a>
						</li>
						<li class="Menu-list-item" data-offset="8" onclick>
							Contact
                            <a href='contact'>
								<span class="Mask"><span>Contact</span></span>
								<span class="Mask"><span>Contact</span></span>
							</a>
						</li>
					</ReactCSSTransitionGroup>
				</ul>
			</div>
		)
	}
}

export default Home;

// var $menu = $('.Menu-list'),
//     $item = $('.Menu-list-item'),
//     w = $(window).width(), //window width
//     h = $(window).height(); //window height

// $(window).on('mousemove', function (e) {
//     var offsetX = 0.5 - e.pageX / w, //cursor position X
//         offsetY = 0.5 - e.pageY / h, //cursor position Y
//         dy = e.pageY - h / 2, //@h/2 = center of poster
//         dx = e.pageX - w / 2, //@w/2 = center of poster
//         theta = Math.atan2(dy, dx), //angle between cursor and center of poster in RAD
//         angle = theta * 180 / Math.PI - 90, //convert rad in degrees
//         offsetPoster = $menu.data('offset'),
//         transformPoster = 'translate3d(0, ' + -offsetX * offsetPoster + 'px, 0) rotateX(' + (-offsetY * offsetPoster) + 'deg) rotateY(' + (offsetX * (offsetPoster * 2)) + 'deg)'; //poster transform

//     //get angle between 0-360
//     if (angle < 0) {
//         angle = angle + 360;
//     }

//     //poster transform
//     $menu.css('transform', transformPoster);

//     //parallax for each layer
//     $item.each(function () {
//         var $this = $(this),
//             offsetLayer = $this.data('offset') || 0,
//             transformLayer = 'translate3d(' + offsetX * offsetLayer + 'px, ' + offsetY * offsetLayer + 'px, 20px)';

//         $this.css('transform', transformLayer);
//     });
// });