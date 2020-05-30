import styled, { css } from 'styled-components/macro'
import { Link } from 'react-router-dom'

const NavContainer = styled.nav`
  ${() => css`
    border: 1px solid var(--secondary-bg-color);
    background-color: white;
    border-radius: 5px;
    display: flex;
    overflow: hidden;
    justify-content: center;
    margin: 10px 0;
  `}
`
const NavItem = styled(Link)`
  ${({ isactive }: { isactive: string }) => css`
    flex: 1 1 auto;
    text-decoration: none;
    text-align: center;
    padding: 15px 25px;
    border-radius: 5px;
    font-weight: ${isactive === 'true' ? 'normal' : 'bold'};
    &:hover {
      text-decoration: underline;
      background-color: lightgray;
    }
  `}
`

export { NavContainer, NavItem }
