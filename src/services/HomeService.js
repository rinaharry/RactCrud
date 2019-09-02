import React , {Component} from 'react';

import Axios from 'axios';

class HomeService extends Component {
   getContact () {
    Axios.get('http://localhost:3002')
    .then(
        res => res
      )
   }
   addcontact() {
    
        // eslint-disable-next-line no-undef
        return Axios.post('http://localhost:3002',data)
                .then(
                    res => res)
                .catch(
                    error =>console.error(error)    
    )}

}

export default HomeService;