"use client";

import { Tabs, TabsContent, TabsTrigger, TabsList } from "./ui/tabs";
import { Button } from "./ui/button";
import { ScrollArea, ScrollBar } from "./ui/scroll-area";
import { ClipboardIcon, TerminalIcon, ClipboardCheckIcon } from "lucide-react";
import { useCreateCmd, usePackageCmd } from "@/stores/cmd";
import { useCopyToClipboard } from "usehooks-ts";

const installCommands = {
  pnpm: "pnpm dlx shadcn@latest add ",
  npm: "npx shadcn@latest add ",
  yarn: "yarn dlx shadcn@latest add ",
  bun: "bunx --bun shadcn@latest add ",
};

export default function Code() {
  const packageName = usePackageCmd((state) => state.packageName);
  const setCurrentPackage = usePackageCmd((state) => state.setCurrentPackage);
  const [copiedText, copy] = useCopyToClipboard();
  const component = useCreateCmd((state) => state.component);

  const selectedComponents = component.map((c) => c.id).join(" ");

  const handleCopy = (cmd: string, componentList: string) => () => {
    const fullCmd = cmd + componentList;
    copy(fullCmd);
  };

  return (
    <div className="w-full max-w-xl mx-auto rounded-xl p-1">
      <Tabs
        defaultValue="pnpm"
        value={packageName}
        onValueChange={setCurrentPackage}
      >
        <div className="flex items-center justify-start gap-4 mb-4">
          <div className="flex items-center gap-4 flex-grow">
            <TerminalIcon className="h-4 w-4 bg-gray-500" />

            <TabsList className="bg-transparent gap-2">
              {Object.keys(installCommands).map((pkg) => (
                <TabsTrigger
                  key={pkg}
                  value={pkg}
                  className="px-5 py-1 rounded data-[state=active]:bg-white data-[state=active]:text-black"
                >
                  {pkg}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="text-zinc-500 hover:text-zinc-900 ml-auto"
            onClick={handleCopy(
              installCommands[packageName],
              selectedComponents
            )}
          >
            {copiedText ? (
              <ClipboardCheckIcon className="h4 w-4 text-green-400" />
            ) : (
              <ClipboardIcon className="h-4 w-4" />
            )}
          </Button>
        </div>

        {Object.entries(installCommands).map(([pkg, cmd]) => (
          <TabsContent
            key={pkg}
            value={pkg}
            onClick={() => {
              const packageCmd = pkg + cmd;
              usePackageCmd.getState().setCurrentPackage(packageCmd);
            }}
          >
            <ScrollArea>
              <div className="flex items-center justify-between bg-zinc-900 text-white font-mono text-sm px-4 py-2 rounded-lg">
                <span className="truncate">
                  {installCommands[packageName]}{" "}
                  {component.length > 0 ? selectedComponents : ""}
                </span>
              </div>
              <ScrollBar orientation="horizontal" />
            </ScrollArea>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
