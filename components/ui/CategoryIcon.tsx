"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { Category } from "@prisma/client";

type CategoryIconProps = {
  category: Category;
};

export default function CategoryIcon({ category }: CategoryIconProps) {
  const { category: currentCategory } = useParams();

  const isActive = category.slug === currentCategory;

  return (
    <div
      className={`${
        isActive ? "bg-amber-400" : ""
      } flex items-center gap-4 w-full border-t border-gray-200 p-3 last-of-type:border-b`}
    >
      <div className="w-16 h-16 relative">
        <Image fill src={`/icon_${category.slug}.svg`} alt="Imagen Categoría" />
      </div>
      <Link className="text-xl font-bold" href={`/order/${category.slug}`}>
        {category.name}
      </Link>
    </div>
  );
}
