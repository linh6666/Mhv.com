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
import { useForm } from "@mantine/form";

export default function RegisterPage() {
  const [visible, { toggle }] = useDisclosure(false);

  const form = useForm({
    initialValues: {
      fullName: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
    },

    validate: {
      fullName: (value) => (value.trim().length === 0 ? "Full name is required" : null),
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      phone: (value) => (value.trim().length < 9 ? "Invalid phone number" : null),
      password: (value) => (value.length < 6 ? "Password must be at least 6 characters" : null),
      confirmPassword: (value, values) =>
        value !== values.password ? "Passwords do not match" : null,
    },
  });

  const handleSubmit = (values: typeof form.values) => {
    console.log("Form submitted:", values);
    // Gửi API tại đây nếu cần
  };

  return (
    <Box className={styles.container}>
      <Paper p="xl" className={styles.paper}>
        <Stack align="center" className={styles.stack}>
          <Text size="xl" fw={700} className={styles.title}>
            WELCOME TO
          </Text>

          <Image
            src="/assets/logo/LOGO_login.png"
            alt="MHV Logo"
            width={120}
            height="auto"
            className={styles.logo}
          />

          <Text size="md" className={styles.description}>
            Enter your details and start journey with us.
          </Text>

          <form onSubmit={form.onSubmit(handleSubmit)}>
            <SimpleGrid cols={1} spacing="sm" verticalSpacing="xs">
              <Input
                type="text"
                placeholder="Full name"
                classNames={{ input: styles.customInput }}
                {...form.getInputProps("fullName")}
              />

              <Input
                type="email"
                placeholder="Email"
                classNames={{ input: styles.customInput }}
                {...form.getInputProps("email")}
              />

              <Input
                type="tel"
                placeholder="Mobile number"
                classNames={{ input: styles.customInput }}
                {...form.getInputProps("phone")}
              />

              <PasswordInput
                placeholder="Password"
                visible={visible}
                onVisibilityChange={toggle}
                classNames={{ input: styles.customInput }}
                {...form.getInputProps("password")}
              />

              <PasswordInput
                placeholder="Confirm password"
                visible={visible}
                onVisibilityChange={toggle}
                classNames={{ input: styles.customInput }}
                {...form.getInputProps("confirmPassword")}
              />

              <Button
                type="submit"
                fullWidth
                radius="md"
                size="md"
                mt="md"
                className={styles.button}
              >
                REGISTER
              </Button>
            </SimpleGrid>
          </form>

          <Text size="xs" className={styles.termsText}>
            Already have an account?{" "}
            <a href="/login" className={styles.phoneNumber}>
              Sign in
            </a>
          </Text>
        </Stack>
      </Paper>
    </Box>
  );
}
