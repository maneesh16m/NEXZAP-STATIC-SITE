import styled from 'styled-components';


export const Container = styled.div`
    background: black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 1;
    align-items: center;
    ppadding-top: 40px;
    scroll-margin-top: 40px;
`;

export const Wrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 100%;
    max-width: 1350px;
    padding: 10px 0px 100px 0;
    gap: 12px;
    @media (max-width: 960px) {
        flex-direction: column;
    }
`;

export const Title = styled.div`
font-size: 42px;
text-align: center;
font-weight: 600;
margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
      margin-top: 12px;
      font-size: 32px;
  }
`;

export const Desc = styled.div`
    font-size: 18px;
    text-align: center;
    max-width: 600px;
    color: ${({ theme }) => theme.text_secondary};
    @media (max-width: 768px) {
        margin-top: 12px;
        font-size: 16px;
    }
`;


export const Divider = styled.div`
    width: 1.5px;
    background: ${({ theme }) => theme.primary};
`


export const CardContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 40px;
    flex-wrap: wrap;
`;

export const BackButton = styled.div`
    position: fixed;
    top: 100px;
    right: 40px;
    background: rgba(255, 255, 255, 0.1);
    color: ${({ theme }) => theme.text_primary};
    padding: 10px 20px;
    border-radius: 6px;
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;
    transition: all 0.3s ease;
    z-index: 1000;
    backdrop-filter: blur(5px);
    border: 1px solid rgba(255, 255, 255, 0.1);

    &:hover {
        transform: translateY(-5px) scale(1.05);
        background: ${({ theme }) => theme.primary};
        color: ${({ theme }) => theme.black};
        border-color: transparent;
    }

    @media (max-width: 768px) {
        top: 80px;
        right: 20px;
        padding: 8px 16px;
    }
`;