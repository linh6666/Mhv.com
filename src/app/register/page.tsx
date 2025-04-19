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
import styles from "./registerPage.module.css";
import { useDisclosure } from "@mantine/hooks";

export default function LoginPage() {
  const [visible, { toggle }] = useDisclosure(false);
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
          <Text size="md" className={styles.description}>
            {/* <a href="/register" className={styles.registerLink}>
              Register
            </a>{" "} */}
            Enter your details and start journey with us.
          </Text>

          {/* Form input */}
          <SimpleGrid cols={1} spacing="sm" verticalSpacing="xs">
            <Input
              type="text"
              placeholder="Full name"
              classNames={{ input: styles.customInput }}
            />

            <Input
              type="email"
              placeholder="Email"
              classNames={{ input: styles.customInput }}
            />
            <Input
              type="tel"
              placeholder="Mobile number"
              classNames={{ input: styles.customInput }}
            />

            <PasswordInput
              placeholder="Password"
              visible={visible}
              onVisibilityChange={toggle}
              classNames={{ input: styles.customInput }}
            />
            <PasswordInput
              placeholder="Confirm password"
              visible={visible}
              onVisibilityChange={toggle}
              classNames={{ input: styles.customInput }}
            />

            <Button
              fullWidth
              radius="md"
              size="md"
              mt="md"
              className={styles.button}
            >
              REGISTER
            </Button>
          </SimpleGrid>

          <Text size="xs" className={styles.termsText}>
            Already have an account?{" "}
            <a href="/login" className={styles.phoneNumber}>
              Sign in
            </a>{" "}
          </Text>
        </Stack>
      </Paper>
    </Box>
  );
}
