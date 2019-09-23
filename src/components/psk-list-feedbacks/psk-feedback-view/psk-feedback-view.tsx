import { Component, Event, EventEmitter, h, Prop } from "@stencil/core";

@Component({
    tag: 'psk-feedback-view',
    styleUrl: './psk-feedback-view.css',
    shadow: false
})

export class AlertView{
    @Event({
        eventName: 'showGoodFeedback',
        composed: true,
        cancelable: true,
        bubbles: true,
    }) showGoodFeedback: EventEmitter;

    @Event({
        eventName: 'showBadFeedback',
        composed: true,
        cancelable: true,
        bubbles: true,
    }) showBadFeedback: EventEmitter;
    @Prop() typeOfAlert : string ;
    
    showPositiveFeedbackEmitter(){
        this.showGoodFeedback.emit(['Very!','Good!','Boy!'])
    }
    showNegativeFeedbackEmitter(){
        this.showBadFeedback.emit('Bad!')
    }
    render(){
        return (
            <div>
                <button class="px-2" onClick ={this.showPositiveFeedbackEmitter.bind(this)}>Show toast and good event!</button>
                <button class="px-2" onClick ={this.showNegativeFeedbackEmitter.bind(this)}>Show bad event!</button>
            </div>
        )
    }
}