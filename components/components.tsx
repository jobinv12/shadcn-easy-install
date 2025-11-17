"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { Checkbox } from "./ui/checkbox";
import { useForm } from "react-hook-form";
import { FormSchema } from "@/schema/index";
import { z } from "zod";
import { Form, FormControl, FormField, FormLabel } from "@/components/ui/form";
import { useCreateCmd } from "@/stores/cmd";

const componentsList = [
  { id: "accordion", label: "Accordion" },
  { id: "alert", label: "Alert" },
  { id: "alert-dialog", label: "Alert Dialog" },
  { id: "aspect-ratio", label: "Aspect Ratio" },
  { id: "avatar", label: "Avatar" },
  { id: "badge", label: "Badge" },
  { id: "breadcrumb", label: "Breadcrumb" },
  { id: "button", label: "Button" },
  { id: "button-group", label: "Button Group" },
  { id: "calendar", label: "Calendar" },
  { id: "card", label: "Card" },
  { id: "carousel", label: "Carousel" },
  { id: "chart", label: "Chart" },
  { id: "checkbox", label: "Checkbox" },
  { id: "collapsible", label: "Collapsible" },
  { id: "command", label: "Command" },
  { id: "context-menu", label: "Context Menu" },
  { id: "dialog", label: "Dialog" },
  { id: "drawer", label: "Drawer" },
  { id: "dropdown-menu", label: "Dropdown Menu" },
  { id: "empty", label: "Empty" },
  { id: "field", label: "Field" },
  { id: "form", label: "React Hook Form" },
  { id: "hover-card", label: "Hover Card" },
  { id: "input", label: "Input" },
  { id: "input-group", label: "Input Group" },
  { id: "input-otp", label: "Input OTP" },
  { id: "item", label: "Item" },
  { id: "kbd", label: "Kbd" },
  { id: "label", label: "Label" },
  { id: "menubar", label: "Menubar" },
  { id: "navigation-menu", label: "Navigation Menu" },
  { id: "native-select", label: "Native Select" },
  { id: "pagination", label: "Pagination" },
  { id: "popover", label: "Popover" },
  { id: "progress", label: "Progress" },
  { id: "radio-group", label: "Radio Group" },
  { id: "resizable", label: "Resizable" },
  { id: "scroll-area", label: "Scroll Area" },
  { id: "select", label: "Select" },
  { id: "separator", label: "Separator" },
  { id: "sheet", label: "Sheet" },
  { id: "sidebar", label: "Sidebar" },
  { id: "skeleton", label: "Skeleton" },
  { id: "slider", label: "Slider" },
  { id: "sonner", label: "Sonner" },
  { id: "spinner", label: "Spinner" },
  { id: "switch", label: "Switch" },
  { id: "table", label: "Table" },
  { id: "tabs", label: "Tabs" },
  { id: "textarea", label: "Textarea" },
  { id: "toggle", label: "Toggle" },
  { id: "toggle-group", label: "Toggle Group" },
  { id: "tooltip", label: "Tooltip" },
];

export default function Components() {
  const addComponent = useCreateCmd((state) => state.addComponent);
  const removeComponent = useCreateCmd((state) => state.removeComponent);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      components: [],
    },
  });

  return (
    <Form {...form}>
      <form>
        <FormField
          control={form.control}
          name="components"
          render={({ field }) => {
            const selected = field.value || [];

            const handleToggle = (
              checked: boolean,
              component: { id: string; label: string }
            ) => {
              const updated = checked
                ? [...selected, component.id]
                : selected.filter((id) => id !== component.id);

              field.onChange(updated);

              if (checked) {
                addComponent(component);
              } else {
                removeComponent(component.id);
              }
            };

            return (
              <FormControl>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2">
                  {componentsList.map((component) => (
                    <div
                      key={component.id}
                      className="flex items-center space-x-2 transition-all duration-200"
                    >
                      <Checkbox
                        id={component.id}
                        checked={selected.includes(component.id)}
                        onCheckedChange={(checked) =>
                          handleToggle(checked === true, component)
                        }
                      />
                      <FormLabel htmlFor={component.id}>
                        {component.label}
                      </FormLabel>
                    </div>
                  ))}
                </div>
              </FormControl>
            );
          }}
        />
      </form>
    </Form>
  );
}
