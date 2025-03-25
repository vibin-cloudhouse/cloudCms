
import * as z from "zod";

export const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().min(6, {
    message: "Please enter a valid phone number.",
  }),
  country: z.string().min(2, {
    message: "Please select your country.",
  }),
  websitesCount: z.string().min(1, {
    message: "Please specify the number of websites.",
  }),
  controlPanel: z.string().min(2, {
    message: "Please specify your control panel.",
  }),
  websiteType: z.string().min(2, {
    message: "Please specify your website type.",
  }),
  sourceIp: z.string().min(2, {
    message: "Please enter the source server IP.",
  }),
  destinationIp: z.string().optional(),
  additionalInfo: z.string().optional(),
});

export type MigrationFormValues = z.infer<typeof formSchema>;
