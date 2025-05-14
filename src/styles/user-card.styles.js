import { css } from "lit";

export const userCardStyles = css`
  :host {
    display: block;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 8px;
    max-width: 300px;
    font-family: Arial, sans-serif;
    margin: 8px; 
  }

  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }

  h3 {
    margin: 8px 0;
  }

  p {
    color: #666;
    font-size: 0.9em;
  
`;
