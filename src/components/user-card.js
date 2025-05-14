import { LitElement } from "lit";
import { userCardStyles } from "../styles/user-card.styles";
import { userCardtemplate } from "../templates/user-card-template";

class UserCard extends LitElement {
  static styles = userCardStyles;
  static properties = {
    name: { type: String },
    avatarUrl: { type: String },
    description: { type: String },
  };

  constructor() {
    super();
    this.name = "Vrushbah";
    this.avatarUrl = "https://avatar.iran.liara.run/public";
    this.description = { type: String };
  }
  render() {
    return userCardtemplate(this.name, this.avatarUrl, this.description);
  }
}
customElements.define("user-card", UserCard);
