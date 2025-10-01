import { FaStar,FaStarHalfAlt} from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";
import styled from "styled-components";


const Wrapper=styled.section`
.icon-style {
    display: flex;
    gap: 0.2rem;
    align-items: center;
    justify-content: flex-start;

    .icon {
      font-size: 2rem;
      color: orange;
    }

    .empty-icon {
      font-size: 2.6rem;
    }
    p {
      margin: 0;
      padding-left: 1.2rem;
    }
  }
`;

const Star=({stars,reviews})=>{

    const ratingstar=Array.from({length:5},(v,i)=>{
        let number=0.5+i;

        debugger;

  return(
        <span key={i}>
            {
                stars>=i+1 ? <FaStar className="icon"/> : stars>=number ? <FaStarHalfAlt className="icon"/> :(<AiOutlineStar className="icon"/>)

            }
        </span>
    )
    })
  

    return(
        <Wrapper>
            <div className="icon-style">
                {ratingstar}
                <p>({reviews} customer reviews)</p>
            </div>
        </Wrapper>
    )
}

export default Star;