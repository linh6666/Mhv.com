import "./globals.css";
import { ReactNode } from "react";
import { MantineProvider, Box } from "@mantine/core";
import "@mantine/core/styles.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import AppContainer from "../../common/AppContainer";

export const metadata = {
  title: "MHV App",
  description: "App router section",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <MantineProvider withGlobalStyles withNormalizeCSS>
          <Box
            style={{
              minHeight: "100vh",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {/* Header cố định */}
            <Header />

            {/* Phần nội dung bên dưới header */}
            <Box
              component="main"
              style={{
                flex: 1,
                paddingTop: "96px", // 👈 thêm khoảng trống đúng bằng chiều cao header
              }}
            >
              <AppContainer>{children}</AppContainer>
            </Box>

            {/* Footer cố định */}
            <Footer />
          </Box>
        </MantineProvider>
      </body>
    </html>
  );
}
