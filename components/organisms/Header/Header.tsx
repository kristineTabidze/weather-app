import Link from "next/link";

const Routes = [
  {
    href: "/",
    title: "HomePage",
    id: "home",
  },
  {
    href: "/city/berlin",
    title: "City",
    id: "city",
  },
];

const Header = () => {

  return (
    <header className="border-b-1 border-solid border-gray-1">
      <div className="max-w-1100 mx-auto flex w-full flex-col-reverse md:flex-row p-16 align-center">
        <nav className="w-full">
          <ul className="flex w-full">
            {Routes.map(({ href, title, id }) => (
                <Link href={href} className="px-16 md:px-40 text-18" key={id}>
                 {title}
                </Link>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
