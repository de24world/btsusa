import React, { Component } from 'react';
import MyButton from '../utils/MyButton';
import Zoom from 'react-reveal/Zoom';

class Pricing extends Component {

    state = {
        prices:[600,800,1800],
        positions:['Lower','Club Concourse','VIP'],
        desc:[
            'Lower 117, 112, 108 ',
            'Club Concourse 128, 115, 114, 127, 116',
            'Row Package, Front Row VIP'
        ],
        linkto:['https://www.ticketnetwork.com/en/concerts/tickets/pop/bts-bangtan-boys/bts-world-tour-love-yourself/p/3542550','https://www.ticketnetwork.com/en/concerts/tickets/pop/bts-bangtan-boys/bts-world-tour-love-yourself/p/3542550','https://www.ticketnetwork.com/en/concerts/tickets/pop/bts-bangtan-boys/bts-world-tour-love-yourself/p/3542550'],
        delay:[500,0,500]

    }

    showBoxes = () => (
        this.state.prices.map((box,i)=>(
            <Zoom delay={this.state.delay[i]} key={i}>
                <div className="pricing_item">
                    <div className="pricing_inner_wrapper">
                        <div className="pricing_title">
                            <span>${this.state.prices[i]}</span>
                            <span>{this.state.positions[i]}</span>
                        </div>
                        <div className="pricing_description">
                            {this.state.desc[i]}
                        </div>
                        <div className="pricing_buttons">
                            <MyButton
                                text="Purchase"
                                bck="#ffa800"
                                color="#ffffff"
                                link={this.state.linkto[i]}
                            />
                        </div>
                    </div>
                </div>
            </Zoom>
        ))
       
    )

    render() {
        return (
            <div className="bck_black">
                <div className="center_wrapper pricing_section">
                    <h2>Pricing</h2>

                    <div className="pricing_wrapper">
                        {this.showBoxes()}
                    </div>

                </div>
            </div>
        );
    }
}

export default Pricing;