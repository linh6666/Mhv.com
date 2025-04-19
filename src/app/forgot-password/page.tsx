"use client";

import {
  Box,
  Button,
  Paper,
  Stack,
  Text,
  Image,
  SimpleGrid,
  Input,
} from "@mantine/core";
import styles from "./forgotPassword.module.css";

export default function forgotPassword() {
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

          <Text size="md" className={styles.description}>
            FORGOT YOUR PASSWORD?
            <br />
            Don&apos;t worry! Please enter your email address.
            <br />
            We will send you a link to reset your password.
          </Text>

          {/* Form input */}
          <SimpleGrid cols={1} spacing="sm" verticalSpacing="xs">
            <Input
              type="email"
              placeholder="Email"
              classNames={{ input: styles.customInput }}
            />

            <Button
              fullWidth
              radius="md"
              size="md"
              mt="md"
              className={styles.button}
            >
              RESET PASSWORD
            </Button>
          </SimpleGrid>

          <Text size="xs" className={styles.termsText}>
            Already have an account?{" "}
            <a href="/register" className={styles.phoneNumber}>
              Register
            </a>{" "}
          </Text>
        </Stack>
      </Paper>
    </Box>
  );
}
