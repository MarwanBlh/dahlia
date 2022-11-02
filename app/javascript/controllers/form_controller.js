import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["form"]
  submit(event) {
    event.preventDefault()
    this.element.submit()
    // console.log(this.formTarget)
    // this.formTarget.submit()
  }

}
