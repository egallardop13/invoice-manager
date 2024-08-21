import Link from '@/node_modules/next/link';
import {
    UserGroupIcon,
    HomeIcon,
    DocumentDuplicateIcon,
  } from '@heroicons/react/24/outline';

  const links = [
    {name: "Home", href : "/dashboard", icon : HomeIcon},
    {name: "Invoices", href : "/dashboard/Invoices", icon : DocumentDuplicateIcon},
    {name: "Costumers", href : "/dashboard/Costumers", icon : UserGroupIcon}
  ]

  
   
  export default function NavLinks() {
    return (
      <>
        {links.map((link) => {
          const LinkIcon = link.icon;
          return (
            <Link
              key={link.name}
              href={link.href}
              className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-teal-100 hover:text-teal-600 md:flex-none md:justify-start md:p-2 md:px-3"
            >
              <LinkIcon className="w-6" />
              <p className="hidden md:block">{link.name}</p>
            </Link>
          );
        })}
      </>
    );
  }