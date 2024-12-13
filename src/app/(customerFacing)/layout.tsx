import { Nav, NavLink } from "@/components/Nav";

export const dynamic = "force-dynamic" // To disable caching for the admin page, we do not need it to be cached because we want the latest update

export default function Layout ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>){
  return <>
    <Nav>
        <NavLink href="/">Home</NavLink>
        <NavLink href="/products">Products</NavLink>
        <NavLink href="/orders">My Orders</NavLink>
    </Nav>
    <div className="container my-6">{children}</div>
  </>
  
}

