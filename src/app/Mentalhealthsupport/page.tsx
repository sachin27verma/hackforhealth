import { Layout, Text, Page } from "@vercel/examples-ui";
// import { Chat } from "../components/Chat";
import { Chat } from "../../components/Chat";

function Home() {
  return (
    <Page className="flex flex-col gap-12 bg-zinc-900 text-midnight min-h-screen min-w-full px-6 items-center">
      <section className="flex flex-col gap-6 lg:w-1/2">
        <Text variant="h1">🪄 Sorting hat</Text>
        <Text className=" ">
          This is AI Sorting Hat. It will sort you into one of the four Hogwartz
          houses.
        </Text>
      </section>

      <section className="flex flex-col lg:w-1/2 gap-3">
        <div className="">
          <Chat />
        </div>
      </section>
    </Page>
  );
}

Home.Layout = Layout;

export default Home;