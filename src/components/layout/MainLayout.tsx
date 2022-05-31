import Header from "./Header"

interface Props {
  children: React.ReactNode
}

export default function BasicLayout({ children }: Props) {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  )
}