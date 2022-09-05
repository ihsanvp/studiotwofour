import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "@mantine/form";
import {
  Button,
  Center,
  Container,
  Divider,
  Group,
  Paper,
  PasswordInput,
  Stack,
  TextInput,
  Text,
} from "@mantine/core";
import useLogin from "../hooks/useLogin";

function LoginRoute() {
  const navigate = useNavigate();
  const login = useLogin();
  const location = useLocation();

  const form = useForm({
    initialValues: {
      email: "",
      password: "",
    },

    validate: {
      email: (val) =>
        /^\w+@[a-zA-Z_]+?\.[a-zA-Z]/.test(val) ? null : "Invalid email",
      password: (val) =>
        val.length >= 8
          ? null
          : "Password should include at least 8 characters",
    },
  });

  const handleSubmit = form.onSubmit(async (values) => {
    const err = await login({
      email: values.email,
      password: values.password,
    });

    if (err) {
      return console.log(err);
    }

    const target = (location.state as any)?.from?.pathname || "/";
    navigate(target);
  });

  return (
    <Container style={{ height: "100vh" }}>
      <Center style={{ height: "100%" }}>
        <Paper style={{ width: 400 }} radius="md" p="xl" withBorder>
          <Text style={{ textAlign: "center" }} size="lg" weight={500}>
            Login
          </Text>

          {/* <Group grow mb="md" mt="md">
            <GoogleButton radius="xl">Google</GoogleButton>
            <TwitterButton radius="xl">Twitter</TwitterButton>
          </Group> */}

          <Divider my="lg" />

          <form onSubmit={handleSubmit}>
            <Stack>
              <TextInput
                required
                label="Email"
                placeholder="johndoe@dom.com"
                value={form.values.email}
                onChange={(event) =>
                  form.setFieldValue("email", event.currentTarget.value)
                }
                error={form.errors.email && "Invalid email"}
              />

              <PasswordInput
                required
                label="Password"
                placeholder="Your password"
                value={form.values.password}
                onChange={(event) =>
                  form.setFieldValue("password", event.currentTarget.value)
                }
                error={
                  form.errors.password &&
                  "Password should include at least 8 characters"
                }
              />
            </Stack>

            <Group position="center" mt="xl">
              <Button type="submit" fullWidth>
                Login
              </Button>
            </Group>
          </form>
        </Paper>
      </Center>
    </Container>
  );
}

export default LoginRoute;
