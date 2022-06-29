import styled from 'styled-components';

export const GalleryList = styled.ul`
  display: flex;
  flex-wrap: wrap;
   justify-content: center;
   margin: 0 auto;
   list-style: none;
     margin-left: -30px;
     margin-bottom: -30px;
  );
`;

export const Card = styled.li`
  flex-basis: calc(100% - 20px);
  min-width: 260px;
 
  height:400px;
    flex-basis: calc(100% / 3 - 30px);
    max-width: 274px;
  );
`;

export const Thumb = styled.div`
  margin-top: 8px;
  );
`;

export const Image = styled.img`
  display: block;
 
 width: 250px;
  border-radius: 5px;
  object-fit: cover;
 transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  );
`;
export const Title = styled.h2`
 
   font-size: 24px;
   font-weight:700;
  line-height: 1.33;
  text-transform: uppercase;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  color: #000000;
   
  );
`;

export const Description = styled.p`
   font-weight: 500;
  font-size: 12px;
  line-height: 1.33;
width:90%;
  color: #1c1b1b;
  );
`;
