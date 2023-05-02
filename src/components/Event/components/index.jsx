import { HeaderContainer, HeaderContent } from "./styles";
import { CalendarX } from "phosphor-react";

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <CalendarX size={60} />
        <strong>Create and Schedule Your Event</strong>
      </HeaderContent>
    </HeaderContainer>
  );
}
