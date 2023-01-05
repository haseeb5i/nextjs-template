import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Box } from "@/components/layout";
import { styled } from "@/theme/stitches.config";
import { z } from "zod";

const schema = z.object({
  name: z
    .string({
      required_error: "Name is required",
    })
    .min(3, { message: "Name must be at least 3 characters" }),
  age: z.coerce.number().min(18),
});

type FormValues = z.infer<typeof schema>;

export default function FormExample() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit: SubmitHandler<FormValues> = (data) => console.log(data);

  return (
    <div>
      <Box
        as="h2"
        css={{
          bgColor: "$primaryBg",
          p: "$md",
          mb: "$5",
          borderRadius: "$sm",
        }}
      >
        Form example using react-hook-form
      </Box>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <div className="group">
          <label htmlFor="name">Name</label>
          <input {...register("name")} />
          {errors.name && <p className="error">{errors.name.message}</p>}
        </div>
        <div className="group">
          <label htmlFor="age">Age</label>
          <input {...register("age")} />
          {errors.age && <p className="error">{errors.age.message}</p>}
        </div>
        <button type="submit">Submit</button>
      </Form>
    </div>
  );
}

const Form = styled("form", {
  margin: "30px auto 10px",
  maxWidth: 600,
  ".group": {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    marginBottom: "1rem"
  },
  label: {
    alignSelf: "center",
    marginRight: 10,
  },
  input: {
    gridColumn: "span 3",
  },
  ".error": {
    fontSize: "0.8em",
    color: "$red11",
    gridColumn: "2 / span 3",
  },
});
