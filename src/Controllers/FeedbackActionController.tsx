import { getElement } from "@stencil/core";

export default class AlertActionController {
    protected view: any
    protected htmlElement: HTMLElement;
    protected openFeedbackRequest = null;

    constructor(view: any) {
        this.htmlElement = getElement(view)
        this.feedbackEvents();
    }
    private feedbackEvents() {
        let feedbackEventsHandler = (evt:CustomEvent)=>{
            if (this.openFeedbackRequest) {
            this.openFeedbackRequest(evt.detail);
          }
        };
        this.htmlElement.addEventListener("showGoodFeedback", feedbackEventsHandler);
        this.htmlElement.addEventListener("showBadFeedback", feedbackEventsHandler);
        this.htmlElement.addEventListener("openFeedback", (evt: CustomEvent) => {
            this.openFeedbackRequest = evt.detail;
          });
    }
}