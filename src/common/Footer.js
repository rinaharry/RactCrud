/* eslint-disable react/jsx-no-target-blank */
import React , {Component} from 'react';

class Footer extends Component {
    render(){
        return(
            <footer >
            <div className="container">
                <div className="row ">
                   <div className="col-lg-4 col-lg-offset-5 pb-0 mb-0">
                       © 2019 <a target="_blank" href="http://shapebootstrap.net/" title="Free Twitter Bootstrap WordPress Themes and HTML templates">Rinah</a>. All Rights Reserved.
                    </div>				
                </div>
            </div>
        </footer>
        )
    }
}
export default Footer;