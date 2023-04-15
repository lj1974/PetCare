import AlertBell from "../components/alertBell";

export default {
  title: "AlertBell",
  component: AlertBell,
};

export const Default = () => <AlertBell qtdNotif={0} />;
export const WithNotifications = () => <AlertBell qtdNotif={5} />;
