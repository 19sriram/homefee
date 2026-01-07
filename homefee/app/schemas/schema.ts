import * as z from "zod";

const formSchema = z.object({
  block: z.string().min(1, "Please select a block."),
  haus: z.string().min(1, "Please select a hausnumber."),
  picture: z.instanceof(File).nullable(),
  description: z
    .string()
    .min(20, "Description must be at least 20 characters.")
    .max(100, "Description must be at most 100 characters."),
});

export {
    formSchema
}