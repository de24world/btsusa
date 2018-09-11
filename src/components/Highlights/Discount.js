import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';

import MyButton from '../utils/MyButton';

class Discount extends Component {

    state = {
        discountStart:0,
        discountEnd:30
    }


    porcentage = () => {
        if(this.state.discountStart < this.state.discountEnd){
            this.setState({
                discountStart: this.state.discountStart + 1
            })
        }
    }

    componentDidUpdate(){
        setTimeout(()=>{
            this.porcentage()
        },30)
    }


    render() {
        return (
            <div className="center_wrapper">
                <div className="discount_wrapper">

                    <Fade
                        onReveal={()=> this.porcentage()}
                    >
                        <div className="discount_porcentage">
                            <span>{this.state.discountStart}%</span>
                            <span>OFF</span>
                        </div>
                    </Fade>
                    
                    <Slide right>
                        <div className="discount_description">
                            <h3>Purchase tickets before 20th Juli</h3>
                            <p>If you purhcase tickets before 20th Juli, you can buy the tickets 30% discount tickets. If you can't buy the ticket, you can buy other day's Concert ticket. </p>
                        
                            <MyButton
                                text="Purchase tickets"
                                bck="#ffa800"
                                color="#ffffff"
                                link="https://www.ticketnetwork.com/en/concerts/tickets/pop/bts-bangtan-boys/bts-world-tour-love-yourself/p/3542550"
                            />
                        
                        </div>
                    </Slide>
                    


                </div>
            </div>
        );
    }
}

export default Discount;