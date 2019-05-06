export const FeedbackMixin = (Superclass) => {
  return class extends Superclass {
    sendFeedback(msg) {
      this.dispatchEvent(new CustomEvent('feedback-message', {
        bubbles: true,
        composed: true,
        detail: msg
      }));
    }
  }
}