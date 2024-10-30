import { RootLayout } from '@/RootLayout';

const Layout = async ({ children }: { children: any }) => {
  return <RootLayout>{children}</RootLayout>;
};

export default Layout;
