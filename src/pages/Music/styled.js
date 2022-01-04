import styled from "styled-components";

export const Container = styled.div`
  font-family: "Open Sans", sans-serif;
  color: #999;
  font-size: 14px;
  margin: 190px 20px 90px;
  padding: 10px;
  flex: 1;
`;

export const TrackArea = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  padding: 20px;
  margin-top: 30px;
  justify-content: space-between;
  a {
    text-decoration: none;
    background: none;
    cursor: pointer;
    outline: 0;
    color: #000;
  }
  img {
    width: 250px;
    height: 200px;
  }
`;
