"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useChat } from "ai/react";

export function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <Card className="w-[440px] h-[600px] grid grid-rows-[min-content_1fr_min-content]">
      <CardHeader>
        <CardTitle>Braficio AI</CardTitle>
        <CardDescription>This chat bot uses vercel AI.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {messages.map((message) => {
          return (
            <div key={message.id} className="flex gap-2 text-slate-600 text-sm">
              {message.role === "user" && (
                <Avatar>
                  <AvatarFallback>FA</AvatarFallback>
                  <AvatarImage src="https://pps.whatsapp.net/v/t61.24694-24/311006398_1560499047755460_5263915863688174495_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AdQhReHj0nKnsrrvn-2648gzctNzJlYDJpnSfLKYS__Lug&oe=64BCDDDD" />
                </Avatar>
              )}

              {message.role === "assistant" && (
                <Avatar>
                  <AvatarFallback>IA</AvatarFallback>
                  <AvatarImage src="https://media.licdn.com/dms/image/D4D0BAQEV69U4M97mxg/company-logo_200_200/0/1688422819811?e=2147483647&v=beta&t=vAGg0MGaQFP3V_tuxQWJnXu5NbUM3mYV5FytCroJnB4" />
                </Avatar>
              )}
              <p className="leading-relaxed">
                <span className="block font-bold text-slate-700">
                  {message.role === "user" ? "User" : "Robot"}
                </span>
                {message.content}
              </p>
            </div>
          );
        })}
      </CardContent>
      <CardFooter>
        <form className="w-full flex gap-2" onSubmit={handleSubmit}>
          <Input
            placeholder="How can i help you?"
            value={input}
            onChange={handleInputChange}
          />
          <Button type="submit">Send</Button>
        </form>
      </CardFooter>
    </Card>
  );
}
