import styled from "styled-components";

export const Container = styled.div`
  .wrapper {
    display: flex;
    justify-content: center;
  }

  .cta {
    display: flex;
    padding: 10px 45px;
    text-decoration: none;
    font-family: "Poppins", sans-serif;
    font-size: 40px;
    color: white;
    background: #6225e6;
    transition: 1s;
    box-shadow: 6px 6px 0 black;
    transform: skewX(-15deg);
  }

  .cta:focus {
    outline: none;
  }

  .cta:hover {
    transition: 0.5s;
    box-shadow: 10px 10px 0 #fbc638;
  }

  .cta span:nth-child(2) {
    transition: 0.5s;
    margin-right: 0px;
  }

  .cta:hover span:nth-child(2) {
    transition: 0.5s;
    margin-right: 45px;
  }

  span {
    transform: skewX(15deg);
  }

  span:nth-child(2) {
    width: 20px;
    margin-left: 30px;
    position: relative;
    top: 12%;
  }

  path.one {
    transition: 0.4s;
    transform: translateX(-60%);
  }

  path.two {
    transition: 0.5s;
    transform: translateX(-30%);
  }

  .cta:hover path.three {
    animation: color_anim 1s infinite 0.2s;
  }

  .cta:hover path.one {
    transform: translateX(0%);
    animation: color_anim 1s infinite 0.6s;
  }

  .cta:hover path.two {
    transform: translateX(0%);
    animation: color_anim 1s infinite 0.4s;
  }

  @keyframes color_anim {
    0% {
      fill: white;
    }
    50% {
      fill: #fbc638;
    }
    100% {
      fill: white;
    }
  }
`;
