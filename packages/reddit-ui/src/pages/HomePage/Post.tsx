import React from 'react';
import styled from 'styled-components';

const PostCard = styled.div`
  margin: 10px 0;
  background: white;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
`;

const MetaData = styled.div`
  font-size: 10px;
`;
const Title = styled.div`
  font-size: 18px;
  margin: 4px;
`;


const Sub = styled.div`
  font-size: 14px;
`;

const Img = styled.div<any>`
  padding-bottom: 50%;
  background-image: url('${props => props.img}');
  background-size: cover;
  background-position: center;
`;
const Footer = styled.div`
  display: flex;
  padding: 4px;
  font-weight: bold;
  justify-content: space-between;
`;

interface PostProps {
  user: string;
  time: string;
  img: string;
  upvotes: number;
  address: string;
}

const Post: React.FC<PostProps> = ({ user, time, img, upvotes, address, children }) => {
  return (
    <PostCard>
      <Header>
        <Sub>/r/CryptoCurrency</Sub>
        <MetaData>Posted by u/{user} - {time} - i.redd.it</MetaData>
      </Header>

      <Title>{children}</Title>

      <Img img={img} />

      <Footer>
        <div>{upvotes}</div>
        <div>Tip +5</div>
      </Footer>
    </PostCard>
  );
};

export default Post;
