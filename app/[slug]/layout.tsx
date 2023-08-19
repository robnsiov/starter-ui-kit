import TranslationContainer from "@/components/shared/containers/translation";
import { notFound } from "next/navigation";

const Layout = async ({
  children,
  params: { slug },
}: {
  children: React.ReactNode;
  params: { slug: string };
}) => {
  let messages;
  try {
    messages = (await import(`../../messages/${slug}.json`)).default;
  } catch (error) {
    notFound();
  }
  return (
    <>
      <TranslationContainer messages={messages}>
        {children}
      </TranslationContainer>
    </>
  );
};

// export const dynamic = "force-dynamic";
export default Layout;
