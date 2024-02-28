import Page from "@/components/Page";

export async function Home() {
  const res = await fetch("http://localhost:5050/health-check");
  const data = await res.json();
  return <Page>{data.message}</Page>;
}
