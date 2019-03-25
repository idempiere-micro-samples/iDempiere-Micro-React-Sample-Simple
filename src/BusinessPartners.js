import React, { Component } from 'react';

export class BusinessPartners extends Component {
    constructor(props) {
      super(props);
      this.state = {businessPartners: props.businessPartners};
    }
    
    render() {
      const items = this.state.businessPartners.map((item, key) =>
        <li key={item.id}>{item.name}</li>
      );

      return (
          <div>
            <ul>
                {items}
            </ul>
          </div>
      );
    }
  }
