import styled, { keyframes } from 'styled-components';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Loading = styled(AiOutlineLoading3Quarters)`
    font-size: 100px;
    color: #555;
    transform: rotate(360deg);
    animation: ${rotate} 2s linear infinite;
`;

export default Loading;
