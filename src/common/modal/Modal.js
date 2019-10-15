import React from 'react';

import './Modal.css';

const modal = props => (
  <div className="container mt-3">
  <h2>Modal Example</h2>

  <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#myModal">
    Open modal
  </button>

  <div className="modal fade" id="myModal">
    <div className="modal-dialog">
      <div className="modal-content">
  
        <div className="modal-header">
          <h4 className="modal-title">Modal Heading</h4>
          <button type="button" className="close" data-dismiss="modal">×</button>
        </div>
  
        <div className="modal-body">
          Modal body..
        </div>

        <div className="modal-footer">
          <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
          <button type="button" className="btn btn-danger" data-dismiss="modal">ok</button>
        </div>
        
      </div>
    </div>
  </div>
  
</div>
);

export default modal;