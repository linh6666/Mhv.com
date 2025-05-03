
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
import { useForm} from '@mantine/form';

import styles from "./LoginPage.module.css";


export default function LoginPage() {
  const form = useForm({
    initialValues: {
      emailOrPhone: "",
      password: "",
    },

    validate: {
      emailOrPhone: (value) =>
        value.trim().length === 0 ? "This field is required" : null,
      password: (value) =>
        value.trim().length === 0 ? "Password is required" : null,
    },
  });

  const handleSubmit = (values: typeof form.values) => {
    console.log("Form values:", values);
    // Gọi API login tại đây nếu cần
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

          <Text size="sm" className={styles.description}>
            Kindly{" "}
            <a href="/register" className={styles.registerLink}>
              Register
            </a>{" "}
            to access Viet Model Australia.
            <br />
            If you are already registered, please login below.
          </Text>

          {/* Form login */}
          <form onSubmit={form.onSubmit(handleSubmit)} style={{ width: '100%' }}>
            <SimpleGrid cols={1} spacing="sm" verticalSpacing="xs">
              <div>
                <Input
                  type="text"
                  placeholder="Email/Mobile number"
                  classNames={{ input: styles.customInput }}
                  {...form.getInputProps("emailOrPhone")}
                />
              </div>
              <div>
                <PasswordInput
                  placeholder="Password"
                  classNames={{ input: styles.customInput }}
                  {...form.getInputProps("password")}
                />
              </div>

              <Button
                type="submit"
                fullWidth
                radius="md"
                size="md"
                mt="md"
                className={styles.button}
              >
                LOGIN
              </Button>
            </SimpleGrid>
          </form>

          <a href="/forgot-password" className={styles.forgotText}>
            <Text size="sm">Forgot Password ?</Text>
          </a>

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
