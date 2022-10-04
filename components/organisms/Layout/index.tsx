import type { FC, ReactNode } from 'react'
import Head from 'next/head'

interface Props {
  title: string;
  description: string;
  children: ReactNode;
}

const Layout: FC<Props> = ({ title, description, children }) => {

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta
          property="description"
          content={description}
        />
      </Head>
      {children}
    </>
  )
}

export default Layout