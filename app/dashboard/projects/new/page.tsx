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
import { useForm, Controller, set } from "react-hook-form";
import axios from "axios";
import { useRouter, useParams } from "next/navigation";
import { TrashIcon } from "@radix-ui/react-icons";
import { toast } from "sonner";
import { useEffect } from "react";

function TaskNewPage() {
  const router = useRouter();
  const params = useParams();
  const { control, handleSubmit, setValue } = useForm({
    values: {
      title: "",
      description: "",
    },
  });

  const onSubmit = handleSubmit(async (data) => {
    if (!params.projectId) {
      const res = await axios.post(`/api/projects`, data);
      if (res.status === 200) {
        router.push(`/dashboard/`);
        router.refresh();
      }
    } else {
      const res = await axios.put(`/api/projects/${params.projectId}`, data);
      if (res.status === 200) {
        router.push(`/dashboard/`);
        router.refresh();
      }
    }
  });

  const handleDelete = async (projectId: string) => {
    const res = await axios.delete(`/api/projects/${projectId}`);

    if (res.status === 200) toast.success("Project deleted successfully");

    router.push(`/dashboard/`);
    router.refresh();
  };

  useEffect(() => {
    if (params.projectId) {
      axios.get(`/api/projects/${params.projectId}`).then((res) => {
        console.log(res);
        setValue("title", res.data.project.title);
        setValue("description", res.data.project.description);
      });
    }
  }, []);

  return (
    <div>
      <Container size="1" height="100%" className="p-3 md:p-0">
        <Flex className="h-[calc(100vh-10rem)] w-full items-center">
          <Card className="w-full p-7">
            <Heading>
              {params.projectId ? "Edit Project" : "New Project"}
            </Heading>
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
              <Button type="submit">
                {params.projectId ? "Edit" : "Create"}
              </Button>
            </form>
            <div className="flex justify-end my-4">
              {params.projectId && (
                <Button
                  onClick={() => {
                    handleDelete(params.projectId as string);
                  }}
                  color="red"
                  className="mt-4"
                >
                  <TrashIcon />
                  Delete
                </Button>
              )}
            </div>
          </Card>
        </Flex>
      </Container>
    </div>
  );
}

export default TaskNewPage;
