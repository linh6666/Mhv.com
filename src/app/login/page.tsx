"use client";

import {
  Box,
  Button,
  Paper,
  Stack,
  Text,
  Image,
  SimpleGrid,
  PasswordInput,
  Input,
} from "@mantine/core";
import styles from "./LoginPage.module.css";

export default function LoginPage() {
  return (
    <Box className={styles.container}>
      <Paper p="xl" className={styles.paper}>
        <Stack align="center" className={styles.stack}>
          {/* Tiêu đề */}
          <Text size="xl" fw={700} className={styles.title}>
            WELCOME TO
          </Text>

          {/* Logo */}
          <Image
            src="/assets/logo/LOGO_login.png"
            alt="MHV Logo"
            width={120}
            height="auto"
            className={styles.logo}
          />

          {/* Dòng mô tả */}
          <Text size="sm" className={styles.description}>
            Kindly{" "}
            <a href="/register" className={styles.registerLink}>
              Register
            </a>{" "}
            to access Viet Model Australia.
            <br />
            If you are already registered, please login below.
          </Text>

          {/* Form input */}
          <SimpleGrid cols={1} spacing="sm" verticalSpacing="xs">
            <div>
              <Input
                type="text"
                placeholder="Email/Mobile number"
                classNames={{ input: styles.customInput }}
              />
            </div>
            <div>
              <PasswordInput
                placeholder="Password"
                classNames={{ input: styles.customInput }}
              />
            </div>

            <Button
              fullWidth
              radius="md"
              size="md"
              mt="md"
              className={styles.button}
            >
              LOGIN
            </Button>
          </SimpleGrid>

          {/* Quên mật khẩu */}
          <a href="/forgot-password" className={styles.forgotText}>
            <Text size="sm">Quên mật khẩu?</Text>
          </a>

          {/* Dòng hỗ trợ */}
          <Text size="xs" className={styles.termsText}>
            For additional assistance, please contact us at
            <br />
            <span className={styles.phoneNumber}>+61421189379</span>
          </Text>
        </Stack>
      </Paper>
    </Box>
  );
}
