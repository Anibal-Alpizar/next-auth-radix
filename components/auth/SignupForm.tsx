"use client";

import { Flex, TextField, Button } from "@radix-ui/themes";
import {
  PersonIcon,
  EnvelopeClosedIcon,
  LockClosedIcon,
} from "@radix-ui/react-icons";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";

function SigninForm() {
  const { control, handleSubmit } = useForm({
    values: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = handleSubmit(async (data) => {
    console.log(data);
    const res = await axios.post("/api/auth/register", data);
    console.log(res);
  });

  return (
    <form onSubmit={onSubmit}>
      <Flex direction="column" gap="2">
        <label htmlFor="name">Name:</label>
        <TextField.Root>
          <TextField.Slot>
            <PersonIcon height="16" width="16" />
          </TextField.Slot>
          <Controller
            name="name"
            control={control}
            rules={{
              required: {
                value: true,
                message: "Name is required",
              },
            }}
            render={({ field }) => {
              return (
                <TextField.Input
                  type="text"
                  placeholder="Write your name"
                  autoFocus
                  {...field}
                />
              );
            }}
          />
        </TextField.Root>

        <label htmlFor="email">Email</label>
        <TextField.Root>
          <TextField.Slot>
            <EnvelopeClosedIcon height="16" width="16" />
          </TextField.Slot>
          <Controller
            name="email"
            control={control}
            rules={{
              required: {
                value: true,
                message: "Email is required",
              },
            }}
            render={({ field }) => {
              return (
                <TextField.Input
                  type="email"
                  placeholder="email@domain.com"
                  {...field}
                />
              );
            }}
          />
        </TextField.Root>

        <label htmlFor="password">Passoword</label>
        <TextField.Root>
          <TextField.Slot>
            <LockClosedIcon height="16" width="16" />
          </TextField.Slot>
          <Controller
            name="password"
            control={control}
            rules={{
              required: {
                value: true,
                message: "Password is required",
              },
            }}
            render={({ field }) => {
              return (
                <TextField.Input
                  type="password"
                  placeholder="********"
                  {...field}
                />
              );
            }}
          />
        </TextField.Root>

        <Button type="submit">Sign In</Button>
      </Flex>
    </form>
  );
}

export default SigninForm;
