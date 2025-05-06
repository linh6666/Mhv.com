import "./globals.css";
import { ReactNode } from "react";
import { MantineProvider, Box } from "@mantine/core";
import { Notifications } from "@mantine/notifications"; // ✅ Thêm dòng này
import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css"; // ✅ Thêm dòng này
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import AppContainer from "../../common/AppContainer";
import Head from "next/head";

export const metadata = {
  title: "Mô Hình Việt",
  description: "Mô Hình Việt - Tiên Phong Sáng Tạo",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <MantineProvider withGlobalStyles withNormalizeCSS>
          {/* ✅ Notifications component phải nằm trong MantineProvider */}
          <Notifications position="top-right" />

          <Box
            style={{
              minHeight: "100vh",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Header />

            <Box
              component="main"
              style={{
                flex: 1,
                paddingTop: "96px",
              }}
            >
              <AppContainer>{children}</AppContainer>
            </Box>

            <Footer />
          </Box>
        </MantineProvider>
      </body>
    </html>
  );
}
