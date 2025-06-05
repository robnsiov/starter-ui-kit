import TranslationContainer from "@/components/shared/containers/translation";
import { notFound } from "next/navigation";

const Layout = async ({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  let messages;
  try {
    messages = (await import(`../../messages/${slug}.json`)).default;
  } catch (error) {
    notFound();
  }
  return (
    <>
      <TranslationContainer messages={messages} locale={slug}>
        {children}
      </TranslationContainer>
    </>
  );
};

// export const dynamic = "force-dynamic";
export default Layout;
