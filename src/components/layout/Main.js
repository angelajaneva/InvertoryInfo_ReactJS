import React from 'react'
import Navigation from "../common/Navigation/Navigation";
import TopHeader from "../common/TopHeader";
import Footer from "../common/Footer/Footer";

class Main extends React.Component {

    render() {
        let wrapperClass = "gray-bg ";
        return (
            <div id="wrapper">
                {/*<Progress />*/}
                <Navigation location={this.props.location}/>

                <div id="page-wrapper" className={wrapperClass}>

                    <TopHeader />

                    {this.props.children}

                    <Footer />

                </div>

            </div>

        )
    }

    componentDidMount() {

        // Run correctHeight function on load and resize window event
        // $(window).bind("load resize", function() {
        //     correctHeight();
        //     detectBody();
        // });
        //
        // // Correct height of wrapper after metisMenu animation.
        // $('.metismenu a').click(() => {
        //     setTimeout(() => {
        //         correctHeight();
        //     }, 300)
        // });
    }
}

export default Main