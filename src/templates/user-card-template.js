import { html } from "lit";
export const userCardtemplate = (name, avatarUrl, description) => html`
  <div class="user-card">
    <img src="${avatarUrl}" alt="Avatar" />
    <h3>${name}</h3>
    <p>${description}"</p>
  </div>
`;
