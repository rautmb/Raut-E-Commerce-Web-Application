import styled from "styled-components";

const Contact = () => {
  const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;
    text-align: center;

    .container {
      margin-top: 6rem;

      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;

  return (
    <Wrapper>
      <h1 className="common-heading">Contact page</h1>

      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.485193574975!2d73.9508679750139!3d18.55215198254755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c3eceadff139%3A0x4934b6f15755efed!2sEon%20IT%20Park%202!5e0!3m2!1sen!2sin!4v1758519960661!5m2!1sen!2sin" width="100%" height="400" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

      <div className="container">
        <div className="contact-form">
          <form action="https://formspree.io/f/xeorjzee" method="POST" className="contact-inputs">
            <input type="text" placeholder="Username" name="Username" autoCapitalize="off" required />
            <input type="email" placeholder="Email" name="Email" autoCapitalize="off" required />
            <textarea type="text" name="Message" placeholder="Message" rows="8" cols="10" autoCapitalize="off" required ></textarea>
            <input type="submit" value="Send" />
          </form>
        </div>
      </div>
    </Wrapper>
  )
};

export default Contact;
