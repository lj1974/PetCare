import styled from "styled-components";
import Image from "next/image";

import { dark } from "../styles/global_colors";
import alert_bell from "../../public/icons/alert_bell.svg";

const Bell = styled(Image)`
  position: relative;
  color: ${dark.alert};
`;

const Alert = styled.span<{ hasAlert: boolean }>`
  display: ${({ hasAlert }) => (hasAlert ? "block" : "none")};
`;

interface AlertBellProps {
  qtdNotif?: number;
}

const AlertBell = ({ qtdNotif = 0 }: AlertBellProps) => {
  const hasAlert = qtdNotif > 0;
  return (
    <>
      <Bell src={alert_bell} alt="alerta de notificações" width={50} />
      <Alert hasAlert={hasAlert}>{qtdNotif}</Alert>
    </>
  );
};

export default AlertBell;
