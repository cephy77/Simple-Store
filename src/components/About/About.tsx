import styled from "styled-components";

const AboutWrapper = styled.div`
  width: calc(100% - 50px);
  padding: 20px;
  margin: 0 auto 30px;
  height: 100px;
  border-radius: 7px;
  border: 1px black solid;
`;

function About() {
  return (
    <AboutWrapper>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis illo
      laborum ut veritatis magni modi at molestias optio doloremque! Odio quae
      blanditiis, ea saepe consequatur numquam totam facere cupiditate hic!
    </AboutWrapper>
  );
}

export default About;
