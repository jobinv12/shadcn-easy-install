import { z } from "zod"


export const FormSchema = z.object({
  components: z.array(z.string()).refine((value) => value.some((component) => component), {
    message: "You have to select at least one item.",
  }),
})