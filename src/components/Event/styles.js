import styled from "styled-components";

export const RegisterEvent = styled.div`
  max-width: 90vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-left: 3rem;
  /* margin: 2rem 5rem; */

  span {
    margin-top: 0.75rem;
  }
`;

export const NewEventWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: start;
  width: 100%;
  max-width: 60rem;
  margin: 0 auto;
  /* min-width: 48rem; */
  height: 0;
  /* padding: 0 1.5rem; */

  .event-wrapper-inner {
    position: relative;
    right: 0.4375rem;
    bottom: 0.4375rem;
    width: fit-content;
    height: fit-content;
  }
`;
export const EventsContainer = styled.main`
  position: relative;
  display: flex;
  /* align-items: center; */
  flex-direction: column;

  justify-content: center;
  width: 100vw;
  margin: 0 auto;
  padding: 1.5rem 0.75rem;
  overflow-x: auto;

  .LoadingField {
    background-color: var(--red);
    max-width: fit-content;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50px;
    margin: auto;
  }

  // tablet breakpoint
  @media only screen and (min-width: 600px) { 
    padding: 1.5rem 2rem;
  }

  // notebook breakpoint
  @media only screen and (min-width: 1024px) {
    padding: 1.5rem 4rem;
  }

  // notebook breakpoint
  @media only screen and (min-width: 1280px) {
    padding: 1.5rem 6rem;
  }
`;

export const EventsTable = styled.table`
  width: 100%;
  min-width: 48.5rem;
  max-width: 60rem;
  border-collapse: separate;
  border-spacing: 0 0.5rem;
  margin: 0 auto;

  th {
    background-color: var(--red);
    color: var(--gray-100);
    padding: 1.25rem 2rem;
    text-align: center;

    &:first-child {
      border-top-left-radius: 8px;
      padding: 1.5rem;
    }

    &:last-child {
      border-top-right-radius: 8px;
      padding-right: 1.5rem;
    }
  }

  td {
    padding: 1.25rem 2rem;
    background: var(--rose);
    text-align: center;

    &:first-child {
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;

      svg {
        vertical-align: middle;
      }
    }

    &:last-child {
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
    }
  }
`;

export const NewEventButton = styled.button`
  /* position: absolute;
  right: 0;
  bottom: 0;
  transform: translateY(25%); */
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.75rem;
  height: 2.75rem;
  border: 0;
  color: var(--gray-100);
  background-color: var(--red);
  font-weight: 600;
  font-size: var(--text-lg);
  border-radius: 50%;
  filter: drop-shadow(2px 2px 3px #00000080);
  cursor: pointer;
  transition: background-color 0.1s, color 0.1s;
  /* margin-left: auto; */
  /* margin-top: 2rem; */

  &:hover {
    background-color: var(--orange);
    /* color: var(--red); */
    transition: background-color 0.3s, color 0.3s;
  }
`;

export const SearchForm = styled.form`
  display: flex;
  justify-content: center;
  
  /* max-width: 60rem; */
  margin: 2rem auto 0;
  padding: 0 0.75rem;
  /* background-color: green; */

  .search-input-wrapper {
    position: relative;
    display: flex;
    justify-content: flex-end;
    width: 100%;
    max-width: 60rem;

    input {
      width: 15rem;
      height: 2.25rem;
      border-radius: 4px;
      color: var(--gray-100);
      font-size: var(--text-md);
      font-weight: 500;
      background: linear-gradient(
        135deg,
        rgba(55, 65, 81, 0.85) 0%,
        rgba(215, 38, 61, 0.85) 60%,
        rgba(244, 96, 54, 0.85) 100%
      );
      /* background: linear-gradient(135deg, rgba(55, 65, 81, 0.5) 0%, rgba(215, 38, 61, 0.5) 60%, rgba(244, 96, 54, 0.5) 100%); */
      border: 0;
      padding: 0 2.5rem 0 0.75rem;

      box-shadow: 2px 2px 8px rgba(55, 65, 81, 0.65), -2px -2px 8px #ffffff;
      transition: box-shadow 0.2s;

      &::placeholder {
        color: var(--gray-300);
      }

      &:focus-visible {
        outline: none;
        box-shadow: 2px 2px 8px rgba(244, 96, 54, 0.75), -2px -2px 8px #ffffff;
        transition: box-shadow 0.3s;
      }
    }

    svg {
      position: absolute;
      top: 50%;
      right: 0.5rem;
      transform: translateY(-50%);
      color: var(--gray-200);
    }
  }

  // tablet breakpoint
  @media only screen and (min-width: 600px) { 
    padding: 0 2rem;
  }

  // notebook breakpoint
  @media only screen and (min-width: 1024px) {
    padding: 0 4rem;
  }

  // notebook breakpoint
  @media only screen and (min-width: 1280px) {
    padding: 0 6rem;
  }
`;
