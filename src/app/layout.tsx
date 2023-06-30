import "@bobs-burgers-api/styles/styles.scss";
import "@bobs-burgers-api/styles/darkMode.scss";
import "bootstrap/dist/css/bootstrap.css";
import "primereact/resources/themes/nova/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import ReduxProvider from "@bobs-burgers-api/redux/ReduxProvider";

export const metadata = {
  title: "Bob's Burgers API Documentation",
  description:
    "The Bob's Burgers API is a REST API based on the television show Bob's Burgers.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
