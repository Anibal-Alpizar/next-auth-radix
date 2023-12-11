"use client";

import {
  TextArea,
  TextField,
  Container,
  Flex,
  Card,
  Heading,
  Button,
} from "@radix-ui/themes";
import { useForm, Controller } from "react-hook-form";

function TaskNewPage() {
  const { control, handleSubmit } = useForm({
    values: {
      title: "",
      description: "",
    },
  });

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <div>
      <Container size="1" height="100%" className="p-3 md:p-0">
        <Flex className="h-screen w-full items-center">
          <Card className="w-full p-7">
            <Heading> Create New Task</Heading>
            <form onSubmit={onSubmit} className="flex flex-col gap-y-2">
              <label>Project Title</label>
              <Controller
                name="title"
                control={control}
                render={({ field }) => {
                  return (
                    <TextField.Input
                      size="3"
                      placeholder="Project Name"
                      {...field}
                    />
                  );
                }}
              />

              <label>Project Description</label>
              <Controller
                name="description"
                control={control}
                render={({ field }) => {
                  return (
                    <TextArea
                      size="3"
                      placeholder="Project Description"
                      {...field}
                    />
                  );
                }}
              />
              <Button type="submit">Submit</Button>
            </form>
          </Card>
        </Flex>
      </Container>
    </div>
  );
}

export default TaskNewPage;
