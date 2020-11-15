import React from 'react';
import Progress from '../common/Progress';
import Navigation from '../common/Navigation/Navigation';
import Footer from '../common/Footer/Footer';
import TopHeader from '../common/TopHeader';
import { correctHeight, detectBody } from './Helpers';
import $ from 'jquery'
import MainView from "./Views/MainView";

class Main extends React.Component {

    render() {
        let wrapperClass = "gray-bg " + this.props.location.pathname;
        return (
            <div id="wrapper">
                {/*<Progress />*/}
                <Navigation location={this.props.location}/>

                <div id="page-wrapper" className={wrapperClass}>

                    {/*<TopHeader />*/}

                    {this.props.children}
                    {/*<MainView/>*/}

                    <Footer />

                </div>

            </div>

        )
    }

    componentDidMount() {

        // Run correctHeight function on load and resize window event
        $(window).bind("load resize", function() {
            correctHeight();
            detectBody();
        });

        // Correct height of wrapper after metisMenu animation.
        $('.metismenu a').click(() => {
            setTimeout(() => {
                correctHeight();
            }, 300)
        });
    }
}

export default Main