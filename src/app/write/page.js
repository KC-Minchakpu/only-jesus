import { redirect } from "next/navigation";

export default function WritePage() {
  const { userId } = auth();

  if (!userId) {
    redirect("/login");
  }

  return <h1>Write a Post</h1>;
}
